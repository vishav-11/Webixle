"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Play,
  CheckCircle,
  BarChart3,
  Zap,
  Bell,
  Users,
  ArrowRight,
  Settings,
  Activity,
  Star,
} from "lucide-react";
import { Badge } from "@/app/Component/ui/Badge";
import { Button } from "@/app/Component/ui/Button";

const DEMO_TABS = [
  { id: "dashboard", label: "Dashboard" },
  { id: "workflows", label: "Workflows" },
  { id: "analytics", label: "Analytics" },
  { id: "team", label: "Team" },
] as const;

type DemoTab = (typeof DEMO_TABS)[number]["id"];

const FEATURES_LIST = [
  "No credit card required",
  "Full access for 14 days",
  "Setup in under 5 minutes",
  "Cancel anytime",
  "Real production data",
  "Dedicated onboarding support",
];

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<DemoTab>("dashboard");

  return (
    <>
      {/* Hero */}
      <section className="relative section-padding bg-mesh overflow-hidden pt-28">
        <div className="hero-glow" />
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Badge variant="accent" dot>
                Interactive Demo
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-(--text-primary)] mb-6 text-balance">
              See Webixle in{" "}
              <span className="gradient-text">action</span>
            </h1>
            <p className="text-xl text-(--text-secondary)] mb-8 text-balance">
              Explore the full Webixle experience. No signup needed — just
              interact with our live demo and see why 50,000+ teams love us.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-12 bg-(--bg-primary)]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Demo Browser Frame */}
            <div className="rounded-2xl border border-(--border-card)] bg-(--bg-card)] shadow-(--shadow-xl)] overflow-hidden">
              {/* Browser Bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-(--border-primary)] bg-(--bg-secondary)]">
                <div className="flex gap-1.5">
                  {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c) => (
                    <div key={c} className={`w-3 h-3 rounded-full ${c}`} />
                  ))}
                </div>

                {/* Tabs */}
                <div className="flex gap-1 flex-1 justify-center">
                  {DEMO_TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-1.5 text-sm rounded-lg font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-primary-500 text-white shadow-md"
                          : "text-(--text-secondary)] hover:text-(--text-primary)] hover:bg-(--bg-tertiary)]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs text-(--text-tertiary)] font-mono">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Live
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6 min-h-120 bg-(--bg-secondary)]">
                {activeTab === "dashboard" && <DashboardDemo />}
                {activeTab === "workflows" && <WorkflowsDemo />}
                {activeTab === "analytics" && <AnalyticsDemo />}
                {activeTab === "team" && <TeamDemo />}
              </div>
            </div>

            {/* CTA below demo */}
            <div className="mt-8 text-center">
              <p className="text-(--text-secondary)] mb-4 text-sm">
                Like what you see? Get full access instantly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="lg">
                    Schedule a Demo Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-(--bg-secondary)]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="success" className="mb-4">
                Free Trial
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-(--text-primary)] mb-4">
                Everything included in your{" "}
                <span className="gradient-text">14-day trial</span>
              </h2>
              <p className="text-(--text-secondary)]">
                No sandbox. No limitations. Full access to the Pro plan — yours
                free for 14 days.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {FEATURES_LIST.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-4 rounded-xl border border-(--border-card)] bg-(--bg-card)]"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle size={16} className="text-green-500" />
                  </div>
                  <span className="font-medium text-(--text-primary)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button variant="primary" size="xl" fullWidth={false} icon={ArrowRight} iconPosition="right">
                  Start Your Free Trial Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial spotlight */}
      <section className="py-16 bg-(--bg-primary)]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <blockquote className="text-2xl font-semibold text-(--text-primary)] mb-6 italic leading-relaxed">
              "I went from skeptic to advocate in one afternoon. The demo
              converted me — we signed up before the trial even ended."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                RC
              </div>
              <div className="text-left">
                <div className="font-semibold text-(--text-primary)]">
                  Ryan Chen
                </div>
                <div className="text-sm text-(--text-secondary)]">
                  Director of Ops, FinTech Startup
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---- Sub-components for demo tabs ---- */

