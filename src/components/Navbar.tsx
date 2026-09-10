"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen, Terminal, Sparkles, ChevronDown, Layers } from "lucide-react";
import { BauhausButton } from "./BauhausButton";
import { MODULES } from "@/data/modules";
import { clsx } from "clsx";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#F0F0F0] border-b-2 md:border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Bauhaus Geometric Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group select-none">
            <div className="flex items-center gap-1.5 p-1 bg-white border-2 border-[#121212] shadow-hard-sm">
              <div className="w-4 h-4 rounded-full bg-[#D02020] border border-[#121212]" />
              <div className="w-4 h-4 rounded-none bg-[#1040C0] border border-[#121212] rotate-45" />
              <div className="w-4 h-4 clip-triangle bg-[#F0C020] border border-[#121212]" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg md:text-2xl uppercase tracking-tighter text-[#121212] leading-none">
                VIBE CODING
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1040C0] leading-tight">
                3-HOUR INTENSIVE MASTERCLASS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={clsx(
                "text-sm font-bold uppercase tracking-wider py-1 px-2 border-b-2 transition-all",
                pathname === "/"
                  ? "border-[#D02020] text-[#D02020]"
                  : "border-transparent text-[#121212] hover:border-[#121212]"
              )}
            >
              DASHBOARD
            </Link>

            {/* Modules Dropdown */}
            <div className="relative">
              <button
                onClick={() => setModulesDropdownOpen(!modulesDropdownOpen)}
                className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider py-1 px-2 text-[#121212] hover:text-[#1040C0] transition-colors"
              >
                <span>ALL MODULES ({MODULES.length})</span>
                <ChevronDown className={clsx("w-4 h-4 transition-transform", modulesDropdownOpen && "rotate-180")} />
              </button>

              {modulesDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setModulesDropdownOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white border-4 border-[#121212] shadow-hard-xl z-20 max-h-[70vh] overflow-y-auto divide-y-2 divide-zinc-200">
                    <div className="p-3 bg-[#121212] text-white flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-[#F0C020]">
                        {MODULES.length} MODULES CURRICULUM
                      </span>
                      <span className="text-[10px] font-mono">180 MINS</span>
                    </div>
                    {MODULES.map((mod) => (
                      <Link
                        key={mod.id}
                        href={`/module/${mod.slug}`}
                        onClick={() => setModulesDropdownOpen(false)}
                        className="block p-3 hover:bg-zinc-100 transition-colors group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-1.5 py-0.5 text-[10px] font-black bg-[#121212] text-white rounded-none">
                            M{mod.number}
                          </span>
                          <span className="text-xs font-bold text-zinc-500 uppercase">{mod.duration}</span>
                        </div>
                        <p className="text-sm font-black uppercase text-[#121212] group-hover:text-[#D02020] transition-colors">
                          {mod.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Link
              href="/cheatsheet"
              className={clsx(
                "text-sm font-bold uppercase tracking-wider py-1 px-2 border-b-2 transition-all flex items-center gap-1.5",
                pathname === "/cheatsheet"
                  ? "border-[#F0C020] text-[#121212] font-black"
                  : "border-transparent text-[#121212] hover:border-[#121212]"
              )}
            >
              <Terminal className="w-4 h-4 text-[#1040C0]" />
              <span>CHEATSHEET</span>
            </Link>

            <Link
              href="/module/1-revolution"
              className="px-4 py-2 text-xs font-black uppercase tracking-wider bg-[#D02020] text-white border-2 md:border-4 border-[#121212] shadow-hard-sm btn-tactile hover:bg-[#D02020]/90"
            >
              START WORKSHOP &rarr;
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-white border-2 border-[#121212] shadow-hard-sm rounded-none text-[#121212] active:translate-x-0.5 active:translate-y-0.5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-4 border-[#121212] shadow-hard-lg">
          <div className="p-4 divide-y-2 divide-zinc-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 font-black uppercase text-sm text-[#121212]"
            >
              Dashboard
            </Link>
            <Link
              href="/cheatsheet"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 font-black uppercase text-sm text-[#1040C0]"
            >
              Command & Prompt Cheatsheet
            </Link>

            <div className="py-3">
              <span className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">
                All {MODULES.length} Modules
              </span>
              <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
                {MODULES.map((mod) => (
                  <Link
                    key={mod.id}
                    href={`/module/${mod.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 border-2 border-[#121212] bg-zinc-50 flex items-center justify-between text-xs font-bold uppercase"
                  >
                    <span>M{mod.number}: {mod.title}</span>
                    <span className="text-[10px] text-zinc-500">{mod.duration}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/module/1-revolution"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-3 bg-[#D02020] text-white font-black uppercase tracking-wider border-2 border-[#121212] shadow-hard-sm"
              >
                START WORKSHOP NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
