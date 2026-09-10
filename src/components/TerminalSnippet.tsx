"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal as TerminalIcon } from "lucide-react";
import { clsx } from "clsx";

interface TerminalSnippetProps {
  command: string;
  title?: string;
  shellType?: "bash" | "zsh" | "powershell" | "cmd";
  className?: string;
}

export const TerminalSnippet: React.FC<TerminalSnippetProps> = ({
  command,
  title = "TERMINAL",
  shellType = "zsh",
  className,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return (
    <div
      className={clsx(
        "relative bg-[#121212] text-white border-2 md:border-4 border-[#121212] shadow-hard-md rounded-none overflow-hidden my-4",
        className
      )}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-3 md:px-4 py-2 bg-[#1e1e1e] border-b-2 border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#D02020] border border-black" />
          <div className="w-3 h-3 rounded-full bg-[#F0C020] border border-black" />
          <div className="w-3 h-3 rounded-full bg-[#1040C0] border border-black" />
          <span className="ml-2 font-mono text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-[#F0C020]" />
            {title} ({shellType})
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-white text-[#121212] border-2 border-[#121212] rounded-none hover:bg-zinc-200 active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1.5 transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-600" />
              <span>COPIED!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#121212]" />
              <span>COPY</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Command Area */}
      <div className="p-4 overflow-x-auto font-mono text-xs md:text-sm text-zinc-200">
        <pre className="whitespace-pre-wrap leading-relaxed">
          <code>{command}</code>
        </pre>
      </div>
    </div>
  );
};
