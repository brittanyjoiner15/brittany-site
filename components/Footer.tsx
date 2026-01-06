export default function Footer() {
  return (
    <footer className="border-t-4 border-[#ff006e] mt-20 bg-[#0f0a1e] shadow-[0_-4px_0_0_#8b00ff]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#00f5ff] font-mono text-sm">
            <span className="text-[#39ff14]">©</span> 2026 Brittany
            <span className="text-[#ff006e] mx-2">|</span>
            Built with <span className="text-[#8b00ff]">Next.js</span> &{" "}
            <span className="text-[#8b00ff]">Tailwind CSS</span>
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm hover:drop-shadow-[0_0_8px_#39ff14] hover:scale-110"
            >
              [ GitHub ]
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm hover:drop-shadow-[0_0_8px_#39ff14] hover:scale-110"
            >
              [ LinkedIn ]
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm hover:drop-shadow-[0_0_8px_#39ff14] hover:scale-110"
            >
              [ Twitter ]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
