"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu, X, ChevronDown, ArrowUpRight, LogIn,
  Camera,
  FileText,
  Headphones,
  CheckCircle,
  TrendingUp,
  Shield,
  Database,
  Mic,
  Code,
  CloudUpload,
  Clock,
  Edit3,
  ArrowRight,
  Award,
  Globe,
  Volume2,
  Activity,
  Sparkles,
  Layers,
  Target,
  Users,
  BarChart3,
  Zap,
  Lock,
  GitBranch,
  Brain,
  Eye,
  Mic2,
  Type,
  Video,
  MoveRight,
  RotateCw
} from "lucide-react"

// Navbar component (copied directly from your code)
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

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating annotation symbols */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--lw-green)]/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--lw-green)]/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

      {/* Animated grid overlay */}
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

      {/* Floating annotation icons */}
      <div className="absolute top-1/4 right-1/4 animate-float">
        <Camera className="w-8 h-8 text-[var(--lw-green)]/20" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float animation-delay-1000">
        <FileText className="w-8 h-8 text-[var(--lw-green)]/20" />
      </div>
      <div className="absolute top-2/3 right-1/3 animate-float animation-delay-2000">
        <Headphones className="w-8 h-8 text-[var(--lw-green)]/20" />
      </div>

      {/* Animated data flow lines */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--lw-green)]/20 to-transparent animate-slide-left" />
      <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--lw-green)]/10 to-transparent animate-slide-right animation-delay-1000" />
    </div>
  )
}

