"use client";

import React, { useState } from "react";
import { TerminalSnippet } from "../TerminalSnippet";
import { 
  ShieldAlert, 
  ShieldCheck, 
  FileCode, 
  Trash2, 
  AlertTriangle, 
  Lock, 
  Key, 
  Flame, 
  EyeOff, 
  FolderX,
  CheckCircle2,
  XCircle,
  HelpCircle
} from "lucide-react";
import { clsx } from "clsx";

interface FileItem {
  name: string;
  verdict: "danger" | "safe" | "system";
  reason: string;
  category: string;
}

export const WhatNotToPushSimulator: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [activeTab, setActiveTab] = useState<"inspector" | "emergency" | "gitignore">("inspector");

  const filesList: FileItem[] = [
    {
      name: ".env.local",
      verdict: "danger",
      reason: "Contains raw database passwords, OpenAI / Claude API keys, and Stripe secrets. Never push!",
      category: "Secrets & Credentials"
    },
    {
      name: "node_modules/",
      verdict: "danger",
      reason: "Thousands of downloaded packages (often 500MB - 1GB). Anyone can recreate it with 'npm install'.",
      category: "Dependencies"
    },
    {
      name: "package.json",
      verdict: "safe",
      reason: "The manifest file listing your dependencies and scripts. Essential for everyone to run your project.",
      category: "Configuration"
    },
    {
      name: ".DS_Store",
      verdict: "system",
      reason: "Mac Finder metadata file. Useless clutter that creates noisy diffs across operating systems.",
      category: "OS Junk"
    },
    {
      name: "id_rsa / server.pem",
      verdict: "danger",
      reason: "Private SSH and server keys. Pushing this gives anyone root access to your cloud servers.",
      category: "Secrets & Credentials"
    },
    {
      name: ".next/ or dist/",
      verdict: "danger",
      reason: "Compiled output files. These are generated fresh during build by Vercel or your deployment server.",
      category: "Build Artifacts"
    },
    {
      name: "src/app/page.tsx",
      verdict: "safe",
      reason: "Your application source code! This is the primary code you want to track and share.",
      category: "Source Code"
    },
    {
      name: "README.md",
      verdict: "safe",
      reason: "Documentation explaining how to clone, run, and understand your application.",
      category: "Documentation"
    }
  ];

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-6 sm:p-10 my-10">
      
      {/* Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="inline-block px-3 py-1 bg-[#D02020] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm">
            GIT HYGIENE &amp; SECRET SAFETY
          </span>
          <span className="text-xs font-mono font-bold text-zinc-500 uppercase">
            .GITIGNORE &bull; SECRET LEAKS &bull; BFG REPO CLEANER
          </span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          WHAT NEVER TO PUSH TO GITHUB
        </h3>
        <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-3xl leading-relaxed">
          Public GitHub commits are scanned in under 2 seconds by automated bots searching for API keys and credit cards. Learn how to lock down your repository and what to do if you make a mistake.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {[
          { id: "inspector", label: "1. File Safety Inspector", sub: "Click to Check Files" },
          { id: "emergency", label: "2. Emergency Leaked Key Protocol", sub: "I Pushed a Secret!" },
          { id: "gitignore", label: "3. Master .gitignore Template", sub: "1-Click Copy" },
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
          TAB 1: FILE SAFETY INSPECTOR
      ========================================================================= */}
      {activeTab === "inspector" && (
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212]">
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] mb-2">
              CLICK ANY FILE TO CHECK IF IT BELONGS IN GIT
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium mb-6">
              Test your intuition: Select a file from your project workspace below to see if it should be committed or hidden.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* File list */}
              <div className="lg:col-span-6 space-y-2">
                {filesList.map((file, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedFile(file)}
                    className={clsx(
                      "w-full p-3 text-left border-2 border-black flex items-center justify-between font-mono text-xs transition-all btn-tactile",
                      selectedFile?.name === file.name
                        ? "bg-[#121212] text-white shadow-hard-sm"
                        : "bg-white text-zinc-900 hover:bg-zinc-100"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-zinc-500" />
                      <span className="font-bold">{file.name}</span>
                    </div>

                    <span className={clsx(
                      "text-[10px] font-black uppercase px-2 py-0.5 border border-black",
                      file.verdict === "danger"
                        ? "bg-red-500 text-white"
                        : file.verdict === "safe"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-400 text-black"
                    )}>
                      {file.verdict === "danger" ? "DO NOT PUSH" : file.verdict === "safe" ? "SAFE TO PUSH" : "IGNORE"}
                    </span>
                  </button>
                ))}
              </div>

              {/* Inspector Output Panel */}
              <div className="lg:col-span-6 bg-white border-2 md:border-4 border-black p-6 flex flex-col justify-between">
                {selectedFile ? (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {selectedFile.verdict === "danger" ? (
                        <XCircle className="w-8 h-8 text-[#D02020] flex-shrink-0" />
                      ) : selectedFile.verdict === "safe" ? (
                        <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" />
                      ) : (
                        <AlertTriangle className="w-8 h-8 text-[#F0C020] flex-shrink-0" />
                      )}

                      <div>
                        <div className="text-[10px] font-mono font-bold uppercase text-zinc-500">
                          {selectedFile.category}
                        </div>
                        <h5 className="text-xl font-black uppercase tracking-tight text-[#121212]">
                          {selectedFile.name}
                        </h5>
                      </div>
                    </div>

                    <div className={clsx(
                      "p-4 border-2 border-black font-medium text-xs sm:text-sm leading-relaxed mb-4",
                      selectedFile.verdict === "danger"
                        ? "bg-red-50 text-red-900"
                        : selectedFile.verdict === "safe"
                        ? "bg-green-50 text-green-900"
                        : "bg-yellow-50 text-zinc-900"
                    )}>
                      <strong>WHY: </strong>{selectedFile.reason}
                    </div>

                    <div className="p-3 bg-zinc-100 border border-zinc-300 text-xs font-mono text-zinc-700">
                      <strong>.gitignore rule: </strong>
                      {selectedFile.verdict !== "safe" ? selectedFile.name : "None (Tracked in Git)"}
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 text-zinc-500">
                    <HelpCircle className="w-10 h-10 mb-2 stroke-1" />
                    <span className="text-xs font-bold uppercase">Click any file on the left to inspect its security profile</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: EMERGENCY PROTOCOL: I LEAKED A KEY!
      ========================================================================= */}
      {activeTab === "emergency" && (
        <div className="space-y-6">
          <div className="p-6 bg-[#FFF9C4] border-2 md:border-4 border-[#121212] shadow-hard-md">
            <div className="flex items-center gap-3 mb-3">
              <Flame className="w-7 h-7 text-[#D02020]" />
              <div>
                <span className="text-xs font-black uppercase text-[#D02020] tracking-widest block">
                  DEFCON 1 PROTOCOL
                </span>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212]">
                  WHAT TO DO IF YOU ACCIDENTALLY PUSHED A SECRET
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-800 font-medium leading-relaxed mb-6">
              Simply editing the file, deleting the key, and committing <strong>DOES NOT WORK</strong>! Git stores every past version of every file forever. Anyone can view your commit history and see the deleted key. Follow these 4 exact steps:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-white border-2 border-black">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-[#D02020] mb-1">
                  <span>STEP 1: REVOKE THE KEY IMMEDIATELY</span>
                  <span className="px-2 py-0.5 bg-red-100 border border-red-400 text-[10px]">DO THIS FIRST!</span>
                </div>
                <p className="text-xs text-zinc-700 font-medium leading-relaxed">
                  Go directly to OpenAI, Anthropic, AWS, or Supabase dashboard and <strong>DELETE / REVOKE</strong> the key. Once revoked, the leaked key is useless plastic even if a bot found it.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black">
                <div className="text-xs font-black uppercase text-[#1040C0] mb-1">
                  STEP 2: REMOVE THE FILE FROM GIT TRACKING (WITHOUT DELETING LOCAL FILE)
                </div>
                <p className="text-xs text-zinc-700 font-medium leading-relaxed mb-2">
                  Tell Git to stop tracking the file while keeping your local copy intact:
                </p>
                <div className="p-2.5 bg-[#121212] text-green-400 font-mono text-xs border border-black">
                  git rm --cached .env.local<br />
                  git commit -m &quot;security: stop tracking env file&quot;<br />
                  git push origin main
                </div>
              </div>

              <div className="p-4 bg-white border-2 border-black">
                <div className="text-xs font-black uppercase text-[#121212] mb-1">
                  STEP 3: PURGE KEY FROM ENTIRE GIT COMMIT HISTORY (BFG REPO CLEANER)
                </div>
                <p className="text-xs text-zinc-700 font-medium leading-relaxed mb-2">
                  Erase any trace of the secret from older commits so it disappears completely:
                </p>
                <div className="p-2.5 bg-[#121212] text-yellow-300 font-mono text-xs border border-black">
                  # 1. Install BFG (Mac: brew install bfg, Windows: download bfg.jar)<br />
                  bfg --delete-files .env.local<br />
                  git reflog expire --expire=now --all &amp;&amp; git gc --prune=now --aggressive<br />
                  git push origin main --force
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: MASTER .GITIGNORE TEMPLATE
      ========================================================================= */}
      {activeTab === "gitignore" && (
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212]">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <div>
                <span className="px-2.5 py-1 bg-[#121212] text-white text-xs font-black uppercase inline-block mb-1">
                  THE UNIVERSAL .GITIGNORE FILE
                </span>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212]">
                  COPY THIS INTO YOUR PROJECT ROOT AS <code className="text-[#D02020]">.gitignore</code>
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 font-medium mb-4">
              Place this file in the root folder of every project to protect your keys and keep your repository clean:
            </p>

            <TerminalSnippet
              command={`# Environment Secrets (NEVER PUSH)
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
*.pem
*.key
*.cert

# Node Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Build Outputs & Caches
.next/
dist/
out/
build/
.cache/

# OS Clutter
.DS_Store
Thumbs.db

# IDE & AI Temp Files
.vscode/
.idea/
*.swp
*.swo`}
              title="MASTER .GITIGNORE TEMPLATE"
              shellType="bash"
            />
          </div>
        </div>
      )}

    </div>
  );
};
