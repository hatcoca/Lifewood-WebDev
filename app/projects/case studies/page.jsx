"use client"

import { ArrowRight, Car, HeartPulse, Landmark, Smartphone, ExternalLink, Clock, Users, Award } from "lucide-react"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"

const projects = [
  {
    icon: Car,
    industry: "Automotive",
    title: "Autonomous vehicle training",
    summary: "Labeled 12M+ images for self-driving perception models.",
    description:
      "We partnered with a leading automotive OEM to label over 12 million images for self-driving perception models. Our team of 200+ annotators delivered pixel-perfect semantic segmentation, 3D bounding boxes, and lane markings across diverse driving conditions -- achieving 99.2% accuracy with a 3-week turnaround.",
    stats: ["12M+ images", "99.2% accuracy", "200+ annotators"],
    image: "/images/case-studies/autonomous.jpg",
    color: "from-blue-500/20 to-green-500/20",
  },
  {
    icon: HeartPulse,
    industry: "Healthcare",
    title: "Medical imaging AI",
    summary: "Annotated radiology scans for diagnostic AI systems.",
    description:
      "Supporting a global healthtech company, our medical annotation team labeled thousands of radiology scans (CT, MRI, X-ray) with expert-verified annotations. This enabled the development of diagnostic AI that can detect early-stage anomalies with clinical-grade precision, now deployed in 15+ hospitals across Asia.",
    stats: ["50K+ scans", "Clinical-grade QA", "15+ hospitals"],
    image: "/images/case-studies/medical.jpg",
    color: "from-red-500/20 to-purple-500/20",
  },
  {
    icon: Landmark,
    industry: "Finance",
    title: "NLP for financial compliance",
    summary: "Processed multilingual documents for regulatory analysis.",
    description:
      "We built a custom NLP training dataset for a Southeast Asian bank's compliance system. Our multilingual team processed financial documents across 8 languages, tagging entities, classifying risk factors, and flagging regulatory triggers -- reducing the bank's manual review workload by 70%.",
    stats: ["8 languages", "70% time saved", "500K documents"],
    image: "/images/case-studies/finance.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Smartphone,
    industry: "Technology",
    title: "Voice assistant training",
    summary: "Curated multilingual speech data for conversational AI.",
    description:
      "For a major tech platform, we curated 10,000+ hours of multilingual speech data across 12 Southeast Asian languages and dialects. Our team handled transcription, intent labeling, and sentiment tagging -- powering a voice assistant that serves over 50 million users daily.",
    stats: ["10K+ hours", "12 languages", "50M+ users"],
    image: "/images/case-studies/voice.jpg",
    color: "from-orange-500/20 to-yellow-500/20",
  },
]

// Custom Chevron component to avoid import
const ChevronDown = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
)

export default function Projects() {
  const [expanded, setExpanded] = useState(null)
  const [hoveredImage, setHoveredImage] = useState(null)
  const imageRefs = useRef([])

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (hoveredImage === null) return

      const container = imageRefs.current[hoveredImage]
      if (!container) return

      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      const img = container.querySelector('img')
      if (img) {
        img.style.transform = `scale(1.1) translate(${x * 20}px, ${y * 20}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [hoveredImage])

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-50 to-white py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#046241]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#F2963F]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <span className="relative inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#F2963F]">
            <span className="absolute -inset-1 bg-[#F2963F]/10 blur-md rounded-full" />
            <span className="relative">Our work</span>
          </span>

          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[#1A2E24] sm:text-4xl lg:text-[2.65rem]">
            Projects that drive{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#046241]">real impact</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#046241]/10 -rotate-1 rounded-full" />
            </span>
          </h2>

          <p className="mt-5 text-[1.05rem] leading-relaxed text-[#1A2E24]/55">
            Click any case study to see the full story behind our partnerships.
          </p>
        </div>

        {/* Project cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => {
            const isOpen = expanded === i
            const Icon = project.icon

            return (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-[2rem] transition-all duration-700 ease-out hover:scale-[1.02]"
              >
                {/* Main card */}
                <div className={`relative bg-white/90 backdrop-blur-sm border transition-all duration-500 ${isOpen
                  ? 'border-[#046241]/30 shadow-[0_30px_60px_rgba(4,98,65,0.15)]'
                  : 'border-gray-200/80 shadow-lg hover:shadow-xl'
                  } rounded-[2rem] overflow-hidden`}>

                  {/* Image container with animations */}
                  <div
                    ref={el => { imageRefs.current[i] = el }}
                    className="relative h-56 overflow-hidden cursor-crosshair bg-gray-100"
                    onMouseEnter={() => setHoveredImage(i)}
                    onMouseLeave={() => {
                      setHoveredImage(null)
                      const img = imageRefs.current[i]?.querySelector('img')
                      if (img) img.style.transform = 'scale(1) translate(0, 0)'
                    }}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`} />

                    {/* Placeholder div instead of Image component to avoid image errors */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <Icon size={48} className="text-gray-400" />
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-[#046241] border border-[#046241]/20 shadow-lg">
                        <Icon size={14} />
                        {project.industry}
                      </span>
                    </div>

                    {/* Expand button indicator */}
                    <div className={`absolute top-4 right-4 z-20 transition-all duration-500 ${isOpen ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                      }`}>
                      <div className="w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#1A2E24] group-hover:text-[#046241] transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-[0.95rem] text-[#1A2E24]/60 leading-relaxed">
                          {project.summary}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.stats.map((stat, idx) => (
                        <div
                          key={stat}
                          className="flex items-center gap-2 px-3 py-1.5 bg-[#046241]/5 rounded-full border border-[#046241]/10 hover:bg-[#046241]/10 transition-all duration-300 hover:scale-105"
                        >
                          {idx === 0 && <Clock size={12} className="text-[#046241]" />}
                          {idx === 1 && <Award size={12} className="text-[#046241]" />}
                          {idx === 2 && <Users size={12} className="text-[#046241]" />}
                          <span className="text-xs font-medium text-[#046241]">{stat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable detailed description */}
                    <div
                      className={`grid transition-all duration-700 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-6 border-t border-[#046241]/10">
                          <p className="text-[0.95rem] leading-relaxed text-[#1A2E24]/70">
                            {project.description}
                          </p>

                          {/* CTA button */}
                          <button
                            className="group/btn mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#046241] text-white rounded-full text-sm font-medium hover:bg-[#046241]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          >
                            Discuss similar project
                            <ArrowRight size={14} className="group/btn:group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Read more button */}
                    <button
                      onClick={() => setExpanded(isOpen ? null : i)}
                      className="group/btn mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#046241] hover:text-[#F2963F] transition-colors"
                    >
                      <span>{isOpen ? 'Show less' : 'Read case study'}</span>
                      <ArrowRight
                        size={14}
                        className={`transition-all duration-300 ${isOpen ? 'rotate-90' : 'group-hover/btn:translate-x-1'
                          }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View all projects button */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-full text-[#1A2E24] font-medium hover:border-[#046241]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <span>View all case studies</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}