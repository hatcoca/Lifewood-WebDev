"use client"

<<<<<<< HEAD:components/lifewood/navbar.jsx
import { useState, useEffect, useRef, useCallback } from "react"
import { Menu, X, ChevronDown, ArrowUpRight, LogIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navItems = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Data Annotation",
        href: "/services/data-annotation",
        desc: "Human-powered labeling across text, image, audio & video",
      },
      {
        label: "AI Training Data",
        href: "/services/ai-training-data",
        desc: "Production-grade datasets for ML model development",
      },
      {
        label: "Data Processing",
        href: "/services/data-processing",
        desc: "End-to-end pipeline management at scale",
      },
      {
        label: "Quality Assurance",
        href: "/services/quality-assurance",
        desc: "Multi-tier QC with 98%+ accuracy",
      },
=======
import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navGroups = [
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Data Annotation", href: "/#services", desc: "Human-powered labeling across text, image, audio & video" },
      { label: "AI Training Data", href: "/#services", desc: "Production-grade datasets for ML model development" },
      { label: "Data Processing", href: "/#services", desc: "End-to-end pipeline management at scale" },
      { label: "Quality Assurance", href: "/#services", desc: "Multi-tier QC with 98%+ accuracy" },
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
    ],
  },
  /* ──────────────────────────── nav data ──────────────────────────── */

  {
    label: "Projects",
<<<<<<< HEAD:components/lifewood/navbar.jsx
    href: "/projects", // Changed from #projects to /projects
    children: [
      { label: "Case Studies", href: "/projects#case-studies", desc: "See how we helped global enterprises" },
      { label: "Industries", href: "/projects#industries", desc: "Automotive, healthcare, finance & more" },
      { label: "Technology Stack", href: "/projects#tech-stack", desc: "The tools and platforms we use" },
=======
    href: "/projects",
    children: [
      { label: "Case Studies", href: "/projects", desc: "See how we helped global enterprises" },
      { label: "Industries", href: "/projects", desc: "Automotive, healthcare, finance & more" },
      { label: "Technology Stack", href: "/projects", desc: "The tools and platforms we use" },
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
    ],
  },
  {
    label: "Transformation",
<<<<<<< HEAD:components/lifewood/navbar.jsx
    href: "/esg", // Changed from #esg to /esg
    children: [
      { label: "ESG Commitment", href: "/esg#commitment", desc: "Our environmental & social impact" },
      { label: "Community Impact", href: "/esg#community", desc: "Empowering underrepresented communities" },
      { label: "Sustainability", href: "/esg#sustainability", desc: "Carbon-neutral operations by 2030" },
=======
    href: "/#esg",
    children: [
      { label: "ESG Commitment", href: "/#esg", desc: "Our environmental & social impact" },
      { label: "Community Impact", href: "/#esg", desc: "Empowering underrepresented communities" },
      { label: "Sustainability", href: "/#esg", desc: "Carbon-neutral operations by 2030" },
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
    ],
  },
  {
    label: "Global Scale",
<<<<<<< HEAD:components/lifewood/navbar.jsx
    href: "/global", // Changed from #global to /global
    children: [
      { label: "Malaysia (HQ)", href: "/global#malaysia", desc: "Our global headquarters in Kuala Lumpur" },
      { label: "Singapore", href: "/global#singapore", desc: "Regional hub for Southeast Asia" },
      { label: "China", href: "/global#china", desc: "Technology center & partnerships" },
      { label: "Bangladesh", href: "/global#bangladesh", desc: "Inclusive operations center (Pottya)" },
=======
    href: "/#global",
    children: [
      { label: "Malaysia (HQ)", href: "/#global", desc: "Our global headquarters in Kuala Lumpur" },
      { label: "Singapore", href: "/#global", desc: "Regional hub for Southeast Asia" },
      { label: "China", href: "/#global", desc: "Technology center & partnerships" },
      { label: "Bangladesh", href: "/#global", desc: "Inclusive operations center (Pottya)" },
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
    ],
  },
  {
    label: "Our Company",
<<<<<<< HEAD:components/lifewood/navbar.jsx
    href: "/about", // Changed from #about to /about
    children: [
      { label: "About Us", href: "/about#story", desc: "Our story, vision & mission" },
      { label: "Leadership", href: "/about#leadership", desc: "Meet the team driving innovation" },
      { label: "Partners", href: "/about#partners", desc: "Strategic alliances worldwide" },
    ],
  },
  { label: "Careers", href: "/careers" }, // Changed from #careers to /careers
=======
    href: "/about",
    children: [
      { label: "About Us", href: "/about", desc: "Our story, vision & mission" },
      { label: "Leadership", href: "/about", desc: "Meet the team driving innovation" },
      { label: "Partners", href: "/about", desc: "Strategic alliances worldwide" },
    ],
  },
  { label: "Careers", href: "/careers" },
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
]

const flatLinks = navGroups.flatMap((g) => g.items)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
<<<<<<< HEAD:components/lifewood/navbar.jsx
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const navRef = useRef(null)
=======
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

<<<<<<< HEAD:components/lifewood/navbar.jsx
  /* close dropdown when clicking outside */
  const handleClickOutside = useCallback((e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setOpenDropdown(null)
    }
  }, [])

