"use client";

import React, { useState } from "react";
import { TerminalSnippet } from "../TerminalSnippet";
import { 
  CheckCircle2, 
  Play, 
  Bug, 
  ShieldCheck, 
  Layers, 
  Code, 
  MousePointer, 
  RefreshCw,
  Sparkles,
  Terminal,
  Cpu
} from "lucide-react";
import { clsx } from "clsx";

interface TestStep {
  id: number;
  title: string;
  code: string;
  status: "idle" | "running" | "passed" | "failed";
  duration?: string;
}

export const TestingMasterclassSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"pyramid" | "playwright" | "prompts">("playwright");
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [testStats, setTestStats] = useState({ passed: 0, total: 5, time: "0ms" });

  const testSteps: TestStep[] = [
    {
      id: 1,
      title: "Launch Chromium Browser & Open Page",
      code: "await page.goto('http://localhost:3000/signup')",
      status: currentStepIndex > 0 ? "passed" : currentStepIndex === 0 ? "running" : "idle",
      duration: "112ms"
    },
    {
      id: 2,
      title: "Type Email into Input Field",
      code: "await page.fill('input[type=email]', 'vibe_builder@test.com')",
      status: currentStepIndex > 1 ? "passed" : currentStepIndex === 1 ? "running" : "idle",
      duration: "45ms"
    },
    {
      id: 3,
      title: "Type Secure Password",
      code: "await page.fill('input[type=password]', 'SecretP@ssword2026!')",
      status: currentStepIndex > 2 ? "passed" : currentStepIndex === 2 ? "running" : "idle",
      duration: "38ms"
    },
    {
      id: 4,
      title: "Click Submit Button",
      code: "await page.click('button[type=submit]')",
      status: currentStepIndex > 3 ? "passed" : currentStepIndex === 3 ? "running" : "idle",
      duration: "89ms"
    },
    {
      id: 5,
      title: "Assert User Reached Dashboard",
      code: "expect(page.locator('h1')).toHaveText('Welcome to Dashboard')",
      status: currentStepIndex > 4 ? "passed" : currentStepIndex === 4 ? "running" : "idle",
      duration: "32ms"
    }
  ];

  const runPlaywrightSuite = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);
    setTestStats({ passed: 0, total: 5, time: "0ms" });

    const stepInterval = 700;
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        setCurrentStepIndex(i);
        setTestStats({ passed: i, total: 5, time: `${i * 63}ms` });
        if (i === 5) {
          setIsRunning(false);
        }
      }, i * stepInterval);
    }
  };

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-6 sm:p-10 my-10">
      
      {/* Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="inline-block px-3 py-1 bg-[#D02020] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm">
            QUALITY ASSURANCE &amp; VERIFICATION
          </span>
          <span className="text-xs font-mono font-bold text-zinc-500 uppercase">
            UNIT &bull; INTEGRATION &bull; E2E PLAYWRIGHT
          </span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          THE COMPLETE TESTING MASTERCLASS
        </h3>
        <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-3xl leading-relaxed">
          Stop worrying if your code breaks when you ship. Understand the 4 types of tests, run real automated browser tests with Playwright, and let AI write the test suites for you.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {[
          { id: "playwright", label: "1. Playwright E2E Runner", sub: "Live Browser Simulator" },
          { id: "pyramid", label: "2. The 4 Types of Testing", sub: "Unit vs Integration vs E2E" },
          { id: "prompts", label: "3. AI Test Generator", sub: "Copy-Paste Prompts" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={clsx(
              "p-4 text-left border-2 md:border-4 border-[#121212] transition-all btn-tactile select-none",
              activeTab === tab.id
                ? "bg-[#121212] text-white shadow-hard-md -translate-y-1"
                : "bg-zinc-50 text-[#121212] hover:bg-white shadow-hard-sm"
            )}
          >
            <div className="text-xs sm:text-sm font-black uppercase tracking-tight">{tab.label}</div>
            <div className="text-[11px] font-bold text-zinc-400 normal-case mt-0.5">{tab.sub}</div>
          </button>
        ))}
      </div>

      {/* =========================================================================
          TAB 1: PLAYWRIGHT E2E RUNNER SIMULATION
      ========================================================================= */}
      {activeTab === "playwright" && (
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212]">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <span className="px-2.5 py-1 bg-[#1040C0] text-white text-xs font-black uppercase inline-block mb-2">
                  WHAT IS END-TO-END (E2E) TESTING?
                </span>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212]">
                  A ROBOT USER CLICKING THROUGH YOUR REAL WEBSITE
                </h4>
              </div>

              <button
                onClick={runPlaywrightSuite}
                disabled={isRunning}
                className="px-6 py-3 bg-[#D02020] text-white border-2 md:border-4 border-black font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 disabled:opacity-50 btn-tactile flex items-center gap-2 shadow-hard-sm"
              >
                <Play className={clsx("w-4 h-4", isRunning && "animate-spin")} />
                <span>{isRunning ? "RUNNING TESTS..." : "RUN PLAYWRIGHT SUITE"}</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed mb-6">
              With tools like <strong>Playwright</strong>, you don&apos;t have to manually click your buttons 100 times after every change. A headless browser opens your app, types real text into forms, clicks buttons, and checks if the dashboard loads.
            </p>

            {/* Test Execution Window */}
            <div className="bg-[#121212] text-white border-2 md:border-4 border-black p-6">
              <div className="flex items-center justify-between border-b border-zinc-700 pb-3 mb-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-zinc-400 ml-2">tests/auth.spec.ts &bull; Playwright Test Engine</span>
                </div>
                <div className="text-[#F0C020] font-bold">
                  {testStats.passed} / {testStats.total} PASSED ({testStats.time})
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {testSteps.map((step, idx) => (
                  <div
                    key={step.id}
                    className={clsx(
                      "p-3 border transition-all flex items-start justify-between gap-4",
                      step.status === "passed"
                        ? "bg-green-950/40 border-green-500 text-green-200"
                        : step.status === "running"
                        ? "bg-blue-950/50 border-blue-400 text-blue-200 animate-pulse"
                        : "bg-black/40 border-zinc-800 text-zinc-500"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {step.status === "passed" ? (
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      ) : step.status === "running" ? (
                        <RefreshCw className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5 animate-spin" />
                      ) : (
                        <div className="w-4 h-4 border border-zinc-700 rounded-none flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="font-bold text-white uppercase text-[11px] mb-0.5">
                          Step {idx + 1}: {step.title}
                        </div>
                        <code className="text-[11px] text-zinc-300">{step.code}</code>
                      </div>
                    </div>

                    {step.duration && step.status === "passed" && (
                      <span className="text-[10px] text-green-400 font-bold self-center">
                        {step.duration}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {testStats.passed === 5 && !isRunning && (
                <div className="mt-4 p-3 bg-green-900/60 border border-green-500 text-green-300 text-xs font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <span>ALL 5 ASSERTIONS PASSED! SIGNUP &amp; AUTH FLOW IS 100% HEALTHY.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: THE 4 TYPES OF TESTING
      ========================================================================= */}
      {activeTab === "pyramid" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Unit Tests */}
            <div className="p-6 bg-white border-2 md:border-4 border-[#121212] shadow-hard-md">
              <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-[#D02020] text-white inline-block mb-2">
                LEVEL 1 &bull; FASTEST (1 MILLISECOND)
              </span>
              <h4 className="text-lg sm:text-xl font-black uppercase text-[#121212] mb-2">
                1. UNIT TESTING (VITEST / JEST)
              </h4>
              <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-4">
                <strong>Analogy:</strong> Testing if a single Lego brick is cracked before building the castle. Tests pure calculations like tax math, password strength, or date formatting.
              </p>
              <div className="p-3 bg-zinc-100 border border-black font-mono text-[11px]">
                test(&apos;tax calculation&apos;, () =&gt; &#123;<br />
                &nbsp;&nbsp;expect(calculateTotal(100, 0.1)).toBe(110);<br />
                &#125;);
              </div>
            </div>

            {/* Integration Tests */}
            <div className="p-6 bg-white border-2 md:border-4 border-[#121212] shadow-hard-md">
              <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-[#1040C0] text-white inline-block mb-2">
                LEVEL 2 &bull; COMPONENT WIRING
              </span>
              <h4 className="text-lg sm:text-xl font-black uppercase text-[#121212] mb-2">
                2. INTEGRATION TESTING (REACT TESTING LIB)
              </h4>
              <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-4">
                <strong>Analogy:</strong> Checking if two Lego bricks snap together tightly. Tests if your React button actually renders the error message when an invalid email is typed.
              </p>
              <div className="p-3 bg-zinc-100 border border-black font-mono text-[11px]">
                render(&lt;LoginForm /&gt;);<br />
                fireEvent.click(screen.getByText(&apos;Submit&apos;));<br />
                expect(screen.getByText(&apos;Email required&apos;)).toBeVisible();
              </div>
            </div>

            {/* End to End */}
            <div className="p-6 bg-white border-2 md:border-4 border-[#121212] shadow-hard-md">
              <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-[#F0C020] text-[#121212] font-black inline-block mb-2">
                LEVEL 3 &bull; REAL BROWSER SIMULATION
              </span>
              <h4 className="text-lg sm:text-xl font-black uppercase text-[#121212] mb-2">
                3. END-TO-END (PLAYWRIGHT / CYPRESS)
              </h4>
              <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-4">
                <strong>Analogy:</strong> A test driver taking the whole car around the racetrack. Simulates the user opening Chrome, paying with Stripe, and receiving the confirmation email.
              </p>
              <div className="p-3 bg-zinc-100 border border-black font-mono text-[11px]">
                npx playwright test<br />
                # Runs automated tests across Chrome, Safari &amp; Firefox
              </div>
            </div>

            {/* Visual Smoke Testing */}
            <div className="p-6 bg-white border-2 md:border-4 border-[#121212] shadow-hard-md">
              <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-[#121212] text-white inline-block mb-2">
                LEVEL 4 &bull; ZERO CODE REQUIRED
              </span>
              <h4 className="text-lg sm:text-xl font-black uppercase text-[#121212] mb-2">
                4. THE 3-POINT VISUAL TEST SANDWICH
              </h4>
              <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-4">
                <strong>Analogy:</strong> Tasting the soup before serving. You do this manually in 30 seconds: 1. Click the button. 2. Look at F12 Console for red errors. 3. Check database row.
              </p>
              <div className="p-3 bg-zinc-100 border border-black font-mono text-[11px]">
                1. Click UI &rarr; 2. Check F12 &rarr; 3. Check DB table
              </div>
            </div>

          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: AI TEST PROMPTS
      ========================================================================= */}
      {activeTab === "prompts" && (
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212]">
            <span className="px-2.5 py-1 bg-[#121212] text-white text-xs font-black uppercase inline-block mb-3">
              COPY-PASTE READY INTO CLAUDE CODE OR ANTIGRAVITY
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] mb-2">
              LET AI WRITE YOUR PLAYWRIGHT TEST SUITE IN 10 SECONDS
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium mb-4">
              Never write test boilerplate by hand. Give this prompt to your AI agent:
            </p>

            <TerminalSnippet
              command={`# Generate Playwright E2E Tests for any page
claude "Read @src/app/checkout/page.tsx. Set up Playwright if not installed. Write an end-to-end test in /tests/checkout.spec.ts that simulates:
1. Adding an item to the cart
2. Entering test credit card credentials
3. Clicking 'Pay Now'
4. Verifying that the confirmation receipt renders with the correct total amount.
Include step-by-step comments and run the test with 'npx playwright test'."`}
              title="PLAYWRIGHT AI GENERATION PROMPT"
              shellType="zsh"
            />
          </div>
        </div>
      )}

    </div>
  );
};
