#!/bin/bash

# Ensure we are in the right place
if [ -d "FullStack-Portfolio" ]; then
    cd FullStack-Portfolio
    echo "í³‚ Entering FullStack-Portfolio..."
else
    echo "âŒ Error: Could not find 'FullStack-Portfolio' folder."
    echo "Please run this script from the parent directory."
    exit 1
fi

# Define Project Details
name="ChainGuard"
desc="Real-time smart contract security."

echo "í»¡ï¸  Initializing $name..."

# Create Directory Structure
mkdir -p "$name/frontend"
mkdir -p "$name/backend"
mkdir -p "$name/infrastructure"
mkdir -p "$name/ai-data"
mkdir -p "$name/docs"

# Copy Frontend Boilerplate from FlowSync
# We use FlowSync as the 'donor' so we don't need the template folder
if [ -d "FlowSync/frontend" ]; then
    echo "í³¦ Cloning architecture from FlowSync..."
    cp -r FlowSync/frontend/* "$name/frontend/"
    cp FlowSync/frontend/.gitignore "$name/frontend/" 2>/dev/null || :
else
    echo "âŒ Error: FlowSync folder not found to copy template from."
    exit 1
fi

# Create Custom Landing Page (Dark Mode / Crypto Theme)
cat > "$name/frontend/app/page.tsx" <<EOF
import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Lock } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-950 text-white">
      {/* Navbar Status */}
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-black/50 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-900 lg:p-4">
          Status: &nbsp; <span className="font-bold text-emerald-500">System Active</span>
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col place-items-center text-center mt-20">
        <div className="mb-8 p-4 bg-emerald-500/10 rounded-full border border-emerald-500/20">
          <ShieldCheck size={48} className="text-emerald-500" />
        </div>
        <h1 className="text-6xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          $name
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          $desc
        </p>
        
        <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition flex items-center gap-2">
                Connect Wallet <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition text-slate-300">
                View Documentation
            </button>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-8 mt-24">
        <div className="group rounded-lg border border-slate-800 px-5 py-4 transition-colors hover:border-emerald-500/50 hover:bg-slate-900">
          <h2 className="mb-3 text-2xl font-semibold flex items-center gap-2">
            <Activity className="text-emerald-500" size={20}/> Monitoring
          </h2>
          <p className="m-0 text-sm opacity-50 text-slate-400">
            Mempool scanning and event indexing via The Graph & Kafka.
          </p>
        </div>

        <div className="group rounded-lg border border-slate-800 px-5 py-4 transition-colors hover:border-emerald-500/50 hover:bg-slate-900">
          <h2 className="mb-3 text-2xl font-semibold flex items-center gap-2">
             <Lock className="text-emerald-500" size={20}/> Circuit Breaker
          </h2>
          <p className="m-0 text-sm opacity-50 text-slate-400">
            Automated pause functionality and rate limiting per block.
          </p>
        </div>

        <div className="group rounded-lg border border-slate-800 px-5 py-4 transition-colors hover:border-emerald-500/50 hover:bg-slate-900">
          <h2 className="mb-3 text-2xl font-semibold flex items-center gap-2">
             <ShieldCheck className="text-emerald-500" size={20}/> Security
          </h2>
          <p className="m-0 text-sm opacity-50 text-slate-400">
            Formal verification with Foundry and Slither static analysis.
          </p>
        </div>
      </div>
    </main>
  );
}
EOF

# Create Detailed README
cat > "$name/README.md" <<EOF
# $name
### $desc

## íº€ Project Overview
**$name** is a production-grade Web3 security platform designed to detect threats in the mempool and pause smart contracts before malicious transactions are confirmed.

## í¿— Tech Stack

### í´— On-Chain (Smart Contracts)
- **Language:** Solidity (EVM), Vyper (Optional)
- **Security:** OpenZeppelin Pausable, Rate Limiting, Timelocks
- **Tooling:** Foundry (Tests), Hardhat, Slither (Static Analysis), Echidna (Fuzzing)

### í³¡ Monitoring & Detection
- **Core:** Node.js / TypeScript
- **Chain Interaction:** ethers.js / viem / Erigon Nodes
- **Data Streaming:** Kafka / Redpanda (Event streaming)
- **Indexing:** The Graph / Custom Indexers
- **Detection:** Python (ML Anomaly Detection), Scikit-learn

### í²¾ Data Layer
- **Relational:** PostgreSQL
- **Time-Series:** TimescaleDB (High volume metrics)
- **Caching:** Redis (Rate limiting & queues)

### í¶¥ï¸ Frontend & Product
- **Framework:** Next.js (React + TypeScript)
- **Styling:** Tailwind CSS
- **Real-time:** WebSockets / SSE for alerts

### â˜ï¸ Infrastructure
- **Containerization:** Docker
- **Orchestration:** Kubernetes (K8s)
- **IaC:** Terraform
- **Observability:** Prometheus, Grafana, OpenTelemetry

## í³‚ Repository Structure
- \`/frontend\` - Next.js Dashboard for security alerts
- \`/backend\` - Node.js monitoring services & Python detection engine
- \`/ai-data\` - Anomaly detection models & datasets
- \`/infrastructure\` - Terraform scripts & K8s manifests
- \`/docs\` - Threat models and architectural diagrams

## íº¦ Getting Started
1. Navigate to \`/frontend\` to start the dashboard.
2. Navigate to \`/backend\` to configure your RPC provider URL.
EOF

echo "âœ… ChainGuard added successfully!"
