"use client";

import React, { useState } from "react";
import {
  FileText,
  Shield,
  User,
  Copyright,
  FileEdit,
  CreditCard,
  AlertTriangle,
  XCircle,
  Scale,
  RefreshCw,
  Mail,
  CheckCircle,
  ArrowUp,
  ExternalLink,
  Calendar,
  Briefcase,
  Lock,
  Ban,
  AlertCircle,
} from "lucide-react";
import { trackEvent } from "@/app/lib/analytics";

// ============================================
// TYPES & CONSTANTS
// ============================================

const LAST_UPDATED = "January 15, 2025";
const EFFECTIVE_DATE = "January 1, 2025";

const TABLE_OF_CONTENTS = [
  { id: "acceptance", title: "Acceptance of Terms", icon: FileText },
  { id: "services", title: "Description of Services", icon: Briefcase },
  { id: "accounts", title: "User Accounts", icon: User },
  { id: "intellectual-property", title: "Intellectual Property", icon: Copyright },
  { id: "user-content", title: "User Content & Conduct", icon: FileEdit },
  { id: "payment", title: "Payment Terms", icon: CreditCard },
  { id: "prohibited", title: "Prohibited Activities", icon: Ban },
  { id: "disclaimers", title: "Disclaimers", icon: AlertTriangle },
  { id: "limitation", title: "Limitation of Liability", icon: XCircle },
  { id: "indemnification", title: "Indemnification", icon: Shield },
  { id: "termination", title: "Termination", icon: AlertCircle },
  { id: "governing-law", title: "Governing Law", icon: Scale },
  { id: "changes", title: "Changes to Terms", icon: RefreshCw },
  { id: "contact", title: "Contact Us", icon: Mail },
];

const COMPANY_INFO = {
  name: "Webixle",
  email: "contact@webixle.com",
  phone: "+91 8796610171",
  address: "Gurgaon, India",
  website: "https://webixle.com",
};

const SERVICES_LIST = [
  "Web Development & Design",
  "Mobile App Development",
  "Blockchain & Web3 Solutions",
  "UI/UX Design Services",
  "Graphic Design & Branding",
  "Video Editing & Motion Graphics",
  "Digital Marketing Services",
  "Consulting & Strategy",
];

const PROHIBITED_ACTIVITIES = [
  {
    title: "Illegal Activities",
    items: [
      "Use our services for any unlawful purpose",
      "Violate any local, state, national, or international law",
      "Engage in fraudulent or deceptive practices",
    ],
  },
  {
    title: "Security Violations",
    items: [
      "Attempt to gain unauthorized access to our systems",
      "Distribute viruses, malware, or harmful code",
      "Interfere with or disrupt our services or servers",
    ],
  },
  {
    title: "Content Violations",
    items: [
      "Upload offensive, defamatory, or inappropriate content",
      "Infringe on intellectual property rights of others",
      "Impersonate any person or entity",
    ],
  },
  {
    title: "Commercial Misuse",
    items: [
      "Use our services for spam or unsolicited communications",
      "Engage in data scraping or automated data collection",
      "Resell our services without authorization",
    ],
  },
];

