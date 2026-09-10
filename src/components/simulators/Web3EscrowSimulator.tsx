"use client";

import React, { useState } from "react";
import { Wallet, ShieldCheck, ArrowRight, CheckCircle, Lock, Coins } from "lucide-react";
import { clsx } from "clsx";

export const Web3EscrowSimulator: React.FC = () => {
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const [escrowState, setEscrowState] = useState<"created" | "deposited" | "submitted" | "released">("created");
  const [txHash, setTxHash] = useState<string | null>(null);

  const mockAddress = "0x71C8...392A";

  const handleDeposit = () => {
    setEscrowState("deposited");
    setTxHash("0x8b2d71c4f9a3e61280db5941aa0c9e782163b4f1782e");
  };

  const handleSubmitWork = () => {
    setEscrowState("submitted");
    setTxHash("0x3f901ab98276cd1201948ba281726a938c6142e0892f");
  };

  const handleRelease = () => {
    setEscrowState("released");
    setTxHash("0x9c41f72810a9b8374612984019a84e61029471928371");
  };

  const handleReset = () => {
    setEscrowState("created");
    setTxHash(null);
  };

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-8 sm:p-12 my-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b-2 md:border-b-4 border-[#121212] pb-8 mb-8">
        <div>
          <span className="inline-block px-3 py-1 bg-[#1040C0] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
            DIGITAL VENDING MACHINE
          </span>
          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
            SMART CONTRACT ESCROW
          </h3>
          <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-2xl">
            A Smart Contract is just an automated digital agreement: Client locks the money, Freelancer submits the work, Client clicks approve, and money releases automatically.
          </p>
        </div>

        {/* Mock Wallet Button */}
        <div>
          {walletConnected ? (
            <div className="flex items-center gap-2 px-5 py-3 bg-green-100 border-2 md:border-4 border-black shadow-hard-sm font-mono text-xs font-black text-green-900">
              <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse" />
              <span>WALLET CONNECTED: {mockAddress}</span>
            </div>
          ) : (
            <button
              onClick={() => setWalletConnected(true)}
              className="px-5 py-3 text-xs sm:text-sm font-black uppercase tracking-wider bg-[#F0C020] text-[#121212] border-2 md:border-4 border-[#121212] shadow-hard-sm btn-tactile hover:bg-[#F0C020]/90 flex items-center gap-2"
            >
              <Wallet className="w-4 h-4" />
              <span>CLICK TO CONNECT WALLET</span>
            </button>
          )}
        </div>
      </div>

      {/* State Progress Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        {[
          { id: "created", label: "1. Contract Ready", desc: "Digital agreement created" },
          { id: "deposited", label: "2. Client Deposits", desc: "$500 safely locked" },
          { id: "submitted", label: "3. Work Delivered", desc: "Freelancer finishes task" },
          { id: "released", label: "4. Money Released", desc: "Sent to freelancer instantly" },
        ].map((step) => {
          const isPassed =
            (step.id === "created") ||
            (step.id === "deposited" && ["deposited", "submitted", "released"].includes(escrowState)) ||
            (step.id === "submitted" && ["submitted", "released"].includes(escrowState)) ||
            (step.id === "released" && escrowState === "released");

          return (
            <div
              key={step.id}
              className={clsx(
                "p-4 border-2 border-[#121212] transition-all",
                isPassed ? "bg-[#121212] text-white shadow-hard-sm" : "bg-zinc-100 text-zinc-400"
              )}
            >
              <div className="text-xs sm:text-sm font-black uppercase">{step.label}</div>
              <div className="text-[11px] font-medium text-zinc-400 mt-1">{step.desc}</div>
            </div>
          );
        })}
      </div>

      {/* Action Controller */}
      <div className="p-8 bg-zinc-50 border-2 md:border-4 border-[#121212] shadow-hard-sm mb-8">
        {!walletConnected ? (
          <div className="text-center py-6">
            <Lock className="w-10 h-10 mx-auto mb-3 text-[#D02020]" />
            <p className="text-sm sm:text-base font-black uppercase text-[#121212]">
              Click the yellow &quot;Connect Wallet&quot; button above to test the simulation!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              {escrowState === "created" && (
                <button
                  onClick={handleDeposit}
                  className="px-6 py-3 text-xs sm:text-sm font-black uppercase bg-[#1040C0] text-white border-2 md:border-4 border-black shadow-hard-sm btn-tactile hover:bg-[#1040C0]/90 flex items-center gap-2"
                >
                  <span>STEP 1: CLIENT DEPOSITS $500 (ETH)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {escrowState === "deposited" && (
                <button
                  onClick={handleSubmitWork}
                  className="px-6 py-3 text-xs sm:text-sm font-black uppercase bg-[#F0C020] text-black border-2 md:border-4 border-black shadow-hard-sm btn-tactile hover:bg-[#F0C020]/90 flex items-center gap-2"
                >
                  <span>STEP 2: FREELANCER SUBMITS FINISHED APP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {escrowState === "submitted" && (
                <button
                  onClick={handleRelease}
                  className="px-6 py-3 text-xs sm:text-sm font-black uppercase bg-green-600 text-white border-2 md:border-4 border-black shadow-hard-sm btn-tactile hover:bg-green-700 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>STEP 3: CLIENT APPROVES & RELEASES $500</span>
                </button>
              )}

              {escrowState === "released" && (
                <div className="flex flex-wrap items-center gap-4">
                  <div className="px-5 py-3 bg-green-200 text-green-900 border-2 md:border-4 border-black font-black uppercase text-xs sm:text-sm">
                    SUCCESS: FUNDS TRANSFERRED AUTOMATICALLY!
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-4 py-3 text-xs font-black uppercase bg-white border-2 border-black btn-tactile"
                  >
                    RESET DEMO
                  </button>
                </div>
              )}
            </div>

            {txHash && (
              <div className="p-4 bg-white border border-zinc-300 font-mono text-xs text-zinc-700">
                <span className="font-bold text-[#1040C0]">TRANSACTION ID: </span>
                <span className="break-all">{txHash}</span>
                <span className="ml-2 text-green-600 font-bold block sm:inline mt-1 sm:mt-0">
                  &bull; CONFIRMED SAFELY ON BLOCKCHAIN
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Plain English Note */}
      <div className="p-6 bg-[#121212] text-white border-2 md:border-4 border-black">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#F0C020] mb-2">
          <ShieldCheck className="w-5 h-5" />
          <span>Why This Protects Both Parties</span>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
          The client knows their money won&apos;t be released until the work is delivered. The freelancer knows the money is already locked in the contract, so the client can&apos;t run away without paying.
        </p>
      </div>
    </div>
  );
};
