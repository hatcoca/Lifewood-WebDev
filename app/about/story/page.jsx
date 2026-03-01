"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Compass, Goal, Eye } from "lucide-react"
import { aboutContent, coreValues } from "@/lib/data/about"

const journey = [
  {
    year: "2004",
    title: "Foundation in Malaysia",
    text: "Lifewood began with a long-term commitment to responsible data work and human-centered innovation.",
  },
  {
    year: "2012",
    title: "Regional Expansion",
    text: "Operations scaled across ASEAN with multilingual delivery capabilities and stronger process engineering.",
  },
  {
    year: "2020",
    title: "AI Data Acceleration",
    text: "Teams expanded into advanced annotation, training data strategy, and enterprise-grade QA systems.",
  },
  {
    year: "Today",
    title: "Global Bridge",
    text: "Lifewood connects East and West through high-fidelity AI data solutions and sustainable execution.",
  },
]

export default function AboutStoryPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f8] pt-28 text-zinc-900 selection:bg-[var(--lw-green)] selection:text-white dark:bg-[#080808] dark:text-white">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-end lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[var(--lw-green)]">Our Company / About Us</p>
          <h1 className="text-5xl font-black tracking-tight lg:text-7xl">
            More than a <span className="text-[var(--lw-green)]">data company</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Lifewood builds trusted bridges between people, data, and AI systems. Our story is rooted in precision,
            cultural understanding, and long-term impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] shadow-2xl"
        >
          <Image src="/about-bridge.jpg" alt="Lifewood bridge narrative" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
        </motion.div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-10">
        {[aboutContent.mission, aboutContent.vision].map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="rounded-[2rem] border border-zinc-200/70 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--lw-green)]/15 text-[var(--lw-green)]">
              {item.title === "Our Mission" ? <Goal size={22} /> : <Eye size={22} />}
            </div>
            <h2 className="text-3xl font-black tracking-tight">{item.title}</h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
          </motion.article>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center gap-3"
        >
          <Compass size={16} className="text-[var(--lw-green)]" />
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[var(--lw-green)]">D C I I Values</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, idx) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-[1.8rem] border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--lw-green)]/15 text-[var(--lw-green)]">
                <value.icon size={20} />
              </div>
              <h3 className="text-xl font-black tracking-tight">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{value.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 pb-24 lg:px-10 lg:pb-28">
        <div className="rounded-[2.2rem] bg-zinc-900 p-8 text-white dark:bg-black/60 lg:p-12">
          <p className="mb-8 text-xs font-black uppercase tracking-[0.32em] text-[var(--lw-green)]">Journey</p>
          <div className="grid gap-6 md:grid-cols-2">
            {journey.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--lw-green)]">{item.year}</p>
                <h4 className="mt-2 text-xl font-black">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/about/leadership" className="inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-6 py-3 text-xs font-black tracking-[0.18em]">
              EXPLORE LEADERSHIP <ArrowRight size={14} />
            </Link>
            <Link href="/about/partners" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-black tracking-[0.18em] text-white/90">
              SEE PARTNERSHIPS <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
