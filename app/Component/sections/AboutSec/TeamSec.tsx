"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
 
  Globe,
  ArrowRight,
  Sparkles,
  Users,
  MapPin,
  Briefcase,
  Heart,
  Code2,
  Palette,
  TrendingUp,
  Video,
  Link2,
  Smartphone,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Aryan Kapoor",
    role: "Founder & CEO",
    department: "Leadership",
    bio: "Visionary behind Webixle. Aryan leads product strategy, client relationships, and overall company direction with 5+ years of experience in the digital space.",
    avatar: "AK",
    gradient: "from-primary-500 to-accent-500",
    bgGradient: "from-primary-500/10 to-accent-500/5",
    borderColor: "border-primary-500/30",
    iconColor: "text-primary-500",
    location: "Mumbai, India",
    experience: "5+ Years",
    skills: ["Strategy", "Product", "Leadership", "Business Dev"],
    icon: Briefcase,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      website: "#",
    },
    featured: true,
    emoji: "👑",
    funFact: "Drinks 6 cups of chai daily ☕",
  },
  {
    id: 2,
    name: "Sneha Rathi",
    role: "Lead UI/UX Designer",
    department: "Design",
    bio: "Sneha crafts beautiful, user-centered designs that balance aesthetics with functionality. She leads all design projects and maintains our visual consistency.",
    avatar: "SR",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 to-rose-500/5",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-500",
    location: "Pune, India",
    experience: "4+ Years",
    skills: ["Figma", "UI Design", "Prototyping", "Design Systems"],
    icon: Palette,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      website: "#",
    },
    featured: true,
    emoji: "🎨",
    funFact: "Redesigns menus at restaurants for fun 😄",
  },
  {
    id: 3,
    name: "Mihir Joshi",
    role: "Full Stack Developer",
    department: "Development",
    bio: "Mihir is our full-stack powerhouse who turns complex requirements into clean, scalable code. Expert in Next.js, Node.js, and everything in between.",
    avatar: "MJ",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    location: "Bangalore, India",
    experience: "3+ Years",
    skills: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    icon: Code2,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      website: "#",
    },
    featured: true,
    emoji: "💻",
    funFact: "Has 47 browser tabs open at all times 😂",
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "Mobile App Developer",
    department: "Development",
    bio: "Priya specializes in cross-platform mobile development with Flutter and React Native. She's shipped 20+ apps on both App Store and Play Store.",
    avatar: "PN",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/5",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
    location: "Chennai, India",
    experience: "3+ Years",
    skills: ["Flutter", "React Native", "Firebase", "iOS/Android"],
    icon: Smartphone,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      website: "#",
    },
    featured: false,
    emoji: "📱",
    funFact: "Has every popular app installed for 'research' 🔍",
  },
  {
    id: 5,
    name: "Nakul Sharma",
    role: "Blockchain Developer",
    department: "Web3",
    bio: "Nakul is our Web3 wizard — building smart contracts, DeFi protocols, and NFT platforms. He lives and breathes blockchain technology.",
    avatar: "NS",
    gradient: "from-orange-500 to-yellow-500",
    bgGradient: "from-orange-500/10 to-yellow-500/5",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-500",
    location: "Delhi, India",
    experience: "2+ Years",
    skills: ["Solidity", "Ethers.js", "Web3.js", "DeFi"],
    icon: Link2,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      website: "#",
    },
    featured: false,
    emoji: "⛓️",
    funFact: "Predicted 3 crypto bull runs correctly 📈",
  },
  {
    id: 6,
    name: "Riya Mehta",
    role: "Digital Marketing Lead",
    department: "Marketing",
    bio: "Riya drives growth through data-driven marketing strategies. From SEO to paid ads, she ensures our clients' products reach the right audience at the right time.",
    avatar: "RM",
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-500/10 to-violet-500/5",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500",
    location: "Ahmedabad, India",
    experience: "4+ Years",
    skills: ["SEO", "Meta Ads", "Google Ads", "Analytics"],
    icon: TrendingUp,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      website: "#",
    },
    featured: false,
    emoji: "📈",
    funFact: "Can explain ROAS to literally anyone 📊",
  },
  {
    id: 7,
    name: "Karan Verma",
    role: "Video Editor & Motion",
    department: "Creative",
    bio: "Karan brings brands to life through stunning video content and motion graphics. From product reels to full brand films — he makes everything move beautifully.",
    avatar: "KV",
    gradient: "from-cyan-500 to-teal-500",
    bgGradient: "from-cyan-500/10 to-teal-500/5",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-500",
    location: "Hyderabad, India",
    experience: "3+ Years",
    skills: ["After Effects", "Premiere Pro", "Motion Graphics", "DaVinci"],
    icon: Video,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      website: "#",
    },
    featured: false,
    emoji: "🎬",
    funFact: "Watches films frame by frame for fun 🎥",
  },
  {
    id: 8,
    name: "Tanvi Shah",
    role: "Graphic Designer",
    department: "Design",
    bio: "Tanvi creates compelling visual identities, brand kits, and marketing materials. Her work has helped 30+ brands establish a strong visual presence.",
    avatar: "TS",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/10 to-pink-500/5",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-500",
    location: "Surat, India",
    experience: "2+ Years",
    skills: ["Adobe Illustrator", "Photoshop", "Branding", "Logo Design"],
    icon: Palette,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      website: "#",
    },
    featured: false,
    emoji: "✏️",
    funFact: "Sees logos in cloud formations ☁️",
  },
];

