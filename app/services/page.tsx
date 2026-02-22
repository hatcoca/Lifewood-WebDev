import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/data/services"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Lifewood AI Data Solutions",
  description: "Comprehensive AI data services including data annotation, AI training data, data processing, and quality assurance.",
}

const whyChooseUs = [
  "Multi-language support from native speakers in 30+ languages",
  "24/7 operations with follow-the-sun delivery model",
  "98.5%+ accuracy rate with multi-tier quality assurance",
  "Scalable infrastructure handling 50M+ data points daily",
  "Industry-specific expertise across automotive, healthcare, finance, and tech",
  "SOC 2 compliant with end-to-end data security",
]

export default function ServicesPage() {
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
              What we do
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
              Comprehensive AI data services
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              From raw data to refined AI-ready datasets -- powering the next generation of machine learning.
              We provide end-to-end data solutions that enable enterprises to build, train, and deploy AI models
              with confidence and precision.
            </p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
              Our team of over 2,000 skilled annotators, linguists, and data engineers work across modalities
              including text, image, audio, and video -- delivering production-grade datasets tailored
              to your specific use case.
            </p>
          </div>
        </div>
      </section>

      {/* Full service details */}
      <section className="bg-[var(--lw-sea-salt)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="overflow-hidden rounded-[1.5rem] border border-[var(--lw-green)]/15 bg-[var(--lw-white)] p-8 shadow-[0_4px_24px_rgba(19,48,32,0.04)] lg:p-10"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--lw-green)]/10">
                    <service.icon size={22} className="text-[var(--lw-green)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--lw-dark)]">{service.title}</h2>
                    <p className="mt-1 text-[0.88rem] text-[var(--lw-dark)]/45">{service.summary}</p>
                  </div>
                </div>

                <div className="my-6 h-px bg-[var(--lw-dark)]/[0.04]" />

                <p className="text-[0.92rem] leading-[1.75] text-[var(--lw-dark)]/55">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-[var(--lw-green)]/[0.04] px-3.5 py-1.5 text-[0.75rem] font-medium text-[var(--lw-green)]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-[var(--lw-green)] transition-colors hover:text-[var(--lw-saffron)]"
                >
                  Discuss this service
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[var(--lw-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
                Our advantage
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl">
                Why enterprises trust Lifewood
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
                We combine the scale of a global operation with the precision of specialist teams.
                Our unique position bridging ASEAN and China gives us access to diverse linguistic
                and cultural expertise that no other data services company can match.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-6 py-3 text-[0.88rem] font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(4,98,65,0.2)] active:scale-[0.97]"
                >
                  Start a project
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {whyChooseUs.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--lw-green)]" />
                  <span className="text-[0.92rem] leading-relaxed text-[var(--lw-dark)]/60">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
