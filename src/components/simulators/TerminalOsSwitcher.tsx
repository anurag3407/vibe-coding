"use client";

import React, { useState } from "react";
import { TerminalSnippet } from "../TerminalSnippet";
import { Check, Apple, Laptop, ShieldCheck, Terminal as TerminalIcon, Sparkles } from "lucide-react";
import { clsx } from "clsx";

export const TerminalOsSwitcher: React.FC = () => {
  const [activeOS, setActiveOS] = useState<"mac" | "windows">("mac");
  const [activeTool, setActiveTool] = useState<"prereq" | "antigravity" | "claude" | "codex">("prereq");

  const macCommands = {
    prereq: `# 1. Install Homebrew (The Mac App Store for Devs)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 2. Add Homebrew to your PATH
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

# 3. Install Git, Node.js v20+, and Python 3.12 in one easy command
brew install git node python

# 4. Verify all installations:
git --version && node -v && python3 --version`,

    antigravity: `# Install Google Antigravity CLI globally
npm install -g @google/antigravity-cli

# Log in with your Google account
agy auth login

# Check system health & agent status
agy status`,

    claude: `# Install Anthropic Claude Code CLI
npm install -g @anthropic-ai/claude-code

# Navigate to any project folder and launch
cd my-project
claude

# Useful commands inside Claude Code:
# /compact  -> Cleans up memory
# /cost     -> Shows current spend`,

    codex: `# Install GitHub CLI & Copilot Assistant
brew install gh
gh auth login
gh extension install github/gh-copilot

# Ask Copilot directly from the terminal:
gh copilot suggest "create a responsive navbar in tailwind"`
  };

  const windowsCommands = {
    prereq: `# 1. Open Windows Terminal as Administrator (Right click Start Menu -> Terminal Admin)

# 2. Allow scripts to run safely in PowerShell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# 3. Install Git, Node.js LTS, and Python 3.12 via Winget
winget install --id Git.Git -e --source winget
winget install OpenJS.NodeJS.LTS
winget install Python.Python.3.12

# 4. Restart Windows Terminal and verify:
git --version ; node -v ; python --version`,

    antigravity: `# Install Google Antigravity CLI via npm
npm install -g @google/antigravity-cli

# Log in with Google
agy auth login

# Check agent status
agy status`,

    claude: `# Install Anthropic Claude Code CLI
npm install -g @anthropic-ai/claude-code

# Launch in your project directory
cd my-project
claude

# Sign in via the browser window when prompted`,

    codex: `# Install GitHub CLI on Windows via Winget
winget install GitHub.cli

# Log in and install Copilot extension
gh auth login
gh extension install github/gh-copilot

# Test Copilot suggestion
gh copilot suggest "start a nextjs app with tailwind"`
  };

  const toolDescriptions = {
    prereq: "Installs Git (save points), Node.js (runs websites), and Python (runs scripts).",
    antigravity: "Google's autonomous assistant that plans, codes, and runs tests for you.",
    claude: "Anthropic's terminal agent that edits files and creates Git commits directly.",
    codex: "GitHub Copilot in your command line to answer quick syntax questions."
  };

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-8 sm:p-12 my-10">
      
      {/* Top Header & OS Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b-2 md:border-b-4 border-[#121212] pb-8 mb-8">
        <div>
          <span className="inline-block px-3 py-1 bg-[#1040C0] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
            EASY SETUP CONTROLLER
          </span>
          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
            MAC & WINDOWS SETUP
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 font-medium mt-1">
            Pick your computer type below and copy-paste the exact commands.
          </p>
        </div>

        {/* Big OS Switcher Buttons */}
        <div className="flex items-center gap-3 p-2 bg-zinc-100 border-2 md:border-4 border-[#121212] shadow-hard-md">
          <button
            onClick={() => setActiveOS("mac")}
            className={clsx(
              "px-5 py-2.5 font-black text-xs md:text-sm uppercase tracking-wider flex items-center gap-2 border-2 border-[#121212] transition-all btn-tactile",
              activeOS === "mac"
                ? "bg-[#D02020] text-white shadow-hard-sm"
                : "bg-white text-[#121212] hover:bg-zinc-200"
            )}
          >
            <Apple className="w-4 h-4" />
            <span>macOS (MacBook/iMac)</span>
          </button>

          <button
            onClick={() => setActiveOS("windows")}
            className={clsx(
              "px-5 py-2.5 font-black text-xs md:text-sm uppercase tracking-wider flex items-center gap-2 border-2 border-[#121212] transition-all btn-tactile",
              activeOS === "windows"
                ? "bg-[#1040C0] text-white shadow-hard-sm"
                : "bg-white text-[#121212] hover:bg-zinc-200"
            )}
          >
            <Laptop className="w-4 h-4" />
            <span>Windows (10 / 11)</span>
          </button>
        </div>
      </div>

      {/* Tool Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { id: "prereq", label: "1. The Basics", sub: "Git, Node, Python" },
          { id: "antigravity", label: "2. Antigravity", sub: "Google Autonomous AI" },
          { id: "claude", label: "3. Claude Code", sub: "Anthropic Terminal" },
          { id: "codex", label: "4. Copilot CLI", sub: "GitHub Command AI" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTool(tab.id as any)}
            className={clsx(
              "p-4 text-left border-2 md:border-4 border-[#121212] font-black uppercase transition-all duration-150 btn-tactile",
              activeTool === tab.id
                ? "bg-[#F0C020] text-[#121212] shadow-hard-md -translate-y-1"
                : "bg-zinc-50 text-zinc-700 hover:bg-white shadow-hard-sm"
            )}
          >
            <div className="text-sm md:text-base">{tab.label}</div>
            <div className="text-[11px] font-bold text-zinc-600 normal-case mt-0.5">{tab.sub}</div>
          </button>
        ))}
      </div>

      {/* Description of current tool */}
      <div className="mb-4 text-xs sm:text-sm font-bold text-zinc-700">
        <span className="text-[#1040C0] font-black uppercase">What this does: </span>
        {toolDescriptions[activeTool]}
      </div>

      {/* Terminal Snippet for Selected OS & Tool */}
      <div className="relative mb-6">
        <TerminalSnippet
          command={activeOS === "mac" ? macCommands[activeTool] : windowsCommands[activeTool]}
          title={`${activeOS.toUpperCase()} &bull; ${activeTool.toUpperCase()}`}
          shellType={activeOS === "mac" ? "zsh" : "powershell"}
        />
      </div>

      {/* Beginner Safety Callout */}
      <div className="p-6 bg-[#FFF9C4] border-2 md:border-4 border-[#121212] shadow-hard-sm flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-[#D02020] flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-[#121212] font-bold leading-relaxed">
          <span className="uppercase text-[#D02020] font-black">Beginner Safety Tip: </span>
          You never have to pay for Git, Node, or Python—they are 100% free open-source software. When creating an Anthropic or OpenAI account, set a hard spend limit of $10 so you never have to worry about surprise bills.
        </div>
      </div>
    </div>
  );
};
