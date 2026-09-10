import React from "react";
import Link from "next/link";
import { MODULES } from "@/data/modules";
import { Sparkles, Terminal, Code2, ShieldCheck, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#121212] text-white border-t-4 border-[#121212] overflow-hidden">
      {/* Decorative Geometric Overlays */}
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#D02020]/20 pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-none bg-[#1040C0]/20 rotate-45 pointer-events-none" />

      {/* Top Banner Stripe */}
      <div className="grid grid-cols-3 h-3 w-full border-b-2 border-white/20">
        <div className="bg-[#D02020]" />
        <div className="bg-[#1040C0]" />
        <div className="bg-[#F0C020]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-[#D02020] border border-white" />
              <div className="w-5 h-5 rounded-none bg-[#1040C0] border border-white rotate-45" />
              <div className="w-5 h-5 clip-triangle bg-[#F0C020] border border-white" />
              <span className="font-black text-xl tracking-tighter uppercase ml-2">
                VIBE CODING
              </span>
            </div>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4">
              The 3-Hour Intensive Workshop curriculum. Moving human intelligence from syntax labor to architectural orchestration.
            </p>
            <div className="p-3 bg-white/5 border-2 border-white/20 text-xs font-mono text-zinc-300">
              <span className="text-[#F0C020] font-bold">BAUHAUS PRINCIPLE:</span>
              <br />
              Form follows function. English is the new compiler.
            </div>
          </div>

          {/* Modules Column 1 */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-[#F0C020] mb-4 border-b-2 border-white/20 pb-2">
              MODULES 1 – 6
            </h4>
            <ul className="space-y-2 text-xs font-bold uppercase text-zinc-300">
              {MODULES.slice(0, 6).map((m) => (
                <li key={m.id}>
                  <Link
                    href={`/module/${m.slug}`}
                    className="hover:text-[#F0C020] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-zinc-500">M{m.number}.</span>
                    <span>{m.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Modules Column 2 */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-[#1040C0] mb-4 border-b-2 border-white/20 pb-2">
              MODULES 7 – 12
            </h4>
            <ul className="space-y-2 text-xs font-bold uppercase text-zinc-300">
              {MODULES.slice(6, 12).map((m) => (
                <li key={m.id}>
                  <Link
                    href={`/module/${m.slug}`}
                    className="hover:text-[#1040C0] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-zinc-500">M{m.number}.</span>
                    <span>{m.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Free Resources */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-[#D02020] mb-4 border-b-2 border-white/20 pb-2">
              FREE UI ECOSYSTEMS
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li>
                <a
                  href="https://ui.aceternity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span className="font-bold uppercase">Aceternity UI</span>
                  <span className="text-[10px] text-zinc-500 group-hover:text-white">3D & Hero Cards &rarr;</span>
                </a>
              </li>
              <li>
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span className="font-bold uppercase">Shadcn UI</span>
                  <span className="text-[10px] text-zinc-500 group-hover:text-white">Radix Primitives &rarr;</span>
                </a>
              </li>
              <li>
                <a
                  href="https://magicui.design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span className="font-bold uppercase">Magic UI</span>
                  <span className="text-[10px] text-zinc-500 group-hover:text-white">Bento Grids &rarr;</span>
                </a>
              </li>
              <li>
                <a
                  href="https://21st.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span className="font-bold uppercase">21st.dev</span>
                  <span className="text-[10px] text-zinc-500 group-hover:text-white">Community Components &rarr;</span>
                </a>
              </li>
              <li>
                <a
                  href="https://v0.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span className="font-bold uppercase">v0.dev</span>
                  <span className="text-[10px] text-zinc-500 group-hover:text-white">Prompt-to-React &rarr;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p className="font-mono">
            &copy; 2026 Vibe Coding Workshop. Designed in Constructivist Bauhaus System.
          </p>
          <div className="flex items-center gap-4 font-bold uppercase">
            <Link href="/cheatsheet" className="hover:text-white">
              Cheatsheet
            </Link>
            <span>•</span>
            <Link href="/module/1-revolution" className="hover:text-white">
              Start Course
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
