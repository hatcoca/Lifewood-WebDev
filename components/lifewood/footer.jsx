"use client"

import { Mail, MapPin, Phone, ArrowUpRight, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  company: [
    { label: "Our Company", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Transformation", href: "#esg" },
    { label: "Careers", href: "#careers" },
  ],
  solutions: [
    { label: "Data Annotation", href: "#services" },
    { label: "AI Training Data", href: "#services" },
    { label: "Data Processing", href: "#services" },
    { label: "Quality Assurance", href: "#services" },
  ],
  regions: [
    { label: "Malaysia (HQ)", href: "#global" },
    { label: "Singapore", href: "#global" },
    { label: "China", href: "#global" },
    { label: "Bangladesh", href: "#global" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[var(--lw-dark)]">
      {/* CTA Banner */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative -top-16 overflow-hidden rounded-[1.5rem] bg-[var(--lw-green)] p-10 shadow-[0_20px_60px_rgba(4,98,65,0.2)] lg:p-14">
          {/* Ambient decoration */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--lw-saffron)]/[0.08] blur-3xl" />
          <div className="absolute -left-8 -bottom-8 h-36 w-36 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white lg:text-3xl">
                Ready to transform your data?
              </h3>
              <p className="mt-3 max-w-md text-[0.95rem] text-white/60">
                Let&apos;s discuss how Lifewood can accelerate your AI initiatives
                with world-class data solutions.
              </p>
            </div>
            <a
              href="mailto:info@lifewood.com"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--lw-saffron)] px-7 py-3.5 text-[0.88rem] font-semibold text-[var(--lw-dark)] shadow-[0_4px_16px_rgba(255,179,71,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,179,71,0.4)] hover:brightness-[1.03]"
            >
              Contact us
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="mx-auto max-w-7xl px-6 pb-14 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white/10">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[1.05rem] font-bold text-white">
                Lifewood
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[0.88rem] leading-[1.7] text-white/35">
              The global champion in AI data solutions, bridging ASEAN and China
              through innovation, sustainability, and world-class technology.
            </p>

            <div className="mt-7 space-y-3.5">
              <div className="flex items-center gap-3 text-[0.84rem] text-white/35">
                <Mail size={14} className="text-[var(--lw-saffron)]/60" />
                <span>info@lifewood.com</span>
              </div>
              <div className="flex items-center gap-3 text-[0.84rem] text-white/35">
                <MapPin size={14} className="text-[var(--lw-saffron)]/60" />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex items-center gap-3 text-[0.84rem] text-white/35">
                <Phone size={14} className="text-[var(--lw-saffron)]/60" />
                <span>+60 3-XXXX XXXX</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-7 flex gap-3">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-white/30 transition-all duration-300 hover:bg-white/[0.1] hover:text-white/60"
                  aria-label={i === 0 ? "LinkedIn" : "Twitter"}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-white/60">
              Company
            </h4>
            <ul className="mt-5 space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.88rem] text-white/35 transition-colors duration-300 hover:text-[var(--lw-saffron)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-white/60">
              Solutions
            </h4>
            <ul className="mt-5 space-y-3.5">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.88rem] text-white/35 transition-colors duration-300 hover:text-[var(--lw-saffron)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-white/60">
              Regions
            </h4>
            <ul className="mt-5 space-y-3.5">
              {footerLinks.regions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.88rem] text-white/35 transition-colors duration-300 hover:text-[var(--lw-saffron)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/[0.06] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[0.75rem] text-white/25">
              {`\u00A9 ${new Date().getFullYear()} Lifewood. All rights reserved.`}
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[0.75rem] text-white/25 transition-colors hover:text-[var(--lw-saffron)]">
                Privacy policy
              </a>
              <a href="#" className="text-[0.75rem] text-white/25 transition-colors hover:text-[var(--lw-saffron)]">
                Terms of service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
