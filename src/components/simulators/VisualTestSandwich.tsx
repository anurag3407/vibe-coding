"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Play, Sparkles, AlertCircle } from "lucide-react";
import { clsx } from "clsx";

export const VisualTestSandwich: React.FC = () => {
  const [testState, setTestState] = useState<"idle" | "running" | "passed">("idle");

  const runTest = () => {
    setTestState("running");
    setTimeout(() => {
      setTestState("passed");
    }, 1200);
  };

  const resetTest = () => {
    setTestState("idle");
  };

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-8 sm:p-12 my-10">
      
      {/* Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-8 mb-8">
        <span className="inline-block px-3 py-1 bg-[#1040C0] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
          TESTING FOR NON-DEVELOPERS
        </span>
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          THE 3-POINT VISUAL TEST SANDWICH
        </h3>
        <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-2xl">
          You don&apos;t need to write complicated test code to verify your app. Just check these 3 visual checkpoints before shipping:
        </p>
      </div>

      {/* The 3 Slices of the Sandwich */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Slice 1 */}
        <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212] shadow-hard-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 bg-[#D02020] text-white font-black text-xs uppercase">
                CHECK 1
              </span>
              <span className="text-xs font-mono font-bold text-zinc-400">UI</span>
            </div>
            <h4 className="text-xl font-black uppercase tracking-tight text-[#121212] mb-2">
              THE CLICK TEST
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
              Click the button on your screen. Does the modal open? Does the loading spinner spin? Does the form submit?
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-bold text-green-700 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Interactive Response Verified</span>
          </div>
        </div>

        {/* Slice 2 */}
        <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212] shadow-hard-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 bg-[#1040C0] text-white font-black text-xs uppercase">
                CHECK 2
              </span>
              <span className="text-xs font-mono font-bold text-zinc-400">CONSOLE</span>
            </div>
            <h4 className="text-xl font-black uppercase tracking-tight text-[#121212] mb-2">
              THE RED TEXT TEST
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
              Press F12 in Chrome $\rightarrow$ click &quot;Console&quot;. Is there any angry red text? If zero red lines exist, your code is happy!
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-bold text-green-700 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Zero Console Errors</span>
          </div>
        </div>

        {/* Slice 3 */}
        <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212] shadow-hard-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 bg-[#F0C020] text-[#121212] font-black text-xs uppercase">
                CHECK 3
              </span>
              <span className="text-xs font-mono font-bold text-zinc-400">DATABASE</span>
            </div>
            <h4 className="text-xl font-black uppercase tracking-tight text-[#121212] mb-2">
              THE DATA TEST
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
              Open your Supabase table in your browser. Did a new row appear with the correct email or order info?
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-bold text-green-700 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Database Row Confirmed</span>
          </div>
        </div>

      </div>

      {/* Interactive Verification Runner */}
      <div className="p-6 sm:p-8 bg-zinc-100 border-2 md:border-4 border-black text-center">
        {testState === "idle" && (
          <div>
            <h4 className="text-lg font-black uppercase mb-2">
              READY TO TEST YOUR APP IN 3 SECONDS?
            </h4>
            <p className="text-xs text-zinc-600 mb-6 font-medium">
              Click the button below to simulate running the 3-Point Visual Test Sandwich:
            </p>
            <button
              onClick={runTest}
              className="px-6 py-3 bg-[#1040C0] text-white font-black uppercase text-xs sm:text-sm tracking-wider border-2 border-black shadow-hard-sm btn-tactile hover:bg-[#1040C0]/90 flex items-center gap-2 mx-auto"
            >
              <Play className="w-4 h-4" />
              <span>RUN 3-POINT VISUAL TEST</span>
            </button>
          </div>
        )}

        {testState === "running" && (
          <div className="py-4 font-mono text-sm font-bold text-[#1040C0] animate-pulse">
            Checking UI click... Inspecting DevTools console... Verifying Supabase row...
          </div>
        )}

        {testState === "passed" && (
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-200 text-green-900 border-2 border-black font-black uppercase text-xs sm:text-sm mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-700" />
              <span>ALL 3 CHECKS PASSED: READY TO SHIP TO PRODUCTION!</span>
            </div>
            <div>
              <button
                onClick={resetTest}
                className="px-4 py-1.5 bg-white text-black font-bold uppercase text-xs border border-black"
              >
                Test Again
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
