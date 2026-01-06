import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-b-4 border-[#ff006e] bg-[#0f0a1e] backdrop-blur-sm sticky top-0 z-50 shadow-[0_4px_0_0_#8b00ff]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-[#ff006e] hover:text-[#00f5ff] transition-colors tracking-wider uppercase hover:animate-[glitch_0.3s_ease-in-out]"
            style={{ textShadow: '0 0 10px #ff006e, 0 0 20px #ff006e' }}
          >
            ▶ Brittany
          </Link>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:scale-110 hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              [ About ]
            </Link>
            <Link
              href="/projects"
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:scale-110 hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              [ Projects ]
            </Link>
            <Link
              href="/tools"
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:scale-110 hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              [ Tools ]
            </Link>
            <Link
              href="/#contact"
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:scale-110 hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              [ Contact ]
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
