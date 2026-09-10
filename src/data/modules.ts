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
  // PHASE 3: THE BUILDER'S TOOLKIT & GIT SAFETY
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
    slug: "9-what-not-to-push",
    number: 9,
    phase: "Phase 3: The Builder's Toolkit",
    phaseNumber: 3,
    title: "What NEVER to Push to GitHub",
    subtitle: ".gitignore, Secret Scanners & Leaked Key Protocol",
    duration: "15 Mins",
    slidesCount: 20,
    accentColor: "red",
    bgHex: "#D02020",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "🔒 The Locked Safe: You wouldn't leave your house keys and credit card pin stuck to your front door for everyone on the street to see. Your .gitignore file is the locked safe that keeps secrets off the public internet.",
    description: "Learn what files must never be committed to Git (.env, node_modules, .pem keys). Understand how automated bot scrapers find leaked keys in seconds, and master the Defcon-1 emergency purge protocol.",
    outcomes: [
      "The master .gitignore template for Next.js, Node, and Python apps",
      "Why deleting a leaked key in a new commit DOES NOT erase it from Git history",
      "How to use `git rm --cached` and BFG Repo-Cleaner to completely wipe exposed secrets",
      "How to install Git pre-commit hooks to block accidental key commits automatically"
    ],
    workflowSteps: [
      { step: "01", title: ".GITIGNORE", description: "Add .env and node_modules to .gitignore before your first commit.", tag: "Lock" },
      { step: "02", title: "CHECK STATUS", description: "Run `git status` to ensure secrets are invisible to git.", tag: "Inspect" },
      { step: "03", title: "IF LEAKED", description: "Immediately REVOKE the API key in the provider dashboard.", tag: "Revoke" },
      { step: "04", title: "PURGE GIT", description: "Use `git rm --cached` and BFG repo cleaner to erase past commits.", tag: "Clean" }
    ]
  },
  {
    id: "m10",
    slug: "10-mcp",
    number: 10,
    phase: "Phase 3: The Builder's Toolkit",
    phaseNumber: 3,
    title: "The Universal USB-C Plug (MCP)",
    subtitle: "Giving AI Real-World Tools & Live Databases",
    duration: "15 Mins",
    slidesCount: 25,
    accentColor: "blue",
    bgHex: "#1040C0",
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
  // PHASE 4: FULL-STACK ARCHITECTURES & WEB3
  // ==========================================
  {
    id: "m11",
    slug: "11-fullstack",
    number: 11,
    phase: "Phase 4: Full-Stack & Web3",
    phaseNumber: 4,
    title: "Full-Stack Web Architecture",
    subtitle: "Next.js, Supabase, Safe Secrets & Stripe",
    duration: "20 Mins",
    slidesCount: 30,
    accentColor: "yellow",
    bgHex: "#F0C020",
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
    id: "m12",
    slug: "12-mern-stack",
    number: 12,
    phase: "Phase 4: Full-Stack & Web3",
    phaseNumber: 4,
    title: "Building a MERN App with AI",
    subtitle: "MongoDB Atlas, 0.0.0.0/0 Whitelist, Express & React",
    duration: "20 Mins",
    slidesCount: 30,
    accentColor: "black",
    bgHex: "#121212",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "📦 The Warehouse & Delivery Truck: MongoDB is the warehouse holding boxes of documents. Express & Node are the delivery dispatch center with specific routes (/api/posts). React is the friendly storefront where customers browse and order.",
    description: "Step-by-step masterclass on building a MERN stack app with AI. Learn how to set up MongoDB Atlas, fix the dreaded ETIMEDOUT error by whitelisting 0.0.0.0/0, create Express REST endpoints, and connect React without CORS bugs.",
    outcomes: [
      "Create a free MongoDB Atlas cluster and generate your secure MONGO_URI",
      "Fix the #1 beginner trap: Add Network Access 0.0.0.0/0 to prevent timeout freezes",
      "Build a clean 50-line Express + Mongoose server with CORS enabled",
      "Connect React components using async fetch with loading and error states"
    ],
    workflowSteps: [
      { step: "01", title: "ATLAS DB", description: "Create free MongoDB cluster and copy connection string.", tag: "Database" },
      { step: "02", title: "WHITELIST", description: "Add 0.0.0.0/0 in Network Access so your server can connect.", tag: "Network" },
      { step: "03", title: "EXPRESS API", description: "Set up Mongoose schemas and REST endpoints with CORS.", tag: "Backend" },
      { step: "04", title: "REACT UI", description: "Fetch and display data in React with real-time updates.", tag: "Frontend" }
    ]
  },
  {
    id: "m13",
    slug: "13-web3",
    number: 13,
    phase: "Phase 4: Full-Stack & Web3",
    phaseNumber: 4,
    title: "Blockchain for Beginners",
    subtitle: "Smart Contracts, Crypto Wallets & Escrows",
    duration: "15 Mins",
    slidesCount: 25,
    accentColor: "red",
    bgHex: "#D02020",
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

  // ==========================================
  // PHASE 5: TESTING, DEPLOYMENT & LAUNCH
  // ==========================================
  {
    id: "m14",
    slug: "14-testing",
    number: 14,
    phase: "Phase 5: Testing & Deployment",
    phaseNumber: 5,
    title: "The Testing Masterclass",
    subtitle: "Unit, Integration & Playwright End-to-End Tests",
    duration: "20 Mins",
    slidesCount: 25,
    accentColor: "blue",
    bgHex: "#1040C0",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "🤖 The Robot Secret Shopper: Instead of clicking every button on your website by hand every day, you program a robot customer to open Chrome, fill out forms, buy products, and tell you if anything broke.",
    description: "Stop fearing code breakages. Demystify the testing pyramid (Unit vs Integration vs E2E), watch Playwright simulate real browser interactions, and learn how to ask AI to generate comprehensive test suites in seconds.",
    outcomes: [
      "Understand the 4 testing tiers: Unit (Vitest), Integration (RTL), E2E (Playwright), Visual",
      "Run automated browser tests with Playwright that click buttons and assert URL changes",
      "Use the 3-Point Visual Test Sandwich for 30-second manual sanity checks",
      "Direct AI to generate complete test suites automatically using atomic test prompts"
    ],
    workflowSteps: [
      { step: "01", title: "CHOOSE TIER", description: "Decide whether you need Unit tests or an E2E user simulation.", tag: "Scope" },
      { step: "02", title: "AI TEST PLAN", description: "Ask AI: 'Generate Playwright tests covering login and checkout'.", tag: "Prompt" },
      { step: "03", title: "RUN SUITE", description: "Execute `npx playwright test` to watch simulated browsers run.", tag: "Execute" },
      { step: "04", title: "ASSERT GREEN", description: "Verify all assertions pass with 0 errors before shipping.", tag: "Verify" }
    ]
  },
  {
    id: "m15",
    slug: "15-deployment",
    number: 15,
    phase: "Phase 5: Testing & Deployment",
    phaseNumber: 5,
    title: "Production Deployment",
    subtitle: "Vercel, Netlify, Render & VPS with PM2/Nginx",
    duration: "20 Mins",
    slidesCount: 25,
    accentColor: "yellow",
    bgHex: "#F0C020",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "🚀 Launchpad to Orbit: Building code on your laptop is like assembling a rocket inside a garage. Deployment is rolling it out onto the launchpad, fueling the engines, and broadcasting it live to the entire planet.",
    description: "Ship your app to production with zero confusion. Master 1-click Vercel & Netlify Git deployments, learn when to use Render for Express backends, and discover how to run apps on a $4/month Linux VPS using PM2 and Nginx.",
    outcomes: [
      "Deploy Next.js apps to Vercel in 1 click with automatic SSL and Edge CDN",
      "Deploy persistent Node/Express backends to Render with custom build commands",
      "Configure Ubuntu VPS instances with PM2 process manager for 24/7 self-healing uptime",
      "Set up Nginx reverse proxy with free Let's Encrypt SSL via Certbot"
    ],
    workflowSteps: [
      { step: "01", title: "GIT PUSH", description: "Push your working code to the main branch on GitHub.", tag: "Git" },
      { step: "02", title: "PICK HOST", description: "Choose Vercel for Next.js, Render for Express, or VPS for control.", tag: "Hosting" },
      { step: "03", title: "ADD SECRETS", description: "Enter environment variables securely in the host dashboard.", tag: "Config" },
      { step: "04", title: "GO LIVE", description: "Trigger build and receive your global HTTPS production URL.", tag: "Ship" }
    ]
  },
  {
    id: "m16",
    slug: "16-domains-launch",
    number: 16,
    phase: "Phase 5: Testing & Deployment",
    phaseNumber: 5,
    title: "Custom Domains & Launch Day",
    subtitle: "DNS Records, SSL Setup & 30-Day Go-To-Market",
    duration: "15 Mins",
    slidesCount: 20,
    accentColor: "black",
    bgHex: "#121212",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    eli5Analogy: "🏠 The Custom Street Address: Deploying gives you a generic apartment number like vibe-app-xyz.vercel.app. Adding a custom domain replaces that with your own prestigious street address like mybrand.com.",
    description: "The definitive guide to connecting custom domains. Demystify DNS A records and CNAME aliases, verify propagation with global resolvers, and execute the battle-tested 30-day product launch checklist.",
    outcomes: [
      "Demystify DNS: A records (IP addresses) vs CNAME records (domain aliases)",
      "Step-by-step Vercel custom domain configuration (76.76.21.21 & cname.vercel-dns.com)",
      "Verify global DNS propagation and automatic SSL certificate issuance",
      "Execute the 30-day Go-To-Market roadmap to launch on Product Hunt and X"
    ],
    workflowSteps: [
      { step: "01", title: "BUY DOMAIN", description: "Purchase your domain on Namecheap, GoDaddy, or Cloudflare.", tag: "Buy" },
      { step: "02", title: "ADD TO VERCEL", description: "Enter your domain in Vercel project settings to view DNS records.", tag: "Vercel" },
      { step: "03", title: "CONFIGURE DNS", description: "Set A record to 76.76.21.21 and CNAME www to cname.vercel-dns.com.", tag: "DNS" },
      { step: "04", title: "PROPAGATE", description: "Check status, receive free automatic SSL certificate, and launch!", tag: "Live" }
    ]
  }
];
