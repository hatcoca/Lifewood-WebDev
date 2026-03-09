"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Menu, X, ChevronDown, ArrowUpRight, LogIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const mainNavItems = [
  { label: "Home", href: "/" },
  {
    label: "AI Services",
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
    ],
  },
  {
    label: "AI Projects",
    href: "/projects",
  },
  {
    label: "Our Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about/story", desc: "Our story, vision, mission and values" },
      { label: "Leadership", href: "/about/leadership", desc: "How our teams lead with integrity and innovation" },
      { label: "Partners", href: "/about/partners", desc: "Strategic partnerships across sectors and regions" },
    ],
  },
  {
    label: "What We Offer",
    href: "/esg",
    children: [
      { label: "Type A - Data Servicing", href: "/offers/data-servicing", desc: "Global Data Engineering & AI solutions" },
      { label: "Type B - Horizontal LLM Data", href: "/offers/horizontal-llm", desc: "Multilingual audio collection & transcription" },
      { label: "Type C - Vertical LLM Data", href: "/offers/vertical-llm", desc: "Autonomous vehicle data & 3D annotation" },
      { label: "Type D - AIGC Production", href: "/offers/aigc", desc: "AI-generated content & cinematic storytelling" },
    ],
  },
  {
    label: "Philanthropy & Impact",
    href: "/global",
  },
]

const rightNavItems = [
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
 
]

const allNavItems = [...mainNavItems, ...rightNavItems]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const navRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  /* close dropdown when clicking outside */
  const handleClickOutside = useCallback((e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setOpenDropdown(null)
    }
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileExpanded(null)
  }, [pathname])

  const toggleDropdown = (label) => {
    setOpenDropdown(prev => prev === label ? null : label)
  }

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 flex justify-center w-full pointer-events-none">
      <nav
        ref={navRef}
        className={`pointer-events-auto flex w-full max-w-[1400px] items-center justify-between px-6 lg:px-8 py-3 rounded-[3rem] transition-all duration-300 glass ${scrolled
            ? "shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            : "shadow-[0_4px_20px_rgb(0,0,0,0.06)]"
          }`}
      >
        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Lifewood"
            width={130}
            height={36}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* ── Desktop links container ── */}
        <div className="hidden lg:flex items-center justify-end flex-1 ml-10">

          {/* Main Nav Items */}
          <div className="flex items-center gap-1 xl:gap-2 mr-6 xl:mr-8">
            {mainNavItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 xl:px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${openDropdown === item.label
                      ? "bg-zinc-100 text-zinc-900"
                      : "text-zinc-800 hover:text-zinc-500"
                      }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={12}
                      strokeWidth={2.5}
                      className={`transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Dropdown panel */}
                  <div
                    className={`absolute left-1/2 top-full pt-4 -translate-x-1/2 transition-all duration-300 ${openDropdown === item.label
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                  >
                    <div className="w-[320px] overflow-hidden rounded-3xl glass p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group/item flex flex-col rounded-2xl px-4 py-3 transition-colors duration-200 hover:bg-zinc-50 border-b border-transparent hover:border-zinc-100"
                        >
                          <span className="text-[13px] font-semibold text-zinc-800 transition-colors group-hover/item:text-lw-green">
                            {child.label}
                          </span>
                          <span className="mt-0.5 text-[0.7rem] leading-snug text-zinc-500">
                            {child.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-3 xl:px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${pathname === item.href || (item.label === 'Home' && pathname === '/')
                    ? "text-[#fca13f]"
                    : "text-zinc-800 hover:text-zinc-500"
                    }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right Action Nav Items */}
          <div className="flex items-center gap-4 xl:gap-5 pl-6 xl:pl-8 border-l border-zinc-200/80">
            {rightNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[13px] font-semibold transition-all duration-300 ${pathname === item.href ? "text-[#fca13f]" : "text-zinc-800 hover:text-zinc-500"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 rounded-full p-2 text-zinc-800 transition-colors lg:hidden active:bg-zinc-100 pointer-events-auto"
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
        className={`fixed inset-0 z-40 bg-lw-green/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 max-h-[85vh] overflow-y-auto rounded-t-3xl glass shadow-glass transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${mobileOpen ? "translate-y-0" : "translate-y-full"
          }`}
      >
        {/* Drag handle */}
        <div className="sticky top-0 z-10 flex justify-center bg-lw-green pt-3 pb-2">
          <div className="h-[5px] w-10 rounded-full bg-lw-green/10" />
        </div>

        <div className="px-5 pb-8 pointer-events-auto">
          {allNavItems.map((item) => (
            <div key={item.label} className="border-b border-border/50 last:border-b-0">
              {item.children ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between py-4 text-sm font-semibold text-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`text-foreground/40 transition-transform duration-300 ${mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-400 ease-out ${mobileExpanded === item.label ? "grid-rows-[1fr] pb-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-1 pl-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                            className="rounded-2xl px-3 py-2.5 transition-colors active:bg-lw-green/5"
                          >
                            <div className="text-sm font-medium text-lw-green">{child.label}</div>
                            <div className="mt-0.5 text-[0.75rem] text-foreground/50">{child.desc}</div>
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
                  className={`flex items-center py-4 text-sm font-semibold ${pathname === item.href ? "text-lw-green" : "text-foreground"
                    }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Contact direct link */}
          <div className="border-b border-border/50">
            <Link
              href="/contact"
              className={`flex items-center py-4 text-sm font-semibold ${pathname === "/contact" ? "text-lw-green" : "text-foreground"
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile bottom actions */}
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/apply"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-lw-green py-3.5 text-sm font-semibold text-white transition-all active:brightness-95"
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
