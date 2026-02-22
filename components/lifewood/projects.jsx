"use client"

import { ArrowRight, Car, HeartPulse, Landmark, Smartphone, ChevronDown, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const projects = [
  {
    id: "autonomous-vehicle-training",
    icon: Car,
    industry: "Automotive",
    title: "Autonomous vehicle training",
    summary: "Labeled 12M+ images for self-driving perception models.",
    description:
      "We partnered with a leading automotive OEM to label over 12 million images for self-driving perception models. Our team of 200+ annotators delivered pixel-perfect semantic segmentation, 3D bounding boxes, and lane markings across diverse driving conditions -- achieving 99.2% accuracy with a 3-week turnaround.",
    stats: ["12M+ images", "99.2% accuracy", "200+ annotators"],
    slug: "autonomous-vehicle-training",
    fullDescription: "This groundbreaking project involved collaborating with a top-tier automotive manufacturer to create the largest labeled dataset for autonomous driving in Southeast Asia. Our team of 200+ specialized annotators worked around the clock to deliver pixel-perfect semantic segmentation, 3D bounding boxes, and lane markings across diverse driving conditions including urban, highway, and rural environments. The result was a 99.2% accuracy rate and a 3-week turnaround that exceeded client expectations. The dataset now powers self-driving perception models tested across 1 million+ kilometers of real-world driving.",
    challenge: "The client needed high-quality labeled data at scale within a tight deadline. Traditional annotation methods would have taken months.",
    solution: "We deployed a hybrid approach combining AI-assisted pre-labeling with human verification, plus a multi-tier quality control system.",
    outcome: "Delivered 12M+ images in 3 weeks with 99.2% accuracy, enabling the client to accelerate their autonomous vehicle testing by 6 months."
  },
  {
    id: "medical-imaging-ai",
    icon: HeartPulse,
    industry: "Healthcare",
    title: "Medical imaging AI",
    summary: "Annotated radiology scans for diagnostic AI systems.",
    description:
      "Supporting a global healthtech company, our medical annotation team labeled thousands of radiology scans (CT, MRI, X-ray) with expert-verified annotations. This enabled the development of diagnostic AI that can detect early-stage anomalies with clinical-grade precision, now deployed in 15+ hospitals across Asia.",
    stats: ["50K+ scans", "Clinical-grade QA", "15+ hospitals"],
    slug: "medical-imaging-ai",
    fullDescription: "Partnering with a global healthtech leader, our specialized medical annotation team - consisting of certified radiologists and trained technicians - labeled over 50,000 radiology scans including CT, MRI, and X-ray modalities. Each annotation was verified through a rigorous double-blind review process to ensure clinical-grade precision. The resulting dataset enabled the development of a diagnostic AI system that can detect early-stage anomalies with 98.7% sensitivity.",
    challenge: "Medical imaging requires expert-level annotations with zero margin for error. The client needed clinical-grade quality at production scale.",
    solution: "We assembled a team of certified medical professionals and implemented a multi-stage QA protocol with random expert audits.",
    outcome: "The AI system is now deployed in 15+ hospitals across Asia, helping radiologists detect anomalies 3x faster with improved accuracy."
  },
  {
    id: "nlp-financial-compliance",
    icon: Landmark,
    industry: "Finance",
    title: "NLP for financial compliance",
    summary: "Processed multilingual documents for regulatory analysis.",
    description:
      "We built a custom NLP training dataset for a Southeast Asian bank's compliance system. Our multilingual team processed financial documents across 8 languages, tagging entities, classifying risk factors, and flagging regulatory triggers -- reducing the bank's manual review workload by 70%.",
    stats: ["8 languages", "70% time saved", "500K documents"],
    slug: "nlp-financial-compliance",
    fullDescription: "For one of Southeast Asia's largest banking groups, we created a comprehensive NLP training dataset to automate regulatory compliance monitoring. Our multilingual team of linguists and financial experts processed 500,000+ documents across 8 languages (English, Malay, Mandarin, Tamil, Thai, Vietnamese, Indonesian, and Tagalog), tagging entities, classifying risk factors, and flagging regulatory triggers.",
    challenge: "The bank's compliance team was spending 200+ hours weekly manually reviewing documents in multiple languages to identify regulatory risks.",
    solution: "We built a custom annotation pipeline with language-specific experts and developed a taxonomy of 50+ regulatory risk categories.",
    outcome: "Reduced manual review workload by 70% and improved regulatory risk detection by 45%, now processing 10,000+ documents daily."
  },
  {
    id: "voice-assistant-training",
    icon: Smartphone,
    industry: "Technology",
    title: "Voice assistant training",
    summary: "Curated multilingual speech data for conversational AI.",
    description:
      "For a major tech platform, we curated 10,000+ hours of multilingual speech data across 12 Southeast Asian languages and dialects. Our team handled transcription, intent labeling, and sentiment tagging -- powering a voice assistant that serves over 50 million users daily.",
    stats: ["10K+ hours", "12 languages", "50M+ users"],
    slug: "voice-assistant-training",
    fullDescription: "A leading global technology company engaged us to create a diverse, high-quality speech dataset for their voice assistant's expansion into Southeast Asia. We curated 10,000+ hours of speech data across 12 languages and 30+ regional dialects, with careful attention to age, gender, and accent diversity. Our team handled verbatim transcription, intent labeling, sentiment tagging, and acoustic environment classification.",
    challenge: "The voice assistant struggled with Southeast Asian accents and dialects, resulting in poor user experience for 50M+ potential users.",
    solution: "We recorded and annotated 10,000+ hours of speech from 5,000+ native speakers across the region, ensuring demographic diversity.",
    outcome: "The improved voice assistant now serves 50M+ users daily with 95% accuracy across all target languages and dialects."
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const router = useRouter()

  const handleCardClick = (project) => {
    setSelectedProject(project)
    // Optional: Update URL without navigation
    // router.push(`/case-studies?project=${project.slug}`, { scroll: false })
  }

  const handleClose = () => {
    setSelectedProject(null)
    // Optional: Clear URL params
    // router.push('/case-studies', { scroll: false })
  }

  // If a project is selected, show only that project in detail
  if (selectedProject) {
    const project = selectedProject
    const Icon = project.icon

    return (
      <section className="min-h-screen bg-[var(--lw-sea-salt)] py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          {/* Back button */}
          <button
            onClick={handleClose}
            className="group mb-8 inline-flex items-center gap-2 text-sm text-[var(--lw-dark)]/60 hover:text-[var(--lw-green)] transition-colors"
          >
            <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to all case studies
          </button>

          {/* Detailed case study */}
          <div className="bg-white rounded-3xl border border-[var(--lw-green)]/10 shadow-xl overflow-hidden">
            {/* Header with icon */}
            <div className="p-8 lg:p-12 border-b border-[var(--lw-dark)]/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--lw-green)]/10">
                  <Icon size={32} className="text-[var(--lw-green)]" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--lw-saffron)]">
                    {project.industry}
                  </span>
                  <h1 className="text-2xl lg:text-3xl font-bold text-[var(--lw-dark)]">
                    {project.title}
                  </h1>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3 mt-4">
                {project.stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full bg-[var(--lw-green)]/[0.06] px-4 py-2 text-sm font-medium text-[var(--lw-green)]"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 space-y-8">
              {/* Full description */}
              <div>
                <h2 className="text-lg font-semibold text-[var(--lw-dark)] mb-3">Overview</h2>
                <p className="text-[var(--lw-dark)]/70 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Challenge, Solution, Outcome grid */}
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 bg-[var(--lw-green)]/[0.02] rounded-xl border border-[var(--lw-green)]/5">
                  <h3 className="font-semibold text-[var(--lw-dark)] mb-2">The Challenge</h3>
                  <p className="text-sm text-[var(--lw-dark)]/60">{project.challenge}</p>
                </div>
                <div className="p-5 bg-[var(--lw-green)]/[0.02] rounded-xl border border-[var(--lw-green)]/5">
                  <h3 className="font-semibold text-[var(--lw-dark)] mb-2">Our Solution</h3>
                  <p className="text-sm text-[var(--lw-dark)]/60">{project.solution}</p>
                </div>
                <div className="p-5 bg-[var(--lw-green)]/[0.02] rounded-xl border border-[var(--lw-green)]/5">
                  <h3 className="font-semibold text-[var(--lw-dark)] mb-2">The Outcome</h3>
                  <p className="text-sm text-[var(--lw-dark)]/60">{project.outcome}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-[var(--lw-dark)]/5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--lw-green)] text-white rounded-full text-sm font-medium hover:bg-[var(--lw-green)]/90 transition-all duration-300 hover:scale-105"
                >
                  Discuss a similar project
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Otherwise show all projects grid
  return (
    <section id="projects" className="bg-[var(--lw-sea-salt)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
            Our work
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
            Projects that drive real impact
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
            Click any case study to see the full story.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = project.icon

            return (
              <div
                key={project.id}
                onClick={() => handleCardClick(project)}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[var(--lw-dark)]/[0.03] bg-[var(--lw-white)] hover:border-[var(--lw-green)]/10 hover:shadow-[0_8px_32px_rgba(19,48,32,0.04)] hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer"
              >
                <div className="p-8 lg:p-10">
                  {/* Header with icon and title */}
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--lw-green)]/[0.05] group-hover:bg-[var(--lw-green)]/10 transition-colors duration-300">
                      <Icon size={22} className="text-[var(--lw-green)]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--lw-saffron)]">
                        {project.industry}
                      </span>
                      <h3 className="text-lg font-semibold text-[var(--lw-dark)] group-hover:text-[var(--lw-green)] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-[0.88rem] text-[var(--lw-dark)]/45">
                    {project.summary}
                  </p>

                  {/* Stats badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stats.map((stat) => (
                      <span
                        key={stat}
                        className="rounded-full bg-[var(--lw-green)]/[0.04] px-3.5 py-1.5 text-[0.75rem] font-semibold text-[var(--lw-green)]"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* Read more indicator */}
                  <div className="mt-4 flex items-center gap-1 text-[0.8rem] font-medium text-[var(--lw-green)]/70 group-hover:text-[var(--lw-green)] transition-colors">
                    <span>Click to read full case study</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View all projects link */}
        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[var(--lw-dark)]/10 rounded-full text-[var(--lw-dark)] font-medium hover:border-[var(--lw-green)]/30 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View all case studies
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}