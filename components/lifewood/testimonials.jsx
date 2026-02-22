"use client"

import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useCallback, useEffect } from "react"

const testimonials = [
  {
    quote:
      "Lifewood's data annotation quality has been exceptional. Their multilingual team understands the nuances of our markets, and the turnaround time is consistently impressive.",
    name: "Sarah Chen",
    role: "VP of AI Products",
    company: "Global tech enterprise",
  },
  {
    quote:
      "Working with Lifewood transformed our ML pipeline. Their commitment to quality assurance and their unique positioning between East and West markets gives them an edge no one else has.",
    name: "Ahmad Rahman",
    role: "Chief Data Officer",
    company: "Southeast Asian fintech",
  },
  {
    quote:
      "The scale at which Lifewood operates while maintaining 98%+ accuracy is remarkable. They are a true strategic partner in our AI development journey.",
    name: "Liu Wei",
    role: "Director of Engineering",
    company: "Chinese AI startup",
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  const next = useCallback(
    () => setActive((a) => (a + 1) % testimonials.length),
    []
  )
  const prev = useCallback(
    () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length),
    []
  )

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="bg-[var(--lw-sea-salt)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
            Trusted worldwide
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
            What our partners say
          </h2>
        </div>

        {/* Desktop: Cards grid */}
        <div className="mt-16 hidden gap-5 md:grid md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group flex flex-col rounded-[1.5rem] bg-[var(--lw-white)] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(19,48,32,0.07)]"
            >
              <Quote
                size={28}
                className="mb-5 text-[var(--lw-saffron)]/40"
                strokeWidth={1.5}
              />
              <blockquote className="flex-1 text-[0.92rem] leading-[1.7] text-[var(--lw-dark)]/55">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-7 border-t border-[var(--lw-dark)]/[0.04] pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--lw-green)]/[0.06]">
                    <span className="text-[0.82rem] font-bold text-[var(--lw-green)]">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-[0.88rem] font-semibold text-[var(--lw-dark)]">
                      {t.name}
                    </div>
                    <div className="text-[0.75rem] text-[var(--lw-dark)]/40">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Slider */}
        <div className="mt-16 md:hidden">
          <div className="overflow-hidden rounded-[1.5rem] bg-[var(--lw-white)] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <Quote
              size={28}
              className="mb-5 text-[var(--lw-saffron)]/40"
              strokeWidth={1.5}
            />
            <blockquote className="min-h-[100px] text-[0.92rem] leading-[1.7] text-[var(--lw-dark)]/55 transition-opacity duration-300">
              {`"${testimonials[active].quote}"`}
            </blockquote>
            <div className="mt-7 border-t border-[var(--lw-dark)]/[0.04] pt-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--lw-green)]/[0.06]">
                    <span className="text-[0.82rem] font-bold text-[var(--lw-green)]">
                      {testimonials[active].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-[0.88rem] font-semibold text-[var(--lw-dark)]">
                      {testimonials[active].name}
                    </div>
                    <div className="text-[0.75rem] text-[var(--lw-dark)]/40">
                      {testimonials[active].role}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--lw-dark)]/[0.06] transition-colors hover:bg-[var(--lw-green)]/[0.04]"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={16} className="text-[var(--lw-dark)]/40" />
                  </button>
                  <button
                    onClick={next}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--lw-dark)]/[0.06] transition-colors hover:bg-[var(--lw-green)]/[0.04]"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={16} className="text-[var(--lw-dark)]/40" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-[var(--lw-green)]" : "w-1.5 bg-[var(--lw-dark)]/15"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
