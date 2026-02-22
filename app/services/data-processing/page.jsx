"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu, X, ChevronDown, ArrowUpRight,
  Database,
  Filter,
  Braces,
  CheckCircle,
  TrendingUp,
  Shield,
  HardDrive,
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
  Video,
  Workflow,
  Server,
  Cpu,
  Network,
  Gauge,
  PieChart,
  FileJson,
  Binary,
  RefreshCw,
  ScanLine,
  Combine,
  Trash2,
  Layout,
  Grid3x3,
  FileText,
  FileSpreadsheet,
  FileImage,
  FileAudio,
  FileVideo,
  FolderTree,
  Settings,
  Sliders,
  FilterX,
  FileSearch,
  CheckSquare,
  AlertCircle,
  BarChart,
  LineChart,
  ScatterChart,
  Box,
  Boxes,
  Layers3,
  GitMerge,
  GitFork,
  Workflow as WorkflowIcon,
  Regex,
  Replace,
  Scissors,
  Brush,
  Eraser,
  Paintbrush,
  Sparkle,
  Wand2,
  Puzzle,
  ArrowLeftRight,
  ArrowUpDown,
  Scale,
  Ruler,
  Weight,
  Thermometer,
  GaugeCircle,
  Sigma,
  Infinity,
  Pi,
  FunctionSquare,
  Variable,
  Calculator,
  Loader2,
  CircleDashed,
  CircleDot,
  MoveRight,
  ChevronRight,
  ChevronsRight
} from "lucide-react"

// Navbar component (copied from your code)
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
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--lw-green)]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--lw-green)]/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute w-full h-full">
          <defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--lw-green)" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Data flow animation */}
      <div className="absolute top-1/3 right-0 animate-slide-left">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-[var(--lw-green)]/40 rounded-full animate-ping" />
          <MoveRight className="w-4 h-4 text-[var(--lw-green)]/30" />
          <div className="w-2 h-2 bg-[var(--lw-green)]/40 rounded-full animate-ping animation-delay-300" />
          <MoveRight className="w-4 h-4 text-[var(--lw-green)]/30" />
          <div className="w-2 h-2 bg-[var(--lw-green)]/40 rounded-full animate-ping animation-delay-600" />
        </div>
      </div>
    </div>
  )
}

