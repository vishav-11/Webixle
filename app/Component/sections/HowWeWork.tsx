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
    description:
      "We deeply understand your requirements, business goals, and target audience to define the project scope clearly.",
    icon: MessageSquare,
    duration: "1-2 Days",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    deliverables: [
      "Project Brief",
      "Technical Requirements",
      "Timeline & Budget",
      "NDA Signing",
    ],
    color: "text-blue-500",
    dotColor: "bg-blue-500",
  },
  {
    id: 2,
    phase: "Phase 02",
    title: "UI/UX Design",
    description:
      "Wireframes and high-fidelity designs aligned with your brand. Every screen approved before development.",
    icon: Palette,
    duration: "3-7 Days",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30",
    deliverables: [
      "Wireframes",
      "Figma UI Design",
      "Prototype",
      "Design System",
    ],
    color: "text-purple-500",
    dotColor: "bg-purple-500",
  },
  {
    id: 3,
    phase: "Phase 03",
    title: "Development",
    description:
      "Clean, scalable code using modern frameworks. Weekly updates keep you informed throughout the build.",
    icon: Code2,
    duration: "2-8 Weeks",
    gradient: "from-primary-500 to-accent-500",
    bgGradient: "from-primary-500/10 to-accent-500/10",
    borderColor: "border-primary-500/30",
    deliverables: [
      "Frontend Dev",
      "Backend & APIs",
      "Database Setup",
      "Weekly Reports",
    ],
    color: "text-primary-500",
    dotColor: "bg-primary-500",
  },
  {
    id: 4,
    phase: "Phase 04",
    title: "Testing & QA",
    description:
      "Rigorous unit, integration, and manual QA testing. Delivered only after all bugs are resolved.",
    icon: TestTube,
    duration: "3-5 Days",
    gradient: "from-orange-500 to-yellow-500",
    bgGradient: "from-orange-500/10 to-yellow-500/10",
    borderColor: "border-orange-500/30",
    deliverables: [
      "Bug-Free Build",
      "Performance Test",
      "Cross-Device QA",
      "Security Audit",
    ],
    color: "text-orange-500",
    dotColor: "bg-orange-500",
  },
  {
    id: 5,
    phase: "Phase 05",
    title: "Launch & Deployment",
    description:
      "Production deployment with domain, SSL, and performance optimization for a smooth go-live.",
    icon: Rocket,
    duration: "1-2 Days",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/30",
    deliverables: [
      "Live Deployment",
      "Domain & SSL",
      "Performance Tuning",
      "Launch Checklist",
    ],
    color: "text-green-500",
    dotColor: "bg-green-500",
  },
  {
    id: 6,
    phase: "Phase 06",
    title: "Support & Growth",
    description:
      "Post-launch support with bug fixes, feature updates, and scaling assistance. Your success is our priority.",
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
// STEP BADGE
// ============================================

const StepBadge: React.FC<{
  number: number;
  isActive: boolean;
  dotColor: string;
}> = ({ number, isActive, dotColor }) => (
  <div
    className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 
      font-bold text-sm transition-all duration-300 shrink-0 ${
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
    {isActive && (
      <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-current" />
    )}
  </div>
);

// ============================================
// TIMELINE STEP (Desktop)
// ============================================

const TimelineStep: React.FC<{
  step: (typeof PROCESS_STEPS)[0];
  index: number;
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
}> = ({ step, index, isActive, isLast, onClick }) => {
  const Icon = step.icon;

  return (
    <div className="flex gap-6 cursor-pointer group" onClick={onClick}>
      {/* Left: Badge + Line */}
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
                ? `bg-gradient-to-b ${step.gradient}`
                : "bg-card-theme"
            }`}
            style={{ minHeight: "40px" }}
          />
        )}
      </div>

      {/* Right: Card */}
      <div
        className={`flex-1 mb-6 rounded-2xl border transition-all duration-300 overflow-hidden ${
          isActive
            ? `bg-gradient-to-br ${step.bgGradient} ${step.borderColor} shadow-md`
            : "bg-card-theme border-card-theme hover:border-primary-500/20"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5">
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-xl 
                bg-gradient-to-br ${step.gradient} shadow-md shrink-0`}
            >
              <Icon size={18} className="text-white" />
            </div>
            <div>
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${step.color} block mb-0.5`}
              >
                {step.phase}
              </span>
              <h3 className="text-base font-bold text-primary-theme leading-tight">
                {step.title}
              </h3>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-secondary-theme border border-card-theme shrink-0">
            <Clock size={11} className="text-tertiary-theme" />
            <span className="text-[10px] font-semibold text-secondary-theme whitespace-nowrap">
              {step.duration}
            </span>
          </div>
        </div>

        {/* Expanded */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isActive ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5">
            <p className="text-sm text-secondary-theme leading-relaxed mb-4">
              {step.description}
            </p>
            <div className="h-px bg-card-theme mb-4" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-3">
              Deliverables
            </p>
            <div className="grid grid-cols-2 gap-2">
              {step.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${step.dotColor} shrink-0`} />
                  <span className="text-xs font-medium text-primary-theme">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Collapsed hint */}
        {!isActive && (
          <div className="px-5 pb-4">
            <p className="text-xs text-tertiary-theme line-clamp-1">
              {step.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================
// ACTIVE STEP PANEL (Desktop Right)
// ============================================

const ActiveStepPanel: React.FC<{ step: (typeof PROCESS_STEPS)[0] }> = ({
  step,
}) => {
  const Icon = step.icon;

  return (
    <div
      className={`sticky top-24 rounded-2xl border p-6 
        bg-gradient-to-br ${step.bgGradient} ${step.borderColor} 
        transition-all duration-500 shadow-lg`}
    >
      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl 
          bg-gradient-to-br ${step.gradient} shadow-md mb-5`}
      >
        <Icon size={24} className="text-white" />
      </div>

      {/* Phase */}
      <p className={`text-[10px] font-bold uppercase tracking-widest ${step.color} mb-1.5`}>
        {step.phase}
      </p>

      {/* Title */}
      <h3 className="text-xl font-bold text-primary-theme mb-3 leading-tight">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-secondary-theme leading-relaxed mb-5">
        {step.description}
      </p>

      {/* Duration */}
      <div className="flex items-center gap-2 mb-5 px-3 py-2 rounded-xl bg-secondary-theme border border-card-theme w-fit">
        <Clock size={13} className={step.color} />
        <span className="text-sm font-bold text-primary-theme">{step.duration}</span>
        <span className="text-xs text-tertiary-theme">estimated</span>
      </div>

      {/* Divider */}
      <div className={`w-full h-px bg-gradient-to-r ${step.gradient} opacity-20 mb-5`} />

      {/* Deliverables */}
      <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-3">
        What You Get
      </p>
      <div className="space-y-2.5 mb-6">
        {step.deliverables.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div
              className={`flex items-center justify-center w-4 h-4 rounded-full 
                bg-gradient-to-br ${step.gradient} shrink-0`}
            >
              <CheckCircle2 size={10} className="text-white" />
            </div>
            <span className="text-sm font-medium text-primary-theme">{item}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        className={`w-full py-2.5 rounded-xl font-bold text-sm text-white 
          bg-gradient-to-r ${step.gradient} hover:opacity-90 active:scale-95 
          transition-all duration-200 flex items-center justify-center gap-2 shadow-md`}
      >
        Start Your Project
        <ArrowRight size={15} />
      </button>
    </div>
  );
};

// ============================================
// MOBILE STEP CARD
// ============================================

const MobileStepCard: React.FC<{
  step: (typeof PROCESS_STEPS)[0];
  index: number;
}> = ({ step, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = step.icon;

  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? `bg-gradient-to-br ${step.bgGradient} ${step.borderColor}`
          : "bg-card-theme border-card-theme"
      }`}
    >
      <button
        className="w-full flex items-center justify-between p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center justify-center w-9 h-9 rounded-lg 
              bg-gradient-to-br ${step.gradient} shrink-0`}
          >
            <Icon size={16} className="text-white" />
          </div>
          <div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${step.color} block`}>
              {step.phase}
            </span>
            <span className="text-sm font-bold text-primary-theme">
              {step.title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-2">
          <span className="text-[10px] font-semibold text-tertiary-theme">
            {step.duration}
          </span>
          <ChevronDown
            size={15}
            className={`text-secondary-theme transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-3">
          <div className="h-px bg-card-theme" />
          <p className="text-sm text-secondary-theme leading-relaxed">
            {step.description}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {step.deliverables.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${step.dotColor} shrink-0`} />
                <span className="text-xs font-medium text-primary-theme">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
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
      {/* Background */}
      <div className="absolute top-0 right-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-140 h-140 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* ── Header ── */}
        <div className="max-w-2xl mx-auto text-center mb-12 animate-in">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              text-xs font-bold uppercase tracking-widest mb-4
              bg-card-theme border border-card-theme text-secondary-theme"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500" />
            </span>
            Our Process
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary-theme mb-3">
            From Idea to{" "}
            <span className="gradient-text">Live Product</span>
          </h2>

          <p className="text-sm sm:text-base text-secondary-theme max-w-xl mx-auto">
            A transparent, structured process so you have clarity at every step
            and results are always as expected.
          </p>
        </div>

        {/* ── Desktop: Two Column ── */}
        <div className="hidden lg:grid grid-cols-[1fr_340px] gap-8 max-w-5xl mx-auto items-start">
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
          <ActiveStepPanel step={PROCESS_STEPS[activeStep]} />
        </div>

        {/* ── Mobile: Accordion ── */}
        <div className="lg:hidden space-y-2.5 max-w-2xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <MobileStepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-16 animate-in-delay-3">
          <div className="relative rounded-2xl overflow-hidden border border-card-theme">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-accent-600/90" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-7 sm:p-9">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                  Ready to Get Started?
                </h3>
                <p className="text-white/75 text-sm">
                  Book a free consultation call and discuss your project with us.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button className="px-5 py-2.5 rounded-xl bg-white text-primary-700 font-bold text-sm hover:bg-primary-50 transition-colors active:scale-95 whitespace-nowrap flex items-center gap-2">
                  Book Free Call
                  <ArrowRight size={15} />
                </button>
                <button className="px-5 py-2.5 rounded-xl border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-colors active:scale-95 whitespace-nowrap">
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

export default WorkProcess;