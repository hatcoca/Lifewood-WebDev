"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 50, suffix: "M+", label: "Data points processed daily", subLabel: "High-volume pipelines", color: "var(--lw-green)" },
  { value: 30, suffix: "+", label: "Languages supported", subLabel: "Global linguistic reach", color: "var(--lw-saffron)" },
  { value: 98.5, suffix: "%", label: "Quality accuracy rate", subLabel: "Precision benchmark", decimals: 1, color: "var(--lw-green)" },
  { value: 6, suffix: "", label: "Strategic Operations", subLabel: "Global footprint", color: "white" },
]

function AnimatedStat({ stat, index }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const delay = index * 200
    const start = performance.now()

    let animationFrame
    const animate = (now) => {
      const elapsed = now - (start + delay)
      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(animate)
        return
      }
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4) // Quartic out
      setCount(Number((eased * stat.value).toFixed(stat.decimals || 0)))
      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, stat.value, stat.decimals, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col items-center justify-center p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-md"
    >
      {/* Kinetic Radar Pulse */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 m-auto h-32 w-32 rounded-full blur-[60px]"
          style={{ backgroundColor: stat.color }}
        />
      </div>

      <div className="relative z-10 text-center">
        <div
          className="text-5xl lg:text-7xl font-black tracking-tighter tabular-nums mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
        >
          {stat.decimals > 0 ? count.toFixed(stat.decimals) : count}
          <span className="text-lw-green">{stat.suffix}</span>
        </div>

        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white mb-2">
          {stat.label}
        </h4>

        <p className="text-[0.65rem] font-bold text-white/30 uppercase tracking-widest">
          {stat.subLabel}
        </p>
      </div>

      {/* Interactive Bottom Shine */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
    </motion.div>
  )
}

export function Statistics() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-32 lg:py-48">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
      <div className="absolute left-0 top-0 h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
