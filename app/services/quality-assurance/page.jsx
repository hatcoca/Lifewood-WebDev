"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu, X, ChevronDown, ArrowUpRight,
  CheckCircle,
  Shield,
  Award,
  Target,
  TrendingUp,
  Database,
  Mic,
  Code,
  CloudUpload,
  Clock,
  Edit3,
  ArrowRight,
  Globe,
  Volume2,
  Activity,
  Layers,
  Users,
  BarChart3,
  Zap,
  Lock,
  GitBranch,
  Brain,
  Eye,
  Video,
  Workflow,
  Server,
  Gauge,
  FileText,
  Bot,
  CircuitBoard,
  Sparkles,
  ScanSearch,
  ScanLine,
  FileSearch,
  CheckSquare,
  AlertCircle,
  AlertTriangle,
  Ban,
  Filter,
  FilterX,
  Sliders,
  Settings,
  GanttChart,
  LineChart,
  PieChart,
  ScatterChart,
  Box,
  Boxes,
  Sigma,
  FunctionSquare,
  Wand2,
  Sparkle,
  Puzzle,
  Rocket,
  Microscope,
  FlaskConical,
  Beaker,
  TestTubes,
  Scale,
  Ruler,
  Weight,
  Thermometer,
  GaugeCircle,
  ThumbsUp,
  ThumbsDown,
  Flag,
  FlagTriangleRight,
  FlagOff,
  Bell,
  BellRing,
  BellOff,
  CircleCheckBig,
  CircleAlert,
  CircleX,
  CircleHelp,
  SquareCheckBig,
  SquareX,
  CheckCheck,
  RotateCw
} from "lucide-react"

// Navbar component (copied from your code for standalone use)
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
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Case Studies", href: "/projects#case-studies", desc: "See how we helped global enterprises" },
      { label: "Industries", href: "/projects#industries", desc: "Automotive, healthcare, finance & more" },
      { label: "Technology Stack", href: "/projects#tech-stack", desc: "The tools and platforms we use" },
    ],
  },
  {
    label: "Transformation",
    href: "/esg",
    children: [
      { label: "ESG Commitment", href: "/esg#commitment", desc: "Our environmental & social impact" },
      { label: "Community Impact", href: "/esg#community", desc: "Empowering underrepresented communities" },
      { label: "Sustainability", href: "/esg#sustainability", desc: "Carbon-neutral operations by 2030" },
    ],
  },
  {
    label: "Global Scale",
    href: "/global",
    children: [
      { label: "Malaysia (HQ)", href: "/global#malaysia", desc: "Our global headquarters in Kuala Lumpur" },
      { label: "Singapore", href: "/global#singapore", desc: "Regional hub for Southeast Asia" },
      { label: "China", href: "/global#china", desc: "Technology center & partnerships" },
      { label: "Bangladesh", href: "/global#bangladesh", desc: "Inclusive operations center (Pottya)" },
    ],
  },
  {
    label: "Our Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about#story", desc: "Our story, vision & mission" },
      { label: "Leadership", href: "/about#leadership", desc: "Meet the team driving innovation" },
      { label: "Partners", href: "/about#partners", desc: "Strategic alliances worldwide" },
    ],
  },
  { label: "Careers", href: "/careers" },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const navRef = useRef(null)

  /* scroll listener */
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  /* lock body scroll */
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [handleClickOutside])

  const toggleDropdown = (label) => {
    setOpenDropdown(prev => prev === label ? null : label)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled
        ? "glass border-b border-[var(--lw-green)]/5 shadow-[0_1px_3px_rgba(4,98,65,0.04)]"
        : "bg-[var(--lw-white)]/60 backdrop-blur-md"
        }`}
      style={
        {
          "--lw-green": "#046241",
          "--lw-dark": "#1A2E24",
          "--lw-white": "#FFFFFF",
        }
      }
    >
      <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10">
        {/* Logo */}
        <Link href="/" className="group flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Lifewood"
            width={140}
            height={40}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop links */}
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
                  <div className="w-[320px] overflow-hidden rounded-2xl border border-[var(--lw-dark)]/[0.04] bg-[var(--lw-white)] p-2 shadow-[0_16px_48px_rgba(4,98,65,0.1)]">
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
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/apply"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[var(--lw-green)] px-5 py-2.5 text-[0.82rem] font-semibold text-white shadow-[0_2px_8px_rgba(4,98,65,0.2)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(4,98,65,0.3)] hover:brightness-110"
          >
            Apply Now
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => { setMobileOpen(!mobileOpen); setMobileExpanded(null) }}
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
        className={`fixed bottom-0 left-0 right-0 z-40 max-h-[85vh] overflow-y-auto rounded-t-[1.75rem] bg-[var(--lw-white)] shadow-[0_-8px_40px_rgba(4,98,65,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${mobileOpen ? "translate-y-0" : "translate-y-full"
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
            </div>
          ))}

          {/* Mobile bottom actions */}
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/apply"
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

// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating quality checkmarks */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--lw-green)]/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--lw-green)]/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute w-full h-full">
          <defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--lw-green)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating QA symbols */}
      <div className="absolute top-1/4 right-1/4 animate-float">
        <CheckCircle className="w-8 h-8 text-[var(--lw-green)]/20" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float animation-delay-1000">
        <Shield className="w-8 h-8 text-[var(--lw-green)]/20" />
      </div>
      <div className="absolute top-2/3 right-1/3 animate-float animation-delay-2000">
        <Award className="w-8 h-8 text-[var(--lw-green)]/20" />
      </div>
    </div>
  )
}

// Main Page Component
export default function QualityAssurancePage() {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Multi-Tier Quality Control",
      description: "Rigorous validation at every stage of the data pipeline.",
      details: [
        "Automated validation checks",
        "Expert review by senior annotators",
        "Random sampling audits",
        "Continuous feedback loops"
      ],
      stats: "98%+ accuracy",
      icon2: <Target className="w-3 h-3" />
    },
    {
      icon: <Shield className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Error Detection & Correction",
      description: "Identify and fix issues before they impact your models.",
      details: [
        "Anomaly detection algorithms",
        "Consistency cross-checks",
        "Edge case identification",
        "Automated error flagging"
      ],
      stats: "99.5% detection",
      icon2: <ScanSearch className="w-3 h-3" />
    },
    {
      icon: <Award className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Compliance & Standards",
      description: "Meet industry regulations and quality benchmarks.",
      details: [
        "ISO 9001 certified processes",
        "GDPR/HIPAA compliance checks",
        "Domain-specific standards",
        "Full audit trails"
      ],
      stats: "100% compliant",
      icon2: <Lock className="w-3 h-3" />
    }
  ]

  const stats = [
    { number: "98%+", label: "accuracy rate", icon: <Target className="w-4 h-4" /> },
    { number: "3-tier", label: "review process", icon: <Layers className="w-4 h-4" /> },
    { number: "500+", label: "QA specialists", icon: <Users className="w-4 h-4" /> },
    { number: "24/7", label: "monitoring", icon: <Clock className="w-4 h-4" /> }
  ]

  const qaProcess = [
    { name: "Automated Checks", icon: <Bot className="w-5 h-5" />, desc: "AI-powered validation" },
    { name: "Expert Review", icon: <Brain className="w-5 h-5" />, desc: "Senior annotators" },
    { name: "Sampling Audit", icon: <ScanLine className="w-5 h-5" />, desc: "Random quality checks" },
    { name: "Feedback Loop", icon: <RotateCw className="w-5 h-5" />, desc: "Continuous improvement" }
  ]

  const industries = [
    "Healthcare", "Finance", "Automotive", "Retail", "Robotics", "Government"
  ]

  const qualityMetrics = [
    { label: "Inter-annotator agreement", value: "98.5%" },
    { label: "Error flag rate", value: "<0.5%" },
    { label: "Client satisfaction", value: "99%" },
    { label: "On-time delivery", value: "100%" }
  ]

  // CSS variables
  const cssVars = {
    "--lw-green": "#046241",
    "--lw-dark": "#1A2E24",
    "--lw-white": "#FFFFFF",
  }

  return (
    <div className="min-h-screen bg-white" style={cssVars}>
      <Navbar />

      <main className="pt-24">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[var(--lw-green)]/[0.02] via-white to-white">
          <AnimatedBackground />

          <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--lw-green)]/[0.08] border border-[var(--lw-green)]/20 px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Shield className="w-4 h-4 text-[var(--lw-green)] animate-spin-slow" />
              <span className="text-sm uppercase tracking-wider text-[var(--lw-green)] font-medium">
                QUALITY ASSURANCE · 98%+ ACCURACY
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-[var(--lw-dark)] to-[var(--lw-dark)]/70 bg-clip-text text-transparent">
                Quality
              </span>
              <br />
              <span className="text-[var(--lw-green)] animate-pulse-slow">Assurance</span>
            </h1>

            <p className="text-xl text-[var(--lw-dark)]/60 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
              Multi-tier QC with 98%+ accuracy. Rigorous validation at every stage
              ensures your data meets the highest quality standards.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-[var(--lw-green)]/20 shadow-[0_4px_20px_rgba(4,98,65,0.15)] hover:shadow-[0_8px_30px_rgba(4,98,65,0.25)] transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-[var(--lw-green)] animate-bounce-subtle">{stat.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--lw-dark)]">{stat.number}</div>
                    <div className="text-xs text-[var(--lw-dark)]/40">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QA PROCESS STEPS */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {qaProcess.map((step, index) => (
              <div
                key={index}
                className="p-6 bg-[var(--lw-green)]/[0.02] border border-[var(--lw-green)]/10 rounded-xl hover:bg-[var(--lw-green)]/[0.04] hover:shadow-[0_8px_20px_rgba(4,98,65,0.1)] transition-all duration-300 hover:-translate-y-1 animate-fade-in text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-[var(--lw-green)]/[0.08] rounded-full flex items-center justify-center">
                    <div className="text-[var(--lw-green)]">{step.icon}</div>
                  </div>
                </div>
                <h3 className="font-semibold text-[var(--lw-dark)] mb-1">{step.name}</h3>
                <p className="text-xs text-[var(--lw-dark)]/40">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES GRID - 3 CARDS */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--lw-dark)] mb-4">Comprehensive Quality Control</h2>
            <p className="text-[var(--lw-dark)]/60 max-w-2xl mx-auto">
              Ensuring data integrity through multi-layered validation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white border border-[var(--lw-green)]/20 rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_rgba(4,98,65,0.2)] transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Visual header */}
                <div className="relative h-24 bg-gradient-to-r from-[var(--lw-green)]/10 to-[var(--lw-green)]/5 overflow-hidden">
                  {/* Animated checkmarks */}
                  <div className="absolute inset-0 flex items-center justify-around">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle
                        key={i}
                        className="w-4 h-4 text-[var(--lw-green)]/30 animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </div>

                  {/* Floating orbs */}
                  <div className="absolute top-2 right-2 w-16 h-16 bg-[var(--lw-green)]/10 rounded-full blur-xl animate-pulse-slow" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[var(--lw-green)]/10 rounded-full blur-xl animate-pulse-slow animation-delay-1000" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[var(--lw-green)]/[0.08] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform group-hover:shadow-[0_4px_12px_rgba(4,98,65,0.2)]">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--lw-dark)]">{feature.title}</h3>
                  </div>

                  <p className="text-[var(--lw-dark)]/60 text-sm mb-4 border-l-2 border-[var(--lw-green)]/30 pl-3">
                    {feature.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[var(--lw-dark)]/70">
                        <CheckCircle className="w-3 h-3 text-[var(--lw-green)] mt-1 flex-shrink-0" />
                        <span className="text-xs">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-xs text-[var(--lw-green)] font-medium">
                    {feature.icon2}
                    <span>{feature.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QUALITY METRICS SECTION */}
        <section className="bg-[var(--lw-dark)] text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-4">
                <Award className="w-4 h-4 text-[var(--lw-green)] animate-spin-slow" />
                <span className="text-sm uppercase tracking-wider text-white/80">By The Numbers</span>
              </div>
              <h2 className="text-3xl font-bold mb-3">Quality Metrics That Matter</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Measurable results you can rely on
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {qualityMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl p-6 border border-white/10 text-center hover:shadow-[0_8px_20px_rgba(4,98,65,0.2)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl font-bold text-[var(--lw-green)] mb-2">{metric.value}</div>
                  <div className="text-sm text-white/60">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Certification badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {[
                "ISO 9001", "GDPR", "HIPAA", "SOC2 Type II"
              ].map((badge, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 flex items-center gap-2"
                >
                  <Shield className="w-3 h-3 text-[var(--lw-green)]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10 animate-fade-in">
              <h2 className="text-3xl font-bold text-[var(--lw-dark)] mb-3">Industries We Serve</h2>
              <p className="text-[var(--lw-dark)]/60 max-w-2xl mx-auto">
                Quality assurance across every sector
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-[var(--lw-green)]/[0.08] border border-[var(--lw-green)]/20 rounded-full text-[var(--lw-dark)] font-medium hover:bg-[var(--lw-green)] hover:text-white hover:shadow-[0_8px_20px_rgba(4,98,65,0.3)] transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="bg-gradient-to-r from-[var(--lw-green)]/[0.05] to-[var(--lw-green)]/[0.02] rounded-3xl p-10 border border-[var(--lw-green)]/20 hover:shadow-[0_20px_40px_rgba(4,98,65,0.15)] transition-all duration-500">
            <h2 className="text-3xl font-bold text-[var(--lw-dark)] mb-3 animate-fade-in">Ensure Data Excellence</h2>
            <p className="text-[var(--lw-dark)]/60 max-w-2xl mx-auto mb-6 animate-fade-in animation-delay-200">
              Join our QA team and help maintain the highest quality standards
            </p>

            <Link href="/apply">
              <button className="group bg-[var(--lw-green)] hover:bg-[var(--lw-green)]/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-[0_10px_30px_rgba(4,98,65,0.3)] hover:shadow-[0_15px_40px_rgba(4,98,65,0.4)] inline-flex items-center gap-2 hover:-translate-y-1">
                <CheckCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <p className="mt-4 text-sm text-[var(--lw-dark)]/40">
              <Shield className="inline mr-2 w-4 h-4 text-[var(--lw-green)] animate-pulse-slow" />
              Join 500+ QA specialists worldwide
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[var(--lw-green)]/10 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-[100px] h-[30px] bg-[var(--lw-green)]/10 rounded flex items-center justify-center">
                  <span className="text-[var(--lw-green)] font-bold text-sm">LIFEWOOD</span>
                </div>
              </div>
              <div className="text-sm text-[var(--lw-dark)]/40">
                quality assurance for responsible AI
              </div>
              <div className="text-xs text-[var(--lw-dark)]/30">
                © 2025 · 98%+ accuracy · multi-tier QC
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Global animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </div>
  )
}