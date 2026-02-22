"use client"

import { useState } from "react"
import { ArrowRight, Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [serverMessage, setServerMessage] = useState("")

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Full name is required (at least 2 characters)."
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "A valid email address is required."
    if (!form.subject.trim() || form.subject.trim().length < 3) e.subject = "Subject is required (at least 3 characters)."
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Message must be at least 10 characters."
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus("submitting")
    setErrors({})

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (data.success) {
        setStatus("success")
        setServerMessage(data.message)
        setForm({ name: "", email: "", company: "", subject: "", message: "" })
      } else {
        setStatus("error")
        if (data.errors) setErrors(data.errors)
        setServerMessage(data.message || "Validation failed. Please check your inputs.")
      }
    } catch {
      setStatus("error")
      setServerMessage("Network error. Please try again later.")
    }
  }

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field as keyof FormErrors]
        return next
      })
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Page header */}
      <section className="bg-[var(--lw-white)] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[0.84rem] font-medium text-[var(--lw-dark)]/40 transition-colors hover:text-[var(--lw-green)]"
          >
            <ArrowRight size={14} className="rotate-180" />
            Back to home
          </Link>

          <div className="mt-6 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
              Get in touch
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              {"Let's start a conversation"}
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              Have a question about our services, want to discuss a potential partnership, or simply want to learn more?
              We would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="bg-[var(--lw-sea-salt)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-16 lg:grid-cols-5 lg:gap-20">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[var(--lw-dark)]">Contact information</h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--lw-dark)]/50">
                Reach out directly or fill in the form. Our team typically responds within 1-2 business days.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--lw-green)]/[0.06]">
                    <Mail size={18} className="text-[var(--lw-green)]" />
                  </div>
                  <div>
                    <div className="text-[0.84rem] font-semibold text-[var(--lw-dark)]">Email</div>
                    <a href="mailto:info@lifewood.com" className="text-[0.88rem] text-[var(--lw-dark)]/50 transition-colors hover:text-[var(--lw-green)]">
                      info@lifewood.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--lw-green)]/[0.06]">
                    <Phone size={18} className="text-[var(--lw-green)]" />
                  </div>
                  <div>
                    <div className="text-[0.84rem] font-semibold text-[var(--lw-dark)]">Phone</div>
                    <span className="text-[0.88rem] text-[var(--lw-dark)]/50">+60 3-XXXX XXXX</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--lw-green)]/[0.06]">
                    <MapPin size={18} className="text-[var(--lw-green)]" />
                  </div>
                  <div>
                    <div className="text-[0.84rem] font-semibold text-[var(--lw-dark)]">Headquarters</div>
                    <span className="text-[0.88rem] text-[var(--lw-dark)]/50">Kuala Lumpur, Malaysia</span>
                  </div>
                </div>
              </div>

              {/* Office hours */}
              <div className="mt-10 rounded-[1.25rem] border border-[var(--lw-dark)]/[0.04] bg-[var(--lw-white)] p-6">
                <h3 className="text-[0.88rem] font-semibold text-[var(--lw-dark)]">Office hours</h3>
                <div className="mt-3 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[0.84rem]">
                    <span className="text-[var(--lw-dark)]/45">Monday - Friday</span>
                    <span className="font-medium text-[var(--lw-dark)]">9:00 AM - 6:00 PM (MYT)</span>
                  </div>
                  <div className="flex items-center justify-between text-[0.84rem]">
                    <span className="text-[var(--lw-dark)]/45">Saturday - Sunday</span>
                    <span className="font-medium text-[var(--lw-dark)]/40">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center rounded-[1.5rem] border border-[var(--lw-green)]/15 bg-[var(--lw-white)] p-12 text-center shadow-[0_4px_24px_rgba(19,48,32,0.04)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--lw-green)]/10">
                    <CheckCircle2 size={32} className="text-[var(--lw-green)]" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[var(--lw-dark)]">Message sent successfully</h3>
                  <p className="mt-3 max-w-sm text-[0.92rem] leading-relaxed text-[var(--lw-dark)]/50">
                    {serverMessage}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-6 py-3 text-[0.88rem] font-semibold text-white transition-all hover:shadow-[0_8px_24px_rgba(4,98,65,0.2)]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="overflow-hidden rounded-[1.5rem] border border-[var(--lw-dark)]/[0.04] bg-[var(--lw-white)] p-8 shadow-[0_4px_24px_rgba(19,48,32,0.04)] lg:p-10"
                  noValidate
                >
                  <h2 className="text-xl font-bold text-[var(--lw-dark)]">Send us a message</h2>
                  <p className="mt-2 text-[0.88rem] text-[var(--lw-dark)]/45">Fill in the form below and we will get back to you promptly.</p>

                  {status === "error" && serverMessage && (
                    <div className="mt-5 flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-[0.84rem] text-red-600">
                      <AlertCircle size={16} />
                      {serverMessage}
                    </div>
                  )}

                  <div className="mt-8 flex flex-col gap-5">
                    {/* Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="mb-1.5 block text-[0.82rem] font-semibold text-[var(--lw-dark)]">
                          Full name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your full name"
                          className={`w-full rounded-xl border bg-[var(--lw-sea-salt)] px-4 py-3 text-[0.88rem] text-[var(--lw-dark)] placeholder:text-[var(--lw-dark)]/25 outline-none transition-colors focus:border-[var(--lw-green)]/30 focus:ring-2 focus:ring-[var(--lw-green)]/10 ${
                            errors.name ? "border-red-300" : "border-[var(--lw-dark)]/[0.06]"
                          }`}
                        />
                        {errors.name && <p className="mt-1 text-[0.78rem] text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="mb-1.5 block text-[0.82rem] font-semibold text-[var(--lw-dark)]">
                          Email address <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="you@company.com"
                          className={`w-full rounded-xl border bg-[var(--lw-sea-salt)] px-4 py-3 text-[0.88rem] text-[var(--lw-dark)] placeholder:text-[var(--lw-dark)]/25 outline-none transition-colors focus:border-[var(--lw-green)]/30 focus:ring-2 focus:ring-[var(--lw-green)]/10 ${
                            errors.email ? "border-red-300" : "border-[var(--lw-dark)]/[0.06]"
                          }`}
                        />
                        {errors.email && <p className="mt-1 text-[0.78rem] text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Company + Subject */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-company" className="mb-1.5 block text-[0.82rem] font-semibold text-[var(--lw-dark)]">
                          Company <span className="text-[var(--lw-dark)]/30 font-normal">(optional)</span>
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          value={form.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Your company name"
                          className="w-full rounded-xl border border-[var(--lw-dark)]/[0.06] bg-[var(--lw-sea-salt)] px-4 py-3 text-[0.88rem] text-[var(--lw-dark)] placeholder:text-[var(--lw-dark)]/25 outline-none transition-colors focus:border-[var(--lw-green)]/30 focus:ring-2 focus:ring-[var(--lw-green)]/10"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-subject" className="mb-1.5 block text-[0.82rem] font-semibold text-[var(--lw-dark)]">
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          value={form.subject}
                          onChange={(e) => handleChange("subject", e.target.value)}
                          placeholder="What is this about?"
                          className={`w-full rounded-xl border bg-[var(--lw-sea-salt)] px-4 py-3 text-[0.88rem] text-[var(--lw-dark)] placeholder:text-[var(--lw-dark)]/25 outline-none transition-colors focus:border-[var(--lw-green)]/30 focus:ring-2 focus:ring-[var(--lw-green)]/10 ${
                            errors.subject ? "border-red-300" : "border-[var(--lw-dark)]/[0.06]"
                          }`}
                        />
                        {errors.subject && <p className="mt-1 text-[0.78rem] text-red-500">{errors.subject}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="mb-1.5 block text-[0.82rem] font-semibold text-[var(--lw-dark)]">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your project or inquiry..."
                        className={`w-full resize-none rounded-xl border bg-[var(--lw-sea-salt)] px-4 py-3 text-[0.88rem] text-[var(--lw-dark)] placeholder:text-[var(--lw-dark)]/25 outline-none transition-colors focus:border-[var(--lw-green)]/30 focus:ring-2 focus:ring-[var(--lw-green)]/10 ${
                          errors.message ? "border-red-300" : "border-[var(--lw-dark)]/[0.06]"
                        }`}
                      />
                      {errors.message && <p className="mt-1 text-[0.78rem] text-red-500">{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--lw-green)] px-7 py-3.5 text-[0.88rem] font-semibold text-white shadow-[0_4px_20px_rgba(4,98,65,0.25)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(4,98,65,0.35)] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "submitting" ? "Sending..." : "Send message"}
                        <Send size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
