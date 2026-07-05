"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Palette,
  Code2,
  TestTube,
  Rocket,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Clock,
  ChevronDown,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const PROCESS_STEPS = [
  {
    id: 1,
    phase: "Phase 01",
    title: "Discovery & Consultation",
    shortTitle: "Discovery",
    description:
      "First, we deeply understand your requirements, business goals, and target audience. A detailed consultation call is conducted to define the project scope clearly.",
    icon: MessageSquare,
    duration: "1-2 Days",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    deliverables: [
      "Project Brief Document",
      "Technical Requirements",
      "Timeline & Budget Estimate",
      "NDA Signing",
    ],
    color: "text-blue-500",
    dotColor: "bg-blue-500",
  },
  {
    id: 2,
    phase: "Phase 02",
    title: "UI/UX Design",
    shortTitle: "Design",
    description:
      "We create wireframes and high-fidelity designs according to your brand identity. Every screen prototype is prepared and approved before development begins.",
    icon: Palette,
    duration: "3-7 Days",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30",
    deliverables: [
      "Wireframes",
      "UI Design (Figma)",
      "Interactive Prototype",
      "Design System",
    ],
    color: "text-purple-500",
    dotColor: "bg-purple-500",
  },
  {
    id: 3,
    phase: "Phase 03",
    title: "Development",
    shortTitle: "Development",
    description:
      "We convert the approved design into clean and scalable code. Agile methodology is followed, and weekly updates are shared so you can track the project progress easily.",
    icon: Code2,
    duration: "2-8 Weeks",
    gradient: "from-primary-500 to-accent-500",
    bgGradient: "from-primary-500/10 to-accent-500/10",
    borderColor: "border-primary-500/30",
    deliverables: [
      "Frontend Development",
      "Backend & API Integration",
      "Database Setup",
      "Weekly Progress Reports",
    ],
    color: "text-primary-500",
    dotColor: "bg-primary-500",
  },
  {
    id: 4,
    phase: "Phase 04",
    title: "Testing & QA",
    shortTitle: "Testing",
    description:
      "Every feature goes through rigorous testing including unit testing, integration testing, and manual QA. The product is delivered for review only after all bugs are fixed.",
    icon: TestTube,
    duration: "3-5 Days",
    gradient: "from-orange-500 to-yellow-500",
    bgGradient: "from-orange-500/10 to-yellow-500/10",
    borderColor: "border-orange-500/30",
    deliverables: [
      "Bug-Free Product",
      "Performance Testing",
      "Cross-Device Testing",
      "Security Audit",
    ],
    color: "text-orange-500",
    dotColor: "bg-orange-500",
  },
  {
    id: 5,
    phase: "Phase 05",
    title: "Launch & Deployment",
    shortTitle: "Launch",
    description:
      "We deploy the final product to the production server with proper domain setup, SSL certificate configuration, and performance optimization to ensure a smooth launch.",
    icon: Rocket,
    duration: "1-2 Days",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/30",
    deliverables: [
      "Live Deployment",
      "Domain & SSL Setup",
      "Performance Optimization",
      "Launch Checklist",
    ],
    color: "text-green-500",
    dotColor: "bg-green-500",
  },
  {
    id: 6,
    phase: "Phase 06",
    title: "Support & Growth",
    shortTitle: "Support",
    description:
      "Even after launch, we continue supporting your business with bug fixes, feature updates, and scaling assistance. Your success is our priority.",
    icon: HeartHandshake,
    duration: "Ongoing",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/10 to-pink-500/10",
    borderColor: "border-rose-500/30",
    deliverables: [
      "30-Day Free Support",
      "Bug Fixes",
      "Feature Updates",
      "Monthly Reports",
    ],
    color: "text-rose-500",
    dotColor: "bg-rose-500",
  },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Step Number Badge ── */
const StepBadge: React.FC<{
  number: number;
  isActive: boolean;
  dotColor: string;
}> = ({ number, isActive, dotColor }) => (
  <div
    className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 font-bold text-sm transition-all duration-300 shrink-0 ${
      isActive
        ? `${dotColor} border-transparent text-white scale-110 shadow-lg`
        : "border-card-theme bg-card-theme text-secondary-theme"
    }`}
  >
    {isActive ? (
      <CheckCircle2 size={20} className="text-white" />
    ) : (
      <span>{number}</span>
    )}
    {/* Connector dot pulse when active */}
    {isActive && (
      <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-current" />
    )}
  </div>
);

/* ── Timeline Step (Desktop) ── */
const TimelineStep: React.FC<{
  step: (typeof PROCESS_STEPS)[0];
  index: number;
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
}> = ({ step, index, isActive, isLast, onClick }) => {
  const Icon = step.icon;

  return (
    <div className="flex gap-6 group cursor-pointer" onClick={onClick}>
      {/* Left Column: Step Badge + Connector Line */}
      <div className="flex flex-col items-center">
        <StepBadge
          number={index + 1}
          isActive={isActive}
          dotColor={step.dotColor}
        />
        {!isLast && (
          <div
            className={`w-0.5 flex-1 mt-2 transition-all duration-500 ${
              isActive
                ? `bg-linear-to-b ${step.gradient}`
                : "bg-border-primary-theme"
            }`}
            style={{ minHeight: "40px" }}
          />
        )}
      </div>

      {/* Right Column: Content Card */}
      <div
        className={`flex-1 mb-8 pb-2 rounded-2xl border transition-all duration-300 overflow-hidden ${
          isActive
            ? `bg-linear-to-br ${step.bgGradient} ${step.borderColor} shadow-(--shadow-elevation-md)`
            : "bg-card-theme border-card-theme hover:border-primary-500/20"
        }`}
      >
        {/* Card Header */}
        <div className="flex items-start justify-between p-5 sm:p-6">
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div
              className={`flex items-center justify-center w-11 h-11 rounded-xl bg-linear-to-br ${step.gradient} shadow-lg shrink-0`}
            >
              <Icon size={20} className="text-white" />
            </div>

            <div>
              <span
                className={`text-xs font-bold uppercase tracking-widest ${step.color} block mb-0.5`}
              >
                {step.phase}
              </span>
              <h3 className="text-lg font-bold text-primary-theme leading-tight">
                {step.title}
              </h3>
            </div>
          </div>

          {/* Duration Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-theme border border-card-theme shrink-0">
            <Clock size={12} className="text-secondary-theme" />
            <span className="text-xs font-semibold text-secondary-theme whitespace-nowrap">
              {step.duration}
            </span>
          </div>
        </div>

        {/* Expanded Content */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 sm:px-6 pb-5 sm:pb-6">
            {/* Description */}
            <p className="text-sm sm:text-base text-secondary-theme leading-relaxed mb-5">
              {step.description}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-linear-to-r from-transparent via-border-primary to-transparent mb-5" />

            {/* Deliverables */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-3">
                Deliverables
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {step.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${step.dotColor} shrink-0`}
                    />
                    <span className="text-sm font-medium text-primary-theme">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Collapsed hint */}
        {!isActive && (
          <div className="px-5 sm:px-6 pb-4">
            <p className="text-sm text-tertiary-theme line-clamp-1">
              {step.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Mobile Step Card ── */
const MobileStepCard: React.FC<{
  step: (typeof PROCESS_STEPS)[0];
  index: number;
}> = ({ step, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = step.icon;

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? `bg-linear-to-br ${step.bgGradient} ${step.borderColor}`
          : "bg-card-theme border-card-theme"
      }`}
    >
      {/* Header (Always Visible) */}
      <button
        className="w-full flex items-center justify-between p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br ${step.gradient} shrink-0`}
          >
            <Icon size={17} className="text-white" />
          </div>
          <div>
            <span
              className={`text-[10px] font-bold uppercase tracking-widest ${step.color} block`}
            >
              {step.phase}
            </span>
            <span className="text-sm font-bold text-primary-theme">
              {step.title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-2">
          <span className="text-[10px] font-semibold text-secondary-theme hidden xs:block">
            {step.duration}
          </span>
          <ChevronDown
            size={16}
            className={`text-secondary-theme transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Expanded Content */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-4">
          <p className="text-sm text-secondary-theme leading-relaxed">
            {step.description}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {step.deliverables.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${step.dotColor} shrink-0`}
                />
                <span className="text-xs font-medium text-primary-theme">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Right Panel: Active Step Detail (Desktop) ── */
const ActiveStepPanel: React.FC<{ step: (typeof PROCESS_STEPS)[0] }> = ({
  step,
}) => {
  const Icon = step.icon;

  return (
    <div
      className={`sticky top-24 rounded-2xl border p-6 sm:p-8 bg-linear-to-br ${step.bgGradient} ${step.borderColor} transition-all duration-500 shadow-(--shadow-elevation-lg)`}
    >
      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br ${step.gradient} shadow-lg mb-6`}
      >
        <Icon size={28} className="text-white" />
      </div>

      {/* Phase Label */}
      <p className={`text-xs font-bold uppercase tracking-widest ${step.color} mb-2`}>
        {step.phase}
      </p>

      {/* Title */}
      <h3 className="text-2xl font-bold text-primary-theme mb-4 leading-tight">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-secondary-theme leading-relaxed mb-6">
        {step.description}
      </p>

      {/* Duration */}
      <div className="flex items-center gap-2 mb-6 px-4 py-2.5 rounded-xl bg-secondary-theme border border-card-theme w-fit">
        <Clock size={14} className={step.color} />
        <span className="text-sm font-bold text-primary-theme">
          {step.duration}
        </span>
        <span className="text-xs text-secondary-theme">estimated</span>
      </div>

      {/* Divider */}
      <div
        className={`w-full h-px bg-linear-to-r ${step.gradient} opacity-30 mb-6`}
      />

      {/* Deliverables */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-4">
          What You Get
        </p>
        <div className="space-y-3">
          {step.deliverables.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`flex items-center justify-center w-5 h-5 rounded-full bg-linear-to-br ${step.gradient} shrink-0`}
              >
                <CheckCircle2 size={11} className="text-white" />
              </div>
              <span className="text-sm font-medium text-primary-theme">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button
        className={`mt-8 w-full py-3 rounded-xl font-bold text-sm text-white bg-linear-to-r ${step.gradient} hover:opacity-90 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg`}
      >
        Start Your Project
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export const WorkProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative section-padding bg-mesh overflow-hidden">
      {/* ── Background Decorations ── */}
      <div className="absolute top-0 right-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-140 h-140 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/50 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
            </span>
            Our Process
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            From Idea to{" "}
            <span className="gradient-text">Live Product</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            Hum ek transparent, structured process follow karte hain taaki aapko
            har step pe clarity mile aur result expected ho.
          </p>
        </div>

        {/* ── Desktop: Two Column Layout ── */}
        <div className="hidden lg:grid grid-cols-[1fr_380px] gap-10 max-w-6xl mx-auto items-start">
          {/* Left: Timeline */}
          <div>
            {PROCESS_STEPS.map((step, index) => (
              <TimelineStep
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === index}
                isLast={index === PROCESS_STEPS.length - 1}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>

          {/* Right: Active Step Detail Panel */}
          <ActiveStepPanel step={PROCESS_STEPS[activeStep]} />
        </div>

        {/* ── Mobile: Accordion Layout ── */}
        <div className="lg:hidden space-y-3 max-w-2xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <MobileStepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA Strip ── */}
        <div className="mt-20 animate-in-delay-3">
          <div className="relative rounded-2xl overflow-hidden border border-card-theme">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-r from-primary-600/90 to-accent-600/90" />
            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Free consultation call mein apna project discuss karein.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button className="px-6 py-3 rounded-xl bg-white text-primary-700 font-bold text-sm hover:bg-primary-50 transition-colors active:scale-95 whitespace-nowrap flex items-center gap-2">
                  Book Free Call
                  <ArrowRight size={16} />
                </button>
                <button className="px-6 py-3 rounded-xl border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-colors active:scale-95 whitespace-nowrap">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};