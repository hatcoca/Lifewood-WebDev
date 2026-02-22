"use client";

import {
  Database,
  Brain,
  Layers,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    icon: Database,
    title: "Data Annotation",
    summary: "High-quality, human-powered data labeling across modalities.",
    description:
      "We provide enterprise-grade data annotation services designed to power modern AI systems. Our global workforce delivers precise labeling across text, image, audio, and video datasets with consistent quality and scalability. Every dataset is carefully curated to meet strict accuracy requirements and domain-specific needs.",
    features: [
      "Text classification",
      "Image segmentation",
      "NER tagging",
      "Sentiment analysis",
      "Audio transcription",
      "Video labeling",
    ],
    slug: "data-annotation",
  },
  {
    icon: Brain,
    title: "AI Training Data",
    summary: "Production-grade datasets for ML model development.",
    description:
      "We create high-quality training datasets tailored for machine learning and generative AI applications. From supervised learning datasets to reinforcement learning with human feedback (RLHF), we help organizations build smarter, more reliable AI systems.",
    features: [
      "Custom datasets",
      "Model fine-tuning",
      "Bias detection",
      "Benchmark data",
      "RLHF data",
      "Prompt engineering",
    ],
    slug: "ai-training-data",
  },
  {
    icon: Layers,
    title: "Data Processing",
    summary: "End-to-end pipeline management at massive scale.",
    description:
      "Our data processing pipelines transform raw data into structured, AI-ready formats. We support large-scale data operations with automation, API integration, and real-time processing to ensure seamless data flow across systems.",
    features: [
      "Data cleansing",
      "Format conversion",
      "Pipeline automation",
      "Real-time processing",
      "API integration",
      "Cloud deployment",
    ],
    slug: "data-processing",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    summary: "Multi-tier QC processes with 98%+ accuracy rates.",
    description:
      "Quality is at the core of everything we do. Our multi-layer validation process ensures accuracy, consistency, and compliance across all datasets. We combine human review with automated checks to maintain industry-leading quality standards.",
    features: [
      "Multi-tier QC",
      "Accuracy tracking",
      "Audit trails",
      "Compliance checks",
      "SLA monitoring",
      "Real-time dashboards",
    ],
    slug: "quality-assurance",
  },
];

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-[var(--lw-white)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
            What we do
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[var(--lw-dark)] sm:text-4xl lg:text-[2.6rem]">
            AI Data Services for Scalable Innovation
          </h2>

          <p className="mt-6 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/60">
            We deliver end-to-end data solutions that power artificial
            intelligence. From data collection and annotation to processing and
            validation, our services are designed to help organizations build
            accurate, reliable, and scalable AI systems.
          </p>
        </div>

        {/* STATS / TRUST */}
        <div className="mt-16 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          <div>
            <p className="text-3xl font-bold text-[var(--lw-green)]">1M+</p>
            <p className="text-sm text-[var(--lw-dark)]/50">Data Points / Day</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[var(--lw-green)]">98%</p>
            <p className="text-sm text-[var(--lw-dark)]/50">Accuracy Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[var(--lw-green)]">100+</p>
            <p className="text-sm text-[var(--lw-dark)]/50">Global Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[var(--lw-green)]">24/7</p>
            <p className="text-sm text-[var(--lw-dark)]/50">Operations</p>
          </div>
        </div>

        {/* SERVICES */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {services.map((service, i) => {
            const isOpen = expandedIndex === i;

            return (
              <div
                key={service.title}
                className={`rounded-2xl border transition-all duration-300 ${isOpen
                  ? "border-[var(--lw-green)]/20 bg-white shadow-xl"
                  : "border-[var(--lw-dark)]/5 bg-[var(--lw-sea-salt)]"
                  }`}
              >
                {/* HEADER */}
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-start justify-between p-8 text-left"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--lw-green)]/10">
                      <service.icon size={22} className="text-[var(--lw-green)]" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[var(--lw-dark)]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[var(--lw-dark)]/50">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    className={`transition-transform ${isOpen ? "rotate-180 text-[var(--lw-green)]" : ""
                      }`}
                  />
                </button>

                {/* CONTENT */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-8 pb-8">
                    <div className="mb-4 h-px bg-[var(--lw-dark)]/10" />

                    <p className="text-sm leading-relaxed text-[var(--lw-dark)]/60">
                      {service.description}
                    </p>

                    {/* FEATURES */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full bg-[var(--lw-green)]/10 px-3 py-1 text-xs text-[var(--lw-green)]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-5 flex gap-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-sm font-semibold text-[var(--lw-green)] hover:text-[var(--lw-saffron)]"
                      >
                        Learn more →
                      </Link>

                      <Link
                        href="/contacts"
                        className="text-sm text-[var(--lw-dark)]/40 hover:text-[var(--lw-green)]"
                      >
                        Contact us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PROCESS SECTION (LIFEWOOD STYLE) */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-semibold text-[var(--lw-dark)]">
            Our Approach
          </h3>
          <p className="mt-4 text-[var(--lw-dark)]/60">
            A structured workflow ensuring quality, scalability, and efficiency.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              "Data Collection",
              "Annotation",
              "Quality Control",
              "Delivery",
            ].map((step, i) => (
              <div
                key={step}
                className="rounded-xl border bg-white p-6 text-sm shadow-sm"
              >
                <p className="font-semibold text-[var(--lw-green)]">
                  0{i + 1}
                </p>
                <p className="mt-2 text-[var(--lw-dark)]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-8 py-4 text-sm font-semibold text-white hover:brightness-110"
          >
            Get Started with Lifewood
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