=======
  // Close menus on route change
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileExpanded(null)
  }, [pathname])

<<<<<<< HEAD:components/lifewood/navbar.jsx
  const toggleDropdown = (label) => {
    setOpenDropdown(prev => prev === label ? null : label)
=======
  const isGroupActive = (group: typeof navGroups[0]) =>
    group.items.some((item) => pathname === item.href)

  const handleMouseEnter = (label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled
        ? "glass border-b border-[var(--lw-green)]/5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
        : "bg-[var(--lw-white)]/60 backdrop-blur-md"
        }`}
    >
      <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10">
        {/* ── Logo ── */}
<<<<<<< HEAD:components/lifewood/navbar.jsx
        <Link href="/" className="group flex items-center shrink-0">
=======
        <a href="/" className="group flex items-center shrink-0">
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
          <Image
            src="/logo.png"
            alt="Lifewood"
            width={140}
            height={40}
            className="transition-transform duration-300 group-hover:scale-105"
          />
<<<<<<< HEAD:components/lifewood/navbar.jsx
        </Link>
=======
        </a>
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx

        {/* ── Desktop links ── */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-[0.82rem] font-medium transition-all duration-300 ${openDropdown === item.label
                    ? "bg-[var(--lw-green)]/[0.06] text-[var(--lw-green)]"
                    : "text-[var(--lw-dark)]/60 hover:bg-[var(--lw-green)]/[0.03] hover:text-[var(--lw-dark)]"
                    }`}
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute left-1/2 top-full pt-2 -translate-x-1/2 transition-all duration-300 ${openDropdown === item.label
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                >
                  <div className="w-[320px] overflow-hidden rounded-2xl border border-[var(--lw-dark)]/[0.04] bg-[var(--lw-white)] p-2 shadow-[0_16px_48px_rgba(19,48,32,0.1)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpenDropdown(null)}
                        className="group/item flex flex-col rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-[var(--lw-green)]/[0.04]"
                      >
                        <span className="text-[0.84rem] font-semibold text-[var(--lw-dark)] transition-colors group-hover/item:text-[var(--lw-green)]">
                          {child.label}
                        </span>
                        <span className="mt-0.5 text-[0.75rem] leading-snug text-[var(--lw-dark)]/40">
                          {child.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
<<<<<<< HEAD:components/lifewood/navbar.jsx
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-[0.82rem] font-medium text-[var(--lw-dark)]/60 transition-all duration-300 hover:bg-[var(--lw-green)]/[0.03] hover:text-[var(--lw-dark)]"
              >
                {item.label}
              </Link>
            )
          )}
=======
            </div>
          ))}

          {/* Direct links */}
          <Link
            href="/contact"
            className={`rounded-lg px-3.5 py-2 text-[0.82rem] font-medium transition-all duration-300 ${
              pathname === "/contact"
                ? "bg-[var(--lw-green)]/[0.06] text-[var(--lw-green)]"
                : "text-[var(--lw-dark)]/60 hover:bg-[var(--lw-green)]/[0.03] hover:text-[var(--lw-dark)]"
            }`}
          >
            Contact
          </Link>
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-3 lg:flex">
<<<<<<< HEAD:components/lifewood/navbar.jsx
          <Link
            href="/apply"
