"use client";

import React, { useState } from "react";
import { TerminalSnippet } from "@/components/TerminalSnippet";
import { Terminal, Search, Copy, Check, Filter, Sparkles, Shield, Code, Cpu } from "lucide-react";
import { clsx } from "clsx";

interface CheatsheetItem {
  category: "cli" | "agents" | "prompts" | "git" | "mcp" | "fullstack" | "web3" | "testing" | "deployment";
  title: string;
  command: string;
  description: string;
  shell?: "bash" | "zsh" | "powershell";
}

const CHEATSHEET_ITEMS: CheatsheetItem[] = [
  {
    category: "cli",
    title: "Install Homebrew (Mac)",
    command: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`,
    description: "The developer package manager for macOS.",
    shell: "zsh"
  },
  {
    category: "cli",
    title: "Windows PowerShell Execution Policy Fix",
    command: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`,
    description: "Fixes script execution errors on Windows 10/11.",
    shell: "powershell"
  },
  {
    category: "cli",
    title: "Install Node.js & Git (Mac)",
    command: `brew install git node python`,
    description: "Installs Git, Node.js LTS, and Python 3.12 cleanly.",
    shell: "zsh"
  },
  {
    category: "cli",
    title: "Install Node.js & Git (Windows Winget)",
    command: `winget install --id Git.Git -e --source winget\nwinget install OpenJS.NodeJS.LTS\nwinget install Python.Python.3.12`,
    description: "One-step Windows package installations without manual installer wizards.",
    shell: "powershell"
  },
  {
    category: "agents",
    title: "Install Google Antigravity CLI",
    command: `npm install -g @google/antigravity-cli\nagy auth login\nagy status`,
    description: "Autonomous multi-agent orchestration tool with planning mode.",
    shell: "zsh"
  },
  {
    category: "agents",
    title: "Install Claude Code CLI",
    command: `npm install -g @anthropic-ai/claude-code\ncd my-project\nclaude`,
    description: "Anthropic's terminal-native autonomous agent.",
    shell: "zsh"
  },
  {
    category: "agents",
    title: "Repomix Whole Codebase Digest",
    command: `npx repomix --ignore "node_modules/**,dist/**,*.lock" --style xml`,
    description: "Packs your entire repository into a clean token-efficient XML/markdown digest.",
    shell: "zsh"
  },
  {
    category: "prompts",
    title: "The 6-Component Feature Prompt Recipe",
    command: `### PERSONA: Senior Full-Stack Architect
### GOAL: Build a persistent notes dashboard with MERN stack
### CONTEXT: React 18, Express, MongoDB Atlas, Tailwind CSS
### CONSTRAINTS:
- Do NOT touch existing auth routes
- Always handle loading states and catch errors
- Set Network Access 0.0.0.0/0 for MongoDB Atlas
### OUTPUT: Provide full code files with filepaths and terminal commands`,
    description: "Guarantees zero hallucinations and production-grade code output.",
    shell: "bash"
  },
  {
    category: "prompts",
    title: "Deep Error Debugger Template",
    command: `I ran: [command]
Expected: [expected behavior]
Actual: [what happened]
Console Error Log:
[Paste exact stack trace here]
Analyze the root cause, explain why it happened, and provide surgical diffs.`,
    description: "Never say 'it broke fix it'. Feed exact stack traces for 5-second patches.",
    shell: "bash"
  },
  {
    category: "git",
    title: "The 4 Core Git Commands",
    command: `git status\ngit add .\ngit commit -m "feat: implement user auth modal"\ngit push origin main`,
    description: "The fundamental snapshot and cloud synchronization cycle.",
    shell: "zsh"
  },
  {
    category: "git",
    title: "Untrack Leaked .env Without Deleting Local File",
    command: `git rm --cached .env.local\ngit commit -m "fix: untrack environment secrets"\ngit push origin main`,
    description: "Stops Git from tracking sensitive files while preserving your local copy.",
    shell: "zsh"
  },
  {
    category: "git",
    title: "Purge Past Leaked Secrets with BFG Repo-Cleaner",
    command: `bfg --delete-files .env.local\ngit reflog expire --expire=now --all && git gc --prune=now --aggressive\ngit push origin main --force`,
    description: "Wipes exposed passwords and keys from all past commit history completely.",
    shell: "zsh"
  },
  {
    category: "mcp",
    title: "Claude Desktop MCP Configuration JSON",
    command: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/jarvis/vibe"]
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
    }
  }
}`,
    description: "Model Context Protocol configuration to connect AI to filesystem & databases.",
    shell: "bash"
  },
  {
    category: "fullstack",
    title: "Scaffold MERN Stack (Client + Server)",
    command: `# Client (Vite + React)
