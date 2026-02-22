"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { esgData } from "@/lib/data/esg"

function CountUp({ end, suffix, customDisplay }: { end: number; suffix: string; customDisplay?: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || customDisplay) return
    let current = 0
    const step = Math.max(1, Math.floor(end / 40))
    const interval = setInterval(() => {
      current += step
      if (current >= end) { setCount(end); clearInterval(interval) }
      else setCount(current)
    }, 30)
    return () => clearInterval(interval)
  }, [started, end, customDisplay])

  return (
    <span ref={ref} className="tabular-nums">
      {customDisplay ? customDisplay : `${count}${suffix}`}
    </span>
  )
}

export default function TransformationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Page header */}
      <section className="bg-[var(--lw-white)] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[0.84rem] font-medium text-[var(--lw-dark)]/40 transition-colors hover:text-[var(--lw-green)]"
          >
            <ArrowRight size={14} className="rotate-180" />
            Back to home
          </Link>

          <div className="mt-6 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
              ESG commitment
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              Technology that empowers people and the planet
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              At Lifewood, ESG is not a checkbox but a core principle woven into
              every aspect of our operations. We believe that responsible business
              practices and world-class technology go hand in hand.
            </p>
          </div>
        </div>
      </section>

      {/* Full ESG content */}
      <section className="bg-[var(--lw-paper)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left: text + image */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--lw-dark)] lg:text-3xl">
                Leading with purpose
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
                From inclusive hiring practices in Bangladesh to sustainable
                technology deployment across Asia, we lead with purpose. Our ESG
                framework guides every strategic decision, ensuring that growth
                never comes at the expense of communities or the environment.
              </p>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
                Our commitment extends beyond policy documents. Every team member
                at Lifewood is empowered to contribute to our sustainability goals,
                from energy-efficient practices in our offices to community outreach
                programs in the regions where we operate.
              </p>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
                We actively measure and report on our environmental impact, social
                contributions, and governance standards. Our annual ESG report is
                shared with all stakeholders, ensuring transparency and accountability
                at every level of the organization.
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.25rem]">
                <Image
                  src="/esg-community.jpg"
                  alt="Lifewood diverse team working together in an inclusive office"
                  width={600}
                  height={360}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-6 py-3 text-[0.88rem] font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(4,98,65,0.2)] active:scale-[0.97]"
                >
                  Partner with us
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right: fully expanded stat cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {esgData.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] bg-[var(--lw-green)] p-7 text-left shadow-[0_16px_48px_rgba(4,98,65,0.2)]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                    <item.icon size={20} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-[1.75rem] font-bold leading-tight text-white">
                    <CountUp end={item.stat} suffix={item.suffix} customDisplay={item.customDisplay} />
                  </div>
                  <div className="mt-1.5 text-[0.84rem] font-semibold text-white">
                    {item.label}
                  </div>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="bg-[var(--lw-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
              Our framework
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl">
              The three pillars of our ESG strategy
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[var(--lw-dark)]/[0.04] bg-[var(--lw-sea-salt)] p-8 lg:p-10">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--lw-saffron)]">Environmental</span>
              <h3 className="mt-3 text-xl font-bold text-[var(--lw-dark)]">Sustainable operations</h3>
              <p className="mt-4 text-[0.92rem] leading-[1.75] text-[var(--lw-dark)]/55">
                We are committed to achieving carbon neutrality by 2030. Our roadmap includes
                transitioning to 100% renewable energy across all offices, optimizing server
                efficiency through intelligent workload distribution, and partnering with
                verified carbon offset programs across Southeast Asia. We conduct quarterly
                environmental audits and publish our findings transparently.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--lw-dark)]/[0.04] bg-[var(--lw-sea-salt)] p-8 lg:p-10">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--lw-saffron)]">Social</span>
              <h3 className="mt-3 text-xl font-bold text-[var(--lw-dark)]">People-first approach</h3>
              <p className="mt-4 text-[0.92rem] leading-[1.75] text-[var(--lw-dark)]/55">
                Our workforce reflects the communities we serve. With 60%+ women in our
                Bangladesh operations and 15%+ differently-abled team members globally, we
                actively champion diversity, equity, and inclusion. We invest in education
                through coding bootcamps, AI workshops in universities, and digital literacy
                programs that build the next generation of tech talent in underserved communities.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--lw-dark)]/[0.04] bg-[var(--lw-sea-salt)] p-8 lg:p-10">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--lw-saffron)]">Governance</span>
              <h3 className="mt-3 text-xl font-bold text-[var(--lw-dark)]">Transparent leadership</h3>
              <p className="mt-4 text-[0.92rem] leading-[1.75] text-[var(--lw-dark)]/55">
                Strong governance is the foundation of our ESG commitment. Our board includes
                independent directors with deep expertise in sustainability, technology, and
                community development. We maintain strict data privacy standards, ethical AI
                practices, and comprehensive compliance frameworks that meet international
                standards including ISO 27001 and SOC 2 Type II certification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
