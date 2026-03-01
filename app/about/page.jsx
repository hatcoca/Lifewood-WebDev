"use client"

import { Navbar } from "@/components/lifewood/navbar"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { aboutContent, coreValues } from "@/lib/data/about"
import { Globe, Heart, Cpu, Shield, Goal, Eye, Sparkles, ArrowDown, MoveRight } from "lucide-react"

export default function AboutPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const yHeader = useTransform(scrollYProgress, [0, 0.2], [0, -50])
  const opacityHeader = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <main ref={containerRef} className="bg-white dark:bg-[#080808] min-h-screen selection:bg-[var(--lw-green)] selection:text-white relative overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION: THE GLOBAL BRIDGE --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-bridge.jpg"
            alt="Lifewood Global Bridge"
            fill
            className="object-cover opacity-60 dark:opacity-40 grayscale-[0.2] contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white dark:from-black/20 dark:via-[#080808] to-[#080808]" />
        </div>

        <motion.div
          style={{ y: yHeader, opacity: opacityHeader }}
          className="relative z-10 mx-auto max-w-7xl px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 text-zinc-900 dark:text-white mb-10 shadow-xl"
          >
            <Globe size={16} className="text-[var(--lw-green)]" />
            <span className="text-[0.65rem] font-black uppercase tracking-[0.4em]">Establishing Ground Truth</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-black text-zinc-900 dark:text-white tracking-tighter leading-[0.85] mb-12"
          >
            Building the <br />
            <span className="text-[var(--lw-green)] text-glow-green">Super Bridge</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Lifewood is a bridge between ASEAN and China, and by extension, the rest of the world. A builder of harmony, trust, and cooperation.
          </motion.p>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[0.6rem] font-black uppercase tracking-widest text-zinc-400">Scroll Exploration</span>
          <ArrowDown size={16} className="text-zinc-400" />
        </motion.div>
      </section>

      {/* --- MISSION & VISION: OUR DRIVE --- */}
      <section className="py-32 lg:py-60 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8 flex items-center gap-3"
              >
                <div className="h-0.5 w-10 bg-[var(--lw-green)]" />
                <span className="text-xs font-black uppercase tracking-[0.5em] text-[var(--lw-green)]">PURPOSE</span>
              </motion.div>

              <h2 className="text-5xl lg:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter leading-tight mb-8">
                {aboutContent.intro.subtitle}
              </h2>

              <p className="text-2xl leading-relaxed text-zinc-500 dark:text-zinc-400 font-medium mb-12">
                {aboutContent.intro.description}
              </p>
            </div>

            <div className="lg:col-span-6 grid gap-8">
              {[aboutContent.mission, aboutContent.vision].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-10 lg:p-14 rounded-[3.5rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-white/5 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <item.icon size={80} strokeWidth={1} />
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-[var(--lw-green)] shadow-xl mb-8">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">{item.title}</h3>
                  <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES: THE DCI-I FRAMEWORK --- */}
      <section className="py-24 lg:py-48 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--lw-green)_0%,transparent_70%)] opacity-10" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-32">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-black uppercase tracking-[0.6em] text-[var(--lw-green)] mb-6 block"
            >
              OUR DNA
            </motion.span>
            <h2 className="text-6xl lg:text-[10rem] font-black tracking-tighter leading-none mb-12">
              Core <span className="text-[var(--lw-green)]">Values</span>
            </h2>
            <p className="text-2xl text-white/50 font-medium max-w-3xl mx-auto">
              Committed to business beliefs that shape our corporate and individual behaviour around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group h-full flex flex-col"
              >
                <div className="text-[8rem] font-black text-white/5 absolute -top-10 -left-4 group-hover:text-[var(--lw-green)]/10 transition-colors leading-none">
                  {val.char}
                </div>
                <div className="h-16 w-16 rounded-[1.5rem] bg-[var(--lw-green)]/20 text-[var(--lw-green)] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <val.icon size={32} />
                </div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">{val.title}</h4>
                <p className="text-white/40 font-medium leading-relaxed flex-grow">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GLOBAL PRESENCE & BRIDGE NARRATIVE --- */}
      <section className="py-32 lg:py-60 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-[5rem] p-12 lg:p-24 overflow-hidden relative border border-zinc-100 dark:border-white/5">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h3 className="text-4xl lg:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter leading-tight mb-10">
                  A Builder of Harmony <br /> Across <span className="text-[var(--lw-green)]">Borders</span>
                </h3>
                <div className="space-y-8">
                  <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                    With headquarters in Malaysia, Lifewood is ideally situated to support the country's role as a super-bridge connecting China with other nations.
                  </p>
                  <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                    We celebrate differences in belief, philosophy, and ways of life, because they bring unique perspectives that encourage everyone to move forward.
                  </p>
                </div>
                <div className="mt-16 flex flex-wrap gap-8">
                  {[
                    { label: "Founded", value: "2004" },
                    { label: "Languages", value: "100+" },
                    { label: "Workforce", value: "Global" }
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter">{stat.value}</div>
                      <div className="text-[0.6rem] font-black uppercase tracking-widest text-zinc-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/hero-ai.jpg"
                  alt="Global Network"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--lw-green)]/20 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10 flex items-center gap-3">
            <div className="h-0.5 w-10 bg-[var(--lw-green)]" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[var(--lw-green)]">Our Company Sections</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "About Us",
                desc: "Our story, mission, vision and values.",
                href: "/about/story",
              },
              {
                title: "Leadership",
                desc: "How Lifewood teams lead execution at scale.",
                href: "/about/leadership",
              },
              {
                title: "Partners",
                desc: "Strategic collaboration across industries and regions.",
                href: "/about/partners",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[2rem] border border-zinc-200 bg-white p-8 transition-all hover:border-[var(--lw-green)]/30 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[var(--lw-green)]">
                  Open Page
                  <MoveRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 lg:pb-60 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-24 w-24 rounded-[2.5rem] bg-[var(--lw-green)] flex items-center justify-center mx-auto mb-16 shadow-2xl rotate-3"
          >
            <Sparkles className="text-white" size={36} />
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter mb-12">
            Let's collaborate on the <br /> <span className="text-[var(--lw-green)]">future of AI.</span>
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-16 py-8 rounded-full font-black text-sm tracking-widest shadow-2xl flex items-center gap-6"
            >
              GET IN TOUCH
              <MoveRight size={24} className="text-[var(--lw-green)]" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
