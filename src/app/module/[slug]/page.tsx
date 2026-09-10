import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MODULES } from "@/data/modules";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { TerminalSnippet } from "@/components/TerminalSnippet";
import { TerminalOsSwitcher } from "@/components/simulators/TerminalOsSwitcher";
import { EmergencyPanicProtocol } from "@/components/simulators/EmergencyPanicProtocol";
import { PromptDebugger } from "@/components/simulators/PromptDebugger";
import { PromptComponentsMastery } from "@/components/simulators/PromptComponentsMastery";
import { MergeConflictResolver } from "@/components/simulators/MergeConflictResolver";
import { WhatNotToPushSimulator } from "@/components/simulators/WhatNotToPushSimulator";
import { McpUsbHub } from "@/components/simulators/McpUsbHub";
import { FullStackArchitectureMap } from "@/components/simulators/FullStackArchitectureMap";
import { SecretSafetySimulator } from "@/components/simulators/SecretSafetySimulator";
import { MernStackSimulator } from "@/components/simulators/MernStackSimulator";
import { Web3EscrowSimulator } from "@/components/simulators/Web3EscrowSimulator";
import { TestingMasterclassSimulator } from "@/components/simulators/TestingMasterclassSimulator";
import { DeploymentDomainSimulator } from "@/components/simulators/DeploymentDomainSimulator";
import { VisualTestSandwich } from "@/components/simulators/VisualTestSandwich";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb,
  Sparkles,
  BookOpen
} from "lucide-react";

export function generateStaticParams() {
  return MODULES.map((mod) => ({
    slug: mod.slug,
  }));
}