// ============================================
// MAIN COMPONENT
// ============================================

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      trackEvent("terms_section_click", "Terms of Service", id);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ══════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════ */}
      <section className="relative section-padding bg-mesh overflow-hidden pt-28">
        <div className="hero-glow" />
        <div className="absolute top-0 right-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-120 h-120 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              text-xs font-bold uppercase tracking-widest mb-5
              bg-card-theme border border-card-theme text-secondary-theme"
          >
            <FileText size={14} />
            Terms of Service
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight
              text-primary-theme mb-4 leading-[1.1]"
          >
            Terms & <span className="linear-text">Conditions</span>
          </h1>

          <p className="text-base sm:text-lg text-secondary-theme max-w-2xl mx-auto mb-6">
            Please read these terms carefully before using our services. By accessing or using
            our services, you agree to be bound by these terms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-tertiary-theme">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Last Updated: {LAST_UPDATED}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Effective: {EFFECTIVE_DATE}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 2 — CONTENT + SIDEBAR
      ══════════════════════════════ */}
      <section className="section-padding bg-mesh overflow-hidden">
        <div className="absolute top-0 left-0 w-120 h-120 rounded-full bg-primary-500/5 blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* ── Table of Contents (Sidebar) ── */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 p-5 rounded-2xl border border-card-theme bg-card-theme">
                <h3 className="text-sm font-bold text-primary-theme mb-4 flex items-center gap-2">
                  <FileText size={16} />
                  Table of Contents
                </h3>
                <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                  {TABLE_OF_CONTENTS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg
                          text-xs font-medium transition-all duration-200
                          ${
                            activeSection === item.id
                              ? "bg-primary-500/10 text-primary-500"
                              : "text-secondary-theme hover:bg-secondary-theme hover:text-primary-theme"
                          }`}
                      >
                        <Icon size={14} className="shrink-0" />
                        <span className="line-clamp-2">{item.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* ── Terms Content ── */}
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-8 rounded-2xl border border-card-theme bg-card-theme shadow-md space-y-10">

                {/* ── Important Notice Banner ── */}
                <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-amber-500 mb-1">
                        Important Legal Agreement
                      </h4>
                      <p className="text-sm text-secondary-theme">
                        These Terms of Service constitute a legally binding agreement between you and{" "}
                        <strong className="text-primary-theme">{COMPANY_INFO.name}</strong>. By using
                        our services, you acknowledge that you have read, understood, and agree to be
                        bound by these terms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── Section: Acceptance of Terms ── */}
                <TermsSection
                  id="acceptance"
                  icon={FileText}
                  title="Acceptance of Terms"
                  iconColor="text-primary-500"
                  iconBg="bg-primary-500/10"
                >
                  <p className="mb-4">
                    By accessing or using the services provided by <strong>{COMPANY_INFO.name}</strong>,
                    you agree to comply with and be bound by these Terms of Service ("Terms"). If you
                    do not agree to these Terms, please do not use our services.
                  </p>

                  <div className="space-y-3">
                    <InfoBlock
                      title="Who Can Use Our Services"
                      items={[
                        "You must be at least 18 years old or have parental/guardian consent",
                        "You must have the legal capacity to enter into a binding contract",
                        "You must not be prohibited from using our services under applicable law",
                        "You must provide accurate and complete information when using our services",
                      ]}
                    />

                    <InfoBlock
                      title="Scope of Agreement"
                      description="These Terms govern your use of:"
                      items={[
                        "Our website and all related services",
                        "Any mobile applications we provide",
                        "All content, features, and functionality offered through our services",
                        "All communications and interactions with our team",
                      ]}
                    />
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-blue-500">Note:</strong> By continuing to use our services
                      after any modifications to these Terms, you accept the updated terms.
                    </p>
                  </div>
                </TermsSection>

                {/* ── Section: Description of Services ── */}
                <TermsSection
                  id="services"
                  icon={Briefcase}
                  title="Description of Services"
                  iconColor="text-blue-500"
                  iconBg="bg-blue-500/10"
                >
                  <p className="mb-4">
                    <strong>{COMPANY_INFO.name}</strong> provides a range of digital services including
                    but not limited to:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {SERVICES_LIST.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-3 rounded-lg bg-secondary-theme border border-card-theme"
                      >
                        <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-secondary-theme">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <InfoBlock
                      title="Service Availability"
                      items={[
                        "We strive to provide uninterrupted service but cannot guarantee 100% uptime",
                        "Services may be temporarily unavailable for maintenance or updates",
                        "We reserve the right to modify or discontinue services at any time",
                        "Some features may be available only in certain regions",
                      ]}
                    />

                    <InfoBlock
                      title="Service Modifications"
                      description="We reserve the right to:"
                      items={[
                        "Update, modify, or enhance our services",
                        "Change pricing and service packages with advance notice",
                        "Discontinue certain features or services",
                        "Introduce new services or features",
                      ]}
                    />
                  </div>
                </TermsSection>

                {/* ── Section: User Accounts ── */}
                <TermsSection
                  id="accounts"
                  icon={User}
                  title="User Accounts & Registration"
                  iconColor="text-purple-500"
                  iconBg="bg-purple-500/10"
                >
                  <p className="mb-4">
                    Certain features of our services may require you to create an account. When you
                    create an account, you agree to:
                  </p>

                  <div className="space-y-3">
                    <InfoBlock
                      title="Account Responsibilities"
                      items={[
                        "Provide accurate, current, and complete information",
                        "Maintain and promptly update your account information",
                        "Keep your password secure and confidential",
                        "Notify us immediately of any unauthorized access",
                        "Accept responsibility for all activities under your account",
                        "Not share your account credentials with others",
                      ]}
                    />

                    <InfoBlock
                      title="Account Termination"
                      description="We reserve the right to suspend or terminate your account if:"
                      items={[
                        "You violate these Terms of Service",
                        "You engage in fraudulent or illegal activities",
                        "Your account has been inactive for an extended period",
                        "We are required to do so by law",
                      ]}
                    />
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-red-500">Important:</strong> You are solely responsible
                      for maintaining the confidentiality of your account credentials. We are not liable
                      for any losses arising from unauthorized use of your account.
                    </p>
                  </div>
                </TermsSection>

                {/* ── Section: Intellectual Property ── */}
                <TermsSection
                  id="intellectual-property"
                  icon={Copyright}
                  title="Intellectual Property Rights"
                  iconColor="text-orange-500"
                  iconBg="bg-orange-500/10"
                >
                  <p className="mb-4">
                    All content, features, and functionality on our services are owned by{" "}
                    <strong>{COMPANY_INFO.name}</strong> or our licensors and are protected by
                    intellectual property laws.
                  </p>

                  <div className="space-y-3">
                    <InfoBlock
                      title="Our Intellectual Property"
                      description="This includes but is not limited to:"
                      items={[
                        "Website design, layout, and user interface",
                        "Logos, trademarks, and brand materials",
                        "Source code, software, and applications",
                        "Written content, graphics, and multimedia",
                        "Proprietary processes and methodologies",
                        "All documentation and materials we create",
                      ]}
                    />

                    <InfoBlock
                      title="Client Projects"
                      description="For work created specifically for clients:"
                      items={[
                        "Upon full payment, clients receive ownership of agreed deliverables",
                        "We retain the right to showcase work in our portfolio (unless NDA applies)",
                        "Pre-existing materials and tools remain our property",
                        "Third-party licenses and assets are subject to their respective terms",
                      ]}
                    />

                    <InfoBlock
                      title="Prohibited Actions"
                      description="You may not:"
                      items={[
                        "Copy, reproduce, or distribute our content without permission",
                        "Modify, reverse engineer, or create derivative works",
                        "Remove copyright or proprietary notices",
                        "Use our branding or trademarks without authorization",
                      ]}
                    />
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-orange-500">Portfolio Rights:</strong> We reserve the
                      right to display completed client work in our portfolio, case studies, and marketing
                      materials unless otherwise agreed in writing.
                    </p>
                  </div>
                </TermsSection>

                {/* ── Section: User Content ── */}
                <TermsSection
                  id="user-content"
                  icon={FileEdit}
                  title="User Content & Conduct"
                  iconColor="text-green-500"
                  iconBg="bg-green-500/10"
                >
                  <p className="mb-4">
                    You may be able to submit content, feedback, or materials through our services.
                    By doing so, you grant us certain rights:
                  </p>

                  <div className="space-y-3">
                    <InfoBlock
                      title="Content License"
                      description="By submitting content, you grant us a:"
                      items={[
                        "Non-exclusive, worldwide, royalty-free license",
                        "Right to use, reproduce, modify, and display your content",
                        "Right to use content for service delivery and improvement",
                        "Right to showcase testimonials and feedback (with permission)",
                      ]}
                    />

                    <InfoBlock
                      title="Content Standards"
                      description="You agree that your content will:"
                      items={[
                        "Be accurate and not misleading",
                        "Not infringe on third-party rights",
                        "Not contain offensive or inappropriate material",
                        "Not violate any applicable laws or regulations",
                        "Not contain viruses or malicious code",
                      ]}
                    />

                    <InfoBlock
                      title="Content Monitoring"
                      items={[
                        "We reserve the right (but not obligation) to monitor user content",
                        "We may remove or refuse content that violates these Terms",
                        "We may report illegal content to authorities",
                        "We are not responsible for user-generated content",
                      ]}
                    />
                  </div>
                </TermsSection>

                {/* ── Section: Payment Terms ── */}
                <TermsSection
                  id="payment"
                  icon={CreditCard}
                  title="Payment Terms & Billing"
                  iconColor="text-teal-500"
                  iconBg="bg-teal-500/10"
                >
                  <p className="mb-4">
                    Payment terms are established in individual project agreements or invoices.
                    General payment terms include:
                  </p>

                  <div className="space-y-3">
                    <InfoBlock
                      title="Payment Schedule"
                      items={[
                        "Payment terms are specified in individual contracts or proposals",
                        "Typical structure: 50% upfront, 50% upon completion (varies by project)",
                        "Invoices are payable within the timeframe specified (usually 7-14 days)",
                        "Late payments may incur additional fees or service suspension",
                      ]}
                    />

                    <InfoBlock
                      title="Accepted Payment Methods"
                      items={[
                        "Bank transfer (NEFT/RTGS/IMPS)",
                        "UPI payments",
                        "Credit/Debit cards (via payment gateway)",
                        "PayPal (international clients)",
                        "Cryptocurrency (for select services)",
                      ]}
                    />

                    <InfoBlock
                      title="Refund Policy"
                      items={[
                        "Refunds are evaluated on a case-by-case basis",
                        "Deposits are generally non-refundable once work has commenced",
                        "Unused portions of prepaid services may be refundable",
                        "Refund requests must be submitted within 7 days of payment",
                      ]}
                    />

                    <InfoBlock
                      title="Price Changes"
                      items={[
                        "We reserve the right to change pricing with 30 days notice",
                        "Existing contracts are honored at agreed-upon rates",
                        "Additional work beyond scope may incur extra charges",
                        "All prices are in INR unless otherwise specified",
                      ]}
                    />
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-teal-500/5 border border-teal-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-teal-500">Payment Disputes:</strong> If you have concerns
                      about a charge, please contact us at{" "}
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-primary-500 hover:underline font-semibold"
                      >
                        {COMPANY_INFO.email}
                      </a>{" "}
                      within 30 days of the charge.
                    </p>
                  </div>
                </TermsSection>

                {/* ── Section: Prohibited Activities ── */}
                <TermsSection
                  id="prohibited"
                  icon={Ban}
                  title="Prohibited Activities"
                  iconColor="text-red-500"
                  iconBg="bg-red-500/10"
                >
                  <p className="mb-4">
                    When using our services, you agree NOT to engage in any of the following activities:
                  </p>

                  <div className="space-y-4">
                    {PROHIBITED_ACTIVITIES.map((category, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-red-500/5 border border-red-500/20"
                      >
                        <h4 className="text-sm font-bold text-red-500 mb-3 flex items-center gap-2">
                          <AlertTriangle size={16} />
                          {category.title}
                        </h4>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 text-sm text-secondary-theme">
                              <XCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-amber-500">Consequences:</strong> Violation of these
                      prohibitions may result in immediate termination of services, legal action,
                      and reporting to appropriate authorities.
                    </p>
                  </div>
                </TermsSection>

                {/* ── Section: Disclaimers ── */}
                <TermsSection
                  id="disclaimers"
                  icon={AlertTriangle}
                  title="Disclaimers & Warranties"
                  iconColor="text-yellow-500"
                  iconBg="bg-yellow-500/10"
                >
                  <div className="space-y-3">
                    <InfoBlock
                      title="Service 'As Is'"
                      items={[
                        'Our services are provided "AS IS" and "AS AVAILABLE" without warranties',
                        "We do not guarantee uninterrupted, error-free, or secure service",
                        "We do not warrant that results will meet your expectations",
                        "We disclaim all implied warranties of merchantability and fitness",
                      ]}
                    />

                    <InfoBlock
                      title="Third-Party Services"
                      items={[
                        "We are not responsible for third-party services or content",
                        "Links to external sites do not imply endorsement",
                        "Third-party integrations are subject to their own terms",
                        "We are not liable for third-party service failures",
                      ]}
                    />

                    <InfoBlock
                      title="Professional Advice"
                      items={[
                        "Our services do not constitute professional legal, financial, or tax advice",
                        "You should consult appropriate professionals for specific advice",
                        "We are not responsible for decisions made based on our content",
                      ]}
                    />
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-yellow-500">Important:</strong> Some jurisdictions do
                      not allow exclusion of warranties. In such cases, these disclaimers may not
                      apply to you.
                    </p>
                  </div>
                </TermsSection>

                {/* ── Section: Limitation of Liability ── */}
                <TermsSection
                  id="limitation"
                  icon={XCircle}
                  title="Limitation of Liability"
                  iconColor="text-red-500"
                  iconBg="bg-red-500/10"
                >
                  <p className="mb-4">
                    To the maximum extent permitted by law, <strong>{COMPANY_INFO.name}</strong> and
                    its affiliates, officers, employees, and agents shall not be liable for:
                  </p>

                  <div className="space-y-3">
                    <InfoBlock
                      title="Excluded Damages"
                      items={[
                        "Indirect, incidental, or consequential damages",
                        "Loss of profits, revenue, or business opportunities",
                        "Loss of data or information",
                        "Service interruptions or delays",
                        "Unauthorized access to your account or data",
                        "Errors or omissions in content",
                      ]}
                    />

                    <InfoBlock
                      title="Liability Cap"
                      description="Our total liability to you for any claims arising from these Terms or our services is limited to:"
                      items={[
                        "The amount you paid us in the 12 months preceding the claim, OR",
                        "₹10,000 (whichever is greater)",
                      ]}
                    />
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-red-500">Legal Notice:</strong> Some jurisdictions do
                      not allow limitation of liability for certain damages. These limitations may not
                      apply to you.
                    </p>
                  </div>
                </TermsSection>

                {/* ── Section: Indemnification ── */}
                <TermsSection
                  id="indemnification"
                  icon={Shield}
                  title="Indemnification"
                  iconColor="text-indigo-500"
                  iconBg="bg-indigo-500/10"
                >
                  <p className="mb-4">
                    You agree to indemnify, defend, and hold harmless <strong>{COMPANY_INFO.name}</strong>,
                    its affiliates, and their respective officers, employees, and agents from any claims,
                    damages, losses, or expenses arising from:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Your use of our services",
                      "Your violation of these Terms",
                      "Your violation of third-party rights",
                      "Your content or submissions",
                      "Your negligence or willful misconduct",
                      "Your violation of applicable laws",
                      "Unauthorized use of your account",
                      "Your business activities using our services",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-3 rounded-lg bg-secondary-theme border border-card-theme"
                      >
                        <Shield size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-secondary-theme">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                    <p className="text-sm text-secondary-theme">
                      This indemnification obligation will survive termination of these Terms and your
                      use of our services.
                    </p>
                  </div>
                </TermsSection>

                {/* ── Section: Termination ── */}
                <TermsSection
                  id="termination"
                  icon={AlertCircle}
                  title="Termination"
                  iconColor="text-pink-500"
                  iconBg="bg-pink-500/10"
                >
                  <div className="space-y-3">
                    <InfoBlock
                      title="Termination by You"
                      items={[
                        "You may stop using our services at any time",
                        "You may close your account by contacting us",
                        "Paid services may be subject to cancellation terms in your contract",
                        "You remain responsible for any charges incurred before termination",
                      ]}
                    />

                    <InfoBlock
                      title="Termination by Us"
                      description="We may suspend or terminate your access if:"
                      items={[
                        "You violate these Terms of Service",
                        "You engage in fraudulent or illegal activities",
                        "Your account has been inactive for an extended period",
                        "We are required to do so by law or legal process",
                        "We decide to discontinue our services",
                      ]}
                    />

                    <InfoBlock
                      title="Effect of Termination"
                      description="Upon termination:"
                      items={[
                        "Your right to use our services immediately ceases",
                        "We may delete your account and data (subject to legal requirements)",
                        "You remain liable for any outstanding payments",
                        "Provisions that should survive termination will remain in effect",
                      ]}
                    />
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-pink-500/5 border border-pink-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-pink-500">Data Retention:</strong> After termination,
                      we may retain certain information as required by law or for legitimate business
                      purposes.
                    </p>
                  </div>
                </TermsSection>

                {/* ── Section: Governing Law ── */}
                <TermsSection
                  id="governing-law"
                  icon={Scale}
                  title="Governing Law & Dispute Resolution"
                  iconColor="text-cyan-500"
                  iconBg="bg-cyan-500/10"
                >
                  <div className="space-y-3">
                    <InfoBlock
                      title="Governing Law"
                      items={[
                        "These Terms are governed by the laws of India",
                        "All disputes will be subject to the jurisdiction of courts in Gurgaon, Haryana",
                        "You agree to submit to the personal jurisdiction of these courts",
                      ]}
                    />

                    <InfoBlock
                      title="Dispute Resolution Process"
                      description="In the event of a dispute, we encourage the following process:"
                      items={[
                        "Step 1: Contact us directly to discuss the issue",
                        "Step 2: Attempt to resolve through good-faith negotiation",
                        "Step 3: Consider mediation if negotiation fails",
                        "Step 4: Legal action as a last resort",
                      ]}
                    />

                    <InfoBlock
                      title="Waiver of Class Actions"
                      items={[
                        "You agree to resolve disputes individually, not as part of a class action",
                        "You waive the right to participate in class-action lawsuits",
                        "Claims must be brought in your individual capacity",
                      ]}
                    />
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-cyan-500">Informal Resolution:</strong> Before filing a
                      claim, please contact us at{" "}
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-primary-500 hover:underline font-semibold"
                      >
                        {COMPANY_INFO.email}
                      </a>{" "}
                      to attempt to resolve the matter informally.
                    </p>
                  </div>
                </TermsSection>

                {/* ── Section: Changes to Terms ── */}
                <TermsSection
                  id="changes"
                  icon={RefreshCw}
                  title="Changes to These Terms"
                  iconColor="text-violet-500"
                  iconBg="bg-violet-500/10"
                >
                  <p className="mb-4">
                    We reserve the right to modify these Terms at any time. When we make changes:
                  </p>

                  <div className="space-y-3">
                    <InfoBlock
                      title="Notification Process"
                      items={[
                        'We will update the "Last Updated" date at the top of these Terms',
                        "We will notify you via email for significant changes",
                        "We may post a notice on our website or in our services",
                        "Continued use after changes constitutes acceptance",
                      ]}
                    />

                    <InfoBlock
                      title="Your Options"
                      description="If you do not agree to the updated Terms:"
                      items={[
                        "You may discontinue using our services",
                        "You may close your account",
                        "You should not continue using our services",
                        "Contact us to discuss specific concerns",
                      ]}
                    />
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-violet-500/5 border border-violet-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-violet-500">Review Regularly:</strong> We recommend
                      reviewing these Terms periodically to stay informed of any updates.
                    </p>
                  </div>
                </TermsSection>

                {/* ── Section: Contact Us ── */}
                <TermsSection
                  id="contact"
                  icon={Mail}
                  title="Contact Us"
                  iconColor="text-primary-500"
                  iconBg="bg-primary-500/10"
                >
                  <p className="mb-4">
                    If you have any questions, concerns, or feedback regarding these Terms of Service,
                    please contact us:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-secondary-theme border border-card-theme">
                      <div className="flex items-center gap-2 mb-2">
                        <Mail size={16} className="text-primary-500" />
                        <span className="text-xs font-bold uppercase tracking-widest text-tertiary-theme">
                          Email
                        </span>
                      </div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm font-medium text-secondary-theme hover:text-primary-500 transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>

                    <div className="p-4 rounded-xl bg-secondary-theme border border-card-theme">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield size={16} className="text-primary-500" />
                        <span className="text-xs font-bold uppercase tracking-widest text-tertiary-theme">
                          Phone
                        </span>
                      </div>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-sm font-medium text-secondary-theme hover:text-primary-500 transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>

                    <div className="p-4 rounded-xl bg-secondary-theme border border-card-theme">
                      <div className="flex items-center gap-2 mb-2">
                        <ExternalLink size={16} className="text-primary-500" />
                        <span className="text-xs font-bold uppercase tracking-widest text-tertiary-theme">
                          Website
                        </span>
                      </div>
                      <a
                        href={COMPANY_INFO.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-secondary-theme hover:text-primary-500 transition-colors"
                      >
                        {COMPANY_INFO.website}
                      </a>
                    </div>

                    <div className="p-4 rounded-xl bg-secondary-theme border border-card-theme">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield size={16} className="text-primary-500" />
                        <span className="text-xs font-bold uppercase tracking-widest text-tertiary-theme">
                          Address
                        </span>
                      </div>
                      <span className="text-sm font-medium text-secondary-theme">
                        {COMPANY_INFO.address}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20">
                    <h4 className="text-sm font-bold text-primary-theme mb-2">
                      Legal Department
                    </h4>
                    <p className="text-sm text-secondary-theme">
                      For legal notices or formal communications regarding these Terms, please email{" "}
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-primary-500 hover:underline font-semibold"
                      >
                        {COMPANY_INFO.email}
                      </a>{" "}
                      with the subject line "Legal Notice - Terms of Service"
                    </p>
                  </div>
                </TermsSection>

                {/* ── Acceptance Confirmation ── */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-green-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-base font-bold text-primary-theme mb-2">
                        Thank You for Reading
                      </h4>
                      <p className="text-sm text-secondary-theme mb-3">
                        By using our services, you acknowledge that you have read, understood, and
                        agree to be bound by these Terms of Service.
                      </p>
                      <p className="text-sm text-secondary-theme">
                        Last Updated: <strong className="text-primary-theme">{LAST_UPDATED}</strong>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SCROLL TO TOP BUTTON
      ══════════════════════════════ */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-700
          text-white shadow-lg shadow-primary-500/25 flex items-center justify-center
          transition-all duration-300 hover:scale-110 active:scale-95 z-50
          group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </>
  );
}

// ============================================
// HELPER COMPONENTS
// ============================================

interface TermsSectionProps {
  id: string;
  icon: React.ElementType;
  title: string;
  iconColor: string;
  iconBg: string;
  children: React.ReactNode;
}

const TermsSection: React.FC<TermsSectionProps> = ({
  id,
  icon: Icon,
  title,
  iconColor,
  iconBg,
  children,
}) => {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
          <Icon size={20} className={iconColor} />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-primary-theme">{title}</h2>
      </div>
      <div className="text-sm sm:text-base text-secondary-theme leading-relaxed">
        {children}
      </div>
    </div>
  );
};

interface InfoBlockProps {
  title: string;
  description?: string;
  items?: string[];
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, description, items }) => {
  return (
    <div className="p-4 rounded-xl bg-secondary-theme border border-card-theme">
      <h4 className="text-sm font-bold text-primary-theme mb-2">{title}</h4>
      {description && <p className="text-sm text-secondary-theme mb-3">{description}</p>}
      {items && (
        <ul className="space-y-1.5">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-secondary-theme">
              <span className="text-primary-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};