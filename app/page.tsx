import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
      {/* Animated background stars/pixels */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-[#00f5ff] animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-[#ff006e] animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-[#39ff14] animate-pulse delay-150"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#8b00ff] animate-pulse delay-300"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-[0_0_30px_#ff006e] ring-4 ring-[#ff006e] animate-[float_3s_ease-in-out_infinite]">
            <Image
              src="/headshot.jpg"
              alt="Brittany's profile photo"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wider">
              Hi, I'm{" "}
              <span
                className="text-[#ff006e] animate-[neon-pulse_2s_ease-in-out_infinite]"
                style={{ textShadow: '0 0 20px #ff006e, 0 0 40px #ff006e, 0 0 60px #ff006e' }}
              >
                Britt
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#00f5ff] max-w-2xl font-bold uppercase tracking-wide">
              &lt; Developer, creator, and technology enthusiast /&gt;
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-[#39ff14] max-w-2xl leading-relaxed font-mono">
            &gt; I build things that make a difference. Welcome to my corner of the internet where
            I share my work, the tools I love, and what makes me tick.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/tools"
              className="px-8 py-3 bg-[#ff006e] hover:bg-[#8b00ff] text-white font-bold uppercase tracking-wide transition-all shadow-[0_0_20px_#ff006e] hover:shadow-[0_0_30px_#8b00ff] border-4 border-[#ff006e] hover:border-[#8b00ff] hover:scale-105"
            >
              ▶ View My Stack
            </Link>
            <Link
              href="https://buy.stripe.com/28E28re845iBe3K0pwe7m0q"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent hover:bg-[#39ff14] text-[#39ff14] hover:text-[#1a0a2e] font-bold uppercase tracking-wide transition-all border-4 border-[#39ff14] hover:shadow-[0_0_20px_#39ff14] hover:scale-105"
            >
              ☕ Buy Me a Coffee
            </Link>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <Link href="/projects" className="group">
            <div className="p-6 bg-[#0f0a1e] border-4 border-[#ff006e] shadow-[0_0_20px_rgba(255,0,110,0.3)] hover:shadow-[0_0_30px_rgba(255,0,110,0.6)] transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff006e] to-transparent"></div>
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-xl font-bold text-[#ff006e] mb-2 group-hover:text-[#00f5ff] transition-colors uppercase tracking-wide">
                » Projects
              </h3>
              <p className="text-[#00f5ff] font-mono text-sm">
                &gt; Check out my portfolio and the things I've built
              </p>
            </div>
          </Link>

          <Link href="/about" className="group">
            <div className="p-6 bg-[#0f0a1e] border-4 border-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f5ff] to-transparent"></div>
              <div className="text-3xl mb-3">👋</div>
              <h3 className="text-xl font-bold text-[#00f5ff] mb-2 group-hover:text-[#39ff14] transition-colors uppercase tracking-wide">
                » About Me
              </h3>
              <p className="text-[#39ff14] font-mono text-sm">
                &gt; Learn more about my background and what drives me
              </p>
            </div>
          </Link>

          <Link href="/tools" className="group">
            <div className="p-6 bg-[#0f0a1e] border-4 border-[#8b00ff] shadow-[0_0_20px_rgba(139,0,255,0.3)] hover:shadow-[0_0_30px_rgba(139,0,255,0.6)] transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8b00ff] to-transparent"></div>
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-xl font-bold text-[#8b00ff] mb-2 group-hover:text-[#ff006e] transition-colors uppercase tracking-wide">
                » My Stack
              </h3>
              <p className="text-[#ff006e] font-mono text-sm">
                &gt; Explore the tools and technologies I recommend
              </p>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
