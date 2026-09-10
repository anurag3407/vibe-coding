"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { clsx } from "clsx";

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  tag: string;
}

interface WorkflowDiagramProps {
  steps: WorkflowStep[];
  title?: string;
  className?: string;
}

export const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({
  steps,
  title = "STEP-BY-STEP PROCESS",
  className,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepColors = ["#D02020", "#1040C0", "#F0C020", "#121212"];

  return (
    <div
      className={clsx(
        "bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-6 sm:p-10 my-8",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 md:border-b-4 border-[#121212] pb-6 mb-8">
        <div>
          <span className="inline-block px-3 py-1 bg-[#F0C020] text-[#121212] font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-2">
            VISUAL PROCESS
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#121212]">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={clsx(
                "w-9 h-9 rounded-none border-2 border-[#121212] font-black text-xs transition-all btn-tactile",
                activeStep === idx
                  ? "bg-[#D02020] text-white shadow-hard-sm scale-105"
                  : "bg-white text-black hover:bg-zinc-100"
              )}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {steps.map((item, idx) => {
          const isActive = activeStep === idx;
          const bgCol = stepColors[idx % stepColors.length];

          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={clsx(
                "relative p-6 border-2 md:border-4 border-[#121212] cursor-pointer transition-all duration-150 select-none",
                isActive
                  ? "bg-[#121212] text-white shadow-hard-md -translate-y-1"
                  : "bg-zinc-50 text-[#121212] hover:bg-white shadow-hard-sm"
              )}
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <span
                  style={{
                    backgroundColor: isActive ? "#FFFFFF" : bgCol,
                    color: isActive ? "#121212" : "#FFFFFF",
                  }}
                  className="px-3 py-1 text-xs font-black rounded-none border border-black"
                >
                  STEP {item.step}
                </span>
                <span
                  className={clsx(
                    "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border border-current",
                    isActive ? "text-[#F0C020]" : "text-zinc-500"
                  )}
                >
                  {item.tag}
                </span>
              </div>

              <h4
                className={clsx(
                  "font-black uppercase text-lg sm:text-xl mb-2 tracking-tight",
                  isActive ? "text-[#F0C020]" : "text-[#121212]"
                )}
              >
                {item.title}
              </h4>
              <p
                className={clsx(
                  "text-xs sm:text-sm leading-relaxed",
                  isActive ? "text-zinc-300" : "text-zinc-600"
                )}
              >
                {item.description}
              </p>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-7 h-7 rounded-full bg-[#F0C020] border-2 border-black flex items-center justify-center shadow-hard-sm">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Inspection for Current Active Step */}
      <div className="p-6 sm:p-8 bg-zinc-100 border-2 md:border-4 border-[#121212] shadow-hard-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#D02020] border border-black" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-600">
                ACTIVE PHASE: STEP {steps[activeStep].step} — {steps[activeStep].tag}
              </span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#121212]">
              {steps[activeStep].title}
            </h4>
            <p className="text-base text-zinc-700 font-medium mt-2 max-w-3xl">
              {steps[activeStep].description}
            </p>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="px-4 py-2 text-xs font-black uppercase border-2 border-black bg-white hover:bg-zinc-200 btn-tactile shadow-hard-sm"
            >
              PREV
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="px-6 py-2 text-xs font-black uppercase border-2 border-black bg-[#1040C0] text-white hover:bg-[#1040C0]/90 btn-tactile shadow-hard-sm"
            >
              NEXT STEP &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
