"use client";

import React, { useState, useEffect } from "react";
import { TerminalSnippet } from "./TerminalSnippet";
import { 
  GitBranch, 
  Database, 
  Server, 
  Layout, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Terminal, 
  Layers, 
  Code2, 
  Sparkles,
  Zap,
  Bot,
  AlertTriangle,
  RefreshCw,
  Rocket
} from "lucide-react";
import { clsx } from "clsx";

interface WorkflowNode {
  id: string;
  step: number;
  title: string;
  subtitle: string;
  actor: "human" | "ai" | "system" | "cloud";
  icon: any;
  color: string;
  input: string;
  action: string;
  output: string;
  codeSnippet: string;
  shellType?: "bash" | "zsh" | "powershell";
}

interface WorkflowDefinition {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  nodes: WorkflowNode[];
}

const WORKFLOWS: WorkflowDefinition[] = [
  {
    id: "master-vibe",
    name: "Master Vibe Pipeline",
    badge: "IDEA TO LIVE APP",
    tagline: "From English Thought to Global Production URL",
    description: "The complete 5-stage loop used by elite vibe coders to transform a simple product concept into a live, interactive, verified web app.",
    nodes: [
      {
        id: "v1",
        step: 1,
        title: "PRD & Architecture Blueprint",
        subtitle: "Spec-Driven Prompting",
        actor: "human",
        icon: Terminal,
        color: "#D02020",
        input: "Fuzzy idea: 'I want a habit tracker with streak analytics and dark mode.'",
        action: "Claude Code / Antigravity interviews you and generates TASKS.md and PRD.md.",
        output: "Clear 10-step atomic task checklist with database schema defined.",
        codeSnippet: `claude "Interview me one question at a time to build a Habit Tracker PRD with Next.js and Supabase. Generate TASKS.md."`,
        shellType: "zsh"
      },
      {
        id: "v2",
        step: 2,
        title: "AI Scaffolding & Component Generation",
        subtitle: "Atomic Task Execution",
        actor: "ai",
        icon: Bot,
        color: "#1040C0",
        input: "Task 01 from TASKS.md: Scaffold Next.js project with Tailwind CSS & Shadcn UI.",
        action: "Agent creates package.json, tailwind.config.ts, and installs dependencies.",
        output: "Running local development server at http://localhost:3000.",
        codeSnippet: `npx create-next-app@latest habit-tracker --typescript --tailwind --app\ncd habit-tracker && npm run dev`,
        shellType: "zsh"
      },
      {
        id: "v3",
        step: 3,
        title: "Assembling UI LEGO Bricks",
        subtitle: "Aceternity & Shadcn Primitives",
        actor: "ai",
        icon: Layout,
        color: "#F0C020",
        input: "Prompt: 'Insert Aceternity 3D Card and Shadcn Progress Bar into HabitCard.tsx.'",
        action: "AI imports pre-built accessible components and applies custom branding.",
        output: "Polished Apple-grade habit card with animated progress bars.",
        codeSnippet: `npx shadcn@latest add progress card dialog\n# AI connects state to <Progress value={habit.streak * 10} />`,
        shellType: "bash"
      },
      {
        id: "v4",
        step: 4,
        title: "Automated Verification & Playwright Test",
        subtitle: "3-Point Visual Test Sandwich",
        actor: "system",
        icon: ShieldCheck,
        color: "#121212",
        input: "Automated test script tests/habit.spec.ts clicking 'Log Habit'.",
        action: "Playwright opens headless Chrome, types habit name, clicks save, checks DB.",
        output: "100% assertions passed: Button clicks, console is clean, Supabase row created.",
        codeSnippet: `npx playwright test\n# Running 3 tests using 3 workers\n# 3 passed (1.2s)`,
        shellType: "zsh"
      },
      {
        id: "v5",
        step: 5,
        title: "One-Click Vercel Ship & Custom Domain",
        subtitle: "Global Edge Deployment",
        actor: "cloud",
        icon: Rocket,
        color: "#D02020",
        input: "Push to GitHub: git push origin main.",
        action: "Vercel builds Next.js pages and propagates Edge CDN across 100+ cities.",
        output: "Live worldwide at https://myhabits.com with automatic SSL certificate.",
        codeSnippet: `git add . && git commit -m "feat: ship habit tracker v1"\ngit push origin main\n# Vercel: Production deployment ready (38s)`,
        shellType: "zsh"
      }
    ]
  },
  {
    id: "mern-flow",
    name: "MERN Stack Data Pipeline",
    badge: "FULL-STACK ARCHITECTURE",
    tagline: "End-to-End Request, Router, Model & Database Loop",
    description: "Watch how a user click in React travels through Express middleware, validates via Mongoose, and writes permanently to MongoDB Atlas.",
    nodes: [
      {
        id: "m1",
        step: 1,
        title: "React Frontend Interaction",
        subtitle: "Client State & Form Submit",
        actor: "human",
        icon: Layout,
        color: "#1040C0",
        input: "User fills in form: { title: 'Master Vibe Coding', completed: false }",
        action: "React handles onSubmit event, prevents page reload, and invokes async fetch.",
        output: "HTTP POST request dispatched to http://localhost:5000/api/todos.",
        codeSnippet: `const res = await fetch('http://localhost:5000/api/todos', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ title })\n});`,
        shellType: "bash"
      },
      {
        id: "m2",
        step: 2,
        title: "Express Router & CORS Middleware",
        subtitle: "Server API Route Guard",
        actor: "system",
        icon: Server,
        color: "#D02020",
        input: "Inbound HTTP POST request with CORS headers from origin localhost:3000.",
        action: "Express app.use(cors()) validates origin; express.json() parses request body.",
        output: "Clean JavaScript object req.body passed to route handler.",
        codeSnippet: `app.post('/api/todos', async (req, res) => {\n  const todo = new Todo(req.body);\n  await todo.save();\n  res.status(201).json(todo);\n});`,
        shellType: "bash"
      },
      {
        id: "m3",
        step: 3,
        title: "Mongoose Schema Validation",
        subtitle: "ODM Structure Enforcement",
        actor: "system",
        icon: Code2,
        color: "#F0C020",
        input: "Raw input payload checked against defined Mongoose schema.",
        action: "Enforces required fields, data types, and timestamps (createdAt: Date.now).",
        output: "Validated BSON document prepared for MongoDB wire protocol.",
        codeSnippet: `const TodoSchema = new mongoose.Schema({\n  title: { type: String, required: true },\n  completed: { type: Boolean, default: false },\n  createdAt: { type: Date, default: Date.now }\n});`,
        shellType: "bash"
      },
      {
        id: "m4",
        step: 4,
        title: "MongoDB Atlas Cloud Cluster",
        subtitle: "Whitelisted 0.0.0.0/0 Storage",
        actor: "cloud",
        icon: Database,
        color: "#121212",
        input: "Encrypted connection over TLS using MONGO_URI string.",
        action: "Network Access allows connection; Atlas commits write to distributed replica set.",
        output: "Persistent document created with unique ObjectId: _id: '65f8a1...'",
        codeSnippet: `// Atlas Database Write:\n{ "_id": "66e01a8f90...", "title": "Master Vibe Coding", "completed": false }`,
        shellType: "bash"
      },
      {
        id: "m5",
        step: 5,
        title: "Real-time React UI Update",
        subtitle: "Optimistic State Refresh",
        actor: "human",
        icon: Sparkles,
        color: "#1040C0",
        input: "HTTP 201 Created response received with newly saved MongoDB document.",
        action: "React setState([newTodo, ...todos]) updates virtual DOM without page reload.",
        output: "User sees green toast notification: 'Todo saved to database!'",
        codeSnippet: `const savedTodo = await res.json();\nsetTodos([savedTodo, ...todos]); // Instant UI update!`,
        shellType: "bash"
      }
    ]
  },
  {
    id: "git-conflict",
    name: "Git Checkpoint & Conflict Recovery",
    badge: "DATA SAFETY WORKFLOW",
    tagline: "Never Lose Code & Safely Merge Diverged Branches",
    description: "The standard engineer's safety loop: saving safe checkpoints, catching code clashes, and using AI to resolve merge conflicts cleanly.",
    nodes: [
      {
        id: "g1",
        step: 1,
        title: "Create Isolated Feature Branch",
        subtitle: "Safe Sandbox Workspace",
        actor: "human",
        icon: GitBranch,
        color: "#1040C0",
        input: "You want to test a radical new redesign without risking the main working website.",
        action: "Create and switch to a separate git branch feature/stripe-checkout.",
        output: "Your main branch remains completely untouched and safe.",
        codeSnippet: `git checkout -b feature/stripe-checkout\n# Now hack with AI freely without fear!`,
        shellType: "zsh"
      },
      {
        id: "g2",
        step: 2,
        title: "Save Atomic Checkpoints",
        subtitle: "Video Game Save Points",
        actor: "human",
        icon: ShieldCheck,
        color: "#121212",
        input: "Your payment form component renders cleanly and tests pass.",
        action: "Commit your code to Git with a descriptive message.",
        output: "Immutable snapshot saved in local Git tree with SHA-1 hash.",
        codeSnippet: `git add src/components/Checkout.tsx\ngit commit -m "feat: complete stripe checkout modal"`,
        shellType: "zsh"
      },
      {
        id: "g3",
        step: 3,
        title: "Merge Clash Detected",
        subtitle: "Two Edits on the Same Line",
        actor: "system",
        icon: AlertTriangle,
        color: "#D02020",
        input: "Both main branch and feature branch edited Navbar.tsx line 42.",
        action: "Git halts merge and inserts markers: <<<<<<< HEAD ... >>>>>>>",
        output: "Conflict notification in terminal: 'Automatic merge failed; fix conflicts.'",
        codeSnippet: `git checkout main && git merge feature/stripe-checkout\n# CONFLICT (content): Merge conflict in src/components/Navbar.tsx`,
        shellType: "zsh"
      },
      {
        id: "g4",
        step: 4,
        title: "AI Surgical Merge Resolution",
        subtitle: "Letting AI Analyze Both Intentions",
        actor: "ai",
        icon: Bot,
        color: "#F0C020",
        input: "Prompt AI: 'Resolve conflict in Navbar.tsx. Keep both the search bar and checkout button.'",
        action: "AI reconciles both features, removes conflict markers, and verifies syntax.",
        output: "Clean single unified file with both features functioning together.",
        codeSnippet: `claude "Inspect conflict in src/components/Navbar.tsx. Reconcile both branch edits cleanly without removing existing links."`,
        shellType: "zsh"
      },
      {
        id: "g5",
        step: 5,
        title: "Verify & Clean Fast-Forward Push",
        subtitle: "All Green Checkpoint",
        actor: "cloud",
        icon: CheckCircle2,
        color: "#1040C0",
        input: "Resolved code passes npm run build.",
        action: "Commit the merge resolution and push to origin main.",
        output: "Branch successfully merged, conflict solved in 15 seconds.",
        codeSnippet: `git add src/components/Navbar.tsx\ngit commit -m "fix: resolve navbar merge conflict"\ngit push origin main`,
        shellType: "zsh"
      }
    ]
  },
  {
    id: "ci-cd-quality",
    name: "Automated Quality & Secret Scan",
    badge: "CI/CD & DEFENSE",
    tagline: "Pre-Commit Secrets Guard & Playwright E2E Gate",
    description: "How modern high-speed teams ensure no API keys leak and no broken buttons reach production users.",
    nodes: [
      {
        id: "c1",
        step: 1,
        title: "Pre-Commit Secret Scanner",
        subtitle: "Gitleaks & Husky Hook",
        actor: "system",
        icon: ShieldCheck,
        color: "#D02020",
        input: "Developer runs git commit with a file containing an OpenAI key sk-...",
        action: "Pre-commit hook scans staged diffs against 100+ secret regex patterns.",
        output: "Commit immediately BLOCKED before leaving your laptop!",
        codeSnippet: `# Gitleaks Hook Triggered:\n[ERROR] Secret found: OpenAI API Key in .env.local\n[ABORTED] Commit rejected to protect your credentials.`,
        shellType: "bash"
      },
      {
        id: "c2",
        step: 2,
        title: "TypeScript & ESLint Sanity Gate",
        subtitle: "Static Code Analysis",
        actor: "system",
        icon: Code2,
        color: "#1040C0",
        input: "Staged TypeScript files passed to tsc compiler.",
        action: "Verifies type definitions, missing props, and invalid imports.",
        output: "Zero compile errors: Types verified across 100% of components.",
        codeSnippet: `npm run lint && npx tsc --noEmit\n# ✓ No lint errors found. Types are 100% valid.`,
        shellType: "zsh"
      },
      {
        id: "c3",
        step: 3,
        title: "Headless Playwright User Simulation",
        subtitle: "Robot Secret Shopper",
        actor: "system",
        icon: Bot,
        color: "#F0C020",
        input: "Simulated user visits checkout, clicks pay, asserts order ID created.",
        action: "Headless Chromium renders screens, checks console errors, verifies database.",
        output: "E2E test suite reports 100% green pass in 2.4 seconds.",
        codeSnippet: `npx playwright test --reporter=list\n# PASS tests/e2e/checkout.spec.ts (2.4s)`,
        shellType: "zsh"
      },
      {
        id: "c4",
        step: 4,
        title: "Vercel Zero-Downtime Atomic Swap",
        subtitle: "Edge CDN Instant Rollout",
        actor: "cloud",
        icon: Globe,
        color: "#121212",
        input: "GitHub webhook triggers production build in Vercel Edge Cloud.",
        action: "Build succeeds, immutable deployment URL generated, traffic atomically routed.",
        output: "New version live globally with zero seconds of site downtime.",
        codeSnippet: `Vercel Deployment: https://vibe-coding-workshop.vercel.app\nStatus: 200 OK &bull; Edge Cache Warm`,
        shellType: "zsh"
      }
    ]
  }
];

