"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  Headphones,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { trackEvent } from "@/app/lib/analytics";

// ============================================
// TYPES & CONSTANTS
// ============================================

type FormField = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const INITIAL_FORM: FormField = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile App Development",
  "Blockchain & Web3",
  "UI/UX Design",
  "Graphic Design & Branding",
  "Video Editing & Motion",
  "Digital Marketing",
  "Other",
];

const COMPANY = {
  email: "contact@webixle.com",
  phone: "+91 8796610171",
  address: "Gurgaon, India",
};

// ✅ Google Form Entry IDs — Form banao phir inspect karke IDs lo
// Google Form URL format:
// https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
const GOOGLE_FORM_CONFIG = {
  // ⚠️ Apna Google Form URL yahan daalo
  formUrl:
    "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse",
  fields: {
    // ⚠️ Ye entry IDs Google Form se milegi (niche steps mein bataya hai)
    firstName: "entry.000000001",
    lastName:  "entry.000000002",
    email:     "entry.000000003",
    company:   "entry.000000004",
    phone:     "entry.000000005",
    service:   "entry.000000006",
    message:   "entry.000000007",
  },
};

const CONTACT_METHODS = [
  {
    icon: MessageSquare,
    title: "WhatsApp Chat",
    description: "Chat with our team directly",
    detail: "Usually responds in minutes",
    color: "text-green-500",
    bg: "bg-green-500/10",
    action: "Chat Now",
    href: "https://wa.me/yourphonenumber",
  },
  {
    icon: Calendar,
    title: "Book a Call",
    description: "Schedule a free discovery call",
    detail: "30-minute sessions available",
    color: "text-primary-500",
    bg: "bg-primary-500/10",
    action: "Pick a Time",
    href: "/contact",
  },
  {
    icon: Headphones,
    title: "Phone Support",
    description: "Talk directly with our team",
    detail: COMPANY.phone,
    color: "text-accent-500",
    bg: "bg-accent-500/10",
    action: "Call Now",
    href: `tel:${COMPANY.phone}`,
  },
];

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
  },
  { icon: MapPin, label: "Location", value: COMPANY.address, href: null },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Fri, 9AM–5PM IST",
    href: null,
  },
];

// ============================================
// SUCCESS SCREEN
// ============================================

