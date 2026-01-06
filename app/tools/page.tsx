import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Sample tools data - replace with your actual recommendations
const toolCategories = [
  {
    category: "Development",
    icon: "💻",
    tools: [
      {
        name: "VS Code",
        description: "My primary code editor. Fast, extensible, and feature-rich.",
        link: "https://code.visualstudio.com/",
      },
      {
        name: "Next.js",
        description: "The React framework for production. Perfect for modern web apps.",
        link: "https://nextjs.org/",
      },
      {
        name: "TypeScript",
        description: "JavaScript with types. Makes code more maintainable and catches errors early.",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework. Speeds up styling and keeps designs consistent.",
        link: "https://tailwindcss.com/",
      },
    ],
  },
  {
    category: "Design & Prototyping",
    icon: "🎨",
    tools: [
      {
        name: "Figma",
        description: "Collaborative design tool. Great for UI/UX design and prototyping.",
        link: "https://www.figma.com/",
      },
      {
        name: "Excalidraw",
        description: "Simple whiteboarding tool for sketching ideas and diagrams.",
        link: "https://excalidraw.com/",
      },
    ],
  },
  {
    category: "Productivity",
    icon: "⚡",
    tools: [
      {
        name: "Notion",
        description: "All-in-one workspace for notes, docs, and project management.",
        link: "https://www.notion.so/",
      },
      {
        name: "Linear",
        description: "Issue tracking tool built for high-performance teams.",
        link: "https://linear.app/",
      },
      {
        name: "Raycast",
        description: "Extensible launcher for macOS. Supercharges productivity.",
        link: "https://www.raycast.com/",
      },
    ],
  },
  {
    category: "AI & Development Tools",
    icon: "🤖",
    tools: [
      {
        name: "Claude Code",
        description: "AI coding assistant that helps with development tasks.",
        link: "https://claude.com/",
      },
      {
        name: "GitHub Copilot",
        description: "AI pair programmer that suggests code as you type.",
        link: "https://github.com/features/copilot",
      },
    ],
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation />

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Tools I Love
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            The tools and technologies I use and recommend
          </p>
        </div>

        {/* Tools by Category */}
        <div className="space-y-12">
          {toolCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">{category.icon}</span>
                {category.category}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {tool.description}
                    </p>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center gap-1"
                    >
                      Visit Website
                      <span className="text-sm">→</span>
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-16 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            💡 A Note on Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            These are the tools I personally use and recommend. Remember that the best tool
            is the one that works for <em>you</em> and your workflow. Don't be afraid to
            experiment and find what fits your needs. Feel free to reach out if you want to
            chat about any of these tools or get recommendations!
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 shadow-lg text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">Have a Tool Recommendation?</h2>
          <p className="mb-6 opacity-90">
            I'm always looking to discover new tools and technologies.
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-lg"
          >
            Share With Me
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