// Floating Card Component
const FloatingCard = ({ className, delay, icon, text }) => {
  return (
    <div
      className={`absolute bg-white/80 backdrop-blur-sm border border-[var(--lw-green)]/20 rounded-xl p-3 shadow-[0_8px_32px_rgba(4,98,65,0.12)] animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-2">
        <div className="text-[var(--lw-green)]">{icon}</div>
        <span className="text-xs font-medium text-[var(--lw-dark)]">{text}</span>
      </div>
    </div>
  )
}

// Main Page Component
export default function DataAnnotationPage() {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Image & Video Labeling",
      description: "Bounding boxes, polygons, landmarks, and tracking. Perfect for computer vision.",
      details: [
        "2D/3D bounding boxes",
        "Semantic / instance segmentation",
        "Video frame interpolation",
        "Keypoint & skeleton annotation"
      ],
      stats: "99.7% accuracy",
      icon2: <Target className="w-3 h-3" />
    },
    {
      icon: <FileText className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Text & NLP Annotation",
      description: "Entity extraction, sentiment, linguistic tagging for any domain.",
      details: [
        "Named entity recognition (NER)",
        "Sentiment & intent classification",
        "Relation extraction / coreference",
        "OCR post‑correction & layout"
      ],
      stats: "50+ languages",
      icon2: <Globe className="w-3 h-3" />
    },
    {
      icon: <Headphones className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Audio & Speech Tagging",
      description: "Transcription, speaker diarization, sound event detection.",
      details: [
        "Phonetic alignment & transcription",
        "Speaker ID / diarization",
        "Acoustic event tagging",
        "Sentiment from prosody"
      ],
      stats: "16kHz–48kHz supported",
      icon2: <Volume2 className="w-3 h-3" />
    }
  ]

  const stats = [
    { number: "2.5K", label: "specialists", icon: <Users className="w-4 h-4" /> },
    { number: "140+", label: "active projects", icon: <GitBranch className="w-4 h-4" /> },
    { number: "24/7", label: "throughput", icon: <Zap className="w-4 h-4" /> }
  ]

  const deliveryFeatures = [
    { icon: <Code className="w-5 h-5" />, title: "Export formats", description: "JSON, COCO, Pascal VOC, TFRecord, Parquet, TextGrid, and custom schemas." },
    { icon: <CloudUpload className="w-5 h-5" />, title: "Delivery", description: "Secure cloud buckets, direct API, or on‑prem transfer." },
    { icon: <Clock className="w-5 h-5" />, title: "Turnaround", description: "From 24h (pilot) to enterprise SLA." }
  ]

  const qualityMetrics = [
    { label: "Inter-annotator agreement", value: "98.5%", icon: <CheckCircle className="w-4 h-4" /> },
    { label: "Quality audit pass rate", value: "99.2%", icon: <Award className="w-4 h-4" /> },
    { label: "On-time delivery", value: "99.8%", icon: <Clock className="w-4 h-4" /> }
  ]

  const industries = [
    "Automotive", "Healthcare", "Finance", "Retail", "Robotics", "Agriculture"
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
        {/* HERO SECTION WITH ANIMATED BACKGROUND */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[var(--lw-green)]/[0.02] via-white to-white">
          <AnimatedBackground />

          {/* Floating annotation cards */}
          <FloatingCard
            className="top-40 left-[10%]"
            delay="0s"
            icon={<Camera className="w-3 h-3" />}
            text="Object Detection"
          />
          <FloatingCard
            className="top-60 right-[15%]"
            delay="1s"
            icon={<FileText className="w-3 h-3" />}
            text="NER"
          />
          <FloatingCard
            className="bottom-40 left-[20%]"
            delay="2s"
            icon={<Headphones className="w-3 h-3" />}
            text="Transcription"
          />

          <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--lw-green)]/[0.08] border border-[var(--lw-green)]/20 px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[var(--lw-green)] animate-spin-slow" />
              <span className="text-sm uppercase tracking-wider text-[var(--lw-green)] font-medium">
                AI TRAINING DATA · PRECISION LABELING
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-[var(--lw-dark)] to-[var(--lw-dark)]/70 bg-clip-text text-transparent">
                Data Annotation
              </span>
              <br />
              <span className="text-[var(--lw-green)] animate-pulse-slow">at Scale</span>
            </h1>

            <p className="text-xl text-[var(--lw-dark)]/60 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
              High‑quality labeled datasets for AI and machine learning models,
              ensuring precision and scalability. Every annotation is refined by
              experts, aligned with Lifewood's rigorous quality standards.
            </p>

            {/* Quick Stats with animations */}
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

        {/* FEATURES GRID WITH ANIMATED CARDS */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--lw-dark)] mb-4">Comprehensive Annotation Services</h2>
            <p className="text-[var(--lw-dark)]/60 max-w-2xl mx-auto">
              Tailored solutions for every data type, backed by human expertise and AI-assisted tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white border border-[var(--lw-green)]/20 rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_rgba(4,98,65,0.2)] transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated header with data visualization */}
                <div className="relative h-24 bg-gradient-to-r from-[var(--lw-green)]/10 to-[var(--lw-green)]/5 overflow-hidden">
                  {/* Animated bars */}
                  <div className="absolute inset-0 flex items-end justify-around pb-2">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[var(--lw-green)]/30 rounded-t-full animate-pulse"
                        style={{
                          height: `${20 + Math.sin(i) * 15 + 10}px`,
                          animationDelay: `${i * 100}ms`,
                          animationDuration: '1.5s'
                        }}
                      />
                    ))}
                  </div>

                  {/* Floating dots */}
                  <div className="absolute top-2 right-2 w-16 h-16 bg-[var(--lw-green)]/10 rounded-full blur-xl animate-pulse-slow" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[var(--lw-green)]/10 rounded-full blur-xl animate-pulse-slow animation-delay-1000" />

                  {/* Rotating circles */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-[var(--lw-green)]/20 rounded-full animate-spin-slow" />
                  <div className="absolute bottom-2 right-8 w-4 h-4 border-2 border-[var(--lw-green)]/20 rounded-full animate-spin-slow animation-delay-500" />
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
                      <li key={idx} className="flex items-start gap-2 text-[var(--lw-dark)]/70 group/item">
                        <CheckCircle className="w-3 h-3 text-[var(--lw-green)] mt-1 flex-shrink-0 animate-pulse-slow" style={{ animationDelay: `${idx * 200}ms` }} />
                        <span className="text-xs group-hover/item:text-[var(--lw-green)] transition-colors">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 bg-[var(--lw-green)]/[0.08] border border-[var(--lw-green)]/20 rounded-full px-3 py-1 group-hover:bg-[var(--lw-green)]/[0.12] transition-colors">
                    <div className="animate-pulse-slow">{feature.icon2}</div>
                    <span className="text-xs text-[var(--lw-green)] font-medium">{feature.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QUALITY METRICS WITH ANIMATIONS */}
        <section className="bg-[var(--lw-dark)] text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                  <Award className="w-4 h-4 text-[var(--lw-green)] animate-spin-slow" />
                  <span className="text-sm uppercase tracking-wider text-white/80">Quality First</span>
                </div>

                <h2 className="text-4xl font-bold mb-6">
                  Uncompromising <span className="text-[var(--lw-green)] animate-pulse-slow">Quality Standards</span>
                </h2>

                <p className="text-white/60 mb-8 text-lg leading-relaxed">
                  Every annotation project follows a rigorous three-step review pipeline:
                  expert annotators, AI-assisted validation, and senior auditor sign-off.
                </p>

                <div className="space-y-4">
                  {qualityMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-white/10 pb-4 group hover:border-[var(--lw-green)]/30 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-[var(--lw-green)] group-hover:scale-110 transition-transform">{metric.icon}</div>
                        <span className="text-white/80 group-hover:text-white transition-colors">{metric.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-[var(--lw-green)] group-hover:scale-110 transition-transform">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:shadow-[0_20px_40px_rgba(4,98,65,0.2)] transition-all duration-500 animate-fade-in animation-delay-500">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[var(--lw-green)] animate-pulse-slow" />
                  Enterprise Compliance
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Lock className="w-6 h-6" />, label: "GDPR" },
                    { icon: <Shield className="w-6 h-6" />, label: "HIPAA" },
                    { icon: <Award className="w-6 h-6" />, label: "ISO 27001" },
                    { icon: <CheckCircle className="w-6 h-6" />, label: "SOC2 Type II" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="text-[var(--lw-green)] mx-auto mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                      <div className="text-sm font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE WITH ANIMATIONS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-[var(--lw-dark)] mb-4">Trusted Across Industries</h2>
              <p className="text-[var(--lw-dark)]/60 max-w-2xl mx-auto">
                Domain expertise across sectors, delivering specialized annotation solutions
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-[var(--lw-green)]/[0.08] border border-[var(--lw-green)]/20 rounded-full text-[var(--lw-dark)] font-medium hover:bg-[var(--lw-green)] hover:text-white hover:shadow-[0_8px_20px_rgba(4,98,65,0.3)] transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERY FEATURES WITH ANIMATIONS */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {deliveryFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-[var(--lw-green)]/10 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(4,98,65,0.15)] transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-[var(--lw-green)] mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h4 className="text-lg font-medium mb-2 text-[var(--lw-dark)]">{feature.title}</h4>
                <p className="text-sm text-[var(--lw-dark)]/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY STACK WITH ANIMATIONS */}
        <section className="bg-[var(--lw-green)]/[0.02] border-y border-[var(--lw-dark)]/10 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-[var(--lw-dark)] mb-2">Our Technology Stack</h3>
                <p className="text-[var(--lw-dark)]/60">AI-assisted tools + human expertise</p>
              </div>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: <Brain className="w-5 h-5" />, text: "ML-assisted labeling" },
                  { icon: <Eye className="w-5 h-5" />, text: "Quality control AI" },
                  { icon: <GitBranch className="w-5 h-5" />, text: "Version control" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 group hover:text-[var(--lw-green)] transition-colors cursor-pointer"
                  >
                    <div className="text-[var(--lw-green)] group-hover:scale-110 transition-transform">{item.icon}</div>
                    <span className="text-sm text-[var(--lw-dark)]/70 group-hover:text-[var(--lw-dark)]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION WITH ANIMATIONS */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="bg-gradient-to-r from-[var(--lw-green)]/[0.05] to-[var(--lw-green)]/[0.02] rounded-3xl p-12 border border-[var(--lw-green)]/20 hover:shadow-[0_30px_60px_rgba(4,98,65,0.2)] transition-all duration-500">
            <h2 className="text-4xl font-bold text-[var(--lw-dark)] mb-4 animate-fade-in">Ready to Scale Your AI?</h2>
            <p className="text-[var(--lw-dark)]/60 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-200">
              Join Lifewood's team of annotation experts and help shape the future of AI
            </p>

            <Link href="/apply">
              <button className="group bg-[var(--lw-green)] hover:bg-[var(--lw-green)]/90 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-[0_10px_30px_rgba(4,98,65,0.3)] hover:shadow-[0_15px_40px_rgba(4,98,65,0.4)] inline-flex items-center gap-3 hover:-translate-y-1">
                <Edit3 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <p className="mt-6 text-sm text-[var(--lw-dark)]/40 animate-fade-in animation-delay-400">
              <Users className="inline mr-2 w-4 h-4 text-[var(--lw-green)] animate-pulse-slow" />
              Join 2,500+ specialists worldwide
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[var(--lw-dark)]/10 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-[100px] h-[30px] bg-[var(--lw-green)]/10 rounded flex items-center justify-center">
                  <span className="text-[var(--lw-green)] font-bold text-sm">LIFEWOOD</span>
                </div>
              </div>
              <div className="text-sm text-[var(--lw-dark)]/40">
                precision data annotation for responsible AI
              </div>
              <div className="text-xs text-[var(--lw-dark)]/30">
                © 2025 · human‑centric, ethically sourced data
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
        
        @keyframes slide-left {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        
        @keyframes slide-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
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
        
        .animate-slide-left {
          animation: slide-left 20s linear infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 20s linear infinite;
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
        
        .animation-delay-400 {
          animation-delay: 400ms;
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