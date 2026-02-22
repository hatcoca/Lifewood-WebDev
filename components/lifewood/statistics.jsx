"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 50, suffix: "M+", label: "Data points processed daily" },
  { value: 30, suffix: "+", label: "Languages supported" },
  { value: 98.5, suffix: "%", label: "Quality accuracy rate", decimals: 1 },
  { value: 6, suffix: "", label: "Countries with operations" },
]

function AnimatedStat({ value, suffix, decimals = 0 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1200
    const start = performance.now()
    const animate = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Number((eased * value).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, value, decimals])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-extrabold tracking-tight text-white tabular-nums lg:text-5xl">
        {decimals > 0 ? count.toFixed(decimals) : count}
        {suffix}
      </div>
      <div className="mt-2.5 text-[0.82rem] font-medium text-white/50">
        {stats.find(s => s.value === value)?.label}
      </div>
    </div>
  )
}

export function Statistics() {
  return (
    <section className="relative overflow-hidden bg-[var(--lw-green)] py-24">
      {/* Ambient glows */}
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[var(--lw-saffron)]/[0.06] blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
          ))}
        </div>
      </div>
    </section>
  )
}
