"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import toolCategories from '@/tools.json';


export default function ToolsPage() {
  const [selectedTool, setSelectedTool] = useState<{
    name: string;
    description: string;
    link: string;
    icon: string;
    logo: string;
  } | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredToolIndices, setFilteredToolIndices] = useState<number[]>([]);
  const [searchError, setSearchError] = useState<string>("");
  const [lastSearchTime, setLastSearchTime] = useState<number>(0);

  // Flatten all tools for the animation
  const allTools = toolCategories.flatMap((category) =>
    category.tools.map((tool) => ({
      ...tool,
      categoryIcon: category.icon,
    }))
  );

  // Handle AI-powered search with client-side rate limiting
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError("");

    if (!searchQuery.trim()) {
      setFilteredToolIndices([]);
      return;
    }

    // Client-side debouncing: prevent searches within 2 seconds
    const now = Date.now();
    if (now - lastSearchTime < 2000) {
      setSearchError("Please wait a moment before searching again");
      return;
    }

    // Validate query length on client side
    if (searchQuery.length < 3) {
      setSearchError("Query too short (minimum 3 characters)");
      return;
    }

    if (searchQuery.length > 200) {
      setSearchError("Query too long (maximum 200 characters)");
      return;
    }

    setIsSearching(true);
    setLastSearchTime(now);

    try {
      const response = await fetch('/api/search-tools', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: searchQuery,
          tools: allTools,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSearchError(data.error || 'Search failed');
        setFilteredToolIndices([]);
        return;
      }

      if (data.relevantIndices) {
        // Convert 1-based indices to 0-based
        setFilteredToolIndices(data.relevantIndices.map((i: number) => i - 1));
      }
    } catch (error) {
      console.error('Search failed:', error);
      setSearchError('Network error. Please try again.');
      setFilteredToolIndices([]);
    } finally {
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredToolIndices([]);
    setSearchError("");
  };

  // Filter tools based on search results
  const displayedTools = filteredToolIndices.length > 0
    ? allTools.filter((_, index) => filteredToolIndices.includes(index))
    : allTools;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#00f5ff] animate-pulse"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-[#ff006e] animate-pulse delay-75"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-[#39ff14] animate-pulse delay-150"></div>
      </div>

      <Navigation />

      <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* Animated Toolbox Hero */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wider mb-4">
            <span className="text-[#ff006e]" style={{ textShadow: '0 0 20px #ff006e' }}>
              My Toolbox
            </span>
          </h1>
          <p className="text-xl text-[#00f5ff] font-bold uppercase tracking-wide mb-8">
            &lt; Click on a tool to learn more /&gt;
          </p>

          {/* AI-Powered Search Box */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Describe what you need... (e.g., 'code editor' or 'I need to design a website')"
                className="flex-1 px-6 py-4 bg-[#0f0a1e] border-4 border-[#00f5ff] text-[#00f5ff] placeholder-[#00f5ff]/50 font-mono text-lg focus:outline-none focus:border-[#ff006e] focus:shadow-[0_0_30px_rgba(255,0,110,0.6)] transition-all"
                disabled={isSearching}
              />
              <div className="flex gap-2 justify-center md:justify-start">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="px-6 py-4 bg-[#8b00ff] hover:bg-[#ff006e] text-white font-bold uppercase text-sm transition-all border-4 border-[#8b00ff] hover:border-[#ff006e]"
                    disabled={isSearching}
                  >
                    Clear
                  </button>
                )}
                <button
                  type="submit"
                  className="px-6 py-4 bg-[#ff006e] hover:bg-[#8b00ff] text-white font-bold uppercase text-sm transition-all border-4 border-[#ff006e] hover:border-[#8b00ff] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,0,110,0.6)] hover:shadow-[0_0_30px_rgba(139,0,255,0.8)] whitespace-nowrap"
                  disabled={isSearching}
                >
                  {isSearching ? '🔍 Searching...' : '🤖 AI Search'}
                </button>
              </div>
            </div>
            {/* Success message */}
            {filteredToolIndices.length > 0 && !searchError && (
              <p className="mt-4 text-[#39ff14] font-mono text-sm">
                &gt; Found {filteredToolIndices.length} relevant tool{filteredToolIndices.length !== 1 ? 's' : ''}
              </p>
            )}
            {/* Error message */}
            {searchError && (
              <p className="mt-4 text-[#ff006e] font-mono text-sm animate-pulse">
                ⚠ {searchError}
              </p>
            )}
          </form>

          {/* Floating Tool Icons in Rows */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
            {displayedTools.map((tool, index) => {
              const delay = index * 0.1;

              return (
                <button
                  key={index}
                  onClick={() => setSelectedTool({ ...tool, icon: tool.categoryIcon })}
                  className="w-20 h-20 md:w-24 md:h-24 bg-white border-2 md:border-4 border-[#00f5ff] rounded-xl flex items-center justify-center overflow-hidden hover:scale-110 hover:border-[#ff006e] hover:shadow-[0_0_40px_rgba(255,0,110,1)] active:scale-105 transition-all cursor-pointer shadow-[0_0_20px_rgba(0,245,255,0.5)] p-3 md:p-4"
                  style={{
                    animation: `float ${3 + index * 0.2}s ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                  }}
                  title={tool.name}
                >
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Tool Modal */}
        {selectedTool && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedTool(null)}
          >
            <div
              className="bg-[#0f0a1e] border-4 border-[#ff006e] max-w-md w-full p-8 relative shadow-[0_0_60px_rgba(255,0,110,0.8)] animate-[pixel-fade-in_0.3s_ease-out]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 text-[#00f5ff] hover:text-[#ff006e] text-2xl font-bold hover:scale-125 transition-all"
              >
                ✕
              </button>

              <div className="text-center mb-4">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-xl p-4 border-4 border-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.6)]">
                  <Image
                    src={selectedTool.logo}
                    alt={`${selectedTool.name} logo`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-3xl font-bold text-[#ff006e] uppercase tracking-wide mb-2">
                  {selectedTool.name}
                </h3>
              </div>

              <p className="text-[#00f5ff] mb-6 text-center font-mono">
                {selectedTool.description}
              </p>

              <a
                href={selectedTool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-[#ff006e] hover:bg-[#8b00ff] text-white font-bold uppercase tracking-wide text-center transition-all border-4 border-[#ff006e] hover:border-[#8b00ff] hover:shadow-[0_0_20px_rgba(139,0,255,0.8)]"
              >
                ▶ Visit Website
              </a>
            </div>
          </div>
        )}

        {/* Tools by Category */}
        <div className="space-y-12">
          {toolCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wide mb-6 flex items-center gap-3">
                <span className="text-4xl">{category.icon}</span>
                <span className="text-[#00f5ff]">{category.category}</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <button
                    key={toolIndex}
                    onClick={() => setSelectedTool({ ...tool, icon: category.icon })}
                    className="bg-[#0f0a1e] border-4 border-[#8b00ff] p-6 shadow-[0_0_20px_rgba(139,0,255,0.3)] hover:shadow-[0_0_30px_rgba(139,0,255,0.6)] transition-all hover:-translate-y-2 text-left cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-lg p-2 border-2 border-[#00f5ff] flex-shrink-0">
                        <Image
                          src={tool.logo}
                          alt={`${tool.name} logo`}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                          unoptimized
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#8b00ff] group-hover:text-[#ff006e] uppercase tracking-wide transition-colors">
                        » {tool.name}
                      </h3>
                    </div>
                    <p className="text-[#00f5ff] mb-4 font-mono text-sm">
                      {tool.description}
                    </p>
                    <span className="text-[#39ff14] font-bold uppercase text-sm group-hover:text-[#ff006e] transition-colors">
                      Click to Learn More →
                    </span>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-16 bg-[#0f0a1e] border-4 border-[#00f5ff] p-8 shadow-[0_0_30px_rgba(0,245,255,0.4)]">
          <h2 className="text-2xl font-bold text-[#00f5ff] mb-4 uppercase tracking-wide">
            💡 A Note on Tools
          </h2>
          <p className="text-[#39ff14] leading-relaxed font-mono">
            &gt; These are the tools I personally use and recommend. Remember that the best tool
            is the one that works for <span className="text-[#ff006e] font-bold">you</span> and your workflow. Don't be afraid to
            experiment and find what fits your needs. Feel free to reach out if you want to
            chat about any of these tools or get recommendations!
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#ff006e] to-[#8b00ff] border-4 border-[#00f5ff] p-8 shadow-[0_0_40px_rgba(255,0,110,0.6)] text-white text-center">
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide">Have a Tool Recommendation?</h2>
          <p className="mb-6 text-[#00f5ff] font-mono">
            &gt; I'm always looking to discover new tools and technologies. Send me a link to your tool and I'll check it out.
          </p>
          <a
            href="mailto:brittanyjoiner15@gmail.com"
            className="inline-block px-8 py-3 bg-[#00f5ff] text-[#1a0a2e] font-bold uppercase tracking-wide hover:bg-[#39ff14] transition-all border-4 border-[#00f5ff] hover:border-[#39ff14] hover:shadow-[0_0_20px_rgba(57,255,20,0.8)] hover:scale-105"
          >
            ◆ Tell Me About Your Tool
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
