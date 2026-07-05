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
} from "lucide-react";
import { Badge } from "@/app/Component/ui/Badge";
import { Button } from "@/app/Component/ui/Button";
import { COMPANY } from "@/app/lib/constants";

type FormField = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  teamSize: string;
  subject: string;
  message: string;
};

const INITIAL_FORM: FormField = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  teamSize: "",
  subject: "",
  message: "",
};

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Sales & Pricing",
  "Technical Support",
  "Partnership",
  "Feature Request",
  "Other",
];

const TEAM_SIZE_OPTIONS = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-1,000 employees",
  "1,000+ employees",
];

const CONTACT_METHODS = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our team in real-time",
    detail: "Usually responds in < 2 minutes",
    color: "text-primary-500",
    bg: "bg-primary-500/10",
    action: "Start Chat",
  },
  {
    icon: Calendar,
    title: "Book a Demo",
    description: "Schedule a personalized walkthrough",
    detail: "30-minute sessions available",
    color: "text-accent-500",
    bg: "bg-accent-500/10",
    action: "Pick a Time",
  },
  {
    icon: Headphones,
    title: "Phone Support",
    description: "Talk directly with our team",
    detail: COMPANY.phone,
    color: "text-green-500",
    bg: "bg-green-500/10",
    action: "Call Now",
  },
] as const;

export default function ContactPage() {
  const [form, setForm] = useState<FormField>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormField>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormField> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-mesh flex items-center justify-center pt-16">
        <div className="hero-glow" />
        <div className="container-custom py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6 border border-green-500/20">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <Badge variant="success" className="mb-4">
              Message Sent!
            </Badge>
            <h2 className="text-3xl font-bold text-(--text-primary)] mb-4">
              We'll be in touch soon!
            </h2>
            <p className="text-(--text-secondary)] mb-8">
              Thanks for reaching out, {form.firstName}! Our team typically
              responds within 2-4 business hours. Check your inbox at{" "}
              <strong className="text-(--text-primary)]">{form.email}</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="primary"
                onClick={() => {
                  setSubmitted(false);
                  setForm(INITIAL_FORM);
                }}
              >
                Send Another Message
              </Button>
              <a href="/">
                <Button variant="secondary">Go Back Home</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative section-padding bg-mesh overflow-hidden pt-28">
        <div className="hero-glow" />
        <div className="container-custom text-center">
          <div className="flex justify-center mb-4">
            <Badge variant="primary" dot>
              Contact Us
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-(--text-primary)] mb-6 text-balance">
            Let's start a{" "}
            <span className="gradient-text">conversation</span>
          </h1>
          <p className="text-xl text-(--text-secondary)] max-w-2xl mx-auto text-balance">
            Whether you have a question, need a demo, or are ready to dive in —
            we're here to help. Our team responds within hours.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-(--bg-secondary)] border-y border-(--border-primary)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACT_METHODS.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl border border-(--border-card)] bg-(--bg-card)] hover:shadow-(--shadow-lg)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${method.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={22} className={method.color} />
                  </div>
                  <h3 className="font-bold text-(--text-primary)] mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-(--text-secondary)] mb-2">
                    {method.description}
                  </p>
                  <p className="text-xs text-(--text-tertiary)] mb-4">
                    {method.detail}
                  </p>
                  <button
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${method.color} group-hover:gap-2.5 transition-all duration-200`}
                  >
                    {method.action}
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Info */}
      <section className="section-padding bg-(--bg-primary)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-8 rounded-2xl border border-(--border-card)] bg-(--bg-card)] shadow-(--shadow-card)]">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-(--text-primary)] mb-1">
                    Send us a message
                  </h2>
                  <p className="text-(--text-secondary)] text-sm">
                    Fill out the form below and we'll get back to you within
                    2-4 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="label">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Alex"
                        className={`input-field ${errors.firstName ? "border-red-500 focus:ring-red-500" : ""}`}
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? "firstName-error" : undefined}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="mt-1 text-xs text-red-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="label">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Rivera"
                        className={`input-field ${errors.lastName ? "border-red-500 focus:ring-red-500" : ""}`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="label">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-tertiary)]"
                      />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="alex@company.io"
                        className={`input-field pl-10 ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Company + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="label">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="label">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-tertiary)]"
                        />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Team Size + Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="teamSize" className="label">
                        Team Size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={form.teamSize}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select team size</option>
                        {TEAM_SIZE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="label">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select a subject</option>
                        {SUBJECT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="label">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your use case, team size, current challenges, or anything else you'd like us to know..."
                      className={`input-field resize-none ${errors.message ? "border-red-500 focus:ring-red-500" : ""}`}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.message ? (
                        <p className="text-xs text-red-500">{errors.message}</p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs text-(--text-tertiary)]">
                        {form.message.length} / 1000
                      </span>
                    </div>
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-xs text-(--text-tertiary)]">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-primary-500 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted by our team.
                  </p>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={loading}
                    icon={Send}
                    iconPosition="right"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info Card */}
              <div className="p-6 rounded-2xl border border-(--border-card)] bg-(--bg-card)]">
                <h3 className="font-bold text-(--text-primary)] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                    { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                    { icon: MapPin, label: "Address", value: COMPANY.address, href: "#" },
                    { icon: Clock, label: "Hours", value: "Mon–Fri, 9AM–6PM PT", href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-primary-500" />
                      </div>
                      <div>
                        <div className="text-xs text-(--text-tertiary)] mb-0.5">{label}</div>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-medium text-(--text-secondary)] hover:text-primary-500 transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-(--text-secondary)]">
                            {value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response SLA */}
              <div className="p-6 rounded-2xl border border-green-200 dark:border-green-900/40 bg-green-50 dark:bg-green-900/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-semibold text-green-700 dark:text-green-400 text-sm">
                    Fast Response Guarantee
                  </span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-500">
                  We respond to all inquiries within{" "}
                  <strong>2-4 business hours</strong>. For urgent issues, use
                  our live chat for instant support.
                </p>
              </div>

              {/* FAQ Quick Links */}
              <div className="p-6 rounded-2xl border border-(--border-card)] bg-(--bg-card)]">
                <h3 className="font-bold text-(--text-primary)] mb-3 text-sm">
                  Quick Answers
                </h3>
                <div className="space-y-2">
                  {[
                    "How does the 14-day trial work?",
                    "What payment methods do you accept?",
                    "Can I migrate from another platform?",
                    "Do you offer custom enterprise plans?",
                  ].map((q) => (
                    <a
                      key={q}
                      href="/#faq"
                      className="flex items-center gap-2 text-sm text-(--text-secondary)] hover:text-primary-500 transition-colors py-1 group"
                    >
                      <ArrowRight
                        size={12}
                        className="text-(--text-tertiary)] group-hover:text-primary-500 transition-colors"
                      />
                      {q}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}