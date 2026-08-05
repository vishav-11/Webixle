"use client";

import React, { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  Users,
  Database,
  Cookie,
  FileText,
  Mail,
  Calendar,
  CheckCircle,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import { trackEvent } from "@/app/lib/analytics";

// ============================================
// TYPES & CONSTANTS
// ============================================

const LAST_UPDATED = "January , 2026";

const TABLE_OF_CONTENTS = [
  { id: "introduction", title: "Introduction", icon: Shield },
  { id: "information-collected", title: "Information We Collect", icon: Database },
  { id: "how-we-use", title: "How We Use Your Information", icon: Eye },
  { id: "information-sharing", title: "Information Sharing", icon: Users },
  { id: "data-security", title: "Data Security", icon: Lock },
  { id: "your-rights", title: "Your Rights", icon: CheckCircle },
  { id: "cookies", title: "Cookies & Tracking", icon: Cookie },
  { id: "third-party", title: "Third-Party Services", icon: ExternalLink },
  { id: "children", title: "Children's Privacy", icon: Shield },
  { id: "changes", title: "Changes to This Policy", icon: FileText },
  { id: "contact", title: "Contact Us", icon: Mail },
];

const COMPANY_INFO = {
  name: "Webixle",
  email: "contact@webixle.com",
  phone: "+91 8796610171",
  address: "Gurgaon, India",
  website: "https://webixle.com",
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function PrivacyPolicyPage() {
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

      trackEvent("privacy_policy_section_click", "Privacy Policy", id);
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
            <Shield size={14} />
            Privacy Policy
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight
              text-primary-theme mb-4 leading-[1.1]"
          >
            Your Privacy <span className="linear-text">Matters to Us</span>
          </h1>

          <p className="text-base sm:text-lg text-secondary-theme max-w-2xl mx-auto mb-6">
            We are committed to protecting your personal information and your right to privacy.
            This policy explains how we collect, use, and safeguard your data.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-tertiary-theme">
            <Calendar size={16} />
            <span>Last Updated: {LAST_UPDATED}</span>
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
                <nav className="space-y-1">
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
                        <Icon size={14} />
                        <span className="line-clamp-1">{item.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* ── Policy Content ── */}
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-8 rounded-2xl border border-card-theme bg-card-theme shadow-md space-y-10">

                {/* ── Section: Introduction ── */}
                <PolicySection
                  id="introduction"
                  icon={Shield}
                  title="Introduction"
                  iconColor="text-primary-500"
                  iconBg="bg-primary-500/10"
                >
                  <p className="mb-4">
                    Welcome to <strong>{COMPANY_INFO.name}</strong>. We respect your privacy and
                    are committed to protecting your personal data. This privacy policy will inform
                    you about how we look after your personal data when you visit our website,
                    use our services, or interact with us, and tell you about your privacy rights.
                  </p>
                  <p>
                    This policy applies to information we collect when you use our website,
                    mobile applications, or other online services (collectively, the "Services"),
                    or when you otherwise interact with us.
                  </p>
                </PolicySection>

                {/* ── Section: Information Collected ── */}
                <PolicySection
                  id="information-collected"
                  icon={Database}
                  title="Information We Collect"
                  iconColor="text-blue-500"
                  iconBg="bg-blue-500/10"
                >
                  <p className="mb-4">
                    We collect several types of information from and about users of our Services:
                  </p>

                  <div className="space-y-4">
                    <InfoBlock
                      title="Personal Information You Provide"
                      items={[
                        "Name, email address, phone number",
                        "Company name and job title",
                        "Billing and payment information",
                        "Project details and requirements",
                        "Communication preferences",
                        "Any other information you choose to provide",
                      ]}
                    />

                    <InfoBlock
                      title="Information Collected Automatically"
                      items={[
                        "IP address and device information",
                        "Browser type and version",
                        "Pages visited and time spent",
                        "Referring website/source",
                        "Operating system and platform",
                        "Cookies and similar tracking technologies",
                      ]}
                    />

                    <InfoBlock
                      title="Information from Third Parties"
                      items={[
                        "Social media platforms (if you connect your account)",
                        "Analytics providers (Google Analytics, etc.)",
                        "Advertising networks",
                        "Payment processors",
                      ]}
                    />
                  </div>
                </PolicySection>

                {/* ── Section: How We Use Your Information ── */}
                <PolicySection
                  id="how-we-use"
                  icon={Eye}
                  title="How We Use Your Information"
                  iconColor="text-purple-500"
                  iconBg="bg-purple-500/10"
                >
                  <p className="mb-4">
                    We use the information we collect for various purposes, including:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Provide and maintain our Services",
                      "Process your requests and transactions",
                      "Send you updates and communications",
                      "Improve and optimize our Services",
                      "Analyze usage and trends",
                      "Detect and prevent fraud or abuse",
                      "Comply with legal obligations",
                      "Send marketing communications (with consent)",
                      "Personalize your experience",
                      "Provide customer support",
                      "Conduct research and development",
                      "Protect our legal rights",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-secondary-theme">{item}</span>
                      </div>
                    ))}
                  </div>
                </PolicySection>

                {/* ── Section: Information Sharing ── */}
                <PolicySection
                  id="information-sharing"
                  icon={Users}
                  title="Information Sharing and Disclosure"
                  iconColor="text-orange-500"
                  iconBg="bg-orange-500/10"
                >
                  <p className="mb-4">
                    We may share your information in the following circumstances:
                  </p>

                  <div className="space-y-4">
                    <InfoBlock
                      title="Service Providers"
                      description="We share information with third-party vendors who perform services on our behalf, such as:"
                      items={[
                        "Cloud hosting providers (AWS, Vercel, etc.)",
                        "Payment processors (Stripe, Razorpay, PayPal)",
                        "Email service providers (SendGrid, Mailchimp)",
                        "Analytics providers (Google Analytics, Mixpanel)",
                        "Customer support tools (Intercom, Zendesk)",
                      ]}
                    />

                    <InfoBlock
                      title="Legal Requirements"
                      description="We may disclose your information if required by law or if we believe such action is necessary to:"
                      items={[
                        "Comply with legal processes or government requests",
                        "Enforce our terms and conditions",
                        "Protect our rights, privacy, safety, or property",
                        "Prevent fraud or illegal activities",
                      ]}
                    />

                    <InfoBlock
                      title="Business Transfers"
                      description="In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
                    />
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-green-500">We do NOT sell your personal data</strong> to
                      third parties for their marketing purposes.
                    </p>
                  </div>
                </PolicySection>

                {/* ── Section: Data Security ── */}
                <PolicySection
                  id="data-security"
                  icon={Lock}
                  title="Data Security"
                  iconColor="text-red-500"
                  iconBg="bg-red-500/10"
                >
                  <p className="mb-4">
                    We implement appropriate technical and organizational security measures to protect
                    your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {[
                      "SSL/TLS encryption for data transmission",
                      "Encrypted storage of sensitive data",
                      "Regular security audits and assessments",
                      "Access controls and authentication",
                      "Firewall and intrusion detection systems",
                      "Regular backups and disaster recovery plans",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Lock size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-secondary-theme">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-yellow-500">Important:</strong> No method of transmission
                      over the internet or electronic storage is 100% secure. While we strive to protect
                      your data, we cannot guarantee absolute security.
                    </p>
                  </div>
                </PolicySection>

                {/* ── Section: Your Rights ── */}
                <PolicySection
                  id="your-rights"
                  icon={CheckCircle}
                  title="Your Privacy Rights"
                  iconColor="text-green-500"
                  iconBg="bg-green-500/10"
                >
                  <p className="mb-4">
                    Depending on your location, you may have the following rights regarding your personal data:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        title: "Right to Access",
                        description: "Request a copy of the personal data we hold about you",
                      },
                      {
                        title: "Right to Rectification",
                        description: "Request correction of inaccurate or incomplete data",
                      },
                      {
                        title: "Right to Erasure",
                        description: 'Request deletion of your personal data ("right to be forgotten")',
                      },
                      {
                        title: "Right to Restrict Processing",
                        description: "Request that we limit how we use your data",
                      },
                      {
                        title: "Right to Data Portability",
                        description: "Request transfer of your data to another service",
                      },
                      {
                        title: "Right to Object",
                        description: "Object to processing of your data for certain purposes",
                      },
                      {
                        title: "Right to Withdraw Consent",
                        description: "Withdraw consent at any time (where processing is based on consent)",
                      },
                    ].map((right, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-secondary-theme border border-card-theme">
                        <h4 className="text-sm font-bold text-primary-theme mb-1">
                          {right.title}
                        </h4>
                        <p className="text-sm text-secondary-theme">{right.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
                    <p className="text-sm text-secondary-theme">
                      To exercise any of these rights, please contact us at{" "}
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-primary-500 hover:underline font-semibold"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                  </div>
                </PolicySection>

                {/* ── Section: Cookies ── */}
                <PolicySection
                  id="cookies"
                  icon={Cookie}
                  title="Cookies & Tracking Technologies"
                  iconColor="text-yellow-500"
                  iconBg="bg-yellow-500/10"
                >
                  <p className="mb-4">
                    We use cookies and similar tracking technologies to track activity on our Services
                    and store certain information. Types of cookies we use:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        type: "Essential Cookies",
                        description: "Necessary for the website to function properly. Cannot be disabled.",
                        color: "red",
                      },
                      {
                        type: "Performance Cookies",
                        description: "Help us understand how visitors interact with our website (e.g., Google Analytics).",
                        color: "blue",
                      },
                      {
                        type: "Functional Cookies",
                        description: "Remember your preferences and settings for a better experience.",
                        color: "purple",
                      },
                      {
                        type: "Marketing Cookies",
                        description: "Track your activity to deliver personalized ads and measure campaign effectiveness.",
                        color: "green",
                      },
                    ].map((cookie, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border bg-${cookie.color}-500/5 border-${cookie.color}-500/20`}
                      >
                        <h4 className={`text-sm font-bold text-${cookie.color}-500 mb-1`}>
                          {cookie.type}
                        </h4>
                        <p className="text-sm text-secondary-theme">{cookie.description}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-secondary-theme">
                    You can control cookies through your browser settings. However, disabling cookies
                    may affect the functionality of our Services.
                  </p>
                </PolicySection>

                {/* ── Section: Third-Party Services ── */}
                <PolicySection
                  id="third-party"
                  icon={ExternalLink}
                  title="Third-Party Services"
                  iconColor="text-indigo-500"
                  iconBg="bg-indigo-500/10"
                >
                  <p className="mb-4">
                    Our Services may contain links to third-party websites and use third-party services.
                    We integrate with:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Google Analytics (Analytics)",
                      "Google Tag Manager (Tag Management)",
                      "Facebook Pixel (Advertising)",
                      "LinkedIn Insight Tag (Advertising)",
                      "Stripe/Razorpay (Payments)",
                      "SendGrid/Mailchimp (Email)",
                      "Intercom (Customer Support)",
                      "Cloudflare (Security & CDN)",
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-secondary-theme">
                        <ExternalLink size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-secondary-theme">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                    <p className="text-sm text-secondary-theme">
                      <strong className="text-yellow-500">Note:</strong> We are not responsible for
                      the privacy practices of third-party services. Please review their privacy policies.
                    </p>
                  </div>
                </PolicySection>

                {/* ── Section: Children's Privacy ── */}
                <PolicySection
                  id="children"
                  icon={Shield}
                  title="Children's Privacy"
                  iconColor="text-pink-500"
                  iconBg="bg-pink-500/10"
                >
                  <p className="mb-4">
                    Our Services are not intended for children under the age of 13 (or 16 in the European Economic Area).
                    We do not knowingly collect personal information from children.
                  </p>

                  <p className="text-sm text-secondary-theme">
                    If you are a parent or guardian and believe your child has provided us with personal
                    information, please contact us at{" "}
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-primary-500 hover:underline font-semibold"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    . We will take steps to delete such information.
                  </p>
                </PolicySection>

                {/* ── Section: Changes to Policy ── */}
                <PolicySection
                  id="changes"
                  icon={FileText}
                  title="Changes to This Privacy Policy"
                  iconColor="text-cyan-500"
                  iconBg="bg-cyan-500/10"
                >
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices
                    or for other operational, legal, or regulatory reasons.
                  </p>

                  <p className="mb-4 text-sm text-secondary-theme">
                    When we make changes, we will:
                  </p>

                  <div className="space-y-2">
                    {[
                      'Update the "Last Updated" date at the top of this policy',
                      "Notify you via email (if the changes are significant)",
                      "Post a notice on our website homepage",
                      "Provide a prominent notice within our Services",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-secondary-theme">{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-secondary-theme">
                    We encourage you to review this Privacy Policy periodically to stay informed about
                    how we protect your information.
                  </p>
                </PolicySection>

                {/* ── Section: Contact Us ── */}
                <PolicySection
                  id="contact"
                  icon={Mail}
                  title="Contact Us"
                  iconColor="text-primary-500"
                  iconBg="bg-primary-500/10"
                >
                  <p className="mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or
                    our data practices, please contact us:
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
                      Data Protection Officer
                    </h4>
                    <p className="text-sm text-secondary-theme">
                      For privacy-related inquiries, you can reach our Data Protection Officer at{" "}
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-primary-500 hover:underline font-semibold"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                  </div>
                </PolicySection>

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

interface PolicySectionProps {
  id: string;
  icon: React.ElementType;
  title: string;
  iconColor: string;
  iconBg: string;
  children: React.ReactNode;
}

const PolicySection: React.FC<PolicySectionProps> = ({
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
        <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}>
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