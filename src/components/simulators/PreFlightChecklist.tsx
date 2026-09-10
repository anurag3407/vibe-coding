"use client";

import React, { useState } from "react";
import { CheckSquare, Square, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { clsx } from "clsx";

export const PreFlightChecklist: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Install Node.js (v20+)", desc: "Lets your computer run web applications locally.", checked: false },
    { id: 2, title: "Install VS Code or Cursor", desc: "Your code editor cockpit.", checked: false },
    { id: 3, title: "Create Free GitHub Account", desc: "Where your game save points live in the cloud.", checked: false },
    { id: 4, title: "Create Free Supabase Account", desc: "Your free cloud PostgreSQL database and login system.", checked: false },
    { id: 5, title: "Create Free Vercel Account", desc: "Deploy your website to the public internet in 1 click.", checked: false },
    { id: 6, title: "Set $10 Monthly API Spend Limit", desc: "Lock your Anthropic/OpenAI budget to stay 100% safe.", checked: false },
  ]);

  const toggleItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const completedCount = items.filter((i) => i.checked).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-8 sm:p-12 my-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b-2 md:border-b-4 border-[#121212] pb-8 mb-8">
        <div>
          <span className="inline-block px-3 py-1 bg-[#F0C020] text-[#121212] font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
            24 HOURS BEFORE WORKSHOP
          </span>
          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
            PRE-FLIGHT CHECKLIST
          </h3>
          <p className="text-xs sm:text-base text-zinc-600 font-medium mt-1">
            Complete these 6 simple steps ahead of time so you spend 100% of the workshop building instead of waiting for passwords.
          </p>
        </div>

        {/* Progress Badge */}
        <div className="flex items-center gap-3 p-3 bg-zinc-100 border-2 md:border-4 border-black shadow-hard-sm">
          <div className="text-right">
            <span className="text-[10px] font-black uppercase text-zinc-500 block">READY STATUS</span>
            <span className="text-xl sm:text-2xl font-black uppercase text-[#1040C0]">
              {completedCount} / {items.length} COMPLETE
            </span>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-[#F0C020] font-black text-xs">
            {progressPercent}%
          </div>
        </div>
      </div>

      {/* Checklist Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={clsx(
              "p-5 border-2 md:border-4 border-[#121212] cursor-pointer transition-all duration-150 select-none flex items-start gap-4 btn-tactile",
              item.checked
                ? "bg-green-50 border-green-800 shadow-hard-sm"
                : "bg-zinc-50 hover:bg-white shadow-hard-sm"
            )}
          >
            <button className="mt-0.5 text-zinc-700">
              {item.checked ? (
                <CheckSquare className="w-6 h-6 text-green-700" />
              ) : (
                <Square className="w-6 h-6 text-zinc-400" />
              )}
            </button>
            <div>
              <h4
                className={clsx(
                  "font-black uppercase text-sm sm:text-base",
                  item.checked ? "text-green-900 line-through" : "text-[#121212]"
                )}
              >
                {item.title}
              </h4>
              <p className="text-xs text-zinc-600 font-medium mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Completion Banner */}
      {progressPercent === 100 ? (
        <div className="p-6 bg-[#F0C020] text-[#121212] border-2 md:border-4 border-black text-center font-black uppercase tracking-tight flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-[#D02020]" />
          <span>YOU ARE 100% PREPARED TO CRUSH THE VIBE CODING WORKSHOP!</span>
          <Sparkles className="w-5 h-5 text-[#D02020]" />
        </div>
      ) : (
        <div className="p-4 bg-zinc-100 border-2 border-black text-xs font-bold text-zinc-600 flex items-center justify-between">
          <span>Click each item once you have created the free account on your laptop.</span>
          <span className="font-mono text-zinc-400">{items.length - completedCount} remaining</span>
        </div>
      )}

    </div>
  );
};
