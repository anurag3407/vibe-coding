import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe Coding Masterclass | 3-Hour Interactive Bauhaus Workshop",
  description:
    "Complete 3-hour studio-grade masterclass on Vibe Coding, Autonomous Agents, Antigravity, Claude Code, Model Context Protocol (MCP), Full-Stack Next.js 15, and Web3 Smart Contracts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#F0F0F0] text-[#121212] selection:bg-[#F0C020] selection:text-[#121212]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
