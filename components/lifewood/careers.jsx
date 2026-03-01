"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Briefcase } from "lucide-react"

export function Careers() {
  const [expandedJob, setExpandedJob] = useState(null)

  const jobs = [
    { title: "Senior AI Solutions Engineer", location: "Global / Remote", team: "Engineering", description: "Lead the technical architecture and implementation of enterprise AI solutions. You will work closely with clients to understand their needs and develop cutting-edge machine learning pipelines. Requirements: 5+ years Python/C++, PyTorch/TensorFlow, and production ML deployment experience." },
    { title: "Data Operations Manager", location: "Kuala Lumpur, Malaysia", team: "Operations", description: "Oversee large-scale data annotation teams to ensure 99.9% accuracy across complex multi-modal datasets. You will be responsible for defining QC workflows and managing team performance. Requirements: Proven experience managing teams of 50+, strong analytical skills, and fluent English." },
    { title: "Machine Learning Researcher", location: "Hong Kong", team: "Research", description: "Drive innovation in our core multi-modal foundation models. Focus primarily on improving zero-shot learning capabilities and reducing inference latency. Requirements: PhD in Computer Science or related field, multiple publications in top-tier ML conferences (NeurIPS, ICML, ICLR)." },
    { title: "Project Lead - Autonomous Driving", location: "Shenzhen, China", team: "Project Management", description: "Spearhead data collection and 3D annotation projects for top-tier automotive clients. You will manage the entire lifecycle from sensor calibration specs to final dataset delivery. Requirements: Experience with LiDAR/Radar data, strong project management fundamentals, and excellent stakeholder communication." }
  ]

  return (
    <section id="careers" className="relative overflow-hidden bg-white pb-32 pt-32 md:pt-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* --- Minimalist Hero Section --- */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-24 md:mb-32 gap-16 md:gap-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/2"
          >
            <h1 className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-bold tracking-[-0.04em] text-zinc-950 leading-[0.9] mb-10">
              Careers in <br /> Lifewood
            </h1>
            
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-2 rounded-full bg-[#fca13f] px-8 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-[#faa956] hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_20px_rgba(252,161,63,0.3)]"
            >
              Join Us
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-[45%] lg:w-[35%] pt-2 md:pt-4"
          >
            <p className="text-[15px] md:text-base text-zinc-800 font-medium leading-[1.8] tracking-tight">
              Innovation, adaptability and the rapid development of new services separates companies that constantly deliver at the highest level from their competitors.
            </p>
          </motion.div>

        </div>

        {/* --- Massive Rounded Image --- */}
        <motion.div
           initial={{ opacity: 0, y: 60 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
           className="relative aspect-[16/9] lg:aspect-[2.35/1] w-full overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-zinc-100 shadow-[0_30px_60px_rgba(0,0,0,0.12)] mb-32"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2400" 
            alt="Lifewood Team Collaboration" 
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* --- Elegant Open Positions List --- */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            className="mb-12 flex flex-col items-center justify-center text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 shadow-sm">
                <Briefcase className="h-4 w-4 text-[#fca13f]" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Global Opportunities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900">
              Open Positions
            </h2>
          </motion.div>

          <div className="flex flex-col gap-5">
            {jobs.map((job, i) => (
              <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className={`group relative flex flex-col p-6 md:p-8 rounded-[2rem] bg-white border transition-all duration-300 ${expandedJob === i ? 'border-zinc-300 shadow-[0_20px_60px_rgba(0,0,0,0.06)]' : 'border-zinc-200 hover:border-zinc-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1'}`}
              >
                {/* Header Row (Clickable) */}
                <button 
                  onClick={() => setExpandedJob(expandedJob === i ? null : i)}
                  className="w-full text-left flex flex-col md:flex-row md:items-center justify-between outline-none"
                >
                  <div className="relative z-10 flex flex-col gap-2">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#fca13f]">
                      {job.team}
                    </div>
                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${expandedJob === i ? 'text-lw-green' : 'text-zinc-900 group-hover:text-lw-green'}`}>
                      {job.title}
                    </h3>
                    <div className="text-sm font-semibold text-zinc-500 mt-1">
                      {job.location}
                    </div>
                  </div>
                  
                  <div className={`relative z-10 mt-6 md:mt-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 shadow-sm ${expandedJob === i ? 'bg-[#fca13f] border-[#fca13f] shadow-[0_8px_20px_rgba(252,161,63,0.4)]' : 'bg-zinc-50 border-zinc-200 group-hover:bg-[#fca13f] group-hover:border-[#fca13f] group-hover:shadow-[0_8px_20px_rgba(252,161,63,0.4)]'}`}>
                    <ArrowRight className={`h-5 w-5 transition-all duration-300 ${expandedJob === i ? 'text-white rotate-90' : 'text-zinc-400 group-hover:text-white group-hover:translate-x-0.5'}`} />
                  </div>
                </button>
                
                {/* Expandable Content Area */}
                <AnimatePresence>
                  {expandedJob === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 mt-6 border-t border-zinc-100 flex flex-col md:flex-row gap-8 md:gap-12 relative z-10">
                        <div className="md:w-2/3">
                          <h4 className="text-sm font-bold text-zinc-900 mb-3 uppercase tracking-wider">Role Overview</h4>
                          <p className="text-zinc-600 leading-relaxed font-medium">
                            {job.description}
                          </p>
                        </div>
                        <div className="md:w-1/3 flex items-start md:justify-end">
                           <Link 
                            href="/contact" 
                            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-xs font-bold text-white transition-all hover:bg-zinc-800 active:scale-[0.98]"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Subtle Hover Gradient */}
                {expandedJob !== i && (
                  <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent to-black/[0.01] transition-opacity pointer-events-none" />
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            className="mt-12 flex justify-center"
          >
             <Link 
              href="/contact" 
              className="text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors underline decoration-zinc-300 hover:decoration-zinc-900 underline-offset-4"
            >
              Don't see a fit? Send us an open application.
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
