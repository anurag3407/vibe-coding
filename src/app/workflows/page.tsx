import React from "react";
import Link from "next/link";
import { VisualWorkflowStudio } from "@/components/VisualWorkflowStudio";
import { BauhausButton } from "@/components/BauhausButton";
import { MODULES } from "@/data/modules";
import { 
  ArrowRight, 
  GitBranch, 
  Database, 
  Rocket, 
  ShieldCheck, 
  Workflow, 
  Sparkles,
  Layers,
  Terminal
} from "lucide-react";

export const metadata = {
  title: "Interactive Architectural Workflows | Vibe Coding Masterclass",
  description: "Explore the complete visual pipelines: Master Vibe Loop, MERN Data Flow, Git Conflict Resolution, and CI/CD Quality Scanners."
};

export default function WorkflowsPage() {
  const workflowHighlights = [
    {
      title: "IDEA TO LIVE URL",
      subtitle: "The Master Vibe Pipeline",
      desc: "How non-technical founders go from a one-line English prompt to a live, production-grade Next.js web application on Vercel.",
      color: "#D02020",
      targetModule: "/module/1-revolution",
      moduleLabel: "Lesson 01 & 06"
    },
    {
      title: "MERN DATA FLOW",
      subtitle: "Full-Duplex Request Loop",
      desc: "Trace how user form clicks in React reach Express endpoints, validate with Mongoose, and persist inside MongoDB Atlas.",
      color: "#1040C0",
      targetModule: "/module/12-mern-stack",
      moduleLabel: "Lesson 12"
    },
    {
      title: "GIT SAFETY & MERGES",
      subtitle: "Checkpoint Recovery Loop",
      desc: "Safely isolate wild new features on git branches, detect code clashes, and use AI to reconcile merge conflicts in 5 seconds.",
      color: "#121212",
      targetModule: "/module/8-git-github",
      moduleLabel: "Lesson 08 & 09"
    },
    {
      title: "E2E QUALITY & DEPLOY",
      subtitle: "Robot User Testing Pipeline",
      desc: "Playwright headless browser testing verifying login and checkout flows, followed by 1-click global edge propagation.",
      color: "#F0C020",
      targetModule: "/module/14-testing",
      moduleLabel: "Lesson 14 & 15"
    }
  ];

  return (
    <div className="bg-[#F0F0F0] text-[#121212] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#121212] text-white border-b-4 border-[#121212] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#D02020]/20 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-none bg-[#1040C0]/20 rotate-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0C020] text-[#121212] font-black uppercase text-xs tracking-widest border-2 border-white shadow-hard-sm mb-6">
            <Workflow className="w-4 h-4" />
            <span>VISUAL SYSTEM ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-tight mb-4">
            HOW VIBE CODING ACTUALLY WORKS
          </h1>
          
          <p className="text-lg sm:text-2xl text-zinc-300 font-medium max-w-3xl leading-relaxed">
            Stop looking at disconnected code snippets. Understand the complete end-to-end pipelines connecting your thoughts to running software.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Interactive Visual Workflow Studio Component */}
        <VisualWorkflowStudio />

        {/* 4 Pipeline Overview Cards */}
        <div className="my-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#1040C0] block mb-1">
              CURRICULUM MAPPING
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
              WHERE THESE WORKFLOWS ARE TAUGHT
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowHighlights.map((wf, idx) => (
              <div
                key={idx}
                className="bg-white border-2 md:border-4 border-[#121212] p-6 shadow-hard-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      style={{ backgroundColor: wf.color }}
                      className="text-white text-[10px] font-black uppercase px-2 py-0.5 border border-black"
                    >
                      {wf.moduleLabel}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-400">#0{idx + 1}</span>
                  </div>

                  <h4 className="text-xl font-black uppercase tracking-tight text-[#121212] mb-1">
                    {wf.title}
                  </h4>
                  <div className="text-xs font-bold text-zinc-500 uppercase mb-3">
                    {wf.subtitle}
                  </div>
                  <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-6">
                    {wf.desc}
                  </p>
                </div>

                <Link
                  href={wf.targetModule}
                  className="pt-4 border-t-2 border-zinc-200 flex items-center justify-between text-xs font-black uppercase text-[#1040C0] hover:text-[#D02020] transition-colors"
                >
                  <span>STUDY THIS LESSON</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Return CTA */}
        <div className="p-8 sm:p-12 bg-[#F0C020] border-2 md:border-4 border-[#121212] shadow-hard-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
              READY TO PUT THESE WORKFLOWS INTO ACTION?
            </h3>
            <p className="text-xs sm:text-base font-medium text-zinc-900 mt-2">
              Start with Lesson 01 and follow the 16 step-by-step masterclass modules.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <BauhausButton href="/module/1-revolution" variant="red" size="lg">
              <span>START LESSON 01</span>
              <ArrowRight className="w-5 h-5" />
            </BauhausButton>
          </div>
        </div>

      </div>

    </div>
  );
}
