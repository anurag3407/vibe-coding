"use client";

import React, { useState } from "react";
import { TerminalSnippet } from "../TerminalSnippet";
import { 
  Database, 
  Server, 
  Layout, 
  Globe, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Copy, 
  ArrowRight,
  Wifi,
  Key
} from "lucide-react";
import { clsx } from "clsx";

export const MernStackSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"atlas" | "network" | "express" | "react">("atlas");

  return (
    <div className="bg-white border-2 md:border-4 border-[#121212] shadow-hard-xl rounded-none p-8 sm:p-12 my-10">
      
      {/* Header */}
      <div className="border-b-2 md:border-b-4 border-[#121212] pb-8 mb-8">
        <span className="inline-block px-3 py-1 bg-[#1040C0] text-white font-black uppercase text-xs tracking-widest border-2 border-[#121212] shadow-hard-sm mb-3">
          FULL-STACK ARCHITECTURE #2
        </span>
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
          BUILDING A MERN STACK APP WITH AI
        </h3>
        <p className="text-xs sm:text-base text-zinc-600 font-medium mt-2 max-w-3xl">
          MongoDB (Database) + Express (Server API) + React (Frontend) + Node.js (Runtime). Learn the exact steps to set up MongoDB Atlas, whitelist network access, and link frontend to backend.
        </p>
      </div>

      {/* Visual MERN Architecture Pipeline Diagram */}
      <div className="mb-8 p-6 bg-zinc-50 border-2 md:border-4 border-[#121212] shadow-hard-md">
        <div className="text-[10px] font-mono font-bold uppercase text-[#D02020] mb-3 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#D02020] animate-pulse" />
          <span>MERN END-TO-END DATA FLOW WORKFLOW</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {/* Node 1: React Frontend */}
          <div className="p-4 bg-white border-2 border-black relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-[#1040C0] text-white">
                CLIENT LAYER
              </span>
              <Layout className="w-4 h-4 text-[#1040C0]" />
            </div>
            <div className="font-black text-sm uppercase text-[#121212]">1. React UI & State</div>
            <div className="text-[11px] text-zinc-600 mt-1 font-medium">
              User types input &rarr; Dispatches async <code className="bg-zinc-100 px-1 font-mono">fetch(&apos;/api/posts&apos;)</code>.
            </div>
          </div>

          {/* Node 2: Express Server */}
          <div className="p-4 bg-white border-2 border-black relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-[#D02020] text-white">
                SERVER LAYER
              </span>
              <Server className="w-4 h-4 text-[#D02020]" />
            </div>
            <div className="font-black text-sm uppercase text-[#121212]">2. Express & CORS</div>
            <div className="text-[11px] text-zinc-600 mt-1 font-medium">
              Allows origins via CORS &rarr; Validates types with Mongoose model &rarr; Writes to DB.
            </div>
          </div>

          {/* Node 3: MongoDB Atlas */}
          <div className="p-4 bg-white border-2 border-black relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-[#121212] text-white">
                CLOUD DATABASE
              </span>
              <Database className="w-4 h-4 text-[#F0C020]" />
            </div>
            <div className="font-black text-sm uppercase text-[#121212]">3. MongoDB Atlas</div>
            <div className="text-[11px] text-zinc-600 mt-1 font-medium">
              Whitelisted <code className="bg-zinc-100 px-1 font-mono text-[#1040C0]">0.0.0.0/0</code> &rarr; Stores BSON document &rarr; Returns JSON.
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { id: "atlas", label: "1. MongoDB Atlas", sub: "Free Cloud DB" },
          { id: "network", label: "2. Whitelist 0.0.0.0/0", sub: "Network Access" },
          { id: "express", label: "3. Express & Mongoose", sub: "Backend Server" },
          { id: "react", label: "4. React Frontend", sub: "CORS & Fetch" },
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
            <div className="text-sm md:text-base font-black uppercase tracking-tight">{tab.label}</div>
            <div className="text-[11px] font-bold text-zinc-400 normal-case mt-0.5">{tab.sub}</div>
          </button>
        ))}
      </div>

      {/* Tab 1: MongoDB Atlas Setup */}
      {activeTab === "atlas" && (
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212]">
            <span className="text-xs font-black uppercase px-2.5 py-1 bg-[#1040C0] text-white inline-block mb-3">
              STEP 1: GET YOUR MONGO_URI CONNECTION STRING
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] mb-3">
              HOW TO CREATE YOUR FREE MONGODB CLUSTER
            </h4>
            <ol className="space-y-3 text-xs sm:text-sm text-zinc-700 font-medium list-decimal pl-5">
              <li>Go to <strong>mongodb.com/cloud/atlas</strong> and create a free account.</li>
              <li>Click <strong>&quot;Build a Database&quot;</strong> and select the <strong>M0 FREE Tier</strong> (Shared).</li>
              <li>Choose your nearest region (e.g. AWS us-east-1 or eu-central-1) and click <strong>Create</strong>.</li>
              <li>Under <strong>Database Access</strong>, create a database user (e.g. username: <code className="bg-white px-1 border border-black font-mono">admin</code>, and auto-generate a secure password). Save this password!</li>
              <li>Under <strong>Clusters</strong>, click <strong>&quot;Connect&quot;</strong> $\rightarrow$ <strong>&quot;Drivers&quot;</strong> $\rightarrow$ Select <strong>Node.js</strong>.</li>
              <li>Copy the connection string! It looks like:</li>
            </ol>

            <div className="mt-4 p-4 bg-[#121212] text-green-400 font-mono text-xs border-2 border-black overflow-x-auto">
              <code>
                mongodb+srv://admin:&lt;password&gt;@cluster0.abcde.mongodb.net/vibe_db?retryWrites=true&amp;w=majority
              </code>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: The #1 Trap - Whitelisting Network Access */}
      {activeTab === "network" && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 bg-[#FFF9C4] border-2 md:border-4 border-[#121212] shadow-hard-md">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-6 h-6 text-[#D02020]" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#D02020]">
                THE #1 BEGINNER TRAP: NETWORK TIMEOUT ERROR
              </span>
            </div>

            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] mb-3">
              WHY YOUR MERN APP FAILS TO CONNECT &amp; HOW TO FIX IT
            </h4>

            <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-medium mb-6">
              By default, MongoDB Atlas blocks <strong>EVERYONE</strong> from accessing your database. If you don&apos;t add Network Access, your Express server will freeze with: <code className="bg-white px-1 font-mono text-red-600 font-bold">MongooseServerSelectionError: connect ETIMEDOUT</code>.
            </p>

            <div className="p-6 bg-white border-2 border-black space-y-4">
              <div className="font-black text-sm uppercase text-[#121212]">
                THE 3-CLICK FIX (ALLOW ACCESS FROM ANYWHERE):
              </div>
              <ol className="space-y-2 text-xs sm:text-sm text-zinc-700 font-bold list-decimal pl-5">
                <li>In MongoDB Atlas left sidebar, click <strong>&quot;Network Access&quot;</strong>.</li>
                <li>Click the green button: <strong>&quot;+ Add IP Address&quot;</strong>.</li>
                <li>Click <strong>&quot;ALLOW ACCESS FROM ANYWHERE&quot;</strong> (This enters <code className="bg-zinc-100 px-1 font-mono text-[#1040C0]">0.0.0.0/0</code>).</li>
                <li>Click <strong>&quot;Confirm&quot;</strong>. Within 30 seconds, the status turns green (Active).</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Express & Mongoose Server */}
      {activeTab === "express" && (
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212]">
            <span className="text-xs font-black uppercase px-2.5 py-1 bg-[#D02020] text-white inline-block mb-3">
              STEP 3: BACKEND API WITH MONGOOSE &amp; CORS
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] mb-2">
              THE COMPLETE EXPRESS SERVER CODE
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium mb-4">
              Here is the clean 50-line backend template connecting Mongoose, Express, and CORS:
            </p>

            <TerminalSnippet
              command={`// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // Allows React frontend to make requests!
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Define a simple Schema
const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  createdAt: { type: Date, default: Date.now }
});
const Post = mongoose.model('Post', PostSchema);

// API Endpoints
app.get('/api/posts', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

app.post('/api/posts', async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.status(201).json(newPost);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));`}
              title="EXPRESS SERVER (SERVER.JS)"
              shellType="bash"
            />
          </div>
        </div>
      )}

      {/* Tab 4: React Frontend Connection */}
      {activeTab === "react" && (
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border-2 md:border-4 border-[#121212]">
            <span className="text-xs font-black uppercase px-2.5 py-1 bg-[#F0C020] text-[#121212] inline-block mb-3 font-black">
              STEP 4: CONNECTING REACT TO EXPRESS
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] mb-2">
              FETCHING DATA IN REACT WITHOUT CORS ERRORS
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium mb-4">
              How your React components read and send data to your Express backend:
            </p>

            <TerminalSnippet
              command={`// App.jsx (React)
import React, { useState, useEffect } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');

  // 1. Fetch posts from Express backend
  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  // 2. Submit new post
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    const newPost = await res.json();
    setPosts([newPost, ...posts]);
    setTitle('');
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>My MERN App</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        <button type="submit">Add Post</button>
      </form>
      <ul>
        {posts.map(p => <li key={p._id}>{p.title}</li>)}
      </ul>
    </div>
  );
}`}
              title="REACT CLIENT (APP.JSX)"
              shellType="bash"
            />
          </div>
        </div>
      )}

      {/* AI Master Prompt to Scaffold MERN */}
      <div className="mt-8 p-6 bg-[#121212] text-white border-2 md:border-4 border-black">
        <span className="text-xs font-black uppercase text-[#F0C020] block mb-2 tracking-wider">
          THE EXACT PROMPT TO GIVE AI TO BUILD A MERN APP:
        </span>
        <p className="text-xs sm:text-sm font-mono text-zinc-200 bg-white/10 p-4 border border-white/20 leading-relaxed">
          &quot;Create a production MERN stack app with two folders: `/client` (React + Tailwind + Vite) and `/server` (Node.js + Express + Mongoose). In `/server`, include CORS, dotenv, and a Mongoose model for User Notes. In `/client`, build a responsive dashboard that fetches and submits notes with loading states. Provide the complete files with step-by-step terminal run commands.&quot;
        </p>
      </div>

    </div>
  );
};
