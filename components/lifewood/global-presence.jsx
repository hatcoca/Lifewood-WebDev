"use client"

import { MapPin, ChevronDown } from "lucide-react"
import { useState } from "react"

const regions = [
  {
    name: "Malaysia",
    role: "Global headquarters",
    summary: "Super-bridge connecting China with ASEAN nations.",
    description:
      "Strategically positioned as the super-bridge between China and ASEAN nations, our HQ drives innovation across the region. Kuala Lumpur's vibrant tech ecosystem and multicultural workforce make it the ideal base for our global operations.",
    highlight: true,
  },
  {
    name: "Singapore",
    role: "Regional hub",
    summary: "Financial and strategic hub for Southeast Asia.",
    description:
      "Our financial and strategic hub for Southeast Asian operations, connecting enterprise clients across the region. Singapore's world-class infrastructure and regulatory framework support our most demanding client engagements.",
  },
  {
    name: "China",
    role: "Technology center",
    summary: "Deep AI partnerships and vast talent pool.",
    description:
      "Deep technology partnerships and data operations leveraging China's AI ecosystem and vast talent pool. Our Chinese operations focus on cutting-edge research partnerships and large-scale data processing for domestic and international clients.",
  },
  {
    name: "Bangladesh",
    role: "Operations center",
    summary: "Inclusive employment with 60%+ women workforce.",
    description:
      "Home to our Pottya team, leading inclusive employment with a focus on women and differently-abled workers. Bangladesh operations handle high-volume annotation projects with exceptional quality and competitive efficiency.",
  },
  {
    name: "Southeast Asia",
    role: "Growth markets",
    summary: "Expanding across Philippines, Thailand, Vietnam.",
    description:
      "Expanding across the Philippines, Thailand, Vietnam, and Indonesia as AI adoption accelerates. Each market offers unique linguistic and cultural expertise that enriches our multilingual data services portfolio.",
  },
  {
    name: "Global",
    role: "Worldwide delivery",
    summary: "24/7 multilingual data services worldwide.",
    description:
      "Serving clients across North America, Europe, and the Middle East with 24/7 multilingual data services. Our follow-the-sun model ensures continuous delivery with zero downtime across all time zones.",
  },
]

export function GlobalPresence() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="global" className="bg-[var(--lw-white)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
            Worldwide reach
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
            Offices across the East and West
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
            Click any region to explore our presence and capabilities.
          </p>
        </div>

        {/* Region cards -- click to expand */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => {
            const isOpen = expanded === region.name
            return (
              <button
                key={region.name}
                onClick={() => setExpanded(isOpen ? null : region.name)}
                className={`group relative overflow-hidden rounded-[1.25rem] p-7 text-left transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen
                    ? "bg-[var(--lw-green)] shadow-[0_16px_48px_rgba(4,98,65,0.2)]"
                    : region.highlight
                      ? "bg-[var(--lw-green)] shadow-[0_8px_24px_rgba(4,98,65,0.12)] hover:shadow-[0_12px_40px_rgba(4,98,65,0.18)]"
                      : "border border-[var(--lw-dark)]/[0.03] bg-[var(--lw-sea-salt)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(19,48,32,0.06)]"
                  }`}
              >
                {/* Ambient decoration */}
                {(region.highlight || isOpen) && (
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--lw-saffron)]/[0.1] blur-2xl" />
                )}

                <div className="relative flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-[var(--lw-saffron)]" strokeWidth={2} />
                    <span
                      className={`text-[0.68rem] font-semibold uppercase tracking-[0.15em] ${region.highlight || isOpen ? "text-white/50" : "text-[var(--lw-dark)]/35"
                        }`}
                    >
                      {region.role}
                    </span>
                  </div>
                  <ChevronDown
                    size={14}
                    className={`transition-all duration-300 ${isOpen ? "rotate-180" : ""
                      } ${region.highlight || isOpen ? "text-white/30" : "text-[var(--lw-dark)]/20"}`}
                  />
                </div>

                <h3
                  className={`relative text-xl font-bold ${region.highlight || isOpen ? "text-white" : "text-[var(--lw-dark)]"
                    }`}
                >
                  {region.name}
                </h3>

                <p
                  className={`relative mt-2.5 text-[0.88rem] leading-relaxed transition-all duration-300 ${region.highlight || isOpen ? "text-white/65" : "text-[var(--lw-dark)]/45"
                    }`}
                >
                  {isOpen ? region.description : region.summary}
                </p>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
