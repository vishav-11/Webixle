"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Link2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  DollarSign,
  Shield,
  Star,
  ChevronDown,
  ExternalLink,
  Code2,
  Zap,
  Globe,
  Layers,
  Lock,
  Coins,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const SUB_SERVICES = [
  {
    id: 1,
    title: "Smart Contracts",
    description: "Secure, audited smart contracts on Ethereum, BSC, and Polygon. ERC-20, ERC-721, and custom logic.",
    icon: Code2,
    gradient: "from-orange-500 to-amber-500",
    iconColor: "text-orange-500",
    timeline: "2–4 Weeks",
    price: "₹50,000",
    features: ["Solidity Development", "Contract Auditing", "Multi-Chain Deploy", "Gas Optimization"],
  },
  {
    id: 2,
    title: "NFT Platforms",
    description: "End-to-end NFT marketplaces with minting, buying, selling, royalties, and wallet integration.",
    icon: Star,
    gradient: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
    timeline: "4–8 Weeks",
    price: "₹1,20,000",
    features: ["NFT Minting", "Marketplace", "Royalty System", "IPFS Storage"],
  },
  {
    id: 3,
    title: "DeFi Protocols",
    description: "Decentralized finance solutions — DEX, yield farming, staking platforms, and liquidity pools.",
    icon: Coins,
    gradient: "from-green-500 to-emerald-500",
    iconColor: "text-green-500",
    timeline: "6–12 Weeks",
    price: "₹2,00,000",
    features: ["DEX Development", "Yield Farming", "Staking Pools", "Tokenomics Design"],
  },
  {
    id: 4,
    title: "dApp Development",
    description: "Full-stack decentralized applications with Web3 wallet login, on-chain data, and modern UI.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    timeline: "4–8 Weeks",
    price: "₹80,000",
    features: ["Wallet Connect", "On-Chain Data", "Next.js Frontend", "IPFS Integration"],
  },
  {
    id: 5,
    title: "Token Creation",
    description: "Launch your own ERC-20 or BEP-20 token with vesting schedules, airdrops, and tokenomics.",
    icon: Layers,
    gradient: "from-rose-500 to-pink-500",
    iconColor: "text-rose-500",
    timeline: "1–2 Weeks",
    price: "₹30,000",
    features: ["ERC-20 / BEP-20", "Vesting Contract", "Airdrop System", "CoinGecko Listing"],
  },
  {
    id: 6,
    title: "Wallet Integration",
    description: "Seamless Web3 wallet integration — MetaMask, WalletConnect, Coinbase Wallet, and more.",
    icon: Lock,
    gradient: "from-cyan-500 to-teal-500",
    iconColor: "text-cyan-500",
    timeline: "1–2 Weeks",
    price: "₹20,000",
    features: ["MetaMask", "WalletConnect", "Multi-Chain", "Transaction Signing"],
  },
];

const TECH_STACK = [
  {
    category: "Smart Contracts",
    color: "text-orange-500",
    bg: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-500/20",
    items: ["Solidity", "Hardhat", "OpenZeppelin", "Foundry"],
  },
  {
    category: "Web3 Frontend",
    color: "text-blue-500",
    bg: "from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/20",
    items: ["Ethers.js", "Web3.js", "wagmi", "RainbowKit"],
  },
  {
    category: "Blockchain Networks",
    color: "text-purple-500",
    bg: "from-purple-500/10 to-pink-500/5",
    border: "border-purple-500/20",
    items: ["Ethereum", "BSC", "Polygon", "Solana"],
  },
  {
    category: "Storage & Infra",
    color: "text-green-500",
    bg: "from-green-500/10 to-emerald-500/5",
    border: "border-green-500/20",
    items: ["IPFS", "Pinata", "Alchemy", "Moralis"],
  },
];