// Floating data card component
const FloatingDataCard = ({ className, delay }) => {
  return (
    <div className={`absolute bg-white/80 backdrop-blur-sm border border-[var(--lw-green)]/20 rounded-xl p-3 shadow-[0_8px_32px_rgba(4,98,65,0.12)] animate-float ${className}`} style={{ animationDelay: delay }}>
      <div className="flex items-center gap-2">
        <Database className="w-4 h-4 text-[var(--lw-green)]" />
        <div className="w-16 h-2 bg-[var(--lw-green)]/10 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-[var(--lw-green)]/30 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}

// Main Page Component
export default function DataProcessingPage() {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Data Cleaning & Deduplication",
      description: "Remove errors, inconsistencies, and duplicates from raw datasets with advanced algorithms.",
      details: [
        "Duplicate removal & fuzzy matching (98.5% accuracy)",
        "Outlier detection & statistical handling",
        "Missing value imputation (mean, median, ML-based)",
        "Noise reduction & signal filtering"
      ],
      stats: "99.9% purity",
      icon2: <Trash2 className="w-3 h-3" />,
      image: "/api/placeholder/400/200" // Placeholder for actual image
    },
    {
      icon: <Layout className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Data Structuring & Normalization",
      description: "Organize and standardize datasets for ML readiness and database integration.",
      details: [
        "Schema validation & automated enforcement",
        "Data type standardization (50+ formats)",
        "Unit normalization (metric/imperial conversion)",
        "Hierarchical structuring & nesting"
      ],
      stats: "100% consistent",
      icon2: <Grid3x3 className="w-3 h-3" />,
      image: "/api/placeholder/400/200"
    },
    {
      icon: <Combine className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Data Integration & Enrichment",
      description: "Merge multiple sources and enhance with additional context and metadata.",
      details: [
        "Multi-source merging (databases, APIs, files)",
        "Entity resolution & record linkage",
        "Data augmentation with external sources",
        "Cross-reference validation & verification"
      ],
      stats: "Real-time sync",
      icon2: <RefreshCw className="w-3 h-3" />,
      image: "/api/placeholder/400/200"
    },
    {
      icon: <FileSearch className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Data Validation & Quality Assurance",
      description: "Automated and manual validation pipelines with comprehensive reporting.",
      details: [
        "Business rule validation (200+ rules)",
        "Cross-field consistency checking",
        "Statistical validation & distribution analysis",
        "Anomaly detection & alerting"
      ],
      stats: "99.97% accuracy",
      icon2: <CheckCircle className="w-3 h-3" />,
      image: "/api/placeholder/400/200"
    },
    {
      icon: <Workflow className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "ETL Pipeline Development",
      description: "End-to-end data extraction, transformation, and loading workflows.",
      details: [
        "Custom ETL workflows (Apache Airflow, AWS Glue)",
        "Batch & streaming processing (Kafka, Kinesis)",
        "Data warehousing (Snowflake, Redshift, BigQuery)",
        "REST API integration & webhooks"
      ],
      stats: "24/7 pipelines",
      icon2: <Server className="w-3 h-3" />,
      image: "/api/placeholder/400/200"
    },
    {
      icon: <FileJson className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Data Format Conversion",
      description: "Transform between any data formats seamlessly with schema preservation.",
      details: [
        "JSON, XML, CSV, Parquet, AVRO",
        "Protobuf, ORC, Thrift, MessagePack",
        "Image formats (JPEG, PNG, TIFF, WebP)",
        "Audio/Video transcoding (MP3, WAV, MP4, AVI)"
      ],
      stats: "100+ formats",
      icon2: <Code className="w-3 h-3" />,
      image: "/api/placeholder/400/200"
    },
    {
      icon: <Brush className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Data Transformation & Feature Engineering",
      description: "Advanced transformations for feature extraction and engineering.",
      details: [
        "Feature scaling & normalization (MinMax, Standard)",
        "Encoding categorical variables (One-hot, Label)",
        "Text preprocessing & tokenization",
        "Image augmentation & preprocessing"
      ],
      stats: "50+ transforms",
      icon2: <Wand2 className="w-3 h-3" />,
      image: "/api/placeholder/400/200"
    },
    {
      icon: <Sigma className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Statistical Analysis & Aggregation",
      description: "Compute statistics and aggregations for data insights.",
      details: [
        "Descriptive statistics (mean, median, mode)",
        "Aggregations (group by, rollup, cube)",
        "Time-series resampling & interpolation",
        "Correlation analysis & covariance"
      ],
      stats: "Real-time",
      icon2: <BarChart className="w-3 h-3" />,
      image: "/api/placeholder/400/200"
    },
    {
      icon: <Shield className="w-8 h-8 text-[var(--lw-green)]" />,
      title: "Data Anonymization & Privacy",
      description: "Protect sensitive data with enterprise-grade anonymization.",
      details: [
        "PII detection & redaction",
        "Data masking & tokenization",
        "Differential privacy implementation",
        "GDPR & HIPAA compliance"
      ],
      stats: "100% compliant",
      icon2: <Lock className="w-3 h-3" />,
      image: "/api/placeholder/400/200"
    }
  ]

  const stats = [
    { number: "50TB+", label: "processed daily", icon: <HardDrive className="w-4 h-4" /> },
    { number: "99.9%", label: "data accuracy", icon: <Gauge className="w-4 h-4" /> },
    { number: "<100ms", label: "latency", icon: <Zap className="w-4 h-4" /> },
    { number: "200+", label: "enterprise clients", icon: <Users className="w-4 h-4" /> }
  ]

  const qualityMetrics = [
    { label: "Data quality score", value: "99.8%", icon: <Award className="w-4 h-4" /> },
    { label: "Pipeline uptime", value: "99.99%", icon: <Server className="w-4 h-4" /> },
    { label: "On-time delivery", value: "100%", icon: <Clock className="w-4 h-4" /> },
    { label: "Client retention", value: "98%", icon: <Users className="w-4 h-4" /> }
  ]

  const industries = [
    "E-commerce", "Healthcare", "Financial Services", "IoT", "Telecommunications", "Manufacturing",
    "Retail", "Automotive", "Logistics", "Energy", "Insurance", "Government"
  ]

  const dataTypes = [
    { name: "Structured Data", icon: <Database className="w-4 h-4" />, formats: "SQL, CSV, Excel, Parquet" },
    { name: "Unstructured Text", icon: <FileText className="w-4 h-4" />, formats: "PDF, DOCX, TXT, HTML" },
    { name: "Time-series", icon: <Activity className="w-4 h-4" />, formats: "IoT, Sensor, Stock Data" },
    { name: "Geospatial", icon: <Globe className="w-4 h-4" />, formats: "GeoJSON, Shapefile, KML" },
    { name: "Images", icon: <FileImage className="w-4 h-4" />, formats: "JPEG, PNG, TIFF, WebP" },
    { name: "Audio", icon: <FileAudio className="w-4 h-4" />, formats: "MP3, WAV, FLAC, AAC" },
    { name: "Video", icon: <FileVideo className="w-4 h-4" />, formats: "MP4, AVI, MOV, MKV" },
    { name: "Streaming", icon: <Network className="w-4 h-4" />, formats: "Kafka, Kinesis, RabbitMQ" }
  ]

  const pipelineStages = [
    { name: "Ingestion", icon: <Database className="w-6 h-6" />, desc: "Collect data from 50+ sources" },
    { name: "Cleaning", icon: <Brush className="w-6 h-6" />, desc: "Remove noise & inconsistencies" },
    { name: "Validation", icon: <CheckCircle className="w-6 h-6" />, desc: "200+ quality checks" },
    { name: "Transformation", icon: <Wand2 className="w-6 h-6" />, desc: "Feature engineering & normalization" },
    { name: "Enrichment", icon: <Combine className="w-6 h-6" />, desc: "Add context & metadata" },
    { name: "Delivery", icon: <CloudUpload className="w-6 h-6" />, desc: "Any format, any destination" }
  ]

  const tools = [
    "Apache Spark", "Apache Flink", "Apache Kafka", "Apache Airflow",
    "AWS Glue", "Google Dataflow", "Azure Data Factory", "Snowflake",
    "dbt", "Fivetran", "Stitch", "Talend", "Informatica", "Matillion"
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

          {/* Floating data cards */}
          <FloatingDataCard className="top-40 left-[15%]" delay="0s" />
          <FloatingDataCard className="top-60 right-[20%]" delay="1s" />
          <FloatingDataCard className="bottom-40 left-[25%]" delay="2s" />

          <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--lw-green)]/[0.08] border border-[var(--lw-green)]/20 px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[var(--lw-green)] animate-spin-slow" />
              <span className="text-sm uppercase tracking-wider text-[var(--lw-green)] font-medium">
                DATA PROCESSING · ETL · PIPELINES
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-[var(--lw-dark)] to-[var(--lw-dark)]/70 bg-clip-text text-transparent">
                Data Processing
              </span>
              <br />
              <span className="text-[var(--lw-green)] animate-pulse-slow">at Enterprise Scale</span>
            </h1>

            <p className="text-xl text-[var(--lw-dark)]/60 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-500">
              Transform raw data into structured, meaningful insights for AI systems.
              End-to-end pipeline management with 99.9% accuracy and real-time processing capabilities.
              Trusted by 200+ enterprise clients worldwide.
            </p>

            {/* Quick Stats with hover animations */}
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

        {/* DATA TYPES GRID WITH ANIMATIONS */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-2xl font-semibold text-[var(--lw-dark)] mb-2">Supported Data Types</h2>
            <p className="text-[var(--lw-dark)]/60">We process any data format, any volume, any velocity</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dataTypes.map((type, index) => (
              <div
                key={index}
                className="p-4 bg-[var(--lw-green)]/[0.02] border border-[var(--lw-green)]/10 rounded-xl hover:bg-[var(--lw-green)]/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(4,98,65,0.1)] animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-[var(--lw-green)] animate-pulse-slow">{type.icon}</div>
                  <span className="font-medium text-[var(--lw-dark)]">{type.name}</span>
                </div>
                <p className="text-xs text-[var(--lw-dark)]/40">{type.formats}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES GRID WITH IMAGES AND GREEN SHADOWS */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--lw-dark)] mb-4">Comprehensive Data Processing</h2>
            <p className="text-[var(--lw-dark)]/60 max-w-2xl mx-auto">
              End-to-end solutions for cleaning, structuring, and transforming your data at any scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white border border-[var(--lw-green)]/20 rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_rgba(4,98,65,0.2)] transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image container */}
                <div className="relative h-32 bg-gradient-to-r from-[var(--lw-green)]/10 to-[var(--lw-green)]/5 overflow-hidden">
                  {/* Animated data visualization */}
                  <div className="absolute inset-0 flex items-center justify-around opacity-30">
                    <div className="w-1 h-8 bg-[var(--lw-green)]/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                    <div className="w-1 h-12 bg-[var(--lw-green)]/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-1 h-16 bg-[var(--lw-green)]/50 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    <div className="w-1 h-10 bg-[var(--lw-green)]/30 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                    <div className="w-1 h-14 bg-[var(--lw-green)]/40 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
                  </div>

                  {/* Moving data dots */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--lw-green)]/50 to-transparent animate-slide" />

                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-[var(--lw-green)] border border-[var(--lw-green)]/20">
                    {feature.stats}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-[var(--lw-green)]/[0.08] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform group-hover:shadow-[0_4px_12px_rgba(4,98,65,0.2)]">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--lw-dark)] flex-1">{feature.title}</h3>
                  </div>

                  <p className="text-[var(--lw-dark)]/60 text-sm mb-4 border-l-2 border-[var(--lw-green)]/30 pl-3">
                    {feature.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[var(--lw-dark)]/70">
                        <CheckCircle className="w-3 h-3 text-[var(--lw-green)] mt-1 flex-shrink-0 animate-pulse-slow" />
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

        {/* PIPELINE STAGES WITH GREEN SHADOWS */}
        <section className="bg-[var(--lw-dark)] text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                <Workflow className="w-4 h-4 text-[var(--lw-green)] animate-spin-slow" />
                <span className="text-sm uppercase tracking-wider text-white/80">Processing Pipeline</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">End-to-End <span className="text-[var(--lw-green)]">Data Pipeline</span></h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                From raw data to production-ready datasets in 6 streamlined stages
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {pipelineStages.map((stage, index) => (
                <div
                  key={index}
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-3 border border-white/20 group-hover:shadow-[0_8px_20px_rgba(4,98,65,0.3)] transition-all duration-300 group-hover:-translate-y-1">
                      <div className="text-[var(--lw-green)] group-hover:scale-110 transition-transform">{stage.icon}</div>
                    </div>
                    {index < pipelineStages.length - 1 && (
                      <ChevronsRight className="absolute -right-2 top-6 w-4 h-4 text-[var(--lw-green)]/50 hidden lg:block animate-pulse" />
                    )}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{stage.name}</h3>
                  <p className="text-xs text-white/40">{stage.desc}</p>
                </div>
              ))}
            </div>

            {/* Quality Metrics with green shadows */}
            <div className="grid md:grid-cols-4 gap-6 mt-16">
              {qualityMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 hover:shadow-[0_8px_20px_rgba(4,98,65,0.2)] transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[var(--lw-green)] animate-pulse-slow">{metric.icon}</div>
                    <span className="text-2xl font-bold text-[var(--lw-green)]">{metric.value}</span>
                  </div>
                  <p className="text-sm text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY STACK WITH ANIMATIONS */}
        <section className="bg-[var(--lw-green)]/[0.02] border-y border-[var(--lw-green)]/10 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-[var(--lw-dark)] mb-4">Our Technology Stack</h2>
              <p className="text-[var(--lw-dark)]/60 max-w-2xl mx-auto">
                Industry-leading tools and platforms for enterprise data processing
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white border border-[var(--lw-green)]/20 rounded-full text-sm text-[var(--lw-dark)]/70 hover:border-[var(--lw-green)]/40 hover:bg-[var(--lw-green)]/[0.02] hover:shadow-[0_4px_12px_rgba(4,98,65,0.1)] transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE WITH ANIMATIONS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-[var(--lw-dark)] mb-4">Trusted Across Industries</h2>
              <p className="text-[var(--lw-dark)]/60 max-w-2xl mx-auto">
                Domain expertise across sectors, delivering specialized data processing solutions
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

        {/* COMPLIANCE SECTION WITH GREEN SHADOW */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-[var(--lw-green)]/[0.05] to-[var(--lw-green)]/[0.02] rounded-3xl p-8 border border-[var(--lw-green)]/20 hover:shadow-[0_20px_40px_rgba(4,98,65,0.15)] transition-all duration-500">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Shield className="w-10 h-10 text-[var(--lw-green)] animate-pulse-slow" />
                <div>
                  <h3 className="text-xl font-semibold text-[var(--lw-dark)]">Enterprise Security & Compliance</h3>
                  <p className="text-sm text-[var(--lw-dark)]/60">Your data is processed with highest security standards</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Lock className="w-3 h-3" />, label: "GDPR" },
                  { icon: <Shield className="w-3 h-3" />, label: "HIPAA" },
                  { icon: <Award className="w-3 h-3" />, label: "ISO 27001" },
                  { icon: <CheckCircle className="w-3 h-3" />, label: "SOC2 Type II" },
                  { icon: <Globe className="w-3 h-3" />, label: "CCPA" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-[var(--lw-green)]/20 rounded-full hover:shadow-[0_4px_12px_rgba(4,98,65,0.1)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-[var(--lw-green)]">{item.icon}</div>
                    <span className="text-xs font-medium text-[var(--lw-dark)]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION WITH GREEN SHADOW */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="bg-gradient-to-r from-[var(--lw-green)]/[0.05] to-[var(--lw-green)]/[0.02] rounded-3xl p-12 border border-[var(--lw-green)]/20 hover:shadow-[0_30px_60px_rgba(4,98,65,0.2)] transition-all duration-500">
            <h2 className="text-4xl font-bold text-[var(--lw-dark)] mb-4 animate-fade-in">Ready to Process Your Data?</h2>
            <p className="text-[var(--lw-dark)]/60 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-200">
              Join Lifewood's data processing team and help build the infrastructure for AI
            </p>

            <Link href="/apply">
              <button className="group bg-[var(--lw-green)] hover:bg-[var(--lw-green)]/90 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-[0_10px_30px_rgba(4,98,65,0.3)] hover:shadow-[0_15px_40px_rgba(4,98,65,0.4)] inline-flex items-center gap-3 hover:-translate-y-1">
                <Edit3 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <p className="mt-6 text-sm text-[var(--lw-dark)]/40 animate-fade-in animation-delay-400">
              <HardDrive className="inline mr-2 w-4 h-4 text-[var(--lw-green)] animate-pulse-slow" />
              Processing 50TB+ daily for 200+ enterprise clients
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
                enterprise data processing for responsible AI
              </div>
              <div className="text-xs text-[var(--lw-dark)]/30">
                © 2025 · secure · compliant · scalable
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Add custom animations to global styles */}
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slide {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
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
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-slide {
          animation: slide 2s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
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