"use client";

import React, { useState } from "react";
import { Database, FolderTree, GitBranch, Globe, ArrowRight, Zap, Check, Usb } from "lucide-react";
import { clsx } from "clsx";

export const McpUsbHub: React.FC = () => {
  const [selectedServer, setSelectedServer] = useState<string>("postgres");

  const servers = [
    {
      id: "postgres",
      name: "Database (Postgres)",
      icon: Database,
      color: "#1040C0",
      description: "Lets AI see your real database tables so it never invents fake column names.",
      simpleExplanation: "AI checks your actual user list and orders before writing code.",
      examplePrompt: "Show me the 5 most active users who joined this week.",
      output: `[
  { "name": "Sarah Chen", "plan": "Pro", "created_at": "2026-09-08" },
  { "name": "Marcus Vance", "plan": "Pro", "created_at": "2026-09-09" }
]`
    },
    {
      id: "filesystem",
      name: "Your Files (Filesystem)",
      icon: FolderTree,
      color: "#D02020",
      description: "Lets AI safely read and create files in your project folder.",
      simpleExplanation: "AI navigates your folders just like clicking in Finder or File Explorer.",
      examplePrompt: "Find all unused image icons in my project and delete them.",
      output: `Found 3 unused icons in /public. Deleted safely without touching other files.`
    },
    {
      id: "github",
      name: "GitHub Sync",
      icon: GitBranch,
      color: "#121212",
      description: "Lets AI check your issues, review code, and open pull requests.",
      simpleExplanation: "AI acts as a junior developer who reviews and uploads your updates.",
      examplePrompt: "Check Issue #12 on GitHub and fix the login button styling.",
      output: `Pull Request #13 opened on GitHub with the verified fix.`
    },
    {
      id: "puppeteer",
      name: "Web Browser",
      icon: Globe,
      color: "#F0C020",
      description: "Lets AI search Google and read live documentation pages.",
      simpleExplanation: "Gives AI a real Google Chrome browser to read the latest updates.",
      examplePrompt: "Look up the newest Next.js 15 documentation for Server Actions.",
      output: `Read official documentation. Provided 2026 syntax with zero errors.`
    }
  ];

  const current = servers.find((s) => s.id === selectedServer) || servers[0];
  const Icon = current.icon;

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-8 sm:p-12 my-10">
      
      {/* Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-8 mb-8">
        <span className="inline-block px-3 py-1 bg-[#1040C0] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
          UNIVERSAL AI CONNECTOR
        </span>
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          MODEL CONTEXT PROTOCOL (MCP)
        </h3>
        <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-2xl">
          Think of MCP like a <strong>USB-C cable for AI</strong>. Instead of just chatting, MCP lets Claude and Antigravity plug into real tools like databases, files, and browsers.
        </p>
      </div>

      {/* USB Plug Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {servers.map((srv) => {
          const ServerIcon = srv.icon;
          const isSelected = srv.id === selectedServer;

          return (
            <button
              key={srv.id}
              onClick={() => setSelectedServer(srv.id)}
              className={clsx(
                "p-6 text-left border-2 md:border-4 border-[#121212] transition-all btn-tactile select-none",
                isSelected
                  ? "bg-[#121212] text-white shadow-hard-md -translate-y-1"
                  : "bg-zinc-50 text-[#121212] hover:bg-white shadow-hard-sm"
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <ServerIcon
                  className={clsx("w-7 h-7", isSelected ? "text-[#F0C020]" : "text-[#121212]")}
                />
                <span className="w-3 h-3 rounded-full border border-black bg-[#F0C020]" />
              </div>
              <div className="font-black uppercase text-sm sm:text-base tracking-tight mb-1">
                {srv.name}
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                Click to inspect
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Panel */}
      <div className="border-2 md:border-4 border-[#121212] bg-zinc-50 p-8 shadow-hard-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b-2 border-zinc-300 pb-6 mb-6">
          <div>
            <span className="text-xs font-black uppercase px-2.5 py-1 bg-[#121212] text-white rounded-none">
              CONNECTED TOOL
            </span>
            <h4 className="text-2xl font-black uppercase tracking-tight text-[#121212] mt-2">
              {current.name}
            </h4>
            <p className="text-sm text-zinc-700 font-medium mt-1">{current.simpleExplanation}</p>
          </div>
        </div>

        {/* Live Example */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border-2 border-black">
            <span className="text-xs font-black uppercase text-[#1040C0] block mb-2">
              WHAT YOU SAY TO AI:
            </span>
            <p className="text-sm font-bold text-zinc-800">
              &quot;{current.examplePrompt}&quot;
            </p>
          </div>

          <div className="p-6 bg-[#121212] text-white border-2 border-black font-mono text-xs overflow-x-auto">
            <span className="text-[10px] font-black uppercase text-[#F0C020] block mb-2">
              WHAT AI ACTUALLY RETURNS:
            </span>
            <pre className="text-zinc-200 whitespace-pre-wrap">{current.output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};