=======
          <a /*
            href="#admin"
            className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[0.82rem] font-medium text-[var(--lw-dark)]/50 transition-colors duration-300 hover:text-[var(--lw-dark)]" */
          >


          </a>
          <a
            href="/careers"
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
            className="group inline-flex items-center gap-1.5 rounded-full bg-[var(--lw-green)] px-5 py-2.5 text-[0.82rem] font-semibold text-white shadow-[0_2px_8px_rgba(4,98,65,0.2)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(4,98,65,0.3)] hover:brightness-110"
          >
            Apply Now
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 rounded-xl p-2 text-[var(--lw-dark)] transition-colors lg:hidden active:bg-[var(--lw-green)]/[0.05]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative h-5 w-5">
            <span className={`absolute left-0 block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${mobileOpen ? "top-[9px] rotate-45" : "top-1"}`} />
            <span className={`absolute left-0 top-[9px] block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"}`} />
            <span className={`absolute left-0 block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${mobileOpen ? "top-[9px] -rotate-45" : "top-[17px]"}`} />
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--lw-dark)]/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
<<<<<<< HEAD:components/lifewood/navbar.jsx
        className={`fixed bottom-0 left-0 right-0 z-40 max-h-[85vh] overflow-y-auto rounded-t-[1.75rem] bg-[var(--lw-white)] shadow-[0_-8px_40px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${mobileOpen ? "translate-y-0" : "translate-y-full"
=======
        className={`fixed bottom-0 left-0 right-0 z-40 max-h-[85vh] overflow-y-auto rounded-t-[1.75rem] bg-[var(--lw-white)] shadow-[0_-8px_40px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-[timing-function:cubic-bezier(0.32,0.72,0,1)] lg:hidden ${mobileOpen ? "translate-y-0" : "translate-y-full"
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
          }`}
      >
        {/* Drag handle */}
        <div className="sticky top-0 z-10 flex justify-center bg-[var(--lw-white)] pt-3 pb-2">
          <div className="h-[5px] w-10 rounded-full bg-[var(--lw-dark)]/10" />
        </div>

        <div className="px-5 pb-8">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-[var(--lw-dark)]/[0.04] last:border-b-0">
              {item.children ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between py-4 text-[0.95rem] font-semibold text-[var(--lw-dark)]"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`text-[var(--lw-dark)]/30 transition-transform duration-300 ${mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-400 ease-out ${mobileExpanded === item.label ? "grid-rows-[1fr] pb-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
<<<<<<< HEAD:components/lifewood/navbar.jsx
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-1 pl-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                            className="rounded-xl px-3 py-2.5 transition-colors active:bg-[var(--lw-green)]/[0.04]"
                          >
                            <div className="text-[0.88rem] font-medium text-[var(--lw-green)]">{child.label}</div>
                            <div className="mt-0.5 text-[0.75rem] text-[var(--lw-dark)]/40">{child.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center py-4 text-[0.95rem] font-semibold text-[var(--lw-dark)]"
                >
                  {item.label}
                </Link>
              )}
=======
                    {item.label}
                  </Link>
                ))}
              </div>
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
            </div>
          ))}

          {/* Contact direct link */}
          <div className="border-b border-[var(--lw-dark)]/[0.04]">
            <Link
              href="/contact"
              className={`flex items-center py-4 text-[0.95rem] font-semibold ${
                pathname === "/contact" ? "text-[var(--lw-green)]" : "text-[var(--lw-dark)]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile bottom actions */}
          <div className="mt-4 flex flex-col gap-3">
<<<<<<< HEAD:components/lifewood/navbar.jsx
            <Link
              href="/apply"
=======
            <a
            /*href="#admin"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 rounded-2xl border border-[var(--lw-dark)]/[0.06] py-3.5 text-[0.88rem] font-medium text-[var(--lw-dark)]/60 transition-colors active:bg-[var(--lw-green)]/[0.03]" */
            >

            </a>
            <a
              href="/careers"
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/navbar.tsx
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--lw-green)] py-3.5 text-[0.88rem] font-semibold text-white transition-all active:brightness-95"
            >
              Apply Now
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}