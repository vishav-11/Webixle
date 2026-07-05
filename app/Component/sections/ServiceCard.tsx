"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Smartphone, Palette, ShoppingCart, Layers, Headphones } from "lucide-react";
import { Button } from "@/app/Component/ui/Button";

// ============================================
// DATA
// ============================================

const SERVICES = [
  {
    id: 1,
    title: "Website Development",
    description: "High-performance, SEO-friendly websites built with modern frameworks like Next.js & React.",
    icon: Code2,
    color: "text-primary-500",
    bgColor: "bg-primary-500",
    delay: 0,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native & cross-platform mobile apps (iOS & Android) using Flutter, React Native & Swift.",
    icon: Smartphone,
    color: "text-accent-500",
    bgColor: "bg-accent-500",
    delay: 1,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centric interfaces designed for maximum engagement and intuitive navigation.",
    icon: Palette,
    color: "text-blue-500",
    bgColor: "bg-blue-500",
    delay: 2,
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    description: "Scalable online stores integrated with payment gateways and inventory management.",
    icon: ShoppingCart,
    color: "text-green-500",
    bgColor: "bg-green-500",
    delay: 3,
  },
  {
    id: 5,
    title: "Custom Software",
    description: "Tailor-made enterprise software solutions to automate your business workflows.",
    icon: Layers,
    color: "text-purple-500",
    bgColor: "bg-purple-500",
    delay: 4,
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description: "24/7 technical support, bug fixes, and feature updates to keep your system running.",
    icon: Headphones,
    color: "text-orange-500",
    bgColor: "bg-orange-500",
    delay: 5,
  },
];

const WHY_US = [
  { text: "Clean & Scalable Code" },
  { text: "Agile Development Process" },
  { text: "Transparent Communication" },
  { text: "Post-Launch Warranty" },
];

// ============================================
// SUB-COMPONENTS
// ============================================

const ServiceCard: React.FC<{
  item: typeof SERVICES[0];
  index: number;
}> = ({ item, index }) => {
  const Icon = item.icon;
  
  return (
    <div 
      className="group relative p-6 sm:p-8 rounded-2xl bg-card-theme border border-card-theme transition-all duration-300 hover:border-primary-500/30 hover:bg-secondary-theme hover:-translate-y-2 animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 bg-linear-to-br from-${item.bgColor} to-transparent transition-opacity duration-500`} 
        style={{ backgroundColor: 'transparent' }} // Fallback handled by Tailwind classes below
      />
      
      {/* Icon Container */}
      <div className={`relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br from-${item.color === "text-primary-500" ? "primary" : item.color.includes("accent") ? "accent" : "blue"}-100 dark:from-${item.color === "text-primary-500" ? "primary" : "blue"}-900/30 group-hover:scale-110 transition-transform duration-300`}>
         {/* Custom Logic for dynamic classes isn't ideal in static render, so we use simpler hex approach below manually */}
         <div className="flex items-center justify-center w-full h-full">
             {/* Re-implementing dynamically colored backgrounds properly for Tailwind */}
             <Icon 
               size={28} 
               className={`${item.color} group-hover:rotate-12 transition-transform duration-300`} 
             />
         </div>
      </div>

      {/* Content */}
      <h3 className="text-xl sm:text-2xl font-bold text-primary-theme mb-3 tracking-tight group-hover:text-primary-500 transition-colors">
        {item.title}
      </h3>
      
      <p className="text-secondary-theme leading-relaxed mb-6 line-clamp-3">
        {item.description}
      </p>

      {/* Learn More Link */}
      <div className="flex items-center gap-2 text-primary-500 font-semibold group-hover:gap-3 transition-all duration-300">
        <span>Learn More</span>
        <ArrowRight size={16} />
      </div>

      {/* Decorative Bottom Corner */}
      <div className="absolute bottom-4 right-4 w-16 h-16 bg-linear-to-bl from-transparent via-current opacity-[0.03] transition-opacity group-hover:opacity-10" />
    </div>
  );
};

const StatsStrip: React.FC = () => (
  <div className="w-full py-8 border-y border-border-primary-theme mt-12 flex flex-wrap justify-center gap-8 sm:gap-16">
    {WHY_US.map((item, i) => (
      <div key={i} className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
          <CheckCircleIcon className="w-3 h-3 text-green-500" />
        </div>
        <span className="text-sm sm:text-base font-medium text-primary-theme">{item.text}</span>
      </div>
    ))}
  </div>
);

const CheckCircleIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"></polyline></svg>
);


// ============================================
// MAIN COMPONENT
// ============================================

export const Services: React.FC = () => {
  return (
    <section className="relative section-padding bg-mesh overflow-hidden">
      
      {/* ── Background Decorations (Keep consistent with Hero) ── */}
      <div className="absolute top-[-20%] left-[-10%] w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-120 h-120 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* ── Header Area ── */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in">
          <BadgeNew variant="success" dot>Our Expertise</BadgeNew>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1]">
            We Build <span className="gradient-text">Digital Products</span> That Matter
          </h2>
          <p className="mt-4 text-lg text-secondary-theme max-w-2xl mx-auto">
            From concept to launch, we handle every aspect of development ensuring your vision becomes a reality with high-quality standards.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} item={service} index={index} />
          ))}
        </div>

        {/* ── Trust Strip / CTA ── */}
        <div className="mt-16 animate-in-delay-2">
          <StatsStrip />

          <div className="text-center mt-10">
             <Link href="/services">
                <Button variant="secondary" className="rounded-full px-8 py-3">
                  Explore All Services <ArrowRight size={16} className="ml-2"/>
                </Button>
             </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

// ── Helper Badge Component (If needed, otherwise use native Badge) ──
const BadgeNew: React.FC<{variant?: string; children: React.ReactNode; dot?: boolean}> = ({ variant, children, dot }) => (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-primary-100/50 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
        {dot && <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>}
        {children}
    </span>
);