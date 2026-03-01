"use client"

import { ArrowRight, Car, HeartPulse, Landmark, Smartphone, ChevronDown, X, Layers, Sparkles, TrendingUp, Search, Brain, Eye, Users, Cpu, Headphones, Globe, BookOpen, Settings } from "lucide-react"
import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

const projects = [
  {
    id: "data-extraction",
    icon: Search,
    type: "Case Study",
    industry: "Data Engineering",
    technology: "AI/OCR/Drones",
    title: "AI Data Extraction",
    summary: "Optimized acquisition of image and text from multiple sources.",
    image: "/images/projects/data-extraction.png",
    color: "#046241",
    stats: [
      { label: "Efficiency Gain", value: "45%" },
      { label: "Data Scale", value: "PB+" },
      { label: "Accuracy", value: "99.8%" }
    ],
    fullDescription: "Using AI, we optimize the acquisition of image and text from multiple sources. Techniques include onsite scanning, drone photography, negotiation with archives and the formation of alliances with corporations, religious organizations and governments.",
    challenge: "Traditional data acquisition is slow, fragmented, and often lacks the structure needed for large-scale AI training.",
    solution: "A unified AI-driven extraction pipeline that handles multi-source ingestion including drone and physical scans.",
    outcome: "Streamlined data supply chain for global research organizations, saving thousands of manual hours."
  },
  {
    id: "ml-enablement",
    icon: Brain,
    type: "Case Study",
    industry: "Machine Learning",
    technology: "PyTorch/Kubernetes",
    title: "Machine Learning Enablement",
    summary: "Comprehensive infrastructure for scaling ML models.",
    image: "/images/services/data-processing.png",
    color: "#4f46e5",
    stats: [
      { label: "Models Enabled", value: "500+" },
      { label: "Latency Red.", value: "30%" },
      { label: "Pipeline Speed", value: "3x" }
    ],
    fullDescription: "We provide the essential bridge between raw data and production-ready machine learning models. Our enablement services include feature engineering, model optimization, and deployment pipelines at scale.",
    challenge: "Moving from a successful pilot to production scale is the primary bottleneck for 85% of AI initiatives.",
    solution: "Industrial-grade processing frameworks that automate the data-to-model lifecycle with consistent QC.",
    outcome: "Drastic reduction in time-to-market for enterprise AI solutions across banking and retail sectors."
  },
  {
    id: "autonomous-driving",
    icon: Car,
    type: "Case Study",
    industry: "Automotive",
    technology: "LiDAR/Semantic Seg.",
    title: "Autonomous Driving Technology",
    summary: "High-precision labeling for level 4/5 autonomous vehicles.",
    image: "/images/projects/autonomous-vehicle.png",
    color: "#10b981",
    stats: [
      { label: "Images Labeled", value: "12M+" },
      { label: "Precision", value: "99.2%" },
      { label: "Turnaround", value: "3 Wks" }
    ],
    fullDescription: "Lifewood leverages specialized precision teams to label millions of frames for self-driving perception. We handle pixel-perfect semantic segmentation, 33D bounding boxes, and lane markings across diverse global driving conditions.",
    challenge: "Autonomous systems require massive amounts of perfect ground-truth data that automated tools cannot yet generate.",
    solution: "Deployed 200+ specialized annotators with a proprietary hybrid AI-human verification toolset.",
    outcome: "Enabled major automotive OEMs to accelerate their safety-critical perception testing by months."
  },
  {
    id: "ai-customer-service",
    icon: Headphones,
    type: "Case Study",
    industry: "Support",
    technology: "Transformer Models",
    title: "AI-Enabled Customer Service",
    summary: "Next-gen conversational interfaces and support automation.",
    image: "/images/services/ai-training.png",
    color: "#FFB347",
    stats: [
      { label: "Resolution Rate", value: "85%" },
      { label: "Languages", value: "25+" },
      { label: "Users Served", value: "10M+" }
    ],
    fullDescription: "Seamless home extension and living space expansion through AI-driven intent mapping and sentiment analysis. We build and train the core engines that power global customer service bots and virtual assistants.",
    challenge: "Legacy customer service systems are rigid and fail to understand complex human intent or emotional context.",
    solution: "Developed multi-modal training sets for NLP engines that recognize regional dialects and nuanced customer sentiment.",
    outcome: "Significant improvement in CSAT scores and reduced operational costs for global telecomm leaders."
  },
  {
    id: "nlp-speech",
    icon: Smartphone,
    type: "Case Study",
    industry: "Technology",
    technology: "ASR/TTS Engines",
    title: "NLP & Speech Acquisition",
    summary: "Multilingual transcription and intent labeling at scale.",
    image: "/images/projects/voice-ai.png",
    color: "#ec4899",
    stats: [
      { label: "Hours Curated", value: "10K+" },
      { label: "Dialects", value: "30+" },
      { label: "Accuracy", value: "95%" }
    ],
    fullDescription: "A leading global technology company engaged us to create a diverse, high-quality speech dataset for their voice assistant's expansion into Southeast Asia. We curated speech data across 12 languages and 30+ regional dialects.",
    challenge: "Voice assistants often struggle with regional accents and code-switching, leading to poor user adoption in diverse markets.",
    solution: "Meticulous curation of real-world speech from 5,000+ native speakers across all target demographics.",
    outcome: "Highly localized AI interfaces that serve over 50 million users daily with industry-leading precision."
  },
  {
    id: "computer-vision",
    icon: Eye,
    type: "Case Study",
    industry: "AI Vision",
    technology: "Edge AI/YOLOv8",
    title: "Computer Vision (CV)",
    summary: "Powering visual recognition across industries.",
    image: "/images/services/data-annotation.png",
    color: "#6366f1",
    stats: [
      { label: "Object Classes", value: "1K+" },
      { label: "Accuracy", value: "98.5%" },
      { label: "Sector Coverage", value: "15+" }
    ],
    fullDescription: "From driveways and patios to fencing and brickwork—visual recognition powers modern safety and logistics. We provide the ground-truth data for CV models in manufacturing, security, and urban planning.",
    challenge: "Varying lighting, occlusions, and rare edge cases make robust CV models difficult to train and validate.",
    solution: "Expertly annotated datasets with multi-tier quality control focusing on complex visual scenes.",
    outcome: "Production-ready CV models for everything from factory safety oversight to smart city analytics."
  },
  {
    id: "genealogy",
    icon: Users,
    type: "Case Study",
    industry: "Legacy",
    technology: "HTR/Digital Archivist",
    title: "Genealogy",
    summary: "Digitalizing historical records for heritage preservation.",
    image: "/images/services/abstract-2.png",
    color: "#8b5cf6",
    stats: [
      { label: "Records Dig.", value: "100M+" },
      { label: "Accuracy", value: "99.9%" },
      { label: "Languages", value: "5+" }
    ],
    fullDescription: "We preserve the past using the technology of the future. Lifewood specializes in the digitalization, indexing, and genealogical mapping of historical records for archives and heritage organizations globaly.",
    challenge: "Fragile, handwritten historical documents are inaccessible and difficult to process using standard OCR.",
    solution: "Manual transcription by specialized linguistic teams combined with proprietary data indexing frameworks.",
    outcome: "Global accessibility to ancestral records, enabling millions to reconnect with their heritage."
  },
]

