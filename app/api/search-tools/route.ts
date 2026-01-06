import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';

// Blocklist for suspicious patterns
const BLOCKED_PATTERNS = [
  /write.*code/i,
  /generate.*script/i,
  /create.*program/i,
  /hack/i,
  /exploit/i,
  /jailbreak/i,
  /ignore.*instructions/i,
  /system.*prompt/i,
  /pretend.*you.*are/i,
];

function getClientIdentifier(request: NextRequest): string {
  // Use IP address for rate limiting
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] :
             request.headers.get('x-real-ip') ||
             'anonymous';
  return ip;
}

function validateQuery(query: string): { valid: boolean; reason?: string } {
  // Length checks
  if (query.length < 3) {
    return { valid: false, reason: 'Query too short (minimum 3 characters)' };
  }

  if (query.length > 200) {
    return { valid: false, reason: 'Query too long (maximum 200 characters)' };
  }

  // Check for blocked patterns
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(query)) {
      return { valid: false, reason: 'Query contains inappropriate content' };
    }
  }

  // Must be tool-search related (simple heuristic)
  const toolRelatedWords = ['tool', 'software', 'app', 'need', 'use', 'find', 'help', 'design', 'code', 'build', 'create', 'make', 'develop', 'work', 'project'];
  const hasToolRelatedWord = toolRelatedWords.some(word =>
    query.toLowerCase().includes(word)
  );

  if (!hasToolRelatedWord && query.length > 50) {
    return { valid: false, reason: 'Query does not appear to be tool-related' };
  }

  return { valid: true };
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 10 requests per minute per IP
    const identifier = getClientIdentifier(request);
    const rateLimitResult = rateLimit(identifier, 10, 60 * 1000);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded. Please wait before searching again.',
          retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000))
          }
        }
      );
    }

    const { query, tools } = await request.json();

    if (!query || !tools) {
      return NextResponse.json(
        { error: 'Query and tools are required' },
        { status: 400 }
      );
    }

    // Validate query
    const validation = validateQuery(query);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.reason },
        { status: 400 }
      );
    }

    // Validate tools array
    if (!Array.isArray(tools) || tools.length === 0 || tools.length > 50) {
      return NextResponse.json(
        { error: 'Invalid tools array' },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Format tools for Claude
    const toolsList = tools.map((tool: any, index: number) =>
      `${index + 1}. ${tool.name}: ${tool.description}`
    ).join('\n');

    // Call Claude API with restricted prompt
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-20241022', // Use Haiku for cost efficiency
        max_tokens: 100, // Restrict output length
        temperature: 0, // Deterministic responses
        messages: [
          {
            role: 'user',
            content: `You are a tool matching assistant. Your ONLY job is to match user queries to tools from the provided list.

STRICT RULES:
1. ONLY return a JSON array of numbers
2. DO NOT answer questions
3. DO NOT write code or text
4. DO NOT engage in conversation
5. ONLY match tools to the query

Available tools:
${toolsList}

User query: "${query}"

Return ONLY a JSON array of tool indices (1-based). Example: [1, 3, 5]

Response:`,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.content[0].text;

    // Parse the JSON array from Claude's response
    const matchRegex = /\[[\d,\s]*\]/;
    const match = content.match(matchRegex);

    if (!match) {
      return NextResponse.json({ relevantIndices: [] });
    }

    const relevantIndices = JSON.parse(match[0]);

    return NextResponse.json({ relevantIndices });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to search tools' },
      { status: 500 }
    );
  }
}
