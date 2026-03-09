"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Landmark, GraduationCap, HeartHandshake, Network } from "lucide-react"

const partnerTypes = [
  {
    icon: Building2,
    title: "Enterprise Partners",
    text: "Long-term collaboration with global organizations to power production AI with reliable data foundations.",
  },
  {
    icon: Landmark,
    title: "Public Institutions",
    text: "Responsible programs supporting digital transformation, data infrastructure, and sustainable workforce growth.",
  },
  {
    icon: GraduationCap,
    title: "Academic & Research",
    text: "Knowledge-sharing ecosystems that accelerate innovation through domain expertise and applied experimentation.",
  },
  {
    icon: HeartHandshake,
    title: "Community Alliances",
    text: "Inclusive partnerships that create meaningful opportunities and positive outcomes across local communities.",
  },
]

const collaborationFlow = [
  "Alignment on goals, scope, and outcomes",
  "Process engineering and pilot deployment",
  "Scaled execution with quality governance",
  "Continuous optimization and shared innovation",
]

export default function AboutPartnersPage() {
  return (
    <main className="min-h-screen bg-[#f8faf9] pt-28 text-zinc-900 selection:bg-[var(--lw-green)] selection:text-white dark:bg-[#080808] dark:text-white">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[var(--lw-green)]">Our Company / Partners</p>
            <h1 className="text-5xl font-black tracking-tight lg:text-7xl">
              Partnerships that build <span className="text-[var(--lw-green)]">lasting impact</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Lifewood collaborates across sectors to deliver trustworthy AI data solutions while strengthening
              innovation ecosystems in every region we operate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[5/4] overflow-hidden rounded-[2.4rem] shadow-2xl"
          >
            <Image src="/images/african-team-1.png" alt="Lifewood partnership and community impact" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {partnerTypes.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="rounded-[1.8rem] border border-zinc-200/80 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--lw-green)]/15 text-[var(--lw-green)]">
                <item.icon size={20} />
              </div>
              <h2 className="text-2xl font-black tracking-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 pb-24 lg:px-10 lg:pb-28">
        <div className="overflow-hidden rounded-[2.2rem] bg-zinc-900 text-white dark:bg-black/65">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="p-8 lg:p-10">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[var(--lw-green)]">Partnership Blueprint</p>
              <h3 className="text-3xl font-black tracking-tight">How we collaborate from strategy to scale</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Every partnership follows a structured, transparent model designed for quality, speed, and long-term
                outcomes.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black tracking-[0.16em]">
                <Network size={14} className="text-[var(--lw-green)]" />
                MULTI-SECTOR DELIVERY
              </div>
            </div>

            <div className="border-t border-white/10 p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="grid gap-3">
                {collaborationFlow.map((step, idx) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="mt-0.5 text-xs font-black text-[var(--lw-green)]">{String(idx + 1).padStart(2, "0")}</span>
                    <p className="text-sm leading-relaxed text-white/80">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-6 py-3 text-xs font-black tracking-[0.18em] text-white">
            START A PARTNERSHIP <ArrowRight size={14} />
          </Link>
          <Link href="/about/story" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-xs font-black tracking-[0.18em] text-zinc-800 dark:border-white/20 dark:text-white/90">
            BACK TO STORY <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  )
}
