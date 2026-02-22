import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { regions } from "@/lib/data/global"

export function GlobalPresence() {
<<<<<<< HEAD:components/lifewood/global-presence.jsx
  const [expanded, setExpanded] = useState(null)

=======
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/global-presence.tsx
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
            Operations spanning Southeast Asia, China, and beyond.
          </p>
        </div>

        {/* Region cards -- summary only */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => {
            const isOpen = expanded === region.name
            return (
              <button
                key={region.name}
                onClick={() => setExpanded(isOpen ? null : region.name)}
<<<<<<< HEAD:components/lifewood/global-presence.jsx
                className={`group relative overflow-hidden rounded-[1.25rem] p-7 text-left transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen
=======
                className={`group relative overflow-hidden rounded-[1.25rem] p-7 text-left transition-all duration-500 ease-[timing-function:cubic-bezier(0.32,0.72,0,1)] ${isOpen
>>>>>>> cbb23ad3422d0718ded2a394b9f69158c8a18714:components/lifewood/global-presence.tsx
                    ? "bg-[var(--lw-green)] shadow-[0_16px_48px_rgba(4,98,65,0.2)]"
                    : region.highlight
                      ? "bg-[var(--lw-green)] shadow-[0_8px_24px_rgba(4,98,65,0.12)] hover:shadow-[0_12px_40px_rgba(4,98,65,0.18)]"
                      : "border border-[var(--lw-dark)]/[0.03] bg-[var(--lw-sea-salt)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(19,48,32,0.06)]"
                  }`}
              >
                {region.name}
              </h3>

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
