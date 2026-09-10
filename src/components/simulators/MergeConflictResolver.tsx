"use client";

import React, { useState } from "react";
import { GitMerge, Sparkles, Check, AlertCircle, HelpCircle } from "lucide-react";
import { clsx } from "clsx";

export const MergeConflictResolver: React.FC = () => {
  const [resolution, setResolution] = useState<"conflict" | "current" | "incoming" | "ai">("conflict");

  const rawConflict = `<<<<<<< HEAD (Your edit: You added a Login Modal)
export default function Page() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  return (
    <main>
      <Navbar onLoginClick={() => setIsAuthOpen(true)} />
      <AuthModal isOpen={isAuthOpen} />
    </main>
  );
}
======= (Git says: These two edits clash!)
export default function Page() {
  return (
    <main>
      <Navbar />
      <Aceternity3DHero title="Build with AI" />
    </main>
  );
}
>>>>>>> incoming (AI Agent edit: AI added a 3D Hero banner)`;

  const resolvedCodes = {
    current: `// OPTION 1: KEEP YOUR LOGIN MODAL ONLY (Discards the 3D Hero)
export default function Page() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  return (
    <main>
      <Navbar onLoginClick={() => setIsAuthOpen(true)} />
      <AuthModal isOpen={isAuthOpen} />
    </main>
  );
}`,
    incoming: `// OPTION 2: KEEP THE 3D HERO ONLY (Discards your Login Modal)
export default function Page() {
  return (
    <main>
      <Navbar />
      <Aceternity3DHero title="Build with AI" />
    </main>
  );
}`,
    ai: `// OPTION 3: AI SMART MERGE (Combines BOTH! Keeps the Login Modal AND the 3D Hero!)
"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AuthModal } from "@/components/AuthModal";
import { Aceternity3DHero } from "@/components/Aceternity3DHero";

export default function Page() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 1. Navbar with login button */}
      <Navbar onLoginClick={() => setIsAuthOpen(true)} />

      {/* 2. 3D Hero Banner from the AI */}
      <Aceternity3DHero title="Build with AI" />

      {/* 3. Login Modal from your work */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </main>
  );
}`
  };

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-8 sm:p-12 my-10">
      
      {/* Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-8 mb-8">
        <span className="inline-block px-3 py-1 bg-[#D02020] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
          CONFLICT SOLVER
        </span>
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          FIXING CODE CLASHES WITH AI
        </h3>
        <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-2xl">
          What is a merge conflict? Imagine two friends editing the same line in a Google Doc while offline. When you reconnect, Git asks: <em>&quot;Which change do you want to keep?&quot;</em>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setResolution("conflict")}
          className={clsx(
            "px-4 py-2.5 text-xs sm:text-sm font-black uppercase border-2 md:border-4 border-[#121212] transition-all btn-tactile",
            resolution === "conflict" ? "bg-[#121212] text-white" : "bg-zinc-100 hover:bg-white"
          )}
        >
          View The Clash
        </button>

        <button
          onClick={() => setResolution("current")}
          className={clsx(
            "px-4 py-2.5 text-xs sm:text-sm font-black uppercase border-2 md:border-4 border-[#121212] transition-all btn-tactile",
            resolution === "current" ? "bg-[#1040C0] text-white shadow-hard-sm" : "bg-zinc-100 hover:bg-white"
          )}
        >
          Keep My Edit Only
        </button>

        <button
          onClick={() => setResolution("incoming")}
          className={clsx(
            "px-4 py-2.5 text-xs sm:text-sm font-black uppercase border-2 md:border-4 border-[#121212] transition-all btn-tactile",
            resolution === "incoming" ? "bg-[#D02020] text-white shadow-hard-sm" : "bg-zinc-100 hover:bg-white"
          )}
        >
          Keep AI Edit Only
        </button>

        <button
          onClick={() => setResolution("ai")}
          className={clsx(
            "px-5 py-2.5 text-xs sm:text-sm font-black uppercase border-2 md:border-4 border-[#121212] transition-all btn-tactile flex items-center gap-2",
            resolution === "ai"
              ? "bg-green-600 text-white shadow-hard-sm scale-105"
              : "bg-green-100 text-green-900 hover:bg-green-200"
          )}
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Smart Merge (Combines Both!)</span>
        </button>
      </div>

      {/* Editor Display Box */}
      <div className="bg-[#121212] text-white border-2 md:border-4 border-[#121212] shadow-hard-md overflow-hidden mb-8">
        <div className="flex items-center justify-between px-6 py-3 bg-[#1e1e1e] border-b border-zinc-800 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#D02020]" />
            <span>src/app/page.tsx (Conflict Preview)</span>
          </div>
          <span className="text-[11px] uppercase font-bold text-[#F0C020]">
            {resolution === "conflict" ? "CLASH DETECTED" : "RESOLVED CLEANLY"}
          </span>
        </div>

        <div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed">
          <pre className="whitespace-pre-wrap">
            {resolution === "conflict" ? rawConflict : resolvedCodes[resolution]}
          </pre>
        </div>
      </div>

      {/* 1-Sentence AI Prompt Callout */}
      <div className="p-6 bg-zinc-100 border-2 md:border-4 border-[#121212] flex items-start gap-4">
        <Sparkles className="w-6 h-6 text-[#1040C0] flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-[#1040C0] block mb-1">
            The Exact Sentence to Tell Claude Code or Cursor:
          </span>
          <p className="text-xs sm:text-sm font-mono text-zinc-800 bg-white p-3 border border-zinc-300">
            &quot;Please resolve the merge conflict in `page.tsx`. Merge both features cleanly so nothing is lost, and remove the conflict markers.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};