function DashboardDemo() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-(--text-primary)]">
            Good morning, Alex 👋
          </h3>
          <p className="text-sm text-(--text-secondary)]">
            Here's what's happening today
          </p>
        </div>
        <div className="flex gap-2">
          <div className="p-2 rounded-lg bg-(--bg-card)] border border-(--border-card)]">
            <Bell size={16} className="text-(--text-secondary)]" />
          </div>
          <div className="p-2 rounded-lg bg-(--bg-card)] border border-(--border-card)]">
            <Settings size={16} className="text-(--text-secondary)]" />
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Workflows Active", value: "1,247", icon: Zap, color: "text-primary-500", bg: "bg-primary-500/10", change: "+12%" },
          { label: "Tasks Done Today", value: "3,891", icon: CheckCircle, color: "text-green-500", bg: "bg-green-500/10", change: "+28%" },
          { label: "Team Members", value: "24", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", change: "+2 this week" },
          { label: "API Calls", value: "94.2K", icon: Activity, color: "text-accent-500", bg: "bg-accent-500/10", change: "+15%" },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="p-4 rounded-xl border border-(--border-card)] bg-(--bg-card)]"
            >
              <div className={`inline-flex p-2 rounded-lg ${stat.bg} mb-2`}>
                <Icon size={16} className={stat.color} />
              </div>
              <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-(--text-tertiary)] mt-0.5">{stat.label}</div>
              <div className="text-xs text-green-500 font-medium mt-1">{stat.change}</div>
            </div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="p-4 rounded-xl border border-(--border-card)] bg-(--bg-card)]">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-sm text-(--text-primary)]">
            Automation Activity (Last 30 days)
          </span>
          <Badge variant="success" dot>Live</Badge>
        </div>
        <div className="flex items-end gap-1 h-24">
          {[35, 55, 40, 75, 50, 85, 65, 90, 70, 95, 80, 88, 72, 85, 78, 92, 65, 88, 70, 95, 82, 88, 75, 92, 68, 85, 78, 91, 75, 88].map(
            (h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-linear-to-t from-primary-600 to-primary-400 opacity-80 transition-all hover:opacity-100 hover:from-primary-500"
                style={{ height: `${h}%` }}
              />
            )
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-4 rounded-xl border border-(--border-card)] bg-(--bg-card)]">
        <span className="font-semibold text-sm text-(--text-primary)] block mb-3">
          Recent Activity
        </span>
        <div className="space-y-2">
          {[
            { action: "Lead qualification workflow triggered", time: "2m ago", status: "success" },
            { action: "Slack notification sent to #sales-alerts", time: "5m ago", status: "success" },
            { action: "CRM record updated for Acme Corp", time: "12m ago", status: "success" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-(--text-secondary)]">{item.action}</span>
              </div>
              <span className="text-(--text-tertiary)]">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowsDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-(--text-primary)]">Active Workflows</h3>
        <button className="px-3 py-1.5 text-xs rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors">
          + New Workflow
        </button>
      </div>

      <div className="space-y-3">
        {[
          { name: "Lead Qualification Pipeline", status: "Running", runs: "2,847", lastRun: "30s ago", color: "bg-green-500" },
          { name: "Customer Onboarding Sequence", status: "Running", runs: "1,203", lastRun: "5m ago", color: "bg-green-500" },
          { name: "Monthly Report Generator", status: "Scheduled", runs: "48", lastRun: "2h ago", color: "bg-yellow-500" },
          { name: "Churn Risk Detection", status: "Running", runs: "9,421", lastRun: "1m ago", color: "bg-green-500" },
          { name: "Invoice Processing Automation", status: "Paused", runs: "5,102", lastRun: "1d ago", color: "bg-gray-400" },
        ].map((workflow) => (
          <div
            key={workflow.name}
            className="flex items-center justify-between p-4 rounded-xl border border-(--border-card)] bg-(--bg-card)] hover:shadow-(--shadow-md)] transition-shadow group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2.5 h-2.5 rounded-full ${workflow.color} animate-pulse`} />
              <div>
                <div className="font-medium text-sm text-(--text-primary)] group-hover:text-primary-500 transition-colors">
                  {workflow.name}
                </div>
                <div className="text-xs text-(--text-tertiary)]">
                  Last run: {workflow.lastRun}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-right">
              <div>
                <div className="text-sm font-semibold text-(--text-primary)]">{workflow.runs}</div>
                <div className="text-xs text-(--text-tertiary)]">total runs</div>
              </div>
              <Badge variant={workflow.status === "Running" ? "success" : workflow.status === "Scheduled" ? "warning" : "neutral"}>
                {workflow.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-(--text-primary)]">Analytics Overview</h3>
        <select className="text-xs border border-(--border-primary)] bg-(--bg-card)] text-(--text-secondary)] rounded-lg px-2 py-1.5">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Time Saved", value: "342h", subtext: "this month", change: "+18%" },
          { label: "Cost Reduced", value: "$24.8K", subtext: "this month", change: "+32%" },
          { label: "Error Rate", value: "0.02%", subtext: "down from 2.1%", change: "-98%" },
        ].map((kpi) => (
          <div key={kpi.label} className="p-4 rounded-xl border border-(--border-card)] bg-(--bg-card)] text-center">
            <div className="text-2xl font-bold gradient-text">{kpi.value}</div>
            <div className="text-xs text-(--text-tertiary)] mb-1">{kpi.subtext}</div>
            <Badge variant="success">{kpi.change}</Badge>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="p-4 rounded-xl border border-(--border-card)] bg-(--bg-card)]">
        <p className="text-sm font-semibold text-(--text-primary)] mb-3">
          Tasks Automated by Category
        </p>
        <div className="space-y-3">
          {[
            { label: "Lead Processing", pct: 85, color: "bg-primary-500" },
            { label: "Data Entry", pct: 72, color: "bg-accent-500" },
            { label: "Report Generation", pct: 60, color: "bg-blue-500" },
            { label: "Email Campaigns", pct: 45, color: "bg-green-500" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-(--text-secondary)]">{item.label}</span>
                <span className="font-semibold text-(--text-primary)]">{item.pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-(--bg-tertiary)]">
                <div
                  className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-(--text-primary)]">Team Members</h3>
        <button className="px-3 py-1.5 text-xs rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors">
          + Invite Member
        </button>
      </div>

      <div className="space-y-3">
        {[
          { name: "Alex Rivera", role: "Admin", email: "alex@company.io", status: "online", workflows: 47 },
          { name: "Jordan Lee", role: "Editor", email: "jordan@company.io", status: "online", workflows: 31 },
          { name: "Sam Kim", role: "Editor", email: "sam@company.io", status: "away", workflows: 22 },
          { name: "Taylor Morgan", role: "Viewer", email: "taylor@company.io", status: "offline", workflows: 8 },
          { name: "Casey Park", role: "Editor", email: "casey@company.io", status: "online", workflows: 15 },
        ].map((member) => (
          <div
            key={member.email}
            className="flex items-center justify-between p-4 rounded-xl border border-(--border-card)] bg-(--bg-card)] hover:shadow-(--shadow-md)] transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-linear-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm font-bold">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div
                  className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-(--bg-card)] ${
                    member.status === "online"
                      ? "bg-green-400"
                      : member.status === "away"
                      ? "bg-yellow-400"
                      : "bg-gray-400"
                  }`}
                />
              </div>
              <div>
                <div className="font-medium text-sm text-(--text-primary)]">{member.name}</div>
                <div className="text-xs text-(--text-tertiary)]">{member.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-semibold text-(--text-primary)]">{member.workflows}</div>
                <div className="text-xs text-(--text-tertiary)]">workflows</div>
              </div>
              <Badge variant={member.role === "Admin" ? "primary" : member.role === "Editor" ? "accent" : "neutral"}>
                {member.role}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}