"use client"

import { MoveRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"

export function About() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} id="about" className="relative z-10 bg-white dark:bg-[#060606] pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden shadow-[0_-20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">

        {/* TOP SECTION: ABOUT US + PILL BUTTON */}
        <div className="flex flex-col items-center text-center space-y-12 mb-32 lg:mb-48">

          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-xs font-black tracking-[0.4em] text-zinc-400 uppercase"
          >
            <div className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            ABOUT US
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-[1.75rem] md:text-4xl lg:text-[2.75rem] font-medium text-zinc-900 dark:text-zinc-100 tracking-tight leading-[1.3] max-w-5xl"
          >
            At <span className="font-bold">Lifewood</span> we empower our company and our clients to realize the transformative power of AI: bringing big data to life: launching new ways of thinking, learning and doing; for the good of humankind.
          </motion.h2>

          {/* Know Us Better Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link
              href="/about"
              className="group flex items-center rounded-full bg-[#1A362D] p-1.5 pl-8 pr-1.5 transition-all hover:scale-105 hover:bg-[#11241E] active:scale-95 shadow-lg"
            >
              <span className="text-[0.9rem] font-medium text-white tracking-wide pr-6">Know Us Better</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#11241E] text-white transition-transform group-hover:bg-lw-green">
                <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: TWO CIRCLES + SECONDARY TEXT */}
        <div className="flex flex-col items-start max-w-4xl space-y-8">

          {/* Decorative Circles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center -space-x-4"
          >
            <div className="h-8 w-8 rounded-full bg-[#1A362D] border-2 border-white dark:border-[#060606] relative z-10" />
            <div className="h-8 w-8 rounded-full bg-zinc-400 border-2 border-white dark:border-[#060606] relative z-0" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 dark:text-zinc-400 text-[1.05rem] lg:text-[1.15rem] leading-relaxed font-medium"
          >
            By connecting local expertise with our global AI data infrastructure, we create opportunities, empower communities, and drive inclusive growth worldwide.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {/* Contact Action */}
            <Link
              href="/contact"
              className="group flex items-center rounded-full bg-[#F5B553] p-1 pl-6 pr-1 transition-all hover:scale-105 hover:bg-[#F2A42B] active:scale-95 shadow-sm"
            >
              <span className="text-[0.8rem] font-bold text-zinc-900 tracking-wide pr-4">Contact us now</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-zinc-900 transition-transform group-hover:bg-zinc-50">
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>

            {/* Explore Action */}
            <Link
              href="/services"
              className="group flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#060606] p-1 pl-1 pr-6 transition-all hover:scale-105 hover:border-zinc-300 dark:hover:border-zinc-700 active:scale-95 shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white transition-transform group-hover:bg-zinc-200 dark:group-hover:bg-zinc-800 mr-4">
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <span className="text-[0.8rem] font-semibold text-zinc-600 dark:text-zinc-300 tracking-wide">Explore more</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