const SuccessScreen: React.FC<{
  name: string;
  email: string;
  onReset: () => void;
}> = ({ name, email, onReset }) => (
  <div className="min-h-screen bg-mesh flex items-center justify-center pt-16">
    <div className="hero-glow" />
    <div className="container-custom py-20 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-green-500/10 border border-green-500/20 text-green-500 mb-4">
          Message Sent!
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-theme mb-3">
          We'll be in touch soon, {name}!
        </h2>
        <p className="text-sm text-secondary-theme mb-7">
          Our team typically responds within 2–4 hours. Check your inbox at{" "}
          <strong className="text-primary-theme">{email}</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
              bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm
              transition-all duration-200 active:scale-95"
          >
            Send Another Message
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
              border border-card-theme bg-card-theme text-primary-theme font-bold text-sm
              hover:bg-secondary-theme transition-all duration-200 active:scale-95"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function ContactPage() {
  const [form, setForm] = useState<FormField>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormField>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormField> = {};
    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20)
      newErrors.message = "Minimum 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormField]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ✅ Google Form mein data submit karne ka function
  const submitToGoogleForm = async (data: FormField) => {
    const { formUrl, fields } = GOOGLE_FORM_CONFIG;

    // FormData body banao
    const formData = new FormData();
    formData.append(fields.firstName, data.firstName);
    formData.append(fields.lastName, data.lastName);
    formData.append(fields.email, data.email);
    formData.append(fields.company, data.company);
    formData.append(fields.phone, data.phone);
    formData.append(fields.service, data.service);
    formData.append(fields.message, data.message);

    try {
      // ✅ no-cors mode use karo (Google Form CORS allow nahi karta)
      await fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
    } catch (error) {
      // no-cors mein error aata hai but form submit ho jata hai
      console.log("Form submitted (no-cors expected):", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // ✅ Analytics — form submit attempt track karo
    trackEvent("form_submit_attempt", "Contact Form", form.service || "No Service Selected");

    try {
      // ✅ Google Form mein submit karo
      await submitToGoogleForm(form);

      // ✅ Analytics — success track karo
      trackEvent("form_submit_success", "Contact Form", form.service || "No Service Selected");

      setLoading(false);
      setSubmitted(true);
    } catch {
      // ✅ Analytics — error track karo
      trackEvent("form_submit_error", "Contact Form", "Submission Failed");
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <SuccessScreen
        name={form.firstName}
        email={form.email}
        onReset={() => {
          setSubmitted(false);
          setForm(INITIAL_FORM);
        }}
      />
    );
  }

  return (
    <>
      {/* ══════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════ */}
      <section className="relative section-padding bg-mesh overflow-hidden pt-28">
        <div className="hero-glow" />
        <div className="absolute top-0 right-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-120 h-120 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10 text-center">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              text-xs font-bold uppercase tracking-widest mb-5
              bg-card-theme border border-card-theme text-secondary-theme"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500" />
            </span>
            Contact Us
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight
              text-primary-theme mb-4 leading-[1.1]"
          >
            Let's Start a <span className="linear-text">Conversation</span>
          </h1>

          <p className="text-base sm:text-lg text-secondary-theme max-w-xl mx-auto">
            Have a project in mind? We'd love to hear about it. Reach out and
            we'll get back to you within 2–4 hours.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 2 — CONTACT METHODS
      ══════════════════════════════ */}
      <section className="py-10 bg-secondary-theme border-y border-card-theme">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CONTACT_METHODS.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={
                    method.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel="noopener noreferrer"
                  // ✅ Analytics — contact method click track karo
                  onClick={() =>
                    trackEvent("contact_method_click", "Contact Methods", method.title)
                  }
                  className="group flex flex-col items-center text-center p-5 rounded-2xl
                    border border-card-theme bg-card-theme
                    hover:border-primary-500/20 hover:-translate-y-1 hover:shadow-md
                    transition-all duration-300"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${method.bg} flex items-center
                      justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={20} className={method.color} />
                  </div>
                  <h3 className="font-bold text-primary-theme text-sm mb-1">
                    {method.title}
                  </h3>
                  <p className="text-xs text-secondary-theme mb-1">
                    {method.description}
                  </p>
                  <p className="text-xs text-tertiary-theme mb-3">
                    {method.detail}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold
                      ${method.color} group-hover:gap-2 transition-all duration-200`}
                  >
                    {method.action}
                    <ArrowRight size={12} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 3 — FORM + SIDEBAR
      ══════════════════════════════ */}
      <section className="section-padding bg-mesh overflow-hidden">
        <div className="absolute top-0 left-0 w-120 h-120 rounded-full bg-primary-500/5 blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── Contact Form ── */}
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-7 rounded-2xl border border-card-theme bg-card-theme shadow-md">
                <h2 className="text-xl font-bold text-primary-theme mb-1">
                  Send Us a Message
                </h2>
                <p className="text-sm text-secondary-theme mb-6">
                  Fill out the form below and we'll respond within 2–4 hours.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-primary-theme mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className={`w-full px-3 py-2.5 rounded-xl text-sm font-medium
                          bg-secondary-theme border text-primary-theme
                          placeholder:text-tertiary-theme focus:outline-none
                          focus:ring-2 focus:ring-primary-500/20 transition-all duration-200
                          ${errors.firstName
                            ? "border-red-500"
                            : "border-card-theme focus:border-primary-500"
                          }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-primary-theme mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className={`w-full px-3 py-2.5 rounded-xl text-sm font-medium
                          bg-secondary-theme border text-primary-theme
                          placeholder:text-tertiary-theme focus:outline-none
                          focus:ring-2 focus:ring-primary-500/20 transition-all duration-200
                          ${errors.lastName
                            ? "border-red-500"
                            : "border-card-theme focus:border-primary-500"
                          }`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-primary-theme mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary-theme"
                      />
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-sm font-medium
                          bg-secondary-theme border text-primary-theme
                          placeholder:text-tertiary-theme focus:outline-none
                          focus:ring-2 focus:ring-primary-500/20 transition-all duration-200
                          ${errors.email
                            ? "border-red-500"
                            : "border-card-theme focus:border-primary-500"
                          }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Company + Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-primary-theme mb-1.5">
                        Company
                      </label>
                      <input
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full px-3 py-2.5 rounded-xl text-sm font-medium
                          bg-secondary-theme border border-card-theme text-primary-theme
                          placeholder:text-tertiary-theme focus:outline-none
                          focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                          transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-primary-theme mb-1.5">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone
                          size={15}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary-theme"
                        />
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl text-sm font-medium
                            bg-secondary-theme border border-card-theme text-primary-theme
                            placeholder:text-tertiary-theme focus:outline-none
                            focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                            transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-primary-theme mb-1.5">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl text-sm font-medium
                        bg-secondary-theme border border-card-theme text-primary-theme
                        focus:outline-none focus:border-primary-500
                        focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-primary-theme mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      className={`w-full px-3 py-2.5 rounded-xl text-sm font-medium
                        bg-secondary-theme border text-primary-theme
                        placeholder:text-tertiary-theme focus:outline-none
                        focus:ring-2 focus:ring-primary-500/20 resize-none
                        transition-all duration-200
                        ${errors.message
                          ? "border-red-500"
                          : "border-card-theme focus:border-primary-500"
                        }`}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.message ? (
                        <p className="text-xs text-red-500">{errors.message}</p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs text-tertiary-theme">
                        {form.message.length} / 1000
                      </span>
                    </div>
                  </div>

                  {/* Privacy */}
                  <p className="text-xs text-tertiary-theme">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-primary-500 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl
                      bg-linear-to-r from-primary-600 to-accent-600
                      hover:from-primary-700 hover:to-accent-700
                      text-white font-bold text-sm
                      transition-all duration-200 active:scale-95
                      disabled:opacity-70 disabled:cursor-not-allowed
                      shadow-md shadow-primary-500/25"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-2 space-y-4">

              {/* Contact Info */}
              <div className="p-5 rounded-2xl border border-card-theme bg-card-theme">
                <h3 className="text-sm font-bold text-primary-theme mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
                        <Icon size={15} className="text-primary-500" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-0.5">
                          {label}
                        </div>
                        {href ? (
                          <a
                            href={href}
                            // ✅ Analytics — contact info click track karo
                            onClick={() =>
                              trackEvent("contact_info_click", "Contact Info", label)
                            }
                            className="text-sm font-medium text-secondary-theme hover:text-primary-500 transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-secondary-theme">
                            {value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="p-5 rounded-2xl border border-green-500/20 bg-green-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-green-500">
                    Fast Response Guarantee
                  </span>
                </div>
                <p className="text-sm text-secondary-theme">
                  We respond to all inquiries within{" "}
                  <strong className="text-primary-theme">2–4 hours</strong>.
                  For urgent queries, use WhatsApp for instant support.
                </p>
              </div>

              {/* ✅ Google Form Responses Link (Admin ke liye — Production mein hatao) */}
              {process.env.NODE_ENV === "development" && (
                <div className="p-4 rounded-2xl border border-yellow-500/20 bg-yellow-500/5">
                  <div className="flex items-center gap-2 mb-2">
                    <ExternalLink size={14} className="text-yellow-500" />
                    <span className="text-xs font-bold text-yellow-500">
                      Dev Only — Google Sheet
                    </span>
                  </div>
                  <a
                    href="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-secondary-theme hover:text-primary-500 underline"
                  >
                    View Form Responses →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}