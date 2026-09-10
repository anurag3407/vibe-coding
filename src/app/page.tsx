import React from "react";
import Link from "next/link";
import { MODULES } from "@/data/modules";
import { BauhausButton } from "@/components/BauhausButton";
import { BauhausCard } from "@/components/BauhausCard";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { TerminalOsSwitcher } from "@/components/simulators/TerminalOsSwitcher";
import { EmergencyPanicProtocol } from "@/components/simulators/EmergencyPanicProtocol";
import { PreFlightChecklist } from "@/components/simulators/PreFlightChecklist";
import { VisualTestSandwich } from "@/components/simulators/VisualTestSandwich";
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Gamepad2,
  Cpu,
  UtensilsCrossed,
  Coins,
  AlertOctagon
} from "lucide-react";

export default function HomePage() {
  const masterLoop = [
    { step: "01", title: "EXPLAIN", description: "Describe your idea in simple, plain English—just like texting a friend.", tag: "Idea" },
    { step: "02", title: "AI BUILDS", description: "Your AI assistant creates the files and writes the code automatically.", tag: "Action" },
    { step: "03", title: "TEST", description: "Click around in your browser. If anything looks off, spot it easily.", tag: "Check" },
    { step: "04", title: "REFINE", description: "Tell the AI what to change. Watch it update the app in seconds.", tag: "Polish" }
  ];

  const beginnerAnalogies = [
    {
      title: "THE TERMINAL",
      analogy: "Texting Your Computer",
      desc: "Don't fear the black screen. It is just like WhatsApp for your laptop. You type short instructions instead of clicking 50 website buttons.",
      icon: MessageSquare,
      color: "#1040C0"
    },
    {
      title: "GIT & GITHUB",
      analogy: "Video Game Save Points",
      desc: "Git saves your progress before you make changes. If you make a mistake, you don't start over—you just click 'reload' and you're safe.",
      icon: Gamepad2,
      color: "#D02020"
    },
    {
      title: "MODEL CONTEXT PROTOCOL",
      analogy: "The Universal USB-C Cable",
      desc: "Just like plugging a mouse into your laptop, MCP lets AI plug into your databases, files, and browsers with zero friction.",
      icon: Cpu,
      color: "#121212"
    },
    {
      title: "FULL-STACK APPS",
      analogy: "The Restaurant Setup",
      desc: "The Dining Room is what users see (Frontend). The Waiter takes your order (Server). The Kitchen Pantry stores the ingredients (Database).",
      icon: UtensilsCrossed,
      color: "#F0C020"
    },
    {
      title: "WEB3 & SMART CONTRACTS",
      analogy: "The Digital Vending Machine",
      desc: "You insert a coin, press the button, and the drink drops automatically. No store clerk or middleman can interfere or take your money.",
      icon: Coins,
      color: "#1040C0"
    }
  ];

  const phases = [
    { number: 1, title: "PHASE 1: GETTING READY", subtitle: "Zero to Laptop Ready", color: "bg-[#D02020]", modules: MODULES.slice(0, 3) },
    { number: 2, title: "PHASE 2: DIRECTING THE AI", subtitle: "Prompts, Memory & Blueprints", color: "bg-[#1040C0]", modules: MODULES.slice(3, 6) },
    { number: 3, title: "PHASE 3: THE BUILDER'S TOOLKIT", subtitle: "UI Lego Bricks, Git & MCP", color: "bg-[#F0C020] text-[#121212]", modules: MODULES.slice(6, 9) },
    { number: 4, title: "PHASE 4: FULL-STACK & LAUNCHING", subtitle: "Real Web Apps, Web3 & Shipping", color: "bg-[#121212]", modules: MODULES.slice(9, 12) },
  ];

  return (
    <div className="bg-[#F0F0F0] text-[#121212]">

      {/* =========================================================================
          HERO SECTION: Spacious Constructivist Bauhaus Composition
      ========================================================================= */}
      <section className="relative border-b-4 border-[#121212] overflow-hidden bg-grid-lines">
        <div className="max-w-7xl mx-auto py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#D02020] text-white border-2 border-[#121212] shadow-hard-sm font-black text-xs uppercase tracking-widest mb-8 self-start">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>BEGINNER-FRIENDLY &bull; 3-HOUR WORKSHOP</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-[#121212] mb-8">
                STOP CODING. <br />
                <span className="text-[#D02020]">START DIRECTING.</span>
              </h1>

              <p className="text-base sm:text-xl font-medium text-zinc-800 leading-relaxed max-w-2xl mb-10">
                You don&apos;t need 4 years of computer science. If you can explain your idea in plain English, AI will build your website, database, and smart contracts for you.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <BauhausButton href="/module/1-revolution" variant="red" size="lg">
                  <span>START LESSON 01</span>
                  <ArrowRight className="w-5 h-5" />
                </BauhausButton>

                <BauhausButton href="/cheatsheet" variant="yellow" size="lg">
                  <Terminal className="w-5 h-5" />
                  <span>VIEW CHEATSHEET</span>
                </BauhausButton>
              </div>

              {/* Simple Feature Tags */}
              <div className="pt-10 border-t-2 border-zinc-300 mt-10 flex flex-wrap items-center gap-4 text-xs font-black uppercase tracking-wider text-zinc-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1040C0]" />
                  Zero Coding Background
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-none bg-[#D02020] rotate-45" />
                  Mac & Windows Ready
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 clip-triangle bg-[#F0C020]" />
                  100% Free Tools
                </span>
              </div>
            </div>

            {/* Right Panel: Clean Bauhaus Poster Art (5 Cols) */}
            <div className="lg:col-span-5 bg-[#1040C0] text-white p-8 sm:p-12 border-4 border-[#121212] shadow-hard-xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-none bg-[#D02020] rotate-45 opacity-80 pointer-events-none border-4 border-black" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b-2 border-white/30 pb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F0C020]">
                    THE NEW FORMULA
                  </span>
                  <span className="text-xs font-mono font-bold text-white/80">3 HOURS</span>
                </div>

                <div className="p-6 bg-white text-[#121212] border-4 border-black shadow-hard-md">
                  <div className="text-[10px] font-mono font-bold uppercase text-[#D02020] mb-2">
                    THE BIG SHIFT
                  </div>
                  <div className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                    IDEAS &gt; SYNTAX
                  </div>
                  <p className="text-xs text-zinc-600 font-medium mt-2 leading-relaxed">
                    AI writes the semicolons. You provide the vision, taste, and direction.
                  </p>
                </div>

                <div className="p-5 bg-[#121212] text-white border-4 border-white shadow-hard-md">
                  <div className="text-[10px] font-mono font-bold uppercase text-[#F0C020] mb-1">
                    ANDREJ KARPATHY (AI PIONEER)
                  </div>
                  <p className="text-sm font-medium italic text-zinc-200">
                    &quot;I just see stuff, say stuff, run stuff, and it works.&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          PRE-FLIGHT CHECKLIST (Interactive Account Check)
      ========================================================================= */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212]">
        <PreFlightChecklist />
      </section>

      {/* =========================================================================
          BEGINNER ANALOGIES SECTION: "Explain Like I'm 5"
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212]">
        <div className="max-w-3xl mb-14">
          <span className="inline-block px-3 py-1 bg-[#1040C0] text-white font-black uppercase text-xs tracking-widest border-2 border-black shadow-hard-sm mb-3">
            CLEAR MENTAL MODELS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#121212] mb-4">
            HOW COMPUTERS WORK, EXPLAINED SIMPLY
          </h2>
          <p className="text-base text-zinc-700 font-medium leading-relaxed">
            Tech jargon sounds intimidating until you realize every developer tool is just a digital version of something you already use every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beginnerAnalogies.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="p-8 bg-white border-2 md:border-4 border-[#121212] shadow-hard-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center bg-zinc-100 shadow-hard-sm">
                      <Icon className="w-5 h-5 text-[#121212]" />
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-black uppercase bg-[#121212] text-white">
                      {item.title}
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-[#121212] mb-2">
                    {item.analogy}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          THE 4-STEP LOOP & EMERGENCY PANIC PROTOCOL
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212]">
        <div className="max-w-2xl mb-8">
          <span className="inline-block px-3 py-1 bg-[#D02020] text-white font-black uppercase text-xs tracking-widest border-2 border-black shadow-hard-sm mb-3">
            THE SIMPLE PROCESS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#121212]">
            THE 4-STEP VIBE LOOP
          </h2>
        </div>

        <WorkflowDiagram
          steps={masterLoop}
          title="HOW YOU WILL BUILD EVERYTHING TODAY"
        />

        <div className="mt-16">
          <EmergencyPanicProtocol />
        </div>
      </section>

      {/* =========================================================================
          THE 4 SEQUENTIAL PHASES (12 LESSONS)
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212]">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 bg-[#121212] text-white font-black uppercase text-xs tracking-widest border-2 border-black shadow-hard-sm mb-3">
            THE SEQUENTIAL CURRICULUM
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#121212]">
            4 LOGICAL PHASES &bull; 12 LESSONS
          </h2>
          <p className="text-base text-zinc-600 font-medium mt-2">
            Each lesson builds naturally on the previous one. Follow in order from Phase 1 to Phase 4.
          </p>
        </div>

        <div className="space-y-16">
          {phases.map((phase) => (
            <div key={phase.number} className="border-4 border-[#121212] bg-white shadow-hard-lg">
              {/* Phase Banner */}
              <div className={`p-6 border-b-4 border-[#121212] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${phase.color} text-white`}>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                    {phase.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium opacity-90">{phase.subtitle}</p>
                </div>
                <span className="text-xs font-mono font-bold uppercase px-3 py-1 bg-black/40 border border-white/20">
                  3 LESSONS
                </span>
              </div>

              {/* 3 Module Cards in this Phase */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {phase.modules.map((mod) => (
                  <Link
                    key={mod.id}
                    href={`/module/${mod.slug}`}
                    className="group block select-none"
                  >
                    <BauhausCard
                      headerTitle={`LESSON 0${mod.number}`}
                      headerColor={mod.accentColor}
                      badgeColor={mod.accentColor}
                      badgeShape={mod.number % 3 === 0 ? "triangle" : mod.number % 2 === 0 ? "circle" : "square"}
                      className="h-full flex flex-col justify-between group-hover:-translate-y-2 transition-transform p-6"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-bold uppercase text-zinc-500 mb-3">
                          <span className="px-2 py-0.5 bg-zinc-100 border border-black">
                            {mod.duration}
                          </span>
                          <span className="font-mono">{mod.slidesCount} SLIDES</span>
                        </div>

                        <h4 className="text-xl font-black uppercase tracking-tight text-[#121212] group-hover:text-[#D02020] transition-colors mb-2">
                          {mod.title}
                        </h4>

                        <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-4">
                          {mod.subtitle}
                        </p>

                        <div className="p-3 bg-zinc-100 border border-zinc-300 text-xs font-medium text-zinc-800 mb-4 line-clamp-2">
                          {mod.eli5Analogy}
                        </div>
                      </div>

                      <div className="pt-4 border-t-2 border-zinc-200 flex items-center justify-between text-xs font-black uppercase">
                        <span className="text-[#1040C0] group-hover:underline">OPEN LESSON</span>
                        <ArrowRight className="w-4 h-4 text-[#1040C0] group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </BauhausCard>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          THE VISUAL TEST SANDWICH SECTION
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212]">
        <VisualTestSandwich />
      </section>

      {/* =========================================================================
          DUAL-OS TERMINAL COCKPIT SECTION
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212]">
        <TerminalOsSwitcher />
      </section>

      {/* =========================================================================
          FINAL CTA SECTION: Spacious Yellow Banner
      ========================================================================= */}
      <section className="bg-[#F0C020] text-[#121212] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t-4 border-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 p-1.5 bg-white border-2 border-black shadow-hard-sm mb-8">
            <div className="w-3.5 h-3.5 rounded-full bg-[#D02020] border border-black" />
            <div className="w-3.5 h-3.5 rounded-none bg-[#1040C0] border border-black rotate-45" />
            <div className="w-3.5 h-3.5 clip-triangle bg-[#F0C020] border border-black" />
            <span className="text-xs font-black uppercase tracking-wider ml-1">
              ZERO CODING BARRIER
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-6 text-[#121212]">
            START LESSON 01 TODAY
          </h2>

          <p className="text-base sm:text-lg font-medium text-zinc-900 max-w-2xl mx-auto mb-10">
            Open your laptop, jump into Module 01, and see how fast you can turn English sentences into real working software.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <BauhausButton href="/module/1-revolution" variant="red" size="lg">
              <span>START LESSON 01</span>
              <ArrowRight className="w-5 h-5" />
            </BauhausButton>

            <BauhausButton href="/cheatsheet" variant="black" size="lg">
              <span>EXPLORE CHEATSHEET</span>
            </BauhausButton>
          </div>
        </div>
      </section>

    </div>
  );
}