npm create vite@latest client -- --template react
# Server (Express + Mongoose)
mkdir server && cd server && npm init -y
npm install express mongoose cors dotenv`,
    description: "Clean dual-folder MERN stack scaffold ready for AI code generation.",
    shell: "zsh"
  },
  {
    category: "fullstack",
    title: "Scaffold Next.js with Tailwind & Shadcn",
    command: `npx create-next-app@latest my-app --typescript --tailwind --eslint --app\ncd my-app\nnpx shadcn@latest init\nnpx shadcn@latest add button card dialog dropdown-menu input`,
    description: "Standard production foundation for modern AI SaaS applications.",
    shell: "zsh"
  },
  {
    category: "testing",
    title: "Install & Run Playwright E2E Tests",
    command: `npm init playwright@latest\n# Run tests in headless browser\nnpx playwright test\n# Open visual interactive test UI\nnpx playwright test --ui`,
    description: "End-to-end automated browser test suite simulating real user clicks.",
    shell: "zsh"
  },
  {
    category: "testing",
    title: "Run Fast Unit Tests with Vitest",
    command: `npm install -D vitest\n# Run unit tests\nnpx vitest`,
    description: "Blazingly fast Vite-native test runner for pure functions and calculations.",
    shell: "zsh"
  },
  {
    category: "deployment",
    title: "Deploy Next.js to Vercel via CLI",
    command: `npm install -g vercel\nvercel login\nvercel --prod`,
    description: "Deploys your project immediately to Vercel global edge network.",
    shell: "zsh"
  },
  {
    category: "deployment",
    title: "Ubuntu VPS 24/7 Setup (PM2 + Nginx)",
    command: `sudo apt update && sudo apt install nginx -y\nsudo npm install -g pm2\npm2 start npm --name "vibe-app" -- start\npm2 startup && pm2 save`,
    description: "Runs your app 24/7 on a $4/month Linux server with automatic crash recovery.",
    shell: "bash"
  },
  {
    category: "web3",
    title: "Web3 Frontend Essentials (Wagmi + RainbowKit)",
    command: `npm i @rainbow-me/rainbowkit wagmi viem @tanstack/react-query`,
    description: "The modern Ethereum & Base frontend integration stack.",
    shell: "zsh"
  },
  {
    category: "web3",
    title: "Install Foundry (Forge) for Smart Contracts",
    command: `curl -L https://foundry.paradigm.xyz | bash\nfoundryup`,
    description: "Blazingly fast Rust-based toolchain for developing and testing Solidity contracts.",
    shell: "zsh"
  }
];

export default function CheatsheetPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = CHEATSHEET_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F0F0F0] text-[#121212] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b-4 border-[#121212] pb-8 mb-10">
          <span className="inline-block px-3 py-1 bg-[#1040C0] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
            QUICK ACCESS REPOSITORY
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#121212]">
            VIBE CODING CHEATSHEET
          </h1>
          <p className="text-sm sm:text-base font-medium text-zinc-700 max-w-2xl mt-2">
            Every terminal command, prompt template, MCP snippet, MERN stack script, Playwright test, and deployment command in one searchable copyable dashboard.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white border-4 border-[#121212] shadow-hard-lg p-4 sm:p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search commands, tools, prompts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border-2 border-[#121212] text-sm font-bold uppercase placeholder:text-zinc-400 focus:outline-none focus:bg-white"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {[
                { id: "all", label: "ALL" },
                { id: "cli", label: "CLI & OS" },
                { id: "agents", label: "AGENTS" },
                { id: "prompts", label: "PROMPTS" },
                { id: "git", label: "GIT & SAFETY" },
                { id: "mcp", label: "MCP" },
                { id: "fullstack", label: "MERN & FULLSTACK" },
                { id: "testing", label: "TESTING" },
                { id: "deployment", label: "DEPLOYMENT" },
                { id: "web3", label: "WEB3" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={clsx(
                    "px-3 py-1.5 text-xs font-black uppercase border-2 border-[#121212] transition-all btn-tactile",
                    selectedCategory === cat.id
                      ? "bg-[#D02020] text-white shadow-hard-sm"
                      : "bg-zinc-100 text-[#121212] hover:bg-white"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Cheatsheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-md p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 text-[10px] font-black uppercase bg-[#121212] text-white">
                    {item.category.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                    {item.shell}
                  </span>
                </div>

                <h3 className="text-lg font-black uppercase tracking-tight text-[#121212] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 font-medium mb-3">
                  {item.description}
                </p>
              </div>

              <TerminalSnippet
                command={item.command}
                title={item.title}
                shellType={item.shell}
              />
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="p-12 text-center bg-white border-4 border-[#121212] shadow-hard-md">
            <p className="text-base font-black uppercase text-[#D02020]">
              No commands found matching &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 bg-[#121212] text-white text-xs font-black uppercase border-2 border-black"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