export default function ModuleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const currentModule = MODULES.find((m) => m.slug === params.slug);

  if (!currentModule) {
    notFound();
  }

  const currentIndex = MODULES.findIndex((m) => m.slug === params.slug);
  const prevModule = currentIndex > 0 ? MODULES[currentIndex - 1] : null;
  const nextModule = currentIndex < MODULES.length - 1 ? MODULES[currentIndex + 1] : null;

  return (
    <div className="bg-[#F0F0F0] text-[#121212] min-h-screen">
      
      {/* =========================================================================
          MODULE HERO BANNER: Solid Primary Bauhaus Color Block
      ========================================================================= */}
      <section
        style={{ backgroundColor: currentModule.bgHex }}
        className="text-white border-b-4 border-[#121212] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#121212] border-2 md:border-4 border-black font-black uppercase text-xs tracking-wider shadow-hard-sm hover:bg-zinc-100 btn-tactile"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>&larr; BACK TO LESSONS</span>
            </Link>

            <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold text-white/90">
              <span className="px-3 py-1.5 bg-black/40 border border-white/20">
                {currentModule.phase}
              </span>
              <span className="px-3 py-1.5 bg-black/40 border border-white/20">
                {currentModule.duration}
              </span>
            </div>
          </div>

          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-[#F0C020] text-[#121212] font-black uppercase text-xs tracking-widest border-2 border-black shadow-hard-sm mb-6">
              LESSON {currentModule.number < 10 ? `0${currentModule.number}` : currentModule.number} OF {MODULES.length}
            </span>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-tight mb-4 text-white">
              {currentModule.title}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-white/90 leading-relaxed">
              {currentModule.subtitle}
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MODULE BODY CONTENT
      ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* BIG ELI5 ANALOGY CALLOUT */}
        <div className="p-8 sm:p-10 bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-6 h-6 text-[#F0C020]" />
            <span className="text-xs font-black uppercase tracking-widest text-[#D02020]">
              THE SIMPLE MENTAL MODEL
            </span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-[#121212] leading-relaxed">
            {currentModule.eli5Analogy}
          </p>
        </div>

        {/* Overview & Key Learning Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 mb-16">
          
          <div className="lg:col-span-7 bg-white border-2 md:border-4 border-[#121212] shadow-hard-lg p-8 sm:p-10">
            <span className="inline-block px-2.5 py-1 bg-[#121212] text-white font-black text-xs uppercase mb-4">
              WHY THIS MATTERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
              WHAT YOU WILL LEARN
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 font-medium leading-relaxed mb-8">
              {currentModule.description}
            </p>

            <div className="p-6 bg-zinc-50 border-2 border-black">
              <span className="text-xs font-black uppercase text-zinc-500 block mb-3">
                KEY TAKEAWAYS:
              </span>
              <ul className="space-y-3">
                {currentModule.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-[#D02020] flex-shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Rule of Thumb Card */}
          <div className="lg:col-span-5 bg-[#121212] text-white border-2 md:border-4 border-[#121212] shadow-hard-lg p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3.5 h-3.5 rounded-full bg-[#D02020]" />
                <div className="w-3.5 h-3.5 rounded-none bg-[#F0C020] rotate-45" />
                <div className="w-3.5 h-3.5 clip-triangle bg-[#1040C0]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#F0C020] ml-2">
                  GOLDEN RULE
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
                NEVER GUESS. <br />ALWAYS VERIFY.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-8 font-medium">
                You don&apos;t need to memorize thousands of syntax rules. Direct the AI clearly, inspect the output, run verified checks, and iterate.
              </p>
            </div>

            <div className="p-4 bg-white/10 border-2 border-white/20 text-xs font-mono text-zinc-300">
              <span className="text-[#F0C020] font-bold">PRO-TIP: </span>
              If an AI generates something unexpected, paste the error back into the terminal agent and ask it to analyze and resolve it step-by-step.
            </div>
          </div>

        </div>

        {/* =========================================================================
            INTERACTIVE WORKFLOW DIAGRAM
        ========================================================================= */}
        <section className="mb-16 sm:mb-20">
          <WorkflowDiagram
            steps={currentModule.workflowSteps}
            title={`LESSON ${currentModule.number < 10 ? `0${currentModule.number}` : currentModule.number}: STEP-BY-STEP WORKFLOW`}
          />
        </section>

        {/* =========================================================================
            SPECIALIZED INTERACTIVE SIMULATORS
        ========================================================================= */}
        {currentModule.slug === "2-cockpit" && (
          <section className="mb-16 sm:mb-20">
            <TerminalOsSwitcher />
          </section>
        )}

        {currentModule.slug === "3-panic-button" && (
          <section className="mb-16 sm:mb-20">
            <EmergencyPanicProtocol />
          </section>
        )}

        {currentModule.slug === "4-prompting" && (
          <section className="space-y-16 mb-16 sm:mb-20">
            <PromptComponentsMastery />
            <PromptDebugger />
          </section>
        )}

        {currentModule.slug === "8-git-github" && (
          <section className="mb-16 sm:mb-20">
            <MergeConflictResolver />
          </section>
        )}

        {currentModule.slug === "9-what-not-to-push" && (
          <section className="mb-16 sm:mb-20">
            <WhatNotToPushSimulator />
          </section>
        )}

        {currentModule.slug === "10-mcp" && (
          <section className="mb-16 sm:mb-20">
            <McpUsbHub />
          </section>
        )}

        {currentModule.slug === "11-fullstack" && (
          <section className="space-y-16 mb-16 sm:mb-20">
            <FullStackArchitectureMap />
            <SecretSafetySimulator />
          </section>
        )}

        {currentModule.slug === "12-mern-stack" && (
          <section className="mb-16 sm:mb-20">
            <MernStackSimulator />
          </section>
        )}

        {currentModule.slug === "13-web3" && (
          <section className="mb-16 sm:mb-20">
            <Web3EscrowSimulator />
          </section>
        )}

        {currentModule.slug === "14-testing" && (
          <section className="space-y-16 mb-16 sm:mb-20">
            <TestingMasterclassSimulator />
            <VisualTestSandwich />
          </section>
        )}

        {currentModule.slug === "15-deployment" && (
          <section className="mb-16 sm:mb-20">
            <DeploymentDomainSimulator />
          </section>
        )}

        {currentModule.slug === "16-domains-launch" && (
          <section className="space-y-16 mb-16 sm:mb-20">
            <DeploymentDomainSimulator />
            <VisualTestSandwich />
          </section>
        )}

        {/* Fallback command block for modules without dedicated complex simulators */}
        {!["2-cockpit", "3-panic-button", "4-prompting", "8-git-github", "9-what-not-to-push", "10-mcp", "11-fullstack", "12-mern-stack", "13-web3", "14-testing", "15-deployment", "16-domains-launch"].includes(currentModule.slug) && (
          <section className="mb-16 sm:mb-20">
            <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-lg p-8 sm:p-10">
              <span className="px-3 py-1 bg-[#F0C020] text-[#121212] font-black text-xs uppercase mb-3 inline-block">
                VERIFIED READY-TO-USE PROMPT
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                RUN THIS COMMAND IN CLAUDE CODE OR ANTIGRAVITY
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mb-6 font-medium">
                Copy and paste this prompt directly into your terminal AI agent:
              </p>
              <TerminalSnippet
                command={`# Lesson ${currentModule.number}: ${currentModule.title}
# Run with Claude Code or Google Antigravity:
claude "Review the requirements for ${currentModule.title}. Create a step-by-step plan in TASKS.md, handle edge cases, and ask for my confirmation before writing code."`}
                title={`LESSON ${currentModule.number} TEMPLATE`}
                shellType="zsh"
              />
            </div>
          </section>
        )}

        {/* =========================================================================
            PAGINATION CONTROLLER: Prev & Next Module
        ========================================================================= */}
        <div className="pt-10 border-t-4 border-[#121212] flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevModule ? (
            <Link
              href={`/module/${prevModule.slug}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#121212] border-2 md:border-4 border-[#121212] shadow-hard-sm font-black text-xs uppercase tracking-wider btn-tactile hover:bg-zinc-100 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>PREV: L{prevModule.number < 10 ? `0${prevModule.number}` : prevModule.number} {prevModule.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextModule ? (
            <Link
              href={`/module/${nextModule.slug}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#D02020] text-white border-2 md:border-4 border-[#121212] shadow-hard-sm font-black text-xs uppercase tracking-wider btn-tactile hover:bg-[#D02020]/90 flex items-center justify-center gap-2"
            >
              <span>NEXT: L{nextModule.number < 10 ? `0${nextModule.number}` : nextModule.number} {nextModule.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href="/cheatsheet"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#F0C020] text-[#121212] border-2 md:border-4 border-[#121212] shadow-hard-sm font-black text-xs uppercase tracking-wider btn-tactile hover:bg-[#F0C020]/90 flex items-center justify-center gap-2"
            >
              <span>COMPLETED! VIEW CHEATSHEET</span>
              <Sparkles className="w-4 h-4" />
            </Link>
          )}
        </div>

      </div>

    </div>
  );
}
