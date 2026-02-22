"use client"

import { ArrowRight, Play, Activity, CheckCircle2, Globe2, Sparkles, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"

const GhostCursor = dynamic(() => import('./GhostCursor'), { ssr: false })

const heroWords = ["AI data solutions", "smart innovation", "global transformation"]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % heroWords.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAFAFA] selection:bg-[var(--lw-green)] selection:text-white dark:bg-[#0A0A0A]">
      {/* --- Premium Animated Background --- */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep immersive background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[var(--lw-green)]/10 via-transparent to-transparent opacity-80 dark:from-[var(--lw-green)]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent opacity-80 dark:from-indigo-500/10" />

        {/* Soft, floating orbs for depth */}
        <motion.div
          animate={{
            transform: ["translate(0px, 0px) scale(1)", "translate(50px, -30px) scale(1.05)", "translate(0px, 0px) scale(1)"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] -left-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[var(--lw-green)]/15 to-emerald-400/10 blur-[100px] dark:from-[var(--lw-green)]/30 dark:to-emerald-500/15"
        />
        <motion.div
          animate={{
            transform: ["translate(0px, 0px) scale(1)", "translate(-40px, 50px) scale(1.1)", "translate(0px, 0px) scale(1)"],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] -right-[15%] h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-[var(--lw-saffron)]/15 to-orange-400/5 blur-[100px] dark:from-[var(--lw-saffron)]/20 dark:to-orange-500/5"
        />

        {/* Interactive GhostCursor Layer */}
        <div className="absolute inset-0 z-0">
          <GhostCursor
            color="var(--lw-green)" // using the primary brand color
            brightness={1.5}
            edgeIntensity={0.2}
            trailLength={40}
            inertia={0.65}
            grainIntensity={0.03}
            bloomStrength={0.5}
            bloomRadius={1.2}
            bloomThreshold={0.02}
            fadeDelayMs={1500}
            fadeDurationMs={2000}
            mixBlendMode="color-dodge"
          />
        </div>

        {/* Noise overlay for texture */}
        <div className="absolute inset-0 z-1 pointer-events-none opacity-[0.02] dark:opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex max-w-2xl flex-col z-10"
          >
            {/* High-end Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex self-start items-center gap-2.5 rounded-full border border-black/5 bg-white/60 px-3.5 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_2px_10px_rgba(255,255,255,0.02)]"
            >
              <div className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lw-saffron)] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--lw-saffron)]" />
              </div>
              <span className="text-[0.75rem] font-medium tracking-wide text-zinc-600 dark:text-zinc-300 flex items-center gap-1.5">
                Always on, never off <ChevronRight className="h-3 w-3 opacity-50" />
              </span>
            </motion.div>

            {/* Main Headline - SaaS / iOS typography */}
            <h1 className="text-balance text-[3.25rem] font-extrabold leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl lg:text-[4.25rem] dark:text-white">
              The global champion in <br className="hidden sm:block" />
              <span className="relative inline-flex flex-col h-[1.1em] overflow-hidden min-w-[320px] align-bottom">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 35, mass: 0.8 }}
                    className="absolute left-0 top-0 inline-block bg-gradient-to-br from-[var(--lw-green)] to-[#209c73] bg-clip-text text-transparent pb-2"
                  >
                    {heroWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible">{heroWords[0]}</span>
              </span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg text-[1.15rem] leading-[1.6] text-zinc-500 font-medium dark:text-zinc-400"
            >
              Empowering global enterprises to realize the transformative power of AI. We bring big data to life, igniting new ways of thinking and doing for the betterment of humankind.
            </motion.p>

            {/* CTA Buttons - Premium interactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#services"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-zinc-900 px-8 py-4 text-[0.95rem] font-medium text-white transition-all hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] active:scale-[0.98] dark:bg-white dark:text-zinc-900 dark:hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                <span className="relative">Explore services</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#story"
                className="group inline-flex items-center gap-3 rounded-full border border-zinc-200/80 bg-white/40 px-6 py-3.5 text-[0.95rem] font-medium text-zinc-700 backdrop-blur-md transition-all hover:bg-white/80 hover:shadow-sm active:scale-[0.98] dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform group-hover:scale-110 dark:bg-zinc-800 dark:shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  <Play className="h-3.5 w-3.5 fill-zinc-900 text-zinc-900 ml-0.5 dark:fill-white dark:text-white" />
                </div>
                Watch our story
              </a>
            </motion.div>

            {/* Stats Row - Clean layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 flex flex-wrap gap-x-12 gap-y-8"
            >
              {[
                { label: "Data points daily", value: "50M+", icon: Activity },
                { label: "Languages supported", value: "30+", icon: Globe2 },
                { label: "Accuracy rate", value: "98.5%", icon: CheckCircle2 },
              ].map((stat, i) => (
                <div key={stat.label} className="group flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--lw-green)]/10 text-[var(--lw-green)] transition-colors group-hover:bg-[var(--lw-green)] group-hover:text-white dark:bg-[var(--lw-green)]/20 dark:group-hover:bg-[var(--lw-green)]">
                      <stat.icon className="h-4 w-4" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{stat.value}</span>
                  </div>
                  <span className="text-[0.8rem] font-medium text-zinc-500 tracking-wide dark:text-zinc-400">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: High-End Interactive Glass Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.2, 1] }}
            className="relative hidden w-full lg:block z-20 pointer-events-none"
          >
            {/* Outer glow aura */}
            <div className="absolute inset-0 top-10 rounded-[3rem] bg-gradient-to-br from-[var(--lw-green)]/20 to-transparent blur-[80px]" />

            <div className="relative w-full max-w-[500px] ml-auto pointer-events-auto" style={{ perspective: "1200px" }}>
              <motion.div
                whileHover={{ rotateX: 2, rotateY: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/40 p-1 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] backdrop-blur-[40px] dark:border-white/10 dark:bg-zinc-900/40 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Inner Bezel to look like a hardware device / premium widget */}
                <div className="relative rounded-[2.3rem] border border-white/60 bg-white/50 p-7 shadow-inner dark:border-white/5 dark:bg-black/20">

                  {/* Top Bar */}
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-zinc-800">
                        <Sparkles className="h-5 w-5 text-[var(--lw-green)]" />
                      </div>
                      <div>
                        <div className="text-[0.7rem] font-semibold tracking-wider text-zinc-500 uppercase">System Status</div>
                        <div className="text-sm font-bold text-zinc-900 dark:text-white">Lifewood Core</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 dark:bg-emerald-500/10">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      <span className="text-[0.7rem] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Live</span>
                    </div>
                  </div>

                  {/* Glass cards layout */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="rounded-2xl border border-white/50 bg-white/40 p-4 shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-white/5">
                      <div className="text-[0.7rem] font-medium text-zinc-500 mb-1">Processing Rate</div>
                      <div className="text-xl font-bold text-zinc-900 dark:text-white">2.4M</div>
                      <div className="text-[0.65rem] text-[var(--lw-green)] font-semibold mt-1 flex items-center gap-1">
                        <ArrowRight className="h-3 w-3 -rotate-45" /> +12.5%
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/50 bg-white/40 p-4 shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-white/5">
                      <div className="text-[0.7rem] font-medium text-zinc-500 mb-1">Active Nodes</div>
                      <div className="text-xl font-bold text-zinc-900 dark:text-white">1,024</div>
                      <div className="text-[0.65rem] text-[var(--lw-saffron)] font-semibold mt-1 flex items-center gap-1">
                        Global sync
                      </div>
                    </div>
                  </div>

                  {/* Activity Graph */}
                  <div className="rounded-2xl border border-white/50 bg-white/40 p-5 shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-white/5">
                    <div className="text-[0.7rem] font-medium text-zinc-500 mb-4 flex justify-between">
                      <span>Network Traffic</span>
                      <span className="text-zinc-400">Past 24h</span>
                    </div>
                    <div className="flex h-[100px] items-end justify-between gap-2.5">
                      {[35, 55, 45, 75, 100, 65, 80, 50, 90].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{
                            delay: 1.5 + i * 0.05,
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                          }}
                          className="w-full rounded-full bg-[var(--lw-green)]"
                          style={{
                            opacity: 0.15 + (i * 0.08),
                          }}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}