function ProjectCard({ project, index, isLast, onClick }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick(project)}
      className={`group relative cursor-pointer break-inside-avoid ${isLast ? "[column-span:all] mt-10 w-full inline-block" : ""}`}
    >
      <div className="relative overflow-hidden rounded-[4rem] bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] transition-all duration-1000">
        <div className={`relative ${isLast ? "aspect-[4/3] md:aspect-[21/9]" : index % 3 === 0 ? "aspect-[4/5]" : "aspect-[16/10]"} overflow-hidden`}>
          <motion.div style={{ y }} className="absolute inset-0 scale-110">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
        </div>

        {/* Floating Tags */}
        <div className="absolute top-10 left-10 flex flex-wrap gap-3 pointer-events-none opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
          <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-2xl text-[0.6rem] font-black text-white uppercase tracking-[0.2em] border border-white/10">
            {project.type}
          </span>
          <span className="px-4 py-1.5 rounded-full bg-lw-green/30 backdrop-blur-2xl text-[0.6rem] font-black text-white uppercase tracking-[0.2em] border border-white/10">
            {project.industry}
          </span>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
            {project.title}
          </h3>

          <p className="text-white/60 text-base max-w-sm line-clamp-2 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 font-medium leading-relaxed">
            {project.summary}
          </p>

          <div className="mt-12 flex items-center justify-between opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200">
            <div className="flex gap-10">
              <div>
                <div className="text-2xl font-black text-white tracking-tighter">{project.stats[0].value}</div>
                <div className="text-[0.6rem] font-black text-white/30 uppercase tracking-[0.3em] mt-1">{project.stats[0].label}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group/btn">
              <span className="text-[0.7rem] font-black text-white uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-700">
                Explore Case
              </span>
              <div className="h-16 w-16 flex items-center justify-center rounded-[1.5rem] bg-white text-zinc-950 group-hover:bg-lw-green group-hover:text-white transition-all duration-500 shadow-2xl group-hover:scale-110 group-hover:rotate-12">
                <ArrowRight size={24} strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="bg-[#FAFAFA] py-28 lg:py-48 dark:bg-[#060606] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Decorative Ambience */}
        <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-lw-greensaffron/5 blur-[120px] rounded-full pointer-events-none" />

        {/* SECTION HEADER */}
        <div className="relative mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-0.5 w-12 bg-lw-greensaffron" />
            <span className="text-xs font-black uppercase tracking-[0.5em] text-lw-greensaffron">
              Digital Masterpieces
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl lg:text-8xl font-black text-zinc-950 dark:text-white tracking-tighter leading-[0.9]"
            >
              The AI <br />
              <span className="text-lw-green italic">Showcase.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-xl font-medium"
            >
              From complex data extraction to autonomous perception, witness how we materialize high-fidelity AI solutions for the world's leading innovators.
            </motion.p>
          </div>
        </div>

        {/* MAIN PROJECTS GRID */}
        <div className="flex flex-col gap-10">
          {/* Top Masonry Section */}
          <div className="columns-1 md:columns-2 lg:columns-2 gap-10 space-y-10">
            {projects.slice(0, projects.length - 1).map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isLast={false}
                onClick={setSelectedProject}
              />
            ))}
          </div>

          {/* Full-width Last Landscape Banner */}
          <div className="w-full h-auto">
            <ProjectCard
              key={projects[projects.length - 1].id}
              project={projects[projects.length - 1]}
              index={projects.length - 1}
              isLast={true}
              onClick={setSelectedProject}
            />
          </div>
        </div>

        {/* MODAL / DETAIL VIEW */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12 bg-zinc-950/98 backdrop-blur-3xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 60, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 60, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-[4.5rem] shadow-2xl custom-scrollbar border border-white/[0.08]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-12 right-12 z-20 h-16 w-16 flex items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white hover:bg-lw-green hover:text-white transition-all shadow-2xl hover:scale-110 active:scale-95"
                >
                  <X size={28} strokeWidth={3} />
                </button>

                <div className="grid lg:grid-cols-2">
                  {/* Left: Cinematic Visual */}
                  <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[600px] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

                    <div className="absolute bottom-16 left-16 flex gap-6">
                      <div className="px-10 py-5 rounded-[2rem] bg-black/40 backdrop-blur-3xl border border-white/20 text-white flex flex-col items-center shadow-2xl">
                        <Cpu className="mb-3 text-lw-green" size={28} />
                        <span className="text-[0.7rem] font-black uppercase tracking-[0.2em]">Ready for Scale</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content Section */}
                  <div className="p-12 lg:p-24 flex flex-col">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-wrap items-center gap-6 mb-12"
                    >
                      <div className="h-16 w-16 flex items-center justify-center rounded-[1.5rem] bg-lw-green text-white shadow-xl shadow-emerald-500/20">
                        <selectedProject.icon size={32} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black uppercase tracking-[0.4em] text-lw-greensaffron">{selectedProject.industry}</span>
                        <span className="text-[0.7rem] font-bold text-zinc-400 uppercase tracking-widest mt-1">Domain Expertise</span>
                      </div>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-5xl lg:text-7xl font-black text-zinc-950 dark:text-white mb-12 leading-[0.9] tracking-tighter"
                    >
                      {selectedProject.title}
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-4 mb-16"
                    >
                      {[selectedProject.type, selectedProject.technology].map((tag) => (
                        <div key={tag} className="px-6 py-2.5 rounded-2xl bg-zinc-50 dark:bg-black/20 border border-zinc-100 dark:border-white/10 flex items-center gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-lw-green" />
                          <span className="text-xs font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">{tag}</span>
                        </div>
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-20 font-medium"
                    >
                      {selectedProject.fullDescription}
                    </motion.p>

                    {/* Stats Highlights */}
                    <div className="grid grid-cols-3 gap-10 mb-20 p-16 rounded-[4rem] bg-zinc-50 dark:bg-black/40 border border-zinc-100 dark:border-white/5 shadow-inner">
                      {selectedProject.stats.map((stat, idx) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                        >
                          <div className="text-5xl font-black text-zinc-950 dark:text-white tracking-tighter">{stat.value}</div>
                          <div className="text-[0.7rem] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em] mt-4">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Industrial Insights */}
                    <div className="space-y-16">
                      {[
                        { icon: Layers, title: "The Complexity", text: selectedProject.challenge },
                        { icon: Sparkles, title: "Precision Solution", text: selectedProject.solution },
                        { icon: TrendingUp, title: "Global Impact", text: selectedProject.outcome }
                      ].map((block, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + idx * 0.1 }}
                          className="flex gap-10 group/insight"
                        >
                          <div className="h-12 w-12 shrink-0 mt-1 rounded-[1.25rem] bg-white dark:bg-zinc-800 flex items-center justify-center text-lw-green shadow-xl group-hover/insight:bg-lw-green group-hover/insight:text-white transition-all">
                            <block.icon size={22} />
                          </div>
                          <div>
                            <h4 className="font-black text-zinc-950 dark:text-white text-lg mb-4 uppercase tracking-tight">{block.title}</h4>
                            <p className="text-[1.1rem] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{block.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                      className="pt-24 mt-auto"
                    >
                      <button className="group w-full flex items-center justify-between rounded-[2.5rem] bg-zinc-950 dark:bg-white p-3 pl-14 text-white dark:text-zinc-950 text-xl font-black transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.98]">
                        ANALYZE SIMILAR CHALLENGES
                        <div className="h-20 w-20 flex items-center justify-center rounded-[2.2rem] bg-lw-green text-white group-hover:rotate-45 transition-transform duration-500">
                          <ArrowRight size={32} strokeWidth={3} />
                        </div>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}