const FAQS = [
  {
    id: 1,
    q: "Which blockchain networks do you build on?",
    a: "We primarily build on Ethereum, Binance Smart Chain (BSC), and Polygon. We also support Solana and Avalanche based on project requirements.",
  },
  {
    id: 2,
    q: "Do you audit smart contracts for security?",
    a: "Yes. Every smart contract goes through internal security review. For production-grade contracts, we recommend third-party audits and can coordinate with audit firms like CertiK.",
  },
  {
    id: 3,
    q: "How much does a Web3 project cost?",
    a: "A simple token launch starts at ₹30,000. NFT marketplace starts at ₹1,20,000. Full DeFi protocol starts at ₹2,00,000+. Custom quotes are provided after a free consultation.",
  },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Sub Service Card ── */
const SubServiceCard: React.FC<{
  service: (typeof SUB_SERVICES)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}> = ({ service, index, isActive, onClick }) => {
  const Icon = service.icon;

  return (
    <div
      onClick={onClick}
      className={`group relative p-5 rounded-2xl border cursor-pointer transition-all duration-300 animate-fade-up ${
        isActive
          ? `border-orange-500/30 bg-orange-500/5 shadow-[var(--shadow-elevation-md)] -translate-y-1`
          : "bg-card-theme border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5"
      }`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* Top Row */}
      <div className="flex items-start justify-between mb-3">
        <div
          className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}
        >
          <Icon size={20} className="text-white" />
        </div>
        <div className="text-right">
          <p className="text-[10px] text-tertiary-theme">Starting from</p>
          <p className={`text-sm font-extrabold ${service.iconColor}`}>
            {service.price}
          </p>
        </div>
      </div>

      {/* Title + Description */}
      <h3 className="text-base font-bold text-primary-theme mb-1.5 group-hover:text-primary-500 transition-colors">
        {service.title}
      </h3>
      <p className="text-xs text-secondary-theme leading-relaxed mb-3 line-clamp-2">
        {service.description}
      </p>

      {/* Features (Expanded) */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-32 opacity-100 mb-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-1.5">
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-1.5">
              <CheckCircle2 size={11} className="text-green-500 shrink-0" />
              <span className="text-[10px] font-medium text-primary-theme">
                {f}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Clock size={11} className="text-tertiary-theme" />
          <span className="text-[10px] font-semibold text-secondary-theme">
            {service.timeline}
          </span>
        </div>
        <span
          className={`text-[10px] font-bold ${
            isActive ? service.iconColor : "text-tertiary-theme"
          }`}
        >
          {isActive ? "Selected ✓" : "Details →"}
        </span>
      </div>
    </div>
  );
};

/* ── Tech Stack Grid ── */
const TechGrid: React.FC = () => (
  <div className="grid grid-cols-2 gap-3">
    {TECH_STACK.map((stack, i) => (
      <div
        key={stack.category}
        className={`p-4 rounded-xl bg-gradient-to-br ${stack.bg} border ${stack.border} animate-fade-up`}
        style={{ animationDelay: `${i * 0.08}s` }}
      >
        <p className={`text-xs font-bold ${stack.color} mb-2.5`}>
          {stack.category}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {stack.items.map((item) => (
            <span
              key={item}
              className="text-[10px] font-semibold px-2 py-1 rounded-md bg-card-theme border border-card-theme text-primary-theme"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

/* ── FAQ ── */
const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {FAQS.map((faq) => (
        <div
          key={faq.id}
          className={`rounded-xl border transition-all duration-300 overflow-hidden ${
            openId === faq.id
              ? "border-orange-500/30 bg-orange-500/5"
              : "border-card-theme bg-card-theme"
          }`}
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full flex items-center justify-between gap-4 p-4 text-left"
          >
            <span className="text-sm font-bold text-primary-theme">
              {faq.q}
            </span>
            <ChevronDown
              size={15}
              className={`text-secondary-theme shrink-0 transition-transform duration-300 ${
                openId === faq.id ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === faq.id ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="px-4 pb-4 text-sm text-secondary-theme leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ── CTA Card ── */
const CTACard: React.FC = () => (
  <div className="relative rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-primary-600 to-amber-600" />
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    />
    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-3xl pointer-events-none" />

    <div className="relative z-10 p-6 sm:p-8">
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-4 shadow-xl">
        <Link2 size={24} className="text-white" />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">
        Start Your Web3 Project
      </h3>
      <p className="text-white/70 text-sm leading-relaxed mb-5">
        Free consultation + detailed quote in 24hrs. Secure, audited, and production-ready.
      </p>

      <div className="space-y-2 mb-6">
        {[
          "Smart contract security audit",
          "Multi-chain deployment",
          "Full source code ownership",
          "30-day post-launch support",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-green-400 shrink-0" />
            <span className="text-xs text-white/80 font-medium">{item}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        <Link href="/contact?service=blockchain">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-orange-700 font-bold text-sm hover:bg-orange-50 transition-all duration-200 active:scale-95 shadow-lg">
            Get Web3 Quote
            <ArrowRight size={15} />
          </button>
        </Link>
        <Link href="https://wa.me/yourphonenumber" target="_blank">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all duration-200 active:scale-95">
            💬 WhatsApp Chat
          </button>
        </Link>
      </div>
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const BlockchainWeb3: React.FC = () => {
  const [activeSubService, setActiveSubService] = useState(0);

  return (
    <section
      id="blockchain"
      className="relative section-padding bg-mesh overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 border border-orange-100 dark:border-orange-800/50 mb-4">
            <Link2 size={13} className="text-orange-500" />
            Blockchain & Web3
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            Build the{" "}
            <span className="gradient-text">Future of Web3</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            Smart contracts, NFT platforms, DeFi protocols, and dApps — built
            secure, audited, and production-ready on multiple chains.
          </p>
        </div>

        {/* ── Quick Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { value: "30+", label: "Web3 Projects", color: "text-orange-500", bg: "bg-orange-500/10", icon: Link2 },
            { value: "4", label: "Chains Supported", color: "text-purple-500", bg: "bg-purple-500/10", icon: Layers },
            { value: "100%", label: "Audited Contracts", color: "text-green-500", bg: "bg-green-500/10", icon: Shield },
            { value: "₹30K", label: "Starting Price", color: "text-blue-500", bg: "bg-blue-500/10", icon: DollarSign },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`flex items-center justify-center w-9 h-9 rounded-xl ${stat.bg} group-hover:scale-110 transition-transform`}>
                  <Icon size={17} className={stat.color} />
                </div>
                <div className={`text-xl font-extrabold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-secondary-theme font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* ── Sub Services Grid ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/10">
              <Sparkles size={15} className="text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-primary-theme">
              Web3 Services We Offer
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUB_SERVICES.map((service, index) => (
              <SubServiceCard
                key={service.id}
                service={service}
                index={index}
                isActive={activeSubService === index}
                onClick={() =>
                  setActiveSubService(activeSubService === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>

        {/* ── 2-Column Layout ── */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">

          {/* LEFT */}
          <div className="space-y-10">

            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/10">
                  <Code2 size={15} className="text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-theme">
                  Tech Stack
                </h3>
              </div>
              <TechGrid />
            </div>

            {/* Key Benefits */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10">
                  <Zap size={15} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-theme">
                  What You Always Get
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: Shield, text: "Security Audited", color: "text-blue-500", bg: "bg-blue-500/10" },
                  { icon: Layers, text: "Multi-Chain Deploy", color: "text-purple-500", bg: "bg-purple-500/10" },
                  { icon: Code2, text: "Clean Architecture", color: "text-orange-500", bg: "bg-orange-500/10" },
                  { icon: Lock, text: "Full Code Ownership", color: "text-green-500", bg: "bg-green-500/10" },
                  { icon: Zap, text: "Gas Optimized", color: "text-yellow-500", bg: "bg-yellow-500/10" },
                  { icon: Star, text: "Testnet + Mainnet", color: "text-rose-500", bg: "bg-rose-500/10" },
                ].map((b) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.text}
                      className="group flex items-center gap-3 p-3.5 rounded-xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${b.bg} shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={15} className={b.color} />
                      </div>
                      <span className="text-xs font-semibold text-primary-theme">
                        {b.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/10">
                  <Link2 size={15} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-theme">
                  Web3 FAQs
                </h3>
              </div>
              <FAQAccordion />
            </div>
          </div>

          {/* RIGHT: Sticky CTA */}
          <div className="hidden lg:block sticky top-28 space-y-3">
            <CTACard />

            <Link href="/portfolio?category=web3">
              <div className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-card-theme bg-card-theme hover:border-orange-500/30 hover:bg-secondary-theme transition-all duration-200 group">
                <ExternalLink size={14} className="text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-primary-theme">
                  View Web3 Projects →
                </span>
              </div>
            </Link>

            <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-800/40">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign size={13} className="text-orange-600" />
                <span className="text-xs font-bold text-orange-700 dark:text-orange-400">
                  Starting From
                </span>
              </div>
              <p className="text-xl font-extrabold text-orange-700 dark:text-orange-400">
                ₹30,000
              </p>
              <p className="text-xs text-orange-600/80 mt-0.5">
                Token launch. Custom quotes available.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden mt-10">
          <CTACard />
        </div>
      </div>
    </section>
  );
};