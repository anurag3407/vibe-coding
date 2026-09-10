export interface ModuleData {
  id: string;
  slug: string;
  number: number;
  phase: string;
  phaseNumber: number;
  title: string;
  subtitle: string;
  duration: string;
  slidesCount: number;
  accentColor: 'red' | 'blue' | 'yellow' | 'black';
  bgHex: string;
  heroImage: string;
  eli5Analogy: string;
  description: string;
  outcomes: string[];
  workflowSteps: {
    step: string;
    title: string;
    description: string;
    tag: string;
  }[];
}

export const MODULES: ModuleData[] = [
  // ==========================================
  // PHASE 1: GETTING READY (ZERO TO LAPTOP READY)
  // ==========================================
  {
    id: "m1",
    slug: "1-revolution",
    number: 1,
    phase: "Phase 1: Getting Ready",
    phaseNumber: 1,
    title: "What is Vibe Coding?",
    subtitle: "Stop Typing Code. Start Directing AI.",
    duration: "15 Mins",
    slidesCount: 15,
    accentColor: "red",
    bgHex: "#D02020",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "🎬 Directing a Movie: You don't hold the heavy camera, build the stage props, or sew the costumes yourself. You are the Director. You tell the creative crew what scene to shoot, review the result, and ask for adjustments.",
    description: "Learn how software development changed forever. Instead of memorizing arcane syntax rules and debugging missing semicolons, you now describe what you want in plain English, verify the result, and steer.",
    outcomes: [
      "Why English is the newest and most powerful programming language",
      "The 4-step loop: Explain → AI Builds → Test → Refine",
      "Why non-technical people build better products (they focus on the customer, not the code)",
      "How to direct AI without ever feeling lost or out of control"
    ],
    workflowSteps: [
      { step: "01", title: "EXPLAIN", description: "Describe what you want to build in simple plain English.", tag: "Idea" },
      { step: "02", title: "AI BUILDS", description: "Your AI assistant creates the files and writes the code.", tag: "Action" },
      { step: "03", title: "TEST", description: "Open the website in your browser and click around.", tag: "Check" },
      { step: "04", title: "REFINE", description: "Tell AI what to tweak or fix until it looks perfect.", tag: "Polish" }
    ]
  },
  {
    id: "m2",
    slug: "2-cockpit",
    number: 2,
    phase: "Phase 1: Getting Ready",
    phaseNumber: 1,
    title: "The 10-Minute Laptop Setup",
    subtitle: "Mac & Windows Setup with Zero Headaches",
    duration: "20 Mins",
    slidesCount: 20,
    accentColor: "blue",
    bgHex: "#1040C0",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "💬 Texting Your Computer: The black terminal screen isn't for hackers. It's just WhatsApp for your laptop. You type short instructions to download tools instead of clicking 50 website buttons.",
    description: "Demystify the terminal in 15 minutes. Install Node, Git, and Python cleanly on Mac or Windows using simple copy-paste commands, plus get Google Antigravity and Claude Code ready.",
    outcomes: [
      "Conquer the terminal with zero fear (copy-paste verified commands)",
      "Install Git, Node.js, and Python without path conflicts",
      "Install Google Antigravity CLI and Claude Code terminal agents",
      "Set a $10 monthly spend cap on AI accounts so you never overpay"
    ],
    workflowSteps: [
      { step: "01", title: "APP STORE", description: "Install Homebrew (Mac) or Winget (Windows) to manage tools easily.", tag: "Setup" },
      { step: "02", title: "RUNTIMES", description: "Install Node and Git with 1 copy-paste line.", tag: "Tools" },
      { step: "03", title: "AI AGENTS", description: "Install Antigravity and Claude Code globally via npm.", tag: "AI Tools" },
      { step: "04", title: "SPEND CAP", description: "Lock your API spending to $10/month for complete safety.", tag: "Safety" }
    ]
  },
  {
    id: "m3",
    slug: "3-panic-button",
    number: 3,
    phase: "Phase 1: Getting Ready",
    phaseNumber: 1,
    title: "The Panic Button Protocol",
    subtitle: "What to Do When AI Freezes, Loops, or Breaks",
    duration: "15 Mins",
    slidesCount: 15,
    accentColor: "yellow",
    bgHex: "#F0C020",
    heroImage: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "🚨 The Emergency Brake: What do you do when a train starts rolling backward? You pull the emergency brake. In coding, pressing Ctrl + C and typing 'git checkout .' restores your last working save in 1 second.",
    description: "The #1 thing missing from other tutorials. Learn what to do when an AI gets stuck in an infinite loop, hallucinates weird files, or breaks existing code. Master the 3-Strikes Rule.",
    outcomes: [
      "How to instantly kill a runaway AI agent with Ctrl + C",
      "How to discard a botched AI session in 1 second with `git checkout .`",
      "The '3-Strikes Rule': Never let AI loop more than 3 times on the same bug",
      "How to switch models (e.g. from Claude to Gemini) when hitting rate limits"
    ],
    workflowSteps: [
      { step: "01", title: "HALT AGENT", description: "Press Ctrl + C to immediately stop any runaway agent.", tag: "Stop" },
      { step: "02", title: "DISCARD JUNK", description: "Type `git checkout .` to wipe the bad code back to your last save.", tag: "Reset" },
      { step: "03", title: "FRESH CONTEXT", description: "Type `/compact` or start a new prompt session.", tag: "Clean" },
      { step: "04", title: "RE-STEER", description: "Rephrase with negative constraints: 'Do NOT touch working files'.", tag: "Guide" }
    ]
  },

  // ==========================================
  // PHASE 2: DIRECTING THE AI (PROMPTS & PLANS)
  // ==========================================
  {
    id: "m4",
    slug: "4-prompting",
    number: 4,
    phase: "Phase 2: Directing the AI",
    phaseNumber: 2,
    title: "What is a Prompt & How to Write One",
    subtitle: "The 6 Core Components, Negative Constraints & Pro Formulas",
    duration: "20 Mins",
    slidesCount: 30,
    accentColor: "black",
    bgHex: "#121212",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "👨‍🍳 The Master Chef's Recipe: A prompt is not a Google search. A search looks for keywords; a prompt programs a neural network. If you say 'make food', you get random soup. If you give the 6 exact ingredients, you get the exact meal you crave.",
    description: "The complete masterclass on prompts. Learn what a prompt truly is, master the 6 core components (Persona, Goal, Context, Negative Constraints, Few-Shot, Output Format), and use Reverse Prompting to let AI interview you before coding.",
    outcomes: [
      "What a prompt actually is: Compiling natural language into model weights",
      "The 6 Essential Components: Persona, Task, Context, Constraints, Examples, Output",
      "Negative Prompting: Explicitly telling AI what NOT to touch to protect your code",
      "Reverse Prompting: Letting AI interview you to extract complete product specifications"
    ],
    workflowSteps: [
      { step: "01", title: "PERSONA & GOAL", description: "Set senior role and state the single atomic feature.", tag: "Identity" },
      { step: "02", title: "CONTEXT INJECT", description: "Specify tech stack, framework versions, and file paths.", tag: "Context" },
      { step: "03", title: "NEGATIVE RULES", description: "Add 'Do NOT delete comments, do NOT add new packages'.", tag: "Guardrails" },
      { step: "04", title: "PROVEN RECIPE", description: "Choose a recipe (Feature, Bug Fix, Reverse Interview, Audit).", tag: "Output" }
    ]
  },
  {
    id: "m5",
    slug: "5-context",
    number: 5,
    phase: "Phase 2: Directing the AI",
    phaseNumber: 2,
    title: "Teaching AI Your Project Rules",
    subtitle: "CLAUDE.md, Repomix & Token Caching",
    duration: "15 Mins",
    slidesCount: 20,
    accentColor: "red",
    bgHex: "#D02020",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "📋 The Employee Rulebook: Instead of repeating company rules to a worker every morning, you hand them a 1-page handbook. That is what CLAUDE.md and .cursorrules do for your AI assistant.",
    description: "Give your AI project memory so it never forgets your color palette or database rules. Bundle your whole codebase into 1 clean file with Repomix, and leverage prompt caching to save 90% on API costs.",
    outcomes: [
      "Create a CLAUDE.md rulebook so AI follows your coding style automatically",
      "Use `npx repomix` to bundle your app into a clean AI-ready digest",
      "Use Prompt Caching to make AI responses 4x faster and 90% cheaper",
      "Use the @ symbol in Cursor and Antigravity to attach only relevant files"
    ],
    workflowSteps: [
      { step: "01", title: "WRITE RULES", description: "Put tech stack, color codes, and commands in CLAUDE.md.", tag: "Rules" },
      { step: "02", title: "ATTACH FILES", description: "Type @filename so the AI sees only the file it needs to edit.", tag: "Focus" },
      { step: "03", title: "BUNDLE REPO", description: "Run `npx repomix` to feed your whole project to AI in one shot.", tag: "Bundle" },
      { step: "04", title: "CACHE & SAVE", description: "Benefit from prompt caching to keep API costs under $2/month.", tag: "Save" }
    ]
  },
  {
    id: "m6",
    slug: "6-prd",
    number: 6,
    phase: "Phase 2: Directing the AI",
    phaseNumber: 2,
    title: "Planning Before Coding (PRDs)",
    subtitle: "The 5-Minute AI Blueprint Method",
    duration: "15 Mins",
    slidesCount: 20,
    accentColor: "blue",
    bgHex: "#1040C0",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "📐 The House Blueprint: You wouldn't pour concrete or put up walls without a sketch of where the doors and plumbing go. A PRD is just your product's floor plan in plain English.",
    description: "Why writing a 1-page plan makes coding 10x faster. Have AI interview you about your product, define your database tables before touching code, and break big goals into easy checkboxes.",
    outcomes: [
      "Let AI interview you to turn a fuzzy startup idea into a solid technical plan",
      "Define database columns in plain English before writing any SQL",
      "Break a big app into 10 bite-sized atomic tasks in a TASKS.md file",
      "Use Antigravity Planning Mode to review the plan before AI touches a file"
    ],
    workflowSteps: [
      { step: "01", title: "AI INTERVIEW", description: "Prompt AI: 'Quiz me on my app idea one question at a time'.", tag: "Idea" },
      { step: "02", title: "PRD BLUEPRINT", description: "AI formats a clean 1-page Product Requirements Document.", tag: "Plan" },
      { step: "03", title: "CHECKLIST", description: "Convert the plan into simple checkboxes in TASKS.md.", tag: "Tasks" },
      { step: "04", title: "TICK & BUILD", description: "Prompt AI for Task 1 only. Verify. Check off. Move to Task 2.", tag: "Build" }
    ]
  },

  // ==========================================
  // PHASE 3: THE BUILDER'S TOOLKIT
  // ==========================================
  {
    id: "m7",
    slug: "7-ui-magic",
    number: 7,
    phase: "Phase 3: The Builder's Toolkit",
    phaseNumber: 3,
    title: "LEGO Bricks for UI (Free Tools)",
    subtitle: "Aceternity, Shadcn, Magic UI & 3D Web",
    duration: "15 Mins",
    slidesCount: 25,
    accentColor: "yellow",
    bgHex: "#F0C020",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "🧱 LEGO Sets for Websites: You don't have to melt plastic in a factory to build a castle—you snap pre-made LEGO bricks together. Modern UI libraries are free, pre-designed Apple-grade LEGO bricks.",
    description: "Never build an ugly website. Discover the best free UI component websites (Aceternity UI, Shadcn UI, Magic UI) with glowing cards, smooth animations, and 3D graphics.",
    outcomes: [
      "Copy-paste glowing 3D cards from Aceternity UI for free",
      "Use Shadcn UI for clean, accessible buttons, inputs, and popups",
      "Create Apple-style Bento Grids to showcase product features",
      "Feed a screenshot of your favorite website to AI and recreate the layout"
    ],
    workflowSteps: [
      { step: "01", title: "PICK BRICKS", description: "Browse Aceternity UI or Shadcn to find components you love.", tag: "Pick" },
      { step: "02", title: "COPY CODE", description: "Ask AI to insert the component into your hero or dashboard.", tag: "Insert" },
      { step: "03", title: "CUSTOMIZE", description: "Swap placeholder titles, colors, and icons to match your brand.", tag: "Style" },
      { step: "04", title: "MOBILE TEST", description: "Check that it looks gorgeous on iPhone and laptop screens.", tag: "Verify" }
    ]
  },
  {
    id: "m8",
    slug: "8-git-github",
    number: 8,
    phase: "Phase 3: The Builder's Toolkit",
    phaseNumber: 3,
    title: "Video Game Save Points (Git)",
    subtitle: "Never Lose Your Work & Fix Conflicts with AI",
    duration: "15 Mins",
    slidesCount: 20,
    accentColor: "black",
    bgHex: "#121212",
    heroImage: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "🎮 Checkpoint Saves: Git is like saving your game before fighting a tough boss. If your code breaks, you don't start over—you just reload your last working save point.",
    description: "Understand Git in plain English. Learn GitHub Desktop for 1-click saves, and watch how AI automatically merges conflicting code when two edits clash.",
    outcomes: [
      "The difference between Git (your local camera) and GitHub (cloud backup)",
      "How to use GitHub Desktop without memorizing terminal commands",
      "What a merge conflict is (two people editing the same line)",
      "How to ask AI to resolve merge conflicts in 5 seconds"
    ],
    workflowSteps: [
      { step: "01", title: "SAVE POINT", description: "Commit your code whenever a feature works cleanly.", tag: "Save" },
      { step: "02", title: "EXPERIMENT", description: "Create a branch to test wild new ideas without risking your app.", tag: "Branch" },
      { step: "03", title: "CONFLICT?", description: "If code clashes, don't panic. AI reads both versions.", tag: "Clash" },
      { step: "04", title: "AI MERGE", description: "AI combines the best of both edits cleanly. Problem solved.", tag: "Fix" }
    ]
  },
  {
    id: "m9",
    slug: "9-mcp",
    number: 9,
    phase: "Phase 3: The Builder's Toolkit",
    phaseNumber: 3,
    title: "The Universal USB-C Plug (MCP)",
    subtitle: "Giving AI Real-World Tools & Live Databases",
    duration: "15 Mins",
    slidesCount: 25,
    accentColor: "red",
    bgHex: "#D02020",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "🔌 The Universal USB-C Cable: Instead of buying a different cable for every gadget, USB-C plugs into everything. MCP is USB-C for AI: it lets Claude or Antigravity plug into databases, files, and browsers.",
    description: "Understand Anthropic's open standard. Connect AI directly to your database, let it read your spreadsheets, search Google, and manage your GitHub issues autonomously.",
    outcomes: [
      "Why MCP turns an AI chatbot into an active computer agent",
      "Connect AI directly to PostgreSQL so it sees your actual tables",
      "Let AI use a real web browser to research live documentation",
      "Build your own custom MCP tool in 30 lines of Python"
    ],
    workflowSteps: [
      { step: "01", title: "PLUG IN", description: "Add an MCP server (like Postgres or Filesystem) to your config.", tag: "Plug" },
      { step: "02", title: "DISCOVER", description: "AI sees what tools are available (read table, find file).", tag: "Tools" },
      { step: "03", title: "EXECUTE", description: "AI runs real queries against real data instead of guessing.", tag: "Run" },
      { step: "04", title: "ANSWER", description: "You get 100% accurate answers based on live data.", tag: "Truth" }
    ]
  },

  // ==========================================
  // PHASE 4: FULL-STACK, WEB3 & LAUNCHING
  // ==========================================
  {
    id: "m10",
    slug: "10-fullstack",
    number: 10,
    phase: "Phase 4: Full-Stack & Web3",
    phaseNumber: 4,
    title: "Building a Real Web App",
    subtitle: "Next.js, Supabase, Safe Secrets & Stripe",
    duration: "20 Mins",
    slidesCount: 30,
    accentColor: "blue",
    bgHex: "#1040C0",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "🍽️ The Restaurant: The dining room and menu is the Frontend. The waiter taking your order is the Server Action. The locked kitchen pantry where food is stored is the Supabase Database.",
    description: "Understand how a complete web business works. From what the user sees on their phone, to storing accounts safely, avoiding API secret leaks with NEXT_PUBLIC_, and taking payments with Stripe.",
    outcomes: [
      "The 4 pieces of every web app: Frontend, Server, Database, Payments",
      "Secret Safety: Never leak private keys with NEXT_PUBLIC_ in client code",
      "How Supabase stores user profiles and keeps data private with RLS",
      "How to change database columns safely without deleting live user data"
    ],
    workflowSteps: [
      { step: "01", title: "FRONTEND", description: "User fills out a signup form on your website.", tag: "Screen" },
      { step: "02", title: "SERVER", description: "Next.js checks passwords and validates details safely.", tag: "Brain" },
      { step: "03", title: "DATABASE", description: "Supabase saves the user account in a secure Postgres table.", tag: "Vault" },
      { step: "04", title: "PAYMENTS", description: "Stripe handles the credit card and unlocks Pro access.", tag: "Money" }
    ]
  },
  {
    id: "m11",
    slug: "11-web3",
    number: 11,
    phase: "Phase 4: Full-Stack & Web3",
    phaseNumber: 4,
    title: "Blockchain for Beginners",
    subtitle: "Smart Contracts, Crypto Wallets & Escrows",
    duration: "15 Mins",
    slidesCount: 25,
    accentColor: "yellow",
    bgHex: "#F0C020",
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "🎰 The Digital Vending Machine: You put in a coin, press the button, and the drink drops out automatically. Nobody can steal your money, and no store clerk is needed. That is a Smart Contract.",
    description: "Demystify blockchain without the hype. Write your first Solidity contract with AI, audit it for safety, and add a 'Connect Wallet' button to your website in 3 lines of code.",
    outcomes: [
      "Web3 in plain terms: Wallet = Login, Contract = Rules, Chain = Database",
      "Generate and audit Solidity contracts using battle-tested OpenZeppelin templates",
      "Add a 'Connect Wallet' button to Next.js with RainbowKit & Wagmi",
      "Simulate an automated freelance escrow where funds release only when approved"
    ],
    workflowSteps: [
      { step: "01", title: "CONTRACT", description: "AI writes the smart contract rules in Solidity.", tag: "Rules" },
      { step: "02", title: "AUDIT", description: "Ask AI to check for security flaws before spending real money.", tag: "Security" },
      { step: "03", title: "WALLET", description: "Add RainbowKit so visitors can log in with MetaMask or Coinbase.", tag: "Login" },
      { step: "04", title: "DEPLOY", description: "Launch on Base testnet for $0 and test live transactions.", tag: "Live" }
    ]
  },
  {
    id: "m12",
    slug: "12-capstone",
    number: 12,
    phase: "Phase 4: Full-Stack & Web3",
    phaseNumber: 4,
    title: "The 3-Point Test & Launch Day",
    subtitle: "Verify Without Writing Code & Ship on Vercel",
    duration: "15 Mins",
    slidesCount: 20,
    accentColor: "black",
    bgHex: "#121212",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "🥪 The Visual Test Sandwich: You don't need complex testing frameworks. Just do 3 checks: 1. Click the button (does it move?). 2. Press F12 (is there red text?). 3. Check Supabase (did the new row appear?). All 3 pass? You're good to ship!",
    description: "How to test your app without writing automated test code. Avoid the top 10 beginner pitfalls, deploy to Vercel in 1 click, and follow the simple 30-day product launch roadmap.",
    outcomes: [
      "Master the 3-Point Visual Test Sandwich (Click, Red text, Database check)",
      "Deploy live to the internet on Vercel with automatic SSL and custom domains",
      "Peer dependency fixes: Using `--legacy-peer-deps` when packages clash",
      "Your step-by-step 30-day plan to launch your first product publicly"
    ],
    workflowSteps: [
      { step: "01", title: "3-POINT TEST", description: "Click button → check F12 console → check Supabase row.", tag: "Test" },
      { step: "02", title: "DEPLOY", description: "Push to GitHub and connect Vercel for 1-click live hosting.", tag: "Launch" },
      { step: "03", title: "DOMAIN", description: "Attach your custom domain in 2 minutes with a simple CNAME.", tag: "DNS" },
      { step: "04", title: "SHARE", description: "Share on X (#VibeCoding) and Product Hunt to get your first users.", tag: "Grow" }
    ]
  }
];
