import { MapPin, ArrowRight, Globe, Clock, Users } from "lucide-react"
import Link from "next/link"
import { regions } from "@/lib/data/global"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Global Presence | Lifewood AI Data Solutions",
  description: "Operations spanning Malaysia, Singapore, China, Bangladesh, Southeast Asia, and worldwide delivery.",
}

const globalStats = [
  { icon: Globe, value: "6+", label: "Countries" },
  { icon: Users, value: "2,000+", label: "Team members" },
  { icon: Clock, value: "24/7", label: "Operations" },
]

export default function GlobalPage() {
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
              Worldwide reach
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              Offices across the East and West
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              Operations spanning Southeast Asia, China, and beyond -- delivering AI data
              solutions around the clock. Our strategically positioned offices enable us
              to serve clients in every time zone with local expertise and global standards.
            </p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              Lifewood{"'"}s follow-the-sun model ensures continuous delivery, zero downtime,
              and round-the-clock support for mission-critical AI projects.
            </p>
          </div>
        </div>
      </section>

      {/* Global stats bar */}
      <section className="bg-[var(--lw-green)] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-3">
            {globalStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <stat.icon size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-[0.82rem] text-white/50">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full region details */}
      <section className="bg-[var(--lw-sea-salt)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <div
                key={region.name}
                className={`relative overflow-hidden rounded-[1.25rem] p-7 ${
                  region.highlight
                    ? "bg-[var(--lw-green)] shadow-[0_16px_48px_rgba(4,98,65,0.2)]"
                    : "border border-[var(--lw-dark)]/[0.03] bg-[var(--lw-white)] shadow-[0_4px_24px_rgba(19,48,32,0.04)]"
                }`}
              >
                {region.highlight && (
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--lw-saffron)]/[0.1] blur-2xl" />
                )}

                <div className="relative flex items-center gap-2 mb-3">
                  <MapPin size={15} className="text-[var(--lw-saffron)]" strokeWidth={2} />
                  <span
                    className={`text-[0.68rem] font-semibold uppercase tracking-[0.15em] ${
                      region.highlight ? "text-white/50" : "text-[var(--lw-dark)]/35"
                    }`}
                  >
                    {region.role}
                  </span>
                </div>

                <h2
                  className={`relative text-xl font-bold ${
                    region.highlight ? "text-white" : "text-[var(--lw-dark)]"
                  }`}
                >
                  {region.name}
                </h2>

                <p
                  className={`relative mt-2.5 text-[0.88rem] leading-relaxed ${
                    region.highlight ? "text-white/65" : "text-[var(--lw-dark)]/45"
                  }`}
                >
                  {region.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-[var(--lw-dark)]">
              Looking to partner with us in your region?
            </h3>
            <p className="mt-3 mx-auto max-w-md text-[0.92rem] text-[var(--lw-dark)]/50">
              Reach out to discuss how our regional teams can support your AI data needs.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-7 py-3.5 text-[0.88rem] font-semibold text-white shadow-[0_4px_20px_rgba(4,98,65,0.25)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(4,98,65,0.35)] active:scale-[0.97]"
              >
                Contact our regional teams
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
