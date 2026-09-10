"use client";

import React, { useState } from "react";
import { ShieldCheck, ShieldAlert, Eye, Lock, AlertTriangle } from "lucide-react";
import { clsx } from "clsx";

export const SecretSafetySimulator: React.FC = () => {
  const [selectedVar, setSelectedVar] = useState<string>("anon");

  const variables = [
    {
      id: "anon",
      name: "NEXT_PUBLIC_SUPABASE_ANON_KEY",
      value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      isPublic: true,
      safeForBrowser: true,
      status: "SAFE FOR BROWSER",
      color: "green",
      explanation: "Contains 'NEXT_PUBLIC_'. Next.js sends this to the user's browser. Safe because Supabase Row Level Security (RLS) protects the data."
    },
    {
      id: "service",
      name: "SUPABASE_SERVICE_ROLE_KEY",
      value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9_ADMIN_SECRET",
      isPublic: false,
      safeForBrowser: false,
      status: "CRITICAL DANGER IF EXPOSED",
      color: "red",
      explanation: "ADMIN MASTER KEY! Bypasses all security rules. Never put this in a client component or add 'NEXT_PUBLIC_'. Keep it on the server only!"
    },
    {
      id: "openai",
      name: "OPENAI_API_KEY / ANTHROPIC_API_KEY",
      value: "sk-proj-98218491024810294812",
      isPublic: false,
      safeForBrowser: false,
      status: "SERVER ONLY - NEVER SHARE",
      color: "red",
      explanation: "Your credit card is billed for this. If you leak this key, bots crawl GitHub and can rack up thousands of dollars in minutes."
    }
  ];

  const current = variables.find((v) => v.id === selectedVar) || variables[0];

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-8 sm:p-12 my-10">
      
      {/* Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-8 mb-8">
        <span className="inline-block px-3 py-1 bg-[#D02020] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
          SECURITY SHIELD
        </span>
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          PREVENTING API KEY LEAKS (NEXT_PUBLIC_)
        </h3>
        <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-2xl">
          The #1 beginner security mistake: putting admin keys into client components. Learn the simple rule that protects you from hacking and surprise bills.
        </p>
      </div>

      {/* Variable Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {variables.map((v) => (
          <button
            key={v.id}
            onClick={() => setSelectedVar(v.id)}
            className={clsx(
              "p-5 text-left border-2 md:border-4 border-[#121212] transition-all btn-tactile select-none",
              selectedVar === v.id
                ? "bg-[#121212] text-white shadow-hard-md -translate-y-1"
                : "bg-zinc-50 text-[#121212] hover:bg-white shadow-hard-sm"
            )}
          >
            <div className="flex items-center justify-between mb-2">
              {v.safeForBrowser ? (
                <Eye className="w-5 h-5 text-green-400" />
              ) : (
                <Lock className="w-5 h-5 text-[#D02020]" />
              )}
              <span
                className={clsx(
                  "text-[10px] font-black uppercase px-2 py-0.5",
                  v.safeForBrowser ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900"
                )}
              >
                {v.safeForBrowser ? "PUBLIC" : "SECRET"}
              </span>
            </div>
            <div className="font-mono text-xs font-bold break-all">
              {v.name}
            </div>
          </button>
        ))}
      </div>

      {/* Inspection Card */}
      <div
        className={clsx(
          "p-8 border-2 md:border-4 border-black mb-8 shadow-hard-sm",
          current.safeForBrowser ? "bg-green-50" : "bg-red-50"
        )}
      >
        <div className="flex items-center gap-2 mb-3">
          {current.safeForBrowser ? (
            <ShieldCheck className="w-6 h-6 text-green-700" />
          ) : (
            <AlertTriangle className="w-6 h-6 text-[#D02020]" />
          )}
          <span
            className={clsx(
              "text-xs sm:text-sm font-black uppercase tracking-wider",
              current.safeForBrowser ? "text-green-900" : "text-[#D02020]"
            )}
          >
            {current.status}
          </span>
        </div>

        <div className="p-4 bg-[#121212] text-white font-mono text-xs mb-4 border-2 border-black overflow-x-auto">
          <code>
            <span className="text-[#F0C020]">{current.name}</span> = &quot;{current.value}&quot;
          </code>
        </div>

        <p className="text-xs sm:text-sm font-medium text-zinc-800 leading-relaxed">
          {current.explanation}
        </p>
      </div>

      {/* The 1 Golden Rule */}
      <div className="p-6 bg-[#121212] text-white border-2 md:border-4 border-black">
        <span className="text-xs font-black uppercase tracking-widest text-[#F0C020] block mb-2">
          THE GOLDEN SECURITY RULE:
        </span>
        <p className="text-sm font-medium text-zinc-200 leading-relaxed">
          If a key does <strong>NOT</strong> have <code className="bg-white/20 px-1 font-mono text-white">NEXT_PUBLIC_</code> in its name, NEVER import it into a component with <code className="bg-white/20 px-1 font-mono text-white">&apos;use client&apos;</code>. Keep it inside Server Actions or API routes only!
        </p>
      </div>

    </div>
  );
};