export const VisualWorkflowStudio: React.FC<{ initialWorkflow?: string }> = ({ 
  initialWorkflow = "master-vibe" 
}) => {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>(initialWorkflow);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentWorkflow = WORKFLOWS.find((w) => w.id === selectedWorkflowId) || WORKFLOWS[0];
  const currentNode = currentWorkflow.nodes[activeStepIndex] || currentWorkflow.nodes[0];

  // Auto-play interval
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStepIndex((prev) => {
          if (prev < currentWorkflow.nodes.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentWorkflow.nodes.length]);

  const handleSelectWorkflow = (id: string) => {
    setSelectedWorkflowId(id);
    setActiveStepIndex(0);
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveStepIndex(0);
  };

  const handleTogglePlay = () => {
    if (activeStepIndex === currentWorkflow.nodes.length - 1 && !isPlaying) {
      setActiveStepIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-6 sm:p-10 my-10">
      
      {/* Studio Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#D02020] border border-black animate-pulse" />
            <span className="px-3 py-1 bg-[#121212] text-[#F0C020] font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm">
              VISUAL WORKFLOW ENGINE
            </span>
          </div>

          {/* Workflow Player Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleTogglePlay}
              className={clsx(
                "px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-black flex items-center gap-2 btn-tactile shadow-hard-sm transition-all",
                isPlaying
                  ? "bg-[#D02020] text-white"
                  : "bg-[#F0C020] text-[#121212] hover:bg-yellow-400"
              )}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? "PAUSE WORKFLOW" : "AUTOPLAY PIPELINE"}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-2 border-2 border-black bg-white hover:bg-zinc-100 text-black btn-tactile shadow-hard-sm"
              title="Reset to Step 1"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          INTERACTIVE ARCHITECTURAL WORKFLOWS
        </h3>
        <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-3xl leading-relaxed">
          Select any production workflow below to trace the exact journey of ideas, data packets, git commits, and server requests with live code snippets and expected outputs.
        </p>
      </div>

      {/* Workflow Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {WORKFLOWS.map((wf) => {
          const isSelected = wf.id === selectedWorkflowId;
          return (
            <button
              key={wf.id}
              onClick={() => handleSelectWorkflow(wf.id)}
              className={clsx(
                "p-4 text-left border-2 md:border-4 border-[#121212] transition-all btn-tactile select-none flex flex-col justify-between",
                isSelected
                  ? "bg-[#121212] text-white shadow-hard-md -translate-y-1"
                  : "bg-zinc-50 text-[#121212] hover:bg-white shadow-hard-sm"
              )}
            >
              <div>
                <span className={clsx(
                  "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 border border-current inline-block mb-2",
                  isSelected ? "text-[#F0C020]" : "text-zinc-500"
                )}>
                  {wf.badge}
                </span>
                <div className="text-sm font-black uppercase tracking-tight leading-snug">{wf.name}</div>
              </div>
              <div className={clsx(
                "text-[11px] font-bold mt-2",
                isSelected ? "text-zinc-300" : "text-zinc-500"
              )}>
                {wf.nodes.length} Connected Stages &rarr;
              </div>
            </button>
          );
        })}
      </div>

      {/* Workflow Summary Callout */}
      <div className="p-4 sm:p-5 bg-zinc-100 border-2 border-black mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-[#D02020] block mb-0.5">
            CURRENT PIPELINE: {currentWorkflow.name}
          </span>
          <p className="text-xs sm:text-sm font-medium text-zinc-800">
            {currentWorkflow.description}
          </p>
        </div>

        <div className="flex items-center gap-1 font-mono text-xs font-bold text-zinc-500 flex-shrink-0">
          <span>STAGE</span>
          <span className="px-2 py-0.5 bg-[#121212] text-white font-black">
            0{activeStepIndex + 1}
          </span>
          <span>OF 0{currentWorkflow.nodes.length}</span>
        </div>
      </div>

      {/* =========================================================================
          HORIZONTAL VISUAL PIPELINE FLOWCHART
      ========================================================================= */}
      <div className="mb-10 overflow-x-auto pb-4">
        <div className="min-w-[720px] flex items-center justify-between gap-2 relative">
          
          {/* Connecting Track Line */}
          <div className="absolute top-1/2 left-6 right-6 h-1 bg-zinc-200 -translate-y-1/2 z-0" />
          
          {/* Animated Progress Bar */}
          <div 
            style={{ width: `${(activeStepIndex / (currentWorkflow.nodes.length - 1)) * 100}%` }}
            className="absolute top-1/2 left-6 h-1.5 bg-[#D02020] -translate-y-1/2 z-0 transition-all duration-500"
          />

          {currentWorkflow.nodes.map((node, idx) => {
            const isActive = activeStepIndex === idx;
            const isCompleted = activeStepIndex > idx;
            const Icon = node.icon;

            return (
              <div
                key={node.id}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveStepIndex(idx);
                }}
                className="relative z-10 flex flex-col items-center cursor-pointer group flex-1"
              >
                {/* Visual Node Pin */}
                <div
                  className={clsx(
                    "w-12 h-12 md:w-14 md:h-14 border-2 md:border-4 border-black flex items-center justify-center transition-all duration-200 shadow-hard-sm",
                    isActive
                      ? "bg-[#D02020] text-white scale-110 shadow-hard-md ring-4 ring-[#F0C020]"
                      : isCompleted
                      ? "bg-[#121212] text-white"
                      : "bg-white text-zinc-700 hover:bg-zinc-100"
                  )}
                >
                  {isCompleted && !isActive ? (
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  ) : (
                    <Icon className={clsx("w-5 h-5 md:w-6 md:h-6", isActive && "animate-pulse")} />
                  )}
                </div>

                {/* Node Label */}
                <div className="mt-3 text-center px-1">
                  <div className="text-[10px] font-mono font-bold uppercase text-zinc-500">
                    STAGE 0{node.step}
                  </div>
                  <div className={clsx(
                    "text-xs font-black uppercase max-w-[130px] line-clamp-1 mt-0.5",
                    isActive ? "text-[#D02020]" : "text-[#121212]"
                  )}>
                    {node.title}
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* =========================================================================
          DEEP-DIVE STAGE INSPECTOR: Visual Card + Code + Data Flow
      ========================================================================= */}
      <div className="border-2 md:border-4 border-[#121212] bg-[#F0F0F0] p-6 sm:p-8 shadow-hard-lg">
        
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-zinc-300 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-none bg-[#121212] text-white font-black text-sm flex items-center justify-center border-2 border-black">
              0{currentNode.step}
            </span>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-zinc-500 tracking-wider">
                {currentNode.subtitle} &bull; ACTOR: {currentNode.actor.toUpperCase()}
              </span>
              <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212]">
                {currentNode.title}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsPlaying(false);
                setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : currentWorkflow.nodes.length - 1));
              }}
              className="px-3 py-1.5 text-xs font-black uppercase border-2 border-black bg-white hover:bg-zinc-200 btn-tactile shadow-hard-sm"
            >
              &larr; PREV
            </button>
            <button
              onClick={() => {
                setIsPlaying(false);
                setActiveStepIndex((prev) => (prev < currentWorkflow.nodes.length - 1 ? prev + 1 : 0));
              }}
              className="px-4 py-1.5 text-xs font-black uppercase border-2 border-black bg-[#1040C0] text-white hover:bg-[#1040C0]/90 btn-tactile shadow-hard-sm"
            >
              NEXT &rarr;
            </button>
          </div>
        </div>

        {/* 2-Column Inspector: Input/Action/Output vs Terminal/Code Snippet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Data In / Transformation / Data Out (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Input */}
            <div className="p-4 bg-white border-2 border-black shadow-hard-sm">
              <div className="text-[10px] font-mono font-bold uppercase text-[#1040C0] mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1040C0]" />
                <span>INPUT PAYLOAD / INTENT:</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-zinc-800 leading-relaxed">
                {currentNode.input}
              </p>
            </div>

            {/* Action */}
            <div className="p-4 bg-white border-2 border-black shadow-hard-sm">
              <div className="text-[10px] font-mono font-bold uppercase text-[#D02020] mb-1 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#D02020]" />
                <span>SYSTEM TRANSFORMATION:</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-zinc-800 leading-relaxed">
                {currentNode.action}
              </p>
            </div>

            {/* Output */}
            <div className="p-4 bg-white border-2 border-black shadow-hard-sm">
              <div className="text-[10px] font-mono font-bold uppercase text-green-700 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                <span>VERIFIED SYSTEM OUTPUT:</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-relaxed">
                {currentNode.output}
              </p>
            </div>

          </div>

          {/* Right Column: Exact Code / Terminal Action (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <span className="text-[10px] font-mono font-bold uppercase text-zinc-600 mb-2 block">
              EXECUTE THIS COMMAND OR CODE AT STAGE 0{currentNode.step}:
            </span>
            <TerminalSnippet
              command={currentNode.codeSnippet}
              title={`STAGE 0${currentNode.step} SNIPPET`}
              shellType={currentNode.shellType || "bash"}
            />

            <div className="mt-4 p-3 bg-white/80 border border-black text-xs font-mono text-zinc-700 flex items-center justify-between">
              <span className="text-[11px] font-bold text-zinc-500">PIPELINE INTEGRITY:</span>
              <span className="px-2 py-0.5 bg-green-100 border border-green-400 text-green-800 text-[10px] font-bold">
                100% DETERMINISTIC
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
