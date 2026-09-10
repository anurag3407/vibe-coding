"use client";

import React, { useState } from "react";
import { TerminalSnippet } from "../TerminalSnippet";
import { Sparkles, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";
import { clsx } from "clsx";

export const PromptDebugger: React.FC = () => {
  const [scenario, setScenario] = useState<"auth" | "bug" | "solidity">("auth");
  const [includeNegative, setIncludeNegative] = useState<boolean>(true);
  const [includeCoT, setIncludeCoT] = useState<boolean>(true);

  const scenarios = {
    auth: {
      name: "1. Add User Login",
      naive: "Make login with Supabase in Nextjs.",
      role: "Senior Full-Stack Next.js 15 and Supabase Security Engineer",
      goal: "Implement simple Email/Password and Google OAuth authentication.",
      context: "Next.js 15 App Router, TypeScript, Tailwind CSS v4, @supabase/ssr.",
      constraints: [
        "Do NOT delete any existing layout code.",
        "Do NOT leave '// TODO' placeholders—write complete, working code.",
        "Include a clean error banner if the user types the wrong password."
      ]
    },
    bug: {
      name: "2. Fix Screen Crash",
      naive: "My app gives error 418 fix it.",
      role: "Principal React Performance & Debugging Specialist",
      goal: "Fix the timestamp hydration mismatch error in `DashboardHeader.tsx`.",
      context: "React 18 / Next.js 14 App Router. Browser error: 'Hydration failed because UI does not match server'.",
      constraints: [
        "Do NOT rewrite unrelated components.",
        "Explain what caused the mismatch in 2 short bullet points.",
        "Provide only the surgical lines to change."
      ]
    },
    solidity: {
      name: "3. Safe Freelance Escrow",
      naive: "Write an escrow smart contract for me.",
      role: "Senior Smart Contract Auditor & Solidity 0.8.20 Architect",
      goal: "Write a safe Escrow contract: client deposits, freelancer submits, client approves, funds release.",
      context: "Base Sepolia testnet, OpenZeppelin v5 ReentrancyGuard.",
      constraints: [
        "Prevent reentrancy attacks by updating state before sending funds.",
        "Provide clear event logs for every deposit and release."
      ]
    }
  };

  const current = scenarios[scenario];

  const generatedPrompt = `### ROLE
You are an expert ${current.role}.

### GOAL
${current.goal}

### CONTEXT & TECH STACK
${current.context}

${
  includeNegative
    ? `### STRICT RULES (WHAT NOT TO DO)
${current.constraints.map((c) => `- ${c}`).join("\n")}\n`
    : ""
}${
  includeCoT
    ? `### EXECUTION DIRECTIVE
Before writing code, explain your plan in 2 sentences, list edge cases, then provide the clean code with file paths.\n`
    : ""
}### OUTPUT FORMAT
Complete, working code. No shortcuts or placeholders.`;

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-8 sm:p-12 my-10">
      
      {/* Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-8 mb-8">
        <span className="inline-block px-3 py-1 bg-[#F0C020] text-[#121212] font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
          PROMPT SIMULATOR
        </span>
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          HOW TO TALK TO AI (R-G-C-C-O)
        </h3>
        <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-2xl">
          See why lazy prompts generate broken code, while structured prompts get you production software on the first try.
        </p>
      </div>

      {/* Scenario Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {(Object.keys(scenarios) as Array<keyof typeof scenarios>).map((key) => (
          <button
            key={key}
            onClick={() => setScenario(key)}
            className={clsx(
              "px-5 py-3 text-xs sm:text-sm font-black uppercase border-2 md:border-4 border-[#121212] transition-all btn-tactile",
              scenario === key
                ? "bg-[#D02020] text-white shadow-hard-sm"
                : "bg-zinc-100 text-[#121212] hover:bg-white"
            )}
          >
            {scenarios[key].name}
          </button>
        ))}
      </div>

      {/* Toggles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-zinc-100 border-2 border-[#121212] mb-8">
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={includeNegative}
            onChange={(e) => setIncludeNegative(e.target.checked)}
            className="w-5 h-5 accent-[#D02020] cursor-pointer"
          />
          <div>
            <span className="text-xs sm:text-sm font-black uppercase text-[#121212] block">
              Tell AI What NOT to Break
            </span>
            <span className="text-[11px] text-zinc-500 font-medium">
              Stops AI from accidentally deleting your working features.
            </span>
          </div>
        </label>

        <label className="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={includeCoT}
            onChange={(e) => setIncludeCoT(e.target.checked)}
            className="w-5 h-5 accent-[#1040C0] cursor-pointer"
          />
          <div>
            <span className="text-xs sm:text-sm font-black uppercase text-[#121212] block">
              Force AI to Plan First
            </span>
            <span className="text-[11px] text-zinc-500 font-medium">
              Makes the AI think before writing code to prevent bugs.
            </span>
          </div>
        </label>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Bad Naive Prompt */}
        <div className="p-6 bg-red-50 border-2 md:border-4 border-[#D02020] shadow-hard-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#D02020] font-black uppercase text-xs tracking-wider">
              <AlertTriangle className="w-5 h-5" />
              <span>THE LAZY PROMPT (OFTEN FAILS)</span>
            </div>
            <div className="p-4 bg-white border border-red-300 font-mono text-xs sm:text-sm text-red-900 mb-4">
              &quot;{current.naive}&quot;
            </div>
            <p className="text-xs sm:text-sm text-red-700 font-medium leading-relaxed">
              Why it fails: AI has to guess everything. It invents fake libraries, leaves code half-finished, and breaks your layout.
            </p>
          </div>
        </div>

        {/* Good Prompt */}
        <div className="p-6 bg-green-50 border-2 md:border-4 border-green-800 shadow-hard-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 text-green-900 font-black uppercase text-xs tracking-wider">
              <CheckCircle className="w-5 h-5 text-green-700" />
              <span>THE STRUCTURED PROMPT (WORKS 99% OF TIME)</span>
            </div>
            <div className="text-xs sm:text-sm text-green-800 font-medium leading-relaxed mb-4">
              Gives clear boundaries, specifies existing tools, and tells the AI exactly what you expect.
            </div>
            <div className="text-xs font-mono text-green-900 bg-white p-3 border border-green-300">
              Role: Defined &bull; Goal: Clear &bull; Guardrails: Active
            </div>
          </div>
        </div>
      </div>

      {/* Generated Prompt Terminal Output */}
      <TerminalSnippet
        command={generatedPrompt}
        title="COPY-PASTE READY PROMPT"
        shellType="bash"
      />
    </div>
  );
};
