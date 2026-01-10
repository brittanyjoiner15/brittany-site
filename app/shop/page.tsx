"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const offerings = [
  {
    id: 1,
    title: "1:1 Consulting",
    description: "Get personalized guidance on your project, career, or technical challenges. Let's solve problems together.",
    price: "$250/hour",
    features: ["Video call session", "Follow-up resources", "Action plan"],
    color: "ff006e",
    icon: "💡",
    link: "mailto:brittanyjoiner15@gmail.com?subject=1:1 Consulting Inquiry",
  },
  {
    id: 2,
    title: "Code Review",
    description: "Professional code review with detailed feedback on architecture, best practices, and optimization opportunities.",
    price: "$200",
    features: ["Thorough analysis", "Written feedback", "30-min follow-up call"],
    color: "00f5ff",
    icon: "🔍",
    link: "mailto:brittanyjoiner15@gmail.com?subject=Code Review Request",
  },
  {
    id: 3,
    title: "Technical Mentorship",
    description: "Ongoing mentorship for developers looking to level up their skills and advance their careers.",
    price: "$500/month",
    features: ["Weekly 1:1 sessions", "Slack/Discord access", "Career guidance"],
    color: "8b00ff",
    icon: "🚀",
    link: "mailto:brittanyjoiner15@gmail.com?subject=Mentorship Inquiry",
  },
  {
    id: 4,
    title: "Workshop/Speaking",
    description: "Book me for workshops, tech talks, or conference presentations on modern development practices.",
    price: "Custom",
    features: ["Interactive sessions", "Custom content", "Q&A included"],
    color: "39ff14",
    icon: "🎤",
    link: "mailto:brittanyjoiner15@gmail.com?subject=Speaking Engagement",
  },
  {
    id: 5,
    title: "Project Kickstart",
    description: "Get your project off the ground with architecture planning, tech stack selection, and initial setup.",
    price: "$1,000",
    features: ["Architecture design", "Tech stack setup", "Documentation"],
    color: "ff006e",
    icon: "⚡",
    link: "mailto:brittanyjoiner15@gmail.com?subject=Project Kickstart",
  },
  {
    id: 6,
    title: "Custom Development",
    description: "Full-stack development services for your web application, API, or automation project.",
    price: "Contact for quote",
    features: ["Modern tech stack", "Clean code", "Testing included"],
    color: "00f5ff",
    icon: "💻",
    link: "mailto:brittanyjoiner15@gmail.com?subject=Custom Development Project",
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#00f5ff] animate-pulse"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-[#ff006e] animate-pulse delay-75"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-[#39ff14] animate-pulse delay-150"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#8b00ff] animate-pulse delay-300"></div>
      </div>

      <Navigation />

      <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">
            <span
              className="text-[#ff006e] animate-[neon-pulse_2s_ease-in-out_infinite]"
              style={{ textShadow: '0 0 20px #ff006e, 0 0 40px #ff006e' }}
            >
              ▶ Shop
            </span>
          </h1>
          <p className="text-lg text-[#00f5ff] font-mono max-w-2xl mx-auto">
            &gt; Products and services to help you build better software
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-[#0f0a1e] border-4 border-[#${product.color}] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 w-full h-1 opacity-80"
                style={{
                  background: `linear-gradient(to right, transparent, #${product.color}, transparent)`,
                }}
              ></div>

              <div className="p-6 flex flex-col h-full">
                {/* Icon */}
                <div className="text-5xl mb-4">{product.icon}</div>

                {/* Title */}
                <h3
                  className="text-xl font-bold uppercase tracking-wide mb-3 transition-all"
                  style={{ color: `#${product.color}` }}
                >
                  » {product.title}
                </h3>

                {/* Description */}
                <p className="text-[#00f5ff] font-mono text-sm mb-4 flex-grow">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-[#39ff14] text-xs font-mono flex items-start"
                    >
                      <span className="mr-2">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-white font-bold text-2xl mb-4 font-mono">
                  {product.price}
                </div>

                {/* CTA Button */}
                <Link
                  href={product.link}
                  className="px-6 py-3 bg-transparent text-center font-bold uppercase text-sm tracking-wide transition-all border-2 group-hover:scale-105"
                  style={{
                    color: `#${product.color}`,
                    borderColor: `#${product.color}`,
                    boxShadow: `0 0 10px rgba(255,255,255,0.1)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px #${product.color}`;
                    e.currentTarget.style.backgroundColor = `#${product.color}`;
                    e.currentTarget.style.color = '#1a0a2e';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(255,255,255,0.1)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = `#${product.color}`;
                  }}
                >
                  ▶ Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center p-8 bg-[#0f0a1e] border-4 border-[#8b00ff] shadow-[0_0_30px_rgba(139,0,255,0.3)]">
          <h2 className="text-2xl font-bold text-[#8b00ff] uppercase tracking-wide mb-4">
            » Don't See What You Need?
          </h2>
          <p className="text-[#00f5ff] font-mono mb-6">
            &gt; Let's chat about your custom project or collaboration opportunity
          </p>
          <Link
            href="mailto:brittanyjoiner15@gmail.com?subject=Custom Project Inquiry"
            className="inline-block px-8 py-3 bg-transparent hover:bg-[#8b00ff] text-[#8b00ff] hover:text-white font-bold uppercase tracking-wide transition-all border-4 border-[#8b00ff] hover:shadow-[0_0_30px_#8b00ff] hover:scale-105"
          >
            ◆ Contact Me
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
