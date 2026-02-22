"use client"

import { Globe, Cpu, Handshake, TrendingUp, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const pillars = [
  {
    icon: Globe,
    title: "Global bridge",
    summary: "Connecting ASEAN, China and the world.",
    description:
      "Strategically connecting ASEAN, China, and the rest of the world through data-driven collaboration. Lifewood serves as a super-bridge, leveraging Malaysia's unique geopolitical position to foster partnerships across diverse markets.",
  },
  {
    icon: Cpu,
    title: "AI-powered innovation",
    summary: "Advanced AI, GPT, and Gemini technologies.",
    description:
      "Leveraging advanced AI, GPT, and Gemini technologies to transform data into actionable insights at scale. Our R&D teams continuously push the boundaries of what's possible in automated data processing and machine learning.",
  },
  {
    icon: Handshake,
    title: "Trust and harmony",
    summary: "Building cooperation across borders.",
    description:
      "Building cooperation across borders, cultures, and business practices to foster new ventures. We believe that the best technology emerges from diverse perspectives and mutual respect between all stakeholders.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable growth",
    summary: "ESG principles powering the future.",
    description:
      "Committed to ESG principles, empowering communities while advancing cutting-edge technology. Every decision we make considers its impact on people, the planet, and long-term prosperity.",
  },
]

export function About() {
  const [expandedPillar, setExpandedPillar] = useState(null)
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="about" className="bg-[var(--lw-sea-salt)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
            Who we are
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
            More than a data company
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
            Lifewood processes data, delivers at speed, and produces projects in
            multiple languages for some of the world&apos;s largest organizations.
          </p>
        </div>

        {/* Image + text row -- with "Read More" */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <Image
              src="/about-bridge.jpg"
              alt="Lifewood global headquarters connecting East and West"
              width={640}
              height={440}
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-[var(--lw-dark)]/[0.04]" />
          </div>

          <div>
            <p className="text-[1.05rem] leading-[1.75] text-[var(--lw-dark)]/60">
              At our core, we define and communicate our identity to global teams,
              clients, investors, and stakeholders across the world. Lifewood is a
              bridge between ASEAN and China, and by extension, the rest of the world.
            </p>

            {/* Expandable additional text */}
            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${showMore ? "grid-rows-[1fr] mt-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="overflow-hidden">
                <p className="text-[1.05rem] leading-[1.75] text-[var(--lw-dark)]/60">
                  We are a builder of harmony, trust, and cooperation across borders,
                  cultures, and business practices. With headquarters in Malaysia,
                  Lifewood is ideally situated to support the country&apos;s role as a
                  super-bridge connecting China with other nations, leveraging advanced
                  technologies like AI, GPT, and Gemini to bring diverse people and
                  interests together.
                </p>
                <p className="mt-5 text-[1.05rem] leading-[1.75] text-[var(--lw-dark)]/60">
                  Our commitment to excellence has made us the trusted partner of
                  leading global enterprises across automotive, healthcare, finance,
                  and technology sectors.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-[var(--lw-green)] transition-colors hover:text-[var(--lw-saffron)] active:scale-[0.97]"
            >
              {showMore ? "Show less" : "Read more about us"}
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Pillar cards -- click to expand */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const isOpen = expandedPillar === i
            return (
              <button
                key={pillar.title}
                onClick={() => setExpandedPillar(isOpen ? null : i)}
                className={`group rounded-[1.25rem] p-7 text-left transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen
                    ? "bg-[var(--lw-green)] shadow-[0_16px_48px_rgba(4,98,65,0.2)]"
                    : "bg-[var(--lw-white)] shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(19,48,32,0.07)]"
                  }`}
              >
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[0.75rem] transition-colors duration-300 ${isOpen ? "bg-white/15" : "bg-[var(--lw-green)]/[0.05] group-hover:bg-[var(--lw-green)]/[0.09]"
                    }`}
                >
                  <pillar.icon
                    size={22}
                    className={`transition-colors ${isOpen ? "text-white" : "text-[var(--lw-green)]"}`}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className={`text-[1.05rem] font-semibold transition-colors ${isOpen ? "text-white" : "text-[var(--lw-dark)]"
                    }`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`mt-2 text-[0.84rem] leading-relaxed transition-colors ${isOpen ? "text-white/70" : "text-[var(--lw-dark)]/45"
                    }`}
                >
                  {isOpen ? pillar.description : pillar.summary}
                </p>
              </button>
            )
          })}
        </div>

        {/* Vision & Mission */}
        <div className="mt-20 grid items-stretch gap-5 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-[var(--lw-green)] p-9 lg:p-12">
            <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-[var(--lw-saffron)]/[0.06] blur-3xl" />
            <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">Our vision</span>
            <p className="relative mt-5 text-xl font-medium leading-[1.6] text-white/90 lg:text-[1.35rem]">
              To be the global champion in AI data solutions, igniting a culture
              of innovation and sustainability that enriches lives and transforms
              communities worldwide.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--lw-green)]/[0.06] bg-[var(--lw-white)] p-9 lg:p-12">
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[var(--lw-green)]/[0.03] blur-3xl" />
            <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">Our mission</span>
            <p className="relative mt-5 text-xl font-medium leading-[1.6] text-[var(--lw-dark)]/65 lg:text-[1.35rem]">
              To develop and deploy cutting-edge AI technologies that solve
              real-world problems, empower communities, and advance sustainable
              practices across sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
