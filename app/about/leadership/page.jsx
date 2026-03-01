"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Brain, Users, Globe2, BarChart3 } from "lucide-react"

const leadershipPillars = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    text: "Every program is governed by accountability, transparency, and durable quality controls.",
  },
  {
    icon: Brain,
    title: "Innovation with Purpose",
    text: "We combine process engineering and human expertise to solve complex AI data challenges.",
  },
  {
    icon: Users,
    title: "People-Centered Execution",
    text: "Global teams are built around inclusion, domain expertise, and long-term capability growth.",
  },
]

const operatingModel = [
  { label: "Global Operations", value: "Follow-the-sun delivery model with multilingual teams" },
  { label: "Quality Governance", value: "Multi-tier review, escalation protocols, and continuous improvement loops" },
  { label: "Client Collaboration", value: "Embedded partnership model for strategic planning and execution" },
  { label: "Risk Management", value: "Security-by-design, workflow controls, and operational resilience" },
]

export default function AboutLeadershipPage() {
  return (
    <main className="min-h-screen bg-white pt-28 text-zinc-900 selection:bg-[var(--lw-green)] selection:text-white dark:bg-[#080808] dark:text-white">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[var(--lw-green)]">Our Company / Leadership</p>
            <h1 className="text-5xl font-black tracking-tight lg:text-7xl">
              Leading with <span className="text-[var(--lw-green)]">clarity and discipline</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Lifewood leadership aligns strategy, process excellence, and human capability to deliver trusted AI data
              outcomes at global scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden rounded-[2.4rem] shadow-2xl"
          >
            <Image src="/hero-ai.jpg" alt="Leadership and innovation at Lifewood" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-3">
          {leadershipPillars.map((pillar, idx) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="rounded-[1.8rem] border border-zinc-200/80 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--lw-green)]/15 text-[var(--lw-green)]">
                <pillar.icon size={20} />
              </div>
              <h2 className="text-2xl font-black tracking-tight">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{pillar.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 pb-24 lg:px-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2.2rem] border border-zinc-200/80 bg-white shadow-sm dark:border-white/10 dark:bg-white/5"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-zinc-200/70 p-8 dark:border-white/10 lg:border-b-0 lg:border-r lg:p-10">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[var(--lw-green)]">Operating Model</p>
              <h3 className="text-3xl font-black tracking-tight">How leadership turns strategy into execution</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Cross-functional leadership teams drive measurable outcomes through process quality, governance, and
                collaborative client delivery.
              </p>

              <div className="mt-7 grid gap-3">
                {[
                  { icon: Globe2, text: "Regional and global alignment" },
                  { icon: BarChart3, text: "Quality and performance visibility" },
                  { icon: Users, text: "Sustainable talent development" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 rounded-xl bg-zinc-100/70 px-4 py-3 text-sm font-semibold dark:bg-white/10">
                    <item.icon size={16} className="text-[var(--lw-green)]" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-0">
              {operatingModel.map((item, idx) => (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="border-b border-zinc-200/70 p-6 last:border-b-0 dark:border-white/10 lg:p-7"
                >
                  <p className="text-[0.72rem] font-black uppercase tracking-[0.26em] text-[var(--lw-green)]">{item.label}</p>
                  <p className="mt-2 text-[0.96rem] leading-relaxed text-zinc-700 dark:text-zinc-300">{item.value}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/about/partners" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-xs font-black tracking-[0.18em] text-white dark:bg-white dark:text-zinc-900">
            VIEW PARTNERSHIPS <ArrowRight size={14} />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-xs font-black tracking-[0.18em] text-zinc-800 dark:border-white/20 dark:text-white/90">
            CONTACT TEAM <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  )
}
