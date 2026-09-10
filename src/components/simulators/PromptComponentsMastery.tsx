"use client";

import React, { useState } from "react";
import { TerminalSnippet } from "../TerminalSnippet";
import { 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  Copy, 
  ArrowRight,
  UserCheck,
  Target,
  FileText,
  AlertTriangle,
  Code2,
  FileCheck
} from "lucide-react";
import { clsx } from "clsx";

export const PromptComponentsMastery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeRecipe, setActiveRecipe] = useState<"feature" | "bug" | "reverse" | "audit">("feature");

  const components = [
    {
      number: "01",
      name: "PERSONA / ROLE",
      icon: UserCheck,
      color: "#D02020",
      headline: "Who is the AI pretending to be?",
      whyItMatters: "LLMs contain all human knowledge from high school essays to senior Google staff engineers. Setting a role calibrates the model's vocabulary, assumptions, and quality bar.",
      badExample: "Hey can you write code for me?",
      goodExample: "You are a Principal Full-Stack React and Next.js 15 Architect with 10+ years of production experience.",
      tip: "Always use high-seniority roles ('Principal Staff Engineer', 'Smart Contract Security Auditor') to force high-standard code."
    },
    {
      number: "02",
      name: "CORE TASK / GOAL",
      icon: Target,
      color: "#1040C0",
      headline: "What exact action must it take?",
      whyItMatters: "Be atomic. Never ask for an entire startup in one prompt. Use strong action verbs (Build, Refactor, Audit, Diagnose, Optimize).",
      badExample: "Build me an Uber clone for pets with payments and tracking.",
      goodExample: "Create an accessible, dark-mode Modal component using Tailwind CSS that opens when the user clicks 'Sign In'.",
      tip: "Limit each prompt to 1 feature or 1 screen at a time. The 1-Feature Rule prevents 90% of bugs."
    },
    {
      number: "03",
      name: "CONTEXT & STACK",
      icon: FileText,
      color: "#F0C020",
      headline: "What tools & existing files does it need to know?",
      whyItMatters: "If you don't tell the AI your versions, it will guess. It might use Next.js 12 Pages router syntax when your project is on Next.js 15 App Router!",
      badExample: "Here is my code fix the button.",
      goodExample: "Tech stack: Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS v4, Lucide icons. File: `src/components/Navbar.tsx`.",
      tip: "Always specify framework versions and attach only the relevant files using the @ symbol in Cursor or Antigravity."
    },
    {
      number: "04",
      name: "NEGATIVE CONSTRAINTS",
      icon: AlertTriangle,
      color: "#D02020",
      headline: "What must the AI NOT do? (Guardrails)",
      whyItMatters: "This is the single most powerful secret in prompt engineering. AI loves to rewrite your entire file, delete comments, or install random npm libraries. Negative constraints stop it.",
      badExample: "Make it look good.",
      goodExample: "- Do NOT delete existing imports or comments\n- Do NOT introduce new npm packages\n- Do NOT leave '// TODO: implement' placeholders\n- Do NOT break mobile responsiveness",
      tip: "List at least 3 negative constraints in every single prompt you send."
    },
    {
      number: "05",
      name: "EXAMPLES (FEW-SHOT)",
      icon: Code2,
      color: "#1040C0",
      headline: "Show, don't just tell.",
      whyItMatters: "Giving the AI just 1 example of your desired code style or JSON response improves output accuracy by 80% compared to zero examples.",
      badExample: "Format the data nicely.",
      goodExample: "Example of expected output format:\n{\n  \"status\": \"success\",\n  \"data\": { \"userId\": \"uuid-123\", \"email\": \"alex@domain.com\" }\n}",
      tip: "Provide 1 sample of your existing component patterns so the AI matches your exact codebase style."
    },
    {
      number: "06",
      name: "OUTPUT FORMAT",
      icon: FileCheck,
      color: "#121212",
      headline: "How should the response be delivered?",
      whyItMatters: "Do you want a full file replacement, a surgical diff, a step-by-step checklist, or an explanation before code? Tell it explicitly.",
      badExample: "Send code.",
      goodExample: "Output format: Provide only the modified file `src/app/login/page.tsx` with complete imports. Explain the root cause in 2 bullet points before the code.",
      tip: "Requesting 'surgical diffs' saves tokens, speeds up generation, and prevents hallucinating old code."
    }
  ];

  const recipes = {
    feature: {
      name: "1. The New Feature Recipe",
      desc: "For building a new button, page, modal, or database table from scratch.",
      prompt: `### ROLE
You are an expert Senior Full-Stack Next.js 15 & Tailwind CSS Engineer.

### GOAL
Implement a responsive user profile dropdown menu with dark mode support.

### CONTEXT & TECH STACK
- Framework: Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide icons
- Component location: src/components/Navbar.tsx
- Current user state is provided via useUser() hook from Supabase

### CONSTRAINTS (DO NOT VIOLATE)
- Do NOT delete existing navigation links in Navbar.tsx
- Do NOT add external dropdown libraries; use Tailwind and clean React state
- Ensure it closes when clicking outside the menu
- Must be fully responsive across mobile (390px) and desktop

### OUTPUT FORMAT
Provide the complete, updated Navbar.tsx component with all imports intact.`
    },
    bug: {
      name: "2. The Deep Bug Debugger Recipe",
      desc: "For pasting terminal or browser console errors to get an instant 10-second fix.",
      prompt: `### ROLE
You are a Principal Software Debugging Specialist.

### SITUATION & BUG REPORT
I ran: npm run dev
Expected behavior: The user dashboard loads and displays analytics charts.
Actual behavior: White screen crash with browser console error.

### CONSOLE ERROR LOG
[PASTE EXACT RED ERROR STACK TRACE HERE]
Example: TypeError: Cannot read properties of undefined (reading 'map') at Dashboard.tsx:42

### CONTEXT
- Relevant file: src/app/dashboard/page.tsx
- Data is fetched from Supabase in a Server Action

### DIRECTIVE
1. Explain the root cause in 2 concise bullet points (why did it occur?).
2. Provide the surgical code fix that handles null/undefined data safely.
3. Tell me how to verify the fix in my browser.`
    },
    reverse: {
      name: "3. The 'Reverse Prompting' Interview Recipe",
      desc: "When you have a fuzzy idea and want AI to interview you to extract the exact specs.",
      prompt: `### ROLE
You are an elite Product Architect and Technical Co-Founder.

### MY IDEA
I want to build: [Insert your 2-sentence app idea here, e.g. "An AI bookmark manager that tags my saved tweets and websites automatically."]

### YOUR TASK (REVERSE PROMPT)
Do NOT write code yet.
Instead, interview me by asking 5 critical questions, one at a time, regarding:
1. Target users and monetization model
2. Core MVP feature (the #1 loop that must work on Day 1)
3. Preferred database and auth provider
4. Design aesthetic and reference websites
5. Potential edge cases or integrations needed

Wait for my answer to each question before proceeding to the next.`
    },
    audit: {
      name: "4. The Security & Performance Audit Recipe",
      desc: "For reviewing existing code for secret leaks, slow queries, and bugs before launch.",
      prompt: `### ROLE
You are a Senior Application Security and Performance Auditor.

### TASK
Audit the attached file [src/app/actions.ts] for production readiness.

### AUDIT CHECKLIST
Inspect and report on:
1. Secret leaks: Are any private API keys or database service roles exposed?
2. Input sanitization: Are user inputs validated with Zod or guard clauses?
3. N+1 queries: Are database calls optimized with proper indexes?
4. Error handling: Are server errors masked so internal database paths aren't leaked to users?

### OUTPUT
Provide a severity table (Critical, High, Medium, Low) followed by the remediated, hardened code.`
    }
  };

  const currentComp = components[activeTab];
  const currentRecipe = recipes[activeRecipe];

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-8 sm:p-12 my-10">
      
      {/* Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-8 mb-10">
        <span className="inline-block px-3 py-1 bg-[#D02020] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
          COMPLETE PROMPT MASTERCLASS
        </span>
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          THE ANATOMY OF AN ELITE PROMPT
        </h3>
        <p className="text-sm sm:text-base text-zinc-600 font-medium mt-2 max-w-3xl leading-relaxed">
          A prompt is not a search query. It is a <strong>compiled specification for a neural network</strong>. Master these 6 core building blocks to get perfect, production-grade code on the first try.
        </p>
      </div>

      {/* 6 Component Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {components.map((comp, idx) => {
          const Icon = comp.icon;
          const isSelected = activeTab === idx;

          return (
            <button
              key={comp.number}
              onClick={() => setActiveTab(idx)}
              className={clsx(
                "p-4 text-left border-2 md:border-4 border-[#121212] transition-all btn-tactile select-none",
                isSelected
                  ? "bg-[#121212] text-white shadow-hard-md -translate-y-1"
                  : "bg-zinc-50 text-[#121212] hover:bg-white shadow-hard-sm"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 border border-current">
                  {comp.number}
                </span>
                <Icon className={clsx("w-4 h-4", isSelected ? "text-[#F0C020]" : "text-[#121212]")} />
              </div>
              <div className="text-xs font-black uppercase tracking-tight line-clamp-1">
                {comp.name.split("/")[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Component Deep Dive Card */}
      <div className="border-2 md:border-4 border-[#121212] bg-zinc-50 p-8 sm:p-10 shadow-hard-md mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-zinc-300 pb-6 mb-6">
          <div>
            <span className="text-xs font-black uppercase px-2.5 py-1 bg-[#D02020] text-white">
              INGREDIENT {currentComp.number} OF 06
            </span>
            <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#121212] mt-2">
              {currentComp.name}
            </h4>
            <p className="text-sm sm:text-base font-bold text-zinc-700 mt-1">
              {currentComp.headline}
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-8 font-medium max-w-3xl">
          {currentComp.whyItMatters}
        </p>

        {/* Bad vs Good Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="p-6 bg-red-50 border-2 border-red-300">
            <span className="text-xs font-black uppercase text-[#D02020] block mb-2">
              ❌ WEAK / LAZY (AI WILL GUESS WRONGLY):
            </span>
            <div className="p-3 bg-white font-mono text-xs text-red-900 border border-red-200">
              &quot;{currentComp.badExample}&quot;
            </div>
          </div>

          <div className="p-6 bg-green-50 border-2 border-green-300">
            <span className="text-xs font-black uppercase text-green-800 block mb-2">
              ✅ PRODUCTION SPEC (ACCURATE & PRECISE):
            </span>
            <div className="p-3 bg-white font-mono text-xs text-green-900 border border-green-200 whitespace-pre-wrap">
              {currentComp.goodExample}
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#FFF9C4] border-2 border-[#121212] text-xs sm:text-sm font-bold text-[#121212]">
          <span className="text-[#D02020] uppercase font-black">ARCHITECT TIP: </span>
          {currentComp.tip}
        </div>
      </div>

      {/* Ready-to-Copy Proven Prompt Recipes */}
      <div className="border-t-4 border-[#121212] pt-10">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-[#1040C0] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-2">
            PROVEN FORMULAS
          </span>
          <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#121212]">
            THE 4 MASTER PROMPT RECIPES
          </h4>
          <p className="text-xs sm:text-sm text-zinc-600 font-medium mt-1">
            Pick a recipe, copy it, fill in the brackets, and paste into Claude Code, Antigravity, or Cursor:
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {(Object.keys(recipes) as Array<keyof typeof recipes>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveRecipe(key)}
              className={clsx(
                "px-4 py-2.5 text-xs sm:text-sm font-black uppercase border-2 md:border-4 border-[#121212] transition-all btn-tactile",
                activeRecipe === key
                  ? "bg-[#1040C0] text-white shadow-hard-sm"
                  : "bg-zinc-100 hover:bg-white text-[#121212]"
              )}
            >
              {recipes[key].name}
            </button>
          ))}
        </div>

        <div className="mb-4 text-xs sm:text-sm font-bold text-zinc-700">
          {currentRecipe.desc}
        </div>

        <TerminalSnippet
          command={currentRecipe.prompt}
          title={currentRecipe.name.toUpperCase()}
          shellType="bash"
        />
      </div>

    </div>
  );
};
