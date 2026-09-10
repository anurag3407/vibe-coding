"use client";

import React, { useState } from "react";
import { TerminalSnippet } from "../TerminalSnippet";
import { 
  Globe, 
  Server, 
  Cloud, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Layers,
  Lock
} from "lucide-react";
import { clsx } from "clsx";

export const DeploymentDomainSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"vercel" | "render" | "vps" | "domain">("vercel");
  const [dnsVerified, setDnsVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [simulatedDomain, setSimulatedDomain] = useState("myvibecodingapp.com");
  const [deployStep, setDeployStep] = useState<number>(0);
  const [isDeploying, setIsDeploying] = useState(false);

  const runVercelDeploySimulation = () => {
    setIsDeploying(true);
    setDeployStep(1);
    setTimeout(() => setDeployStep(2), 1000);
    setTimeout(() => setDeployStep(3), 2200);
    setTimeout(() => {
      setDeployStep(4);
      setIsDeploying(false);
    }, 3400);
  };

  const handleVerifyDns = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setDnsVerified(true);
    }, 1800);
  };

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-6 sm:p-10 my-10">
      
      {/* Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="inline-block px-3 py-1 bg-[#1040C0] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm">
            PRODUCTION DEPLOYMENT &amp; NETWORKING
          </span>
          <span className="text-xs font-mono font-bold text-zinc-500 uppercase">
            VERCEL &bull; NETLIFY &bull; RENDER &bull; VPS &bull; DNS
          </span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          WHERE &amp; HOW TO SHIP YOUR APP TO THE WORLD
        </h3>
        <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-3xl leading-relaxed">
          From 1-click cloud deployments on Vercel to dedicated Linux VPS servers with PM2 &amp; Nginx, and connecting your own custom domain with automatic SSL encryption.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { id: "vercel", label: "1. Vercel & Netlify", sub: "1-Click Serverless" },
          { id: "render", label: "2. Render & Railway", sub: "Express / Node Backends" },
          { id: "vps", label: "3. Linux VPS (PM2)", sub: "Ubuntu & Nginx Control" },
          { id: "domain", label: "4. Custom Domains", sub: "DNS, A & CNAME Records" },
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
          TAB 1: VERCEL & NETLIFY
      ========================================================================= */}
      {activeTab === "vercel" && (
        <div className="space-y-8">
          <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212]">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 bg-[#1040C0] text-white text-xs font-black uppercase">
                THE MODERN GOLD STANDARD
              </span>
              <span className="text-xs font-mono font-bold text-zinc-500">FREE TIER AVAILABLE</span>
            </div>

            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] mb-3">
              WHY VERCEL &amp; NETLIFY ARE PERFECT FOR NEXT.JS &amp; REACT
            </h4>

            <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed mb-6">
              When you push code to GitHub, Vercel automatically detects your Next.js framework, runs <code className="bg-white px-1.5 py-0.5 border border-black font-mono">npm run build</code>, compresses your images, creates an Edge CDN distribution across 100+ global cities, and issues a live HTTPS URL in under 60 seconds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[
                { step: "01", title: "PUSH TO GITHUB", desc: "Push your clean working code to main branch." },
                { step: "02", title: "IMPORT PROJECT", desc: "Go to vercel.com -> New Project -> Select your repo." },
                { step: "03", title: "ENV VARIABLES", desc: "Add SUPABASE_URL, MONGO_URI, or API keys." },
                { step: "04", title: "CLICK DEPLOY", desc: "Vercel builds and assigns a free .vercel.app domain." }
              ].map((s, idx) => (
                <div key={idx} className="p-4 bg-white border-2 border-black">
                  <div className="text-[10px] font-mono font-bold text-[#D02020] mb-1">{s.step}</div>
                  <div className="text-xs font-black uppercase mb-1">{s.title}</div>
                  <div className="text-[11px] text-zinc-600 font-medium">{s.desc}</div>
                </div>
              ))}
            </div>

            {/* Interactive Deploy Simulation */}
            <div className="p-6 bg-[#121212] text-white border-2 border-black">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-[#F0C020]">
                  INTERACTIVE 1-CLICK DEPLOY SIMULATOR
                </span>
                <button
                  onClick={runVercelDeploySimulation}
                  disabled={isDeploying}
                  className="px-4 py-2 bg-[#D02020] text-white border-2 border-white font-black text-xs uppercase tracking-wider hover:bg-red-700 disabled:opacity-50 btn-tactile"
                >
                  {isDeploying ? "DEPLOYING TO EDGE..." : "SIMULATE VERCEL DEPLOY"}
                </button>
              </div>

              <div className="font-mono text-xs space-y-2 bg-black/60 p-4 border border-zinc-700">
                <div className="text-zinc-400">
                  $ vercel --prod --confirm
                </div>
                {deployStep >= 1 && (
                  <div className="text-blue-400 flex items-center gap-2">
                    <RefreshCw className={clsx("w-3.5 h-3.5", deployStep < 4 && "animate-spin")} />
                    [1/4] Cloning github.com/anurag3407/vibe-coding (commit 98cf2a1)...
                  </div>
                )}
                {deployStep >= 2 && (
                  <div className="text-yellow-400 flex items-center gap-2">
                    <RefreshCw className={clsx("w-3.5 h-3.5", deployStep < 4 && "animate-spin")} />
                    [2/4] Running &quot;npm run build&quot; &bull; Optimized 16 pages in 2.4s...
                  </div>
                )}
                {deployStep >= 3 && (
                  <div className="text-purple-400 flex items-center gap-2">
                    <RefreshCw className={clsx("w-3.5 h-3.5", deployStep < 4 && "animate-spin")} />
                    [3/4] Uploading build cache &amp; provisioning Edge functions across 18 regions...
                  </div>
                )}
                {deployStep >= 4 && (
                  <div className="text-green-400 flex items-center gap-2 font-bold pt-2 border-t border-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    [4/4] SUCCESS! Deployed to: https://vibe-coding-workshop.vercel.app [200 OK]
                  </div>
                )}
                {deployStep === 0 && (
                  <div className="text-zinc-600 italic">
                    Click &quot;Simulate Vercel Deploy&quot; above to watch the Edge build lifecycle.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: RENDER & RAILWAY
      ========================================================================= */}
      {activeTab === "render" && (
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212]">
            <span className="px-2.5 py-1 bg-[#F0C020] text-[#121212] text-xs font-black uppercase inline-block mb-3">
              BEST FOR PERSISTENT BACKENDS &amp; APIS
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] mb-3">
              WHEN TO USE RENDER INSTEAD OF VERCEL
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed mb-6">
              Vercel is designed for <em>serverless</em> functions (which run for a few seconds and shut down). If your backend has long-running connections (like <strong>WebSockets, Express servers, Telegram bots, or heavy background jobs</strong>), you need a persistent Web Service like <strong>Render.com</strong> or <strong>Railway.app</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 bg-white border-2 border-black">
                <div className="flex items-center gap-2 font-black text-sm uppercase text-[#D02020] mb-2">
                  <Server className="w-4 h-4" />
                  <span>STEP 1: ROOT DIRECTORY OR DOCKERFILE</span>
                </div>
                <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-3">
                  If your Express backend is in a folder called <code className="bg-zinc-100 px-1 font-mono">/server</code>, set the <strong>Root Directory</strong> to <code className="bg-zinc-100 px-1 font-mono">server</code> in Render settings so it knows where to run <code className="bg-zinc-100 px-1 font-mono">npm install</code>.
                </p>
                <div className="p-3 bg-zinc-100 border border-zinc-300 font-mono text-[11px] text-zinc-800">
                  Build Command: <strong>npm install</strong><br />
                  Start Command: <strong>node server.js</strong>
                </div>
              </div>

              <div className="p-5 bg-white border-2 border-black">
                <div className="flex items-center gap-2 font-black text-sm uppercase text-[#1040C0] mb-2">
                  <Cpu className="w-4 h-4" />
                  <span>STEP 2: BIND TO PORT ENVIRONMENT VARIABLE</span>
                </div>
                <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-3">
                  Render dynamically assigns a port to your container. Never hardcode port 5000! Always write:
                </p>
                <div className="p-3 bg-[#121212] text-green-400 border border-black font-mono text-[11px]">
                  const PORT = process.env.PORT || 10000;<br />
                  app.listen(PORT, &apos;0.0.0.0&apos;, () =&gt; ...);
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FFF9C4] border-2 border-black flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#D02020] flex-shrink-0 mt-0.5" />
              <div className="text-xs font-medium text-zinc-800">
                <strong className="font-black text-[#D02020]">FREE TIER SLEEP TRICK: </strong>
                Render free services go to sleep after 15 minutes of inactivity. When a user visits, it takes 50 seconds to wake up (cold start). You can ping your URL every 10 minutes for free using <strong>cron-job.org</strong> or <strong>UptimeRobot</strong> to keep it awake 24/7!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: VPS / CLOUD INSTANCE (UBUNTU, PM2 & NGINX)
      ========================================================================= */}
      {activeTab === "vps" && (
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212]">
            <span className="px-2.5 py-1 bg-[#121212] text-white text-xs font-black uppercase inline-block mb-3">
              UNLIMITED FREEDOM &bull; $4/MONTH HETZNER OR DIGITALOCEAN
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] mb-3">
              RUNNING YOUR APP ON A REAL LINUX CLOUD SERVER
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed mb-6">
              When your app grows or you want zero vendor lock-in, renting a $4/month Ubuntu cloud instance gives you 100% control. Here are the 4 battle-tested commands every engineer uses:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-white border-2 border-black">
                <div className="text-xs font-black uppercase text-[#1040C0] mb-2">
                  1. KEEP YOUR APP RUNNING 24/7 WITH PM2 (PROCESS MANAGER)
                </div>
                <p className="text-xs text-zinc-600 mb-3 font-medium">
                  If your server restarts or an unhandled bug crashes Node, PM2 restarts it instantly in 0.1 seconds:
                </p>
                <TerminalSnippet
                  command={`# Install PM2 globally
sudo npm install -g pm2

# Start your app under PM2 supervision
pm2 start npm --name "vibe-app" -- start

# Make PM2 restart automatically when the Linux server boots
pm2 startup
pm2 save

# Check live CPU and RAM usage
pm2 status`}
                  title="UBUNTU PM2 COMMANDS"
                  shellType="bash"
                />
              </div>

              <div className="p-4 bg-white border-2 border-black">
                <div className="text-xs font-black uppercase text-[#D02020] mb-2">
                  2. NGINX REVERSE PROXY &amp; FREE CERTBOT SSL
                </div>
                <p className="text-xs text-zinc-600 mb-3 font-medium">
                  Direct internet traffic from ports 80/443 (HTTP/HTTPS) to your local Node app on port 3000:
                </p>
                <TerminalSnippet
                  command={`# Install Nginx and Certbot
sudo apt update && sudo apt install nginx certbot python3-certbot-nginx -y

# Obtain free Let's Encrypt SSL certificate in 1 line
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com`}
                  title="NGINX + SSL CERTBOT"
                  shellType="bash"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 4: CUSTOM DOMAIN & DNS IN VERCEL
      ========================================================================= */}
      {activeTab === "domain" && (
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212]">
            <span className="px-2.5 py-1 bg-[#1040C0] text-white text-xs font-black uppercase inline-block mb-3">
              STEP-BY-STEP DOMAIN SETUP
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] mb-3">
              HOW TO CONNECT YOUR OWN DOMAIN IN VERCEL
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed mb-6">
              DNS is simply the <strong>Internet&apos;s Phonebook</strong>. It translates a human-friendly name like <code className="bg-white px-1 font-mono">mycoolbrand.com</code> into the computer IP address where your site lives.
            </p>

            {/* DNS Records Table */}
            <div className="p-6 bg-white border-2 border-black mb-6">
              <span className="text-xs font-black uppercase text-[#121212] block mb-3">
                THE EXACT 2 DNS RECORDS TO ADD IN YOUR DOMAIN REGISTRAR (NAMECHEAP, GODADDY, CLOUDFLARE):
              </span>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#121212] text-white">
                      <th className="p-3 border border-black font-black uppercase">TYPE</th>
                      <th className="p-3 border border-black font-black uppercase">NAME / HOST</th>
                      <th className="p-3 border border-black font-black uppercase">VALUE / POINTS TO</th>
                      <th className="p-3 border border-black font-black uppercase">PURPOSE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-black bg-zinc-50">
                      <td className="p-3 font-mono font-bold text-[#D02020]">A</td>
                      <td className="p-3 font-mono font-bold">@ (or leave empty)</td>
                      <td className="p-3 font-mono font-bold bg-yellow-100">76.76.21.21</td>
                      <td className="p-3 font-medium text-zinc-700">Points root domain (yourdomain.com) to Vercel IP</td>
                    </tr>
                    <tr className="border border-black bg-white">
                      <td className="p-3 font-mono font-bold text-[#1040C0]">CNAME</td>
                      <td className="p-3 font-mono font-bold">www</td>
                      <td className="p-3 font-mono font-bold bg-blue-100">cname.vercel-dns.com</td>
                      <td className="p-3 font-medium text-zinc-700">Points www.yourdomain.com to Vercel Edge CDN</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Interactive Domain DNS Verifier Simulator */}
            <div className="p-6 bg-[#121212] text-white border-2 border-black">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-[#F0C020]">
                    LIVE DNS PROPAGATION CHECKER SIMULATOR
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Test how global DNS resolvers see your custom domain
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={simulatedDomain}
                    onChange={(e) => {
                      setSimulatedDomain(e.target.value);
                      setDnsVerified(false);
                    }}
                    className="px-3 py-1.5 bg-white text-black font-mono text-xs border-2 border-black font-bold"
                    placeholder="yourdomain.com"
                  />
                  <button
                    onClick={handleVerifyDns}
                    disabled={verifying}
                    className="px-4 py-2 bg-[#F0C020] text-[#121212] border-2 border-white font-black text-xs uppercase hover:bg-yellow-400 disabled:opacity-50 btn-tactile flex items-center gap-1.5"
                  >
                    <RefreshCw className={clsx("w-3.5 h-3.5", verifying && "animate-spin")} />
                    <span>{verifying ? "CHECKING..." : "VERIFY DNS"}</span>
                  </button>
                </div>
              </div>

              {/* Status Display */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { resolver: "Google Public DNS (8.8.8.8)", status: dnsVerified ? "76.76.21.21 [RESOLVED]" : "Pending" },
                  { resolver: "Cloudflare DNS (1.1.1.1)", status: dnsVerified ? "76.76.21.21 [RESOLVED]" : "Pending" },
                  { resolver: "Vercel Edge Certificate", status: dnsVerified ? "SSL Issued (Valid Let's Encrypt)" : "Unverified" },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-black/60 border border-zinc-700">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">{item.resolver}</div>
                    <div className={clsx(
                      "text-xs font-mono font-bold mt-1",
                      dnsVerified ? "text-green-400" : "text-yellow-500"
                    )}>
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>

              {dnsVerified && (
                <div className="mt-4 p-4 bg-green-950/80 border-2 border-green-500 text-green-200 text-xs flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <strong>CONGRATULATIONS!</strong> Your custom domain <strong>{simulatedDomain}</strong> is now live globally with automatic SSL HTTPS encryption!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