const DEPARTMENTS = [
  { id: "all", label: "All Members", count: TEAM_MEMBERS.length },
  {
    id: "Leadership",
    label: "Leadership",
    count: TEAM_MEMBERS.filter((m) => m.department === "Leadership").length,
  },
  {
    id: "Development",
    label: "Development",
    count: TEAM_MEMBERS.filter((m) => m.department === "Development").length,
  },
  {
    id: "Design",
    label: "Design",
    count: TEAM_MEMBERS.filter((m) => m.department === "Design").length,
  },
  {
    id: "Web3",
    label: "Web3",
    count: TEAM_MEMBERS.filter((m) => m.department === "Web3").length,
  },
  {
    id: "Marketing",
    label: "Marketing",
    count: TEAM_MEMBERS.filter((m) => m.department === "Marketing").length,
  },
  {
    id: "Creative",
    label: "Creative",
    count: TEAM_MEMBERS.filter((m) => m.department === "Creative").length,
  },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Social Link Button ── */
const SocialButton: React.FC<{
  href: string;
  icon: React.ElementType;
  label: string;
}> = ({ href, icon: Icon, label }) => (
  <Link
    href={href}
    target="_blank"
    aria-label={label}
    className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary-theme border border-card-theme text-tertiary-theme hover:text-primary-theme hover:border-primary-500/30 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-all duration-200 hover:scale-110 active:scale-95"
  >
    <Icon size={14} />
  </Link>
);

/* ── Team Member Card ── */
const TeamCard: React.FC<{
  member: (typeof TEAM_MEMBERS)[0];
  index: number;
}> = ({ member, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = member.icon;

  return (
    <div
      className="group animate-fade-up"
      style={{ animationDelay: `${index * 0.08}s` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="relative h-full">
        {/* Card */}
        <div
          className={`relative p-6 rounded-2xl border bg-card-theme transition-all duration-300 h-full flex flex-col ${
            isFlipped
              ? `${member.borderColor} shadow-[var(--shadow-elevation-lg)] -translate-y-2 bg-gradient-to-br ${member.bgGradient}`
              : "border-card-theme hover:border-primary-500/20"
          }`}
        >
          {/* Featured Badge */}
          {member.featured && (
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800/40">
                ⭐ Core Team
              </span>
            </div>
          )}

          {/* Avatar + Info Row */}
          <div className="flex items-start gap-4 mb-4">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-lg font-extrabold shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {member.avatar}
              </div>
              {/* Dept Icon */}
              <div
                className={`absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-md`}
              >
                <Icon size={13} className="text-white" />
              </div>
            </div>

            {/* Name + Role */}
            <div className="flex-1 min-w-0 pt-1">
              <h3 className="font-bold text-primary-theme text-base leading-tight group-hover:text-primary-500 transition-colors">
                {member.name}
              </h3>
              <p className={`text-xs font-bold mt-0.5 ${member.iconColor}`}>
                {member.role}
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <MapPin size={11} className="text-tertiary-theme" />
                <span className="text-[10px] text-tertiary-theme font-medium">
                  {member.location}
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-xs sm:text-sm text-secondary-theme leading-relaxed mb-4 line-clamp-3 flex-1">
            {member.bio}
          </p>

          {/* Fun Fact (shows on hover) */}
          <div
            className={`mb-4 px-3 py-2 rounded-xl bg-secondary-theme border border-card-theme transition-all duration-300 ${
              isFlipped ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <p className="text-xs text-secondary-theme font-medium">
              <span className="font-bold text-primary-theme">Fun fact: </span>
              {member.funFact}
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="text-[10px] font-semibold px-2 py-1 rounded-md bg-secondary-theme border border-card-theme text-secondary-theme"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between pt-3 border-t border-card-theme">
            {/* Experience */}
            <div className="flex items-center gap-1.5">
              <Briefcase size={11} className="text-tertiary-theme" />
              <span className="text-[10px] font-bold text-secondary-theme">
                {member.experience}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-1.5">
              {/* <SocialButton
                href={member.social.linkedin}
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialButton
                href={member.social.github}
                icon={Github}
                label="GitHub"
              />
              <SocialButton
                href={member.social.twitter}
                icon={Twitter}
                label="Twitter"
              />
              <SocialButton
                href={member.social.website}
                icon={Globe}
                label="Website"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Department Filter ── */
const DepartmentFilter: React.FC<{
  active: string;
  onChange: (id: string) => void;
}> = ({ active, onChange }) => (
  <div className="flex flex-wrap justify-center gap-2">
    {DEPARTMENTS.map((dept) => (
      <button
        key={dept.id}
        onClick={() => onChange(dept.id)}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
          active === dept.id
            ? "bg-primary-600 text-white shadow-[var(--shadow-glow)]"
            : "bg-card-theme border border-card-theme text-secondary-theme hover:text-primary-theme hover:border-primary-500/30"
        }`}
      >
        {dept.label}
        <span
          className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
            active === dept.id
              ? "bg-white/20 text-white"
              : "bg-secondary-theme text-tertiary-theme"
          }`}
        >
          {dept.count}
        </span>
      </button>
    ))}
  </div>
);

/* ── We're Hiring Banner ── */
const HiringBanner: React.FC = () => (
  <div className="mt-16 relative rounded-2xl overflow-hidden animate-in-delay-3">
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600" />

    {/* Pattern */}
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />

    {/* Glow Orbs */}
    <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-accent-400/20 blur-3xl pointer-events-none" />

    {/* Content */}
    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-10">
      {/* Left */}
      <div className="flex items-center gap-6">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shrink-0 shadow-xl">
          <Heart size={30} className="text-white" fill="white" />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">
              Join The Team
            </span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-400/20 border border-green-400/30 text-[10px] font-bold text-green-300">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Hiring Now
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            We're Looking for Talent! 🚀
          </h3>
          <p className="text-white/70 text-sm sm:text-base max-w-lg">
            Are you passionate about tech, design, or marketing? Join our
            young, energetic team and build the future of digital products
            together.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-3 shrink-0 w-full lg:w-auto">
        {/* Open Roles */}
        <div className="flex flex-wrap gap-2 justify-center lg:justify-end mb-2">
          {[
            "React Developer",
            "UI/UX Designer",
            "SEO Specialist",
          ].map((role) => (
            <span
              key={role}
              className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white"
            >
              {role}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link href="/careers">
          <button className="w-full lg:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-primary-700 font-bold text-sm hover:bg-primary-50 transition-all duration-200 active:scale-95 shadow-xl whitespace-nowrap">
            View Open Positions
            <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    </div>
  </div>
);

/* ── Team Stats Strip ── */
const TeamStatsStrip: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 max-w-4xl mx-auto animate-in-delay-1">
    {[
      { value: "15+", label: "Team Members", emoji: "👥" },
      { value: "7", label: "Departments", emoji: "🏢" },
      { value: "5+", label: "Avg Experience", emoji: "💼" },
      { value: "100%", label: "Remote Friendly", emoji: "🌍" },
    ].map((stat) => (
      <div
        key={stat.label}
        className="flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-1 transition-all duration-300 group"
      >
        <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
          {stat.emoji}
        </span>
        <div className="text-2xl font-extrabold text-primary-theme group-hover:text-primary-500 transition-colors">
          {stat.value}
        </div>
        <div className="text-xs text-secondary-theme font-medium">
          {stat.label}
        </div>
      </div>
    ))}
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const TeamSection: React.FC = () => {
  const [activeDept, setActiveDept] = useState("all");

  const filteredMembers =
    activeDept === "all"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.department === activeDept);

  return (
    <section id="team" className="relative section-padding bg-mesh overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] rounded-full bg-primary-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full bg-accent-500/5 blur-[110px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50 mb-5">
            <Users size={13} className="text-blue-500" />
            Our Team
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            The People Behind{" "}
            <span className="gradient-text">Webixle</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            A team of energetic youngsters who stay updated with the latest
            trends, technologies, and creative strategies to deliver modern
            digital experiences.
          </p>
        </div>

        {/* ── Team Stats Strip ── */}
        <TeamStatsStrip />

        {/* ── Department Filter ── */}
        <div className="mb-10 animate-in-delay-1">
          <DepartmentFilter
            active={activeDept}
            onChange={(id) => setActiveDept(id)}
          />
        </div>

        {/* ── Team Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {filteredMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* ── Hiring Banner ── */}
        <HiringBanner />
      </div>
    </section>
  );
};