"use client"

import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

const heroWords = ["AI data solutions", "smart innovation", "global transformation"]

export function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => { setLoaded(true) }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setWordIndex((i) => (i + 1) % heroWords.length)
    }, 3000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--lw-white)]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/hero-ai.jpg" alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--lw-white)] via-[var(--lw-white)]/95 to-[var(--lw-white)]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--lw-white)] via-transparent to-[var(--lw-white)]/30" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20 pb-16 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div
            className="max-w-xl"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--lw-green)]/10 bg-[var(--lw-green)]/[0.03] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lw-saffron)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lw-saffron)]" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--lw-green)]">
                Always on, never off
              </span>
            </div>

            <h1 className="text-balance text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-[var(--lw-dark)] sm:text-5xl lg:text-[3.5rem]">
              The global champion in{" "}
              <span className="relative inline-block">
                <span
                  key={wordIndex}
                  className="text-[var(--lw-green)]"
                  style={{
                    display: "inline-block",
                    animation: "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {heroWords[wordIndex]}
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              Igniting a culture of innovation and sustainability that enriches
              lives and transforms communities worldwide.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--lw-green)] px-7 py-3.5 text-[0.88rem] font-semibold text-white shadow-[0_4px_20px_rgba(4,98,65,0.25)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(4,98,65,0.35)] active:scale-[0.97]"
              >
                Explore our services
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--lw-dark)]/10 bg-[var(--lw-white)] px-7 py-3.5 text-[0.88rem] font-semibold text-[var(--lw-dark)] transition-all duration-300 hover:border-[var(--lw-green)]/20 hover:bg-[var(--lw-green)]/[0.03] active:scale-[0.97]"
              >
                <Play size={14} className="text-[var(--lw-saffron)]" />
                Watch our story
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-14 flex items-center gap-8 border-t border-[var(--lw-dark)]/[0.04] pt-8">
              {[
                { value: "50M+", label: "Data points daily" },
                { value: "30+", label: "Languages" },
                { value: "98.5%", label: "Accuracy rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg font-bold text-[var(--lw-green)]">{stat.value}</div>
                  <div className="text-xs text-[var(--lw-dark)]/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating glass card */}
          <div
            className="relative hidden lg:block"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(60px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-[var(--lw-green)]/[0.04] blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--lw-dark)]/[0.04] bg-[var(--lw-white)]/80 p-8 shadow-[0_20px_60px_rgba(19,48,32,0.08)] backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[var(--lw-saffron)]" />
                  <div className="h-3 w-3 rounded-full bg-[var(--lw-green)]/40" />
                  <div className="h-3 w-3 rounded-full bg-[var(--lw-dark)]/10" />
                  <span className="ml-auto text-[0.65rem] font-medium text-[var(--lw-dark)]/25">Lifewood AI Dashboard</span>
                </div>
                <div className="space-y-2.5 mb-8">
                  <div className="h-2 w-4/5 rounded-full bg-[var(--lw-green)]/[0.08]" />
                  <div className="h-2 w-3/5 rounded-full bg-[var(--lw-green)]/[0.08]" />
                  <div className="h-2 w-2/3 rounded-full bg-[var(--lw-green)]/[0.08]" />
                </div>
                <div className="flex items-end gap-3 h-[140px]">
                  {[65, 45, 80, 55, 92, 70, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-lg transition-all duration-700 ease-out"
                      style={{
                        height: loaded ? `${h}%` : "0%",
                        transitionDelay: `${800 + i * 100}ms`,
                        backgroundColor: i === 4 ? "var(--lw-saffron)" : `rgba(4, 98, 65, ${0.15 + i * 0.08})`,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[var(--lw-dark)]/[0.04] pt-5">
                  <div>
                    <div className="text-[0.65rem] font-medium text-[var(--lw-dark)]/30 uppercase tracking-wider">Processing rate</div>
                    <div className="text-lg font-bold text-[var(--lw-green)]">2.4M / hr</div>
                  </div>
                  <div className="rounded-full bg-[var(--lw-saffron)]/15 px-3 py-1">
                    <span className="text-[0.7rem] font-semibold text-[var(--lw-saffron)]">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for word slide animation */}
      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
