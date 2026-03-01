"use client"

import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState, useCallback, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote: "Lifewood's data annotation quality has been exceptional. Their multilingual team understands the nuances of our markets, and the turnaround time is consistently impressive.",
    name: "Sarah Chen",
    role: "VP of AI Products",
    company: "Global tech enterprise",
    avatar: "SC"
  },
  {
    quote: "Working with Lifewood transformed our ML pipeline. Their commitment to quality assurance and their unique positioning between East and West markets gives them an edge no one else has.",
    name: "Ahmad Rahman",
    role: "Chief Data Officer",
    company: "Southeast Asian fintech",
    avatar: "AR"
  },
  {
    quote: "The scale at which Lifewood operates while maintaining 98%+ accuracy is remarkable. They are a true strategic partner in our AI development journey.",
    name: "Liu Wei",
    role: "Director of Engineering",
    company: "Chinese AI startup",
    avatar: "LW"
  },
]

function TestimonialCard({ t, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        y: {
          duration: 5 + index,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="group relative flex flex-col rounded-[3rem] bg-white dark:bg-zinc-900 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] p-12 lg:p-14 border border-zinc-100 dark:border-white/5 hover:border-lw-green/30 transition-all duration-1000"
    >
      <div className="flex items-center gap-1 mb-10">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-lw-green text-lw-green" />
        ))}
      </div>

      <motion.div
        whileHover={{ rotate: 15, scale: 1.1 }}
        className="mb-10 text-lw-green/20"
      >
        <Quote size={48} strokeWidth={2.5} />
      </motion.div>

      <blockquote className="flex-1 text-xl lg:text-[1.35rem] leading-[1.6] text-zinc-600 dark:text-zinc-300 font-medium tracking-tight mb-14">
        {`"${t.quote}"`}
      </blockquote>

      <div className="mt-auto pt-10 border-t border-zinc-100 dark:border-white/10">
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lw-green text-white shadow-xl shadow-emerald-500/20 font-black text-xl">
            {t.avatar}
          </div>
          <div>
            <div className="text-lg font-black text-zinc-950 dark:text-white leading-tight">
              {t.name}
            </div>
            <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mt-1">
              {t.role}, {t.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive((a) => (a + 1) % testimonials.length), [])
  const prev = useCallback(() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="testimonials" className="relative bg-[#FAFAFA] dark:bg-[#060606] py-32 lg:py-48 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lw-green/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-0.5 w-12 bg-lw-green" />
            <span className="text-xs font-black uppercase tracking-[0.5em] text-lw-green">
              Partner Voices
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-8xl font-black text-zinc-950 dark:text-white tracking-tighter leading-[0.9]"
          >
            Trusted by the <br />
            <span className="text-lw-green italic">Innovators.</span>
          </motion.h2>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* Mobile/Tablet: Premium Slider */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <TestimonialCard t={testimonials[active]} index={0} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-14 flex items-center justify-between">
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${i === active ? "w-12 bg-lw-green" : "w-2.5 bg-zinc-200 dark:bg-zinc-800"
                    }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prev}
                className="h-16 w-16 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 shadow-xl hover:bg-lw-green hover:text-white transition-all"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>
              <button
                onClick={next}
                className="h-16 w-16 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 shadow-xl hover:bg-lw-green hover:text-white transition-all"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
