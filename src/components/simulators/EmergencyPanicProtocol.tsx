"use client";

import React, { useState } from "react";
import { AlertOctagon, RefreshCw, CheckCircle2, ShieldAlert, Sparkles, Terminal } from "lucide-react";
import { clsx } from "clsx";

export const EmergencyPanicProtocol: React.FC = () => {
  const [panicState, setPanicState] = useState<"looping" | "panic" | "restored">("looping");

  const handleTriggerPanic = () => {
    setPanicState("panic");
    setTimeout(() => {
      setPanicState("restored");
    }, 1200);
  };

  const handleResetDemo = () => {
    setPanicState("looping");
  };

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-8 sm:p-12 my-10">
      
      {/* Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-8 mb-8">
        <span className="inline-block px-3 py-1 bg-[#D02020] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
          CRITICAL SAFETY SKILL
        </span>
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          THE AGENT PANIC PROTOCOL
        </h3>
        <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-2xl">
          What do you do when an AI gets stuck in an infinite loop, hallucinates weird code, or breaks a file that was working 5 minutes ago?
        </p>
      </div>

      {/* Simulator Panel */}
      <div className="border-2 md:border-4 border-[#121212] p-6 sm:p-8 bg-zinc-50 shadow-hard-md mb-8">
        
        {panicState === "looping" && (
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase text-[#D02020] mb-3">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
              <span>SITUATION: AI IS RE-WRITING FILES CRAZY & LOOPING ERRORS</span>
            </div>

            <div className="p-4 bg-[#121212] text-red-400 font-mono text-xs mb-6 border-2 border-black overflow-x-auto leading-relaxed">
              <code>
                [AI Agent]: Patching file src/app/page.tsx (Attempt #4)...<br />
                [Error]: SyntaxError: Unexpected token &apos;export&apos;<br />
                [AI Agent]: Trying alternative patch... deleting 40 lines...<br />
                [Warning]: Spent $4.20 in 90 seconds. Looping endlessly...
              </code>
            </div>

            <button
              onClick={handleTriggerPanic}
              className="w-full sm:w-auto px-8 py-4 bg-[#D02020] text-white font-black uppercase tracking-wider text-sm sm:text-base border-2 md:border-4 border-black shadow-hard-lg btn-tactile hover:bg-[#D02020]/90 flex items-center justify-center gap-3 animate-bounce"
            >
              <AlertOctagon className="w-6 h-6" />
              <span>PULL THE EMERGENCY PANIC BRAKE!</span>
            </button>
          </div>
        )}

        {panicState === "panic" && (
          <div className="py-8 text-center">
            <RefreshCw className="w-10 h-10 mx-auto text-[#1040C0] animate-spin mb-3" />
            <div className="text-lg font-black uppercase text-[#121212]">
              KILLING RUNAWAY PROCESS & RESTORING LAST SAVE POINT...
            </div>
            <p className="text-xs font-mono text-zinc-500 mt-1">
              Executing: Ctrl + C &bull; git checkout .
            </p>
          </div>
        )}

        {panicState === "restored" && (
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase text-green-700 mb-3">
              <CheckCircle2 className="w-5 h-5" />
              <span>SAVED! REPOSITORY RESTORED TO PERFECT WORKING STATE</span>
            </div>

            <div className="p-4 bg-green-100 border-2 border-green-800 text-green-900 font-mono text-xs mb-6 leading-relaxed">
              <code>
                ✓ Runaway AI agent halted (Ctrl + C)<br />
                ✓ All broken edits discarded (git checkout .)<br />
                ✓ Your working project is safe and untouched!
              </code>
            </div>

            <button
              onClick={handleResetDemo}
              className="px-6 py-2.5 bg-white text-black font-black uppercase text-xs border-2 border-black btn-tactile"
            >
              RESET SIMULATION DEMO
            </button>
          </div>
        )}

      </div>

      {/* The 3 Golden Rules */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 bg-white border-2 border-[#121212] shadow-hard-sm">
          <div className="text-xs font-black uppercase text-[#D02020] mb-2">RULE #1</div>
          <h4 className="text-lg font-black uppercase tracking-tight text-[#121212] mb-1">
            PRESS CTRL + C
          </h4>
          <p className="text-xs text-zinc-600 font-medium leading-relaxed">
            Never wait for an agent that is repeating errors. Press Ctrl + C in your terminal to freeze it instantly.
          </p>
        </div>

        <div className="p-6 bg-white border-2 border-[#121212] shadow-hard-sm">
          <div className="text-xs font-black uppercase text-[#1040C0] mb-2">RULE #2</div>
          <h4 className="text-lg font-black uppercase tracking-tight text-[#121212] mb-1">
            GIT CHECKOUT .
          </h4>
          <p className="text-xs text-zinc-600 font-medium leading-relaxed">
            Type <code className="bg-zinc-100 px-1 border border-black font-mono">git checkout .</code> to immediately erase whatever messy lines the AI just wrote.
          </p>
        </div>

        <div className="p-6 bg-white border-2 border-[#121212] shadow-hard-sm">
          <div className="text-xs font-black uppercase text-[#F0C020] mb-2">RULE #3</div>
          <h4 className="text-lg font-black uppercase tracking-tight text-[#121212] mb-1">
            THE 3-STRIKES RULE
          </h4>
          <p className="text-xs text-zinc-600 font-medium leading-relaxed">
            If the AI fails to fix a bug twice in a row, do NOT ask a 3rd time. Wipe the chat, refresh the context, and re-explain.
          </p>
        </div>
      </div>

    </div>
  );
};
