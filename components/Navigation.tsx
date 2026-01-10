"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b-4 border-[#ff006e] bg-[#0f0a1e] backdrop-blur-sm sticky top-0 z-50 shadow-[0_4px_0_0_#8b00ff]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-[#ff006e] hover:text-[#00f5ff] transition-colors tracking-wider uppercase hover:animate-[glitch_0.3s_ease-in-out]"
            style={{ textShadow: '0 0 10px #ff006e, 0 0 20px #ff006e' }}
          >
            ▶ Britt
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <Link
              href="/about"
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:scale-110 hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:scale-110 hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              Projects
            </Link>
            <Link
              href="/tools"
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:scale-110 hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              Tools
            </Link>
            <Link
              href="/shop"
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:scale-110 hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              Shop
            </Link>
            <Link
              href="mailto:brittanyjoiner15@gmail.com"
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:scale-110 hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              Contact
            </Link>
            <Link
              href="https://www.buymeacoffee.com/brittanyjoiner"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-transparent hover:bg-[#39ff14] text-[#39ff14] hover:text-[#1a0a2e] font-bold uppercase text-xs tracking-wide transition-all border-2 border-[#39ff14] hover:shadow-[0_0_15px_#39ff14] hover:scale-105"
            >
              ☕ Buy Britt a Coffee
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#00f5ff] hover:text-[#39ff14] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t-2 border-[#8b00ff] pt-4">
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              About
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              Projects
            </Link>
            <Link
              href="/tools"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              Tools
            </Link>
            <Link
              href="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              Shop
            </Link>
            <Link
              href="mailto:brittanyjoiner15@gmail.com"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#00f5ff] hover:text-[#39ff14] transition-all font-bold uppercase text-sm tracking-wide hover:drop-shadow-[0_0_8px_#00f5ff]"
            >
              Contact
            </Link>
            <Link
              href="https://www.buymeacoffee.com/brittanyjoiner"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 bg-transparent hover:bg-[#39ff14] text-[#39ff14] hover:text-[#1a0a2e] font-bold uppercase text-xs tracking-wide transition-all border-2 border-[#39ff14] hover:shadow-[0_0_15px_#39ff14] text-center"
            >
              ☕ Buy Britt a Coffee
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
