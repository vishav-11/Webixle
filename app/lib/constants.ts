import {
  Zap,
  Shield,
  BarChart3,
  Users,
  Globe,
  Lock,
  Cpu,
  Headphones,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Database,
  Cloud,
  Code2,
  Layers,
  type LucideIcon,
} from "lucide-react";

// ---- Navigation ----
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// ---- Company Info ----
export const COMPANY = {
  name: "Webixle",
  tagline: "The Future of Business Automation",
  description:
    "Webixle empowers businesses with cutting-edge AI automation, seamless integrations, and enterprise-grade security to accelerate growth.",
  email: "hello@Webixle.io",
  phone: "+1 (555) 000-0000",
  address: "100 Tech Avenue, San Francisco, CA 94105",
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
  },
} as const;

// ---- Services ----
export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
  popular?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "ai-automation",
    icon: Cpu,
    title: "AI Automation",
    description:
      "Harness the power of artificial intelligence to automate repetitive tasks, reduce human error, and free your team to focus on strategic work.",
    features: [
      "Smart workflow automation",
      "Natural language processing",
      "Predictive analytics",
      "Auto-scaling pipelines",
    ],
    color: "text-primary-500",
    gradient: "from-primary-500 to-primary-700",
    popular: true,
  },
  {
    id: "cloud-infrastructure",
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Deploy, scale, and manage your applications on a world-class cloud infrastructure with 99.9% uptime guarantee and global CDN.",
    features: [
      "Multi-cloud deployment",
      "Auto-scaling resources",
      "Global CDN network",
      "Real-time monitoring",
    ],
    color: "text-blue-500",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with our powerful analytics dashboard, custom reports, and real-time visualization tools.",
    features: [
      "Custom dashboards",
      "Real-time data streams",
      "Advanced reporting",
      "Data export & APIs",
    ],
    color: "text-accent-500",
    gradient: "from-accent-500 to-purple-600",
  },
  {
    id: "enterprise-security",
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Protect your business with military-grade encryption, zero-trust architecture, compliance tools, and 24/7 threat monitoring.",
    features: [
      "Zero-trust architecture",
      "End-to-end encryption",
      "Compliance tooling",
      "24/7 SOC monitoring",
    ],
    color: "text-green-500",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: "integrations",
    icon: Layers,
    title: "Seamless Integrations",
    description:
      "Connect with 500+ tools and platforms through our robust API layer. Sync data across your entire tech stack effortlessly.",
    features: [
      "500+ integrations",
      "REST & GraphQL APIs",
      "Webhook support",
      "OAuth 2.0 security",
    ],
    color: "text-orange-500",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "developer-tools",
    icon: Code2,
    title: "Developer Tools",
    description:
      "A complete developer experience with SDKs, CLI tools, sandbox environments, and comprehensive documentation.",
    features: [
      "Multi-language SDKs",
      "CLI & developer portal",
      "Sandbox environment",
      "Comprehensive docs",
    ],
    color: "text-yellow-500",
    gradient: "from-yellow-500 to-orange-500",
  },
];

// ---- Stats ----
export const STATS = [
  { label: "Active Users", value: "50K+", icon: Users },
  { label: "Uptime SLA", value: "99.9%", icon: TrendingUp },
  { label: "Integrations", value: "500+", icon: Layers },
  { label: "Data Processed", value: "10TB+", icon: Database },
] as const;

// ---- Features (Home) ----
export const FEATURES = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed with edge computing and advanced caching strategies.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Enterprise-grade security with SOC2 Type II compliance and end-to-end encryption.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deploy to 25+ regions worldwide with automatic load balancing and failover.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Real-time insights and predictive analytics to drive informed decisions.",
    color: "text-accent-500",
    bgColor: "bg-accent-500/10",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Built for teams with roles, permissions, real-time collaboration tools.",
    color: "text-primary-500",
    bgColor: "bg-primary-500/10",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Dedicated support team available around the clock via chat, email, and phone.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
] as const;

// ---- Testimonials ----
export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechCorp Inc.",
    avatar: "SC",
    rating: 5,
    content:
      "Webixle completely transformed our operations. We automated 70% of our manual processes in just 3 weeks. The ROI has been incredible.",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Engineering",
    company: "ScaleUp Labs",
    avatar: "MJ",
    rating: 5,
    content:
      "The developer experience is second to none. SDKs are clean, documentation is thorough, and the support team actually knows their product.",
  },
  {
    name: "Priya Sharma",
    role: "CEO",
    company: "DataBridge Co.",
    avatar: "PS",
    rating: 5,
    content:
      "Security and compliance were our biggest concerns. Webixle addressed all of them out of the box. SOC2 compliance made our enterprise sales much smoother.",
  },
] as const;

// ---- Pricing Plans ----
export const PLANS = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams and startups",
    features: [
      "Up to 5 team members",
      "10K API calls/month",
      "5 integrations",
      "Basic analytics",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For growing teams that need more power",
    features: [
      "Up to 25 team members",
      "100K API calls/month",
      "50 integrations",
      "Advanced analytics",
      "Priority support",
      "Custom workflows",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited team members",
      "Unlimited API calls",
      "All integrations",
      "Custom analytics",
      "24/7 dedicated support",
      "SLA guarantee",
      "Custom contracts",
    ],
    cta: "Contact Sales",
    popular: false,
  },
] as const;

// ---- Team Members ----
export const TEAM = [
  {
    name: "Alex Rivera",
    role: "CEO & Co-Founder",
    bio: "Former VP of Engineering at Stripe. 15+ years building scalable systems.",
    avatar: "AR",
    gradient: "from-primary-500 to-accent-500",
  },
  {
    name: "Jordan Lee",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer. Built infrastructure serving billions of requests daily.",
    avatar: "JL",
    gradient: "from-blue-500 to-primary-500",
  },
  {
    name: "Sam Kim",
    role: "Head of Design",
    bio: "Award-winning product designer. Previously at Figma and Linear.",
    avatar: "SK",
    gradient: "from-accent-500 to-pink-500",
  },
  {
    name: "Taylor Morgan",
    role: "VP of Engineering",
    bio: "Open source contributor with 10+ years in distributed systems.",
    avatar: "TM",
    gradient: "from-green-500 to-teal-500",
  },
] as const;

// ---- FAQ ----
export const FAQ = [
  {
    question: "How long does it take to get started?",
    answer:
      "You can be up and running in under 10 minutes. Our onboarding wizard guides you through setup, and we offer free migration assistance for teams switching from other platforms.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a 14-day free trial on all plans with no credit card required. You get full access to all Pro features during your trial.",
  },
  {
    question: "What integrations do you support?",
    answer:
      "We support 500+ integrations including Slack, Salesforce, HubSpot, GitHub, Jira, AWS, GCP, Azure, and many more. We also offer a custom integration API.",
  },
  {
    question: "How is my data secured?",
    answer:
      "We use AES-256 encryption at rest and TLS 1.3 in transit. We're SOC2 Type II certified, GDPR compliant, and perform regular third-party security audits.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. No lock-in contracts. Cancel anytime from your dashboard. We'll even help you export all your data in standard formats.",
  },
] as const;

// ---- Footer Links ----
export const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Demo", href: "/demo" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "DPA", href: "#" },
    { label: "Security", href: "#" },
  ],
} as const;

export const NAVBAR_HEIGHT = {
  mobile: 64,   // px — mobile navbar height
  desktop: 72,  // px — desktop navbar height
};