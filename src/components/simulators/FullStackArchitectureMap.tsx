"use client";

import React, { useState } from "react";
import { Layout, Server, Database, CreditCard, ArrowRight, UtensilsCrossed } from "lucide-react";
import { clsx } from "clsx";

export const FullStackArchitectureMap: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    {
      id: "client",
      title: "1. THE MENU & DINING ROOM",
      realName: "Frontend (Next.js & React)",
      tech: "What the customer sees on their screen.",
      icon: Layout,
      color: "#1040C0",
      description: "Just like the menu and tables in a restaurant, the frontend is what visitors see, tap, and interact with on their phone or laptop.",
      simpleCode: `// What the user sees:
<button className="bg-red-600 text-white font-bold p-4">
  Order Delicious Food
</button>`
    },
    {
      id: "backend",
      title: "2. THE WAITER",
      realName: "Server (Server Actions)",
      tech: "Takes the order safely to the kitchen.",
      icon: Server,
      color: "#D02020",
      description: "The waiter takes your request, verifies your table number, and carries the order to the kitchen. Customers never walk into the kitchen directly.",
      simpleCode: `// Server Action:
export async function takeOrder(item) {
  // Check if customer is logged in
  // Send order safely to database
}`
    },
    {
      id: "database",
      title: "3. THE LOCKED PANTRY",
      realName: "Database (Supabase Postgres)",
      tech: "Stores user data and orders forever.",
      icon: Database,
      color: "#F0C020",
      description: "Where all ingredients and inventory are stored securely. Supabase ensures Customer A can never see or touch Customer B's order.",
      simpleCode: `-- Safe Database Table:
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  customer_name TEXT,
  total_price INT
);`
    },
    {
      id: "thirdparty",
      title: "4. THE CASH REGISTER",
      realName: "Payments (Stripe)",
      tech: "Charges the card and unlocks features.",
      icon: CreditCard,
      color: "#121212",
      description: "Handles money safely so you don't have to handle credit card numbers yourself. Stripe confirms payment and tells your website to unlock Pro features.",
      simpleCode: `// Stripe Checkout:
const session = await stripe.checkout.create({
  amount: 2000, // $20.00
  customer_email: user.email
});`
    }
  ];

  const current = layers[activeLayer];
  const Icon = current.icon;

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-8 sm:p-12 my-10">
      
      {/* Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-8 mb-8">
        <span className="inline-block px-3 py-1 bg-[#D02020] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
          RESTAURANT ANALOGY
        </span>
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          HOW FULL-STACK APPS WORK
        </h3>
        <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-2xl">
          Every web app on the internet works like a restaurant: The Dining Room (Frontend), The Waiter (Server), The Kitchen (Database), and The Cash Register (Stripe).
        </p>
      </div>

      {/* Layer Step Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {layers.map((layer, idx) => {
          const LayerIcon = layer.icon;
          const isSelected = activeLayer === idx;

          return (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(idx)}
              className={clsx(
                "p-6 text-left border-2 md:border-4 border-[#121212] transition-all btn-tactile select-none",
                isSelected
                  ? "bg-[#121212] text-white shadow-hard-md -translate-y-1"
                  : "bg-zinc-50 text-[#121212] hover:bg-white shadow-hard-sm"
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <LayerIcon className={clsx("w-6 h-6", isSelected ? "text-[#F0C020]" : "text-[#121212]")} />
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 border border-current">
                  STEP {idx + 1}
                </span>
              </div>
              <div className="text-sm font-black uppercase tracking-tight mb-1">
                {layer.title}
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                {layer.realName}
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep Dive Panel */}
      <div className="border-2 md:border-4 border-[#121212] bg-zinc-50 p-8 shadow-hard-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b-2 border-zinc-300 pb-6 mb-6">
          <div>
            <span className="text-xs font-black uppercase px-2.5 py-1 bg-[#121212] text-white">
              PART {activeLayer + 1}: {current.realName}
            </span>
            <h4 className="text-2xl font-black uppercase tracking-tight text-[#121212] mt-2">
              {current.title}
            </h4>
            <p className="text-sm text-zinc-700 font-medium mt-1">{current.description}</p>
          </div>
        </div>

        {/* Code representation */}
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-2 block">
            HOW IT LOOKS IN CODE:
          </span>
          <div className="p-6 bg-[#121212] text-zinc-100 font-mono text-xs sm:text-sm border-2 border-black overflow-x-auto">
            <pre className="whitespace-pre-wrap leading-relaxed">
              <code>{current.simpleCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
