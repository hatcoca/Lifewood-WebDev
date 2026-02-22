"use client"

import { Leaf, Users, Heart, BarChart3, ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const esgData = [
  {
    icon: Users,
    stat: 60,
    suffix: "%+",
    label: "Women in workforce",
    summary: "Leading female employment in underrepresented regions.",
    description:
      "Our Pottya team in Bangladesh leads the way with high female employment in traditionally underrepresented regions. We actively recruit, train, and promote women into leadership roles across all offices, building a workforce that reflects the communities we serve.",
  },
  {
    icon: Heart,
    stat: 15,
    suffix: "%+",
    label: "People with disabilities",
    summary: "Meaningful opportunities for differently-abled individuals.",
    description:
      "Creating meaningful opportunities for differently-abled individuals across our global operations. We provide adaptive workstations, flexible schedules, and comprehensive support systems that enable every team member to thrive and contribute their unique talents.",
  },
  {
    icon: Leaf,
    stat: 0,
    suffix: "",
    label: "Carbon neutral by 2030",
    customDisplay: "2030",
    summary: "Committed to sustainable operations.",
    description:
      "Committed to sustainable operations and reducing our environmental footprint year over year. Our roadmap includes transitioning to 100% renewable energy, optimizing server efficiency, and partnering with carbon offset programs across Southeast Asia.",
  },
  {
    icon: BarChart3,
    stat: 10,
    suffix: "+",
    label: "Community programs",
    summary: "Investing in education and digital literacy.",
    description:
      "Investing in education, digital literacy, and skill development across Southeast Asia. From coding bootcamps in rural Bangladesh to AI workshops in Malaysian universities, we're building the next generation of tech talent in underserved communities.",
  },
]

function CountUp({ end, suffix, customDisplay }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

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

export function ESG() {
  const [expanded, setExpanded] = useState(null)
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="esg" className="bg-[var(--lw-paper)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: text + image */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
              ESG commitment
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              Technology that empowers people and the planet
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              At Lifewood, ESG is not a checkbox but a core principle woven into
              every aspect of our operations.
            </p>

            {/* Expandable paragraph */}
            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${showMore ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="overflow-hidden">
                <p className="text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
                  From inclusive hiring practices in Bangladesh to sustainable
                  technology deployment across Asia, we lead with purpose. Our ESG
                  framework guides every strategic decision, ensuring that growth
                  never comes at the expense of communities or the environment.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-3 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-[var(--lw-green)] transition-colors hover:text-[var(--lw-saffron)] active:scale-[0.97]"
            >
              {showMore ? "Show less" : "Read more"}
              <ChevronDown size={14} className={`transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} />
            </button>

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
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-6 py-3 text-[0.88rem] font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(4,98,65,0.2)] active:scale-[0.97]"
              >
                Learn about our impact
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right: Click-to-expand stat cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {esgData.map((item, i) => {
              const isOpen = expanded === i
              return (
                <button
                  key={item.label}
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className={`group rounded-[1.25rem] p-7 text-left transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen
                    ? "bg-[var(--lw-green)] shadow-[0_16px_48px_rgba(4,98,65,0.2)] sm:col-span-2"
                    : "bg-[var(--lw-white)] shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(19,48,32,0.07)]"
                    }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${isOpen ? "bg-white/15" : "bg-[var(--lw-green)]/[0.05] group-hover:bg-[var(--lw-green)]/[0.09]"
                        }`}
                    >
                      <item.icon size={20} className={isOpen ? "text-white" : "text-[var(--lw-green)]"} strokeWidth={1.5} />
                    </div>
                    <ChevronDown
                      size={16}
                      className={`mt-1 transition-all duration-300 ${isOpen ? "rotate-180 text-white/40" : "text-[var(--lw-dark)]/20"
                        }`}
                    />
                  </div>
                  <div className={`text-[1.75rem] font-bold leading-tight ${isOpen ? "text-white" : "text-[var(--lw-green)]"}`}>
                    <CountUp end={item.stat} suffix={item.suffix} customDisplay={item.customDisplay} />
                  </div>
                  <div className={`mt-1.5 text-[0.84rem] font-semibold ${isOpen ? "text-white" : "text-[var(--lw-dark)]"}`}>
                    {item.label}
                  </div>
                  <p className={`mt-2 text-[0.82rem] leading-relaxed ${isOpen ? "text-white/70" : "text-[var(--lw-dark)]/45"}`}>
                    {isOpen ? item.description : item.summary}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
