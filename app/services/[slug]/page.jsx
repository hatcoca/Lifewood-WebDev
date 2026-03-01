"use client"

import { useParams, notFound } from "next/navigation"
import { services } from "@/lib/services-data"
import { Navbar } from "@/components/lifewood/navbar"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, ArrowRight, Shield, Zap, Globe, Cpu, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export default function ServiceDetailPage() {
    const params = useParams()
    const slug = params.slug
    const containerRef = useRef(null)

    const service = services.find((s) => s.slug === slug)

    if (!service) {
        notFound()
    }

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    return (
        <main ref={containerRef} className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden">
            <Navbar />

            {/* 1. HERO SECTION - Immersive & Dynamic */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                {/* Background visual layers */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                        className="absolute inset-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-[#FAFAFA] dark:via-black/40 dark:to-[#0A0A0A] z-10" />
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover opacity-10 dark:opacity-20 grayscale"
                            priority
                        />
                    </motion.div>

                    {/* Animated secondary abstract visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.15, scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute -right-1/4 top-0 w-full h-full pointer-events-none"
                    >
                        <Image
                            src={service.secondaryImage}
                            alt="Background Abstract"
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 w-full">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="h-px w-12 bg-[var(--lw-green)]" />
                            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--lw-green)]">
                                Enterprise Solution
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl lg:text-8xl dark:text-white leading-[1.05]"
                        >
                            Building better <br />
                            <span className="text-[var(--lw-green)]">{service.title}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-10 text-xl lg:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl font-medium"
                        >
                            {service.extendedDescription}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-12 flex flex-wrap gap-6"
                        >
                            <Link href="/contacts" className="group flex items-center gap-3 rounded-full bg-zinc-900 px-8 py-4 text-white hover:scale-105 transition-all dark:bg-white dark:text-zinc-900">
                                Start a partnership
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex items-center gap-8 px-4 border-l border-zinc-200 dark:border-zinc-800">
                                {Object.entries(service.stats).map(([label, value], i) => (
                                    <div key={label}>
                                        <div className="text-2xl font-bold dark:text-white capitalize">{value}</div>
                                        <div className="text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Floating scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
                >
                    <div className="w-[1px] h-12 bg-zinc-400" />
                </motion.div>
            </section>

            {/* 2. THE PROCESS - Interactive Journey */}
            <section className="py-32 bg-white dark:bg-black/40">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl mb-4">Precision Workflow</h2>
                        <p className="text-zinc-500 max-w-xl">How we ensure the highest fidelity data for your production models.</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {service.process.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative p-8 rounded-[2rem] border border-zinc-100 bg-zinc-50/50 dark:border-white/5 dark:bg-zinc-900/30 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl transition-all"
                            >
                                <div className="text-4xl font-black text-zinc-100 dark:text-zinc-800 mb-6 group-hover:text-[var(--lw-green)]/10 transition-colors">0{idx + 1}</div>
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                                    {step.title}
                                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all text-[var(--lw-green)]" />
                                </h3>
                                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CAPABILITIES - Feature Breakdown */}
            <section className="py-32 overflow-hidden relative">
                <div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--lw-green)_0%,transparent_70%)] opacity-5 pointer-events-none" />

                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-20 lg:grid-cols-2 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl group"
                        >
                            <Image
                                src={service.image}
                                alt={`${service.title} visualization`}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10 text-white">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2 text-[var(--lw-green)]">
                                    <Cpu className="h-4 w-4" /> Production Grade
                                </div>
                                <div className="text-2xl font-bold italic opacity-80">"Quality is the non-negotiable."</div>
                            </div>
                        </motion.div>

                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl mb-6">
                                    Unmatched specialized <br /> expertise
                                </h2>
                                <p className="text-zinc-500 leading-relaxed">
                                    Our {service.title} solutions are built on a foundation of rigorous multi-modal processing and human-in-the-loop validation teams.
                                </p>
                            </motion.div>

                            <div className="grid gap-6">
                                {service.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="h-10 w-10 flex shrink-0 items-center justify-center rounded-full bg-[var(--lw-green)]/10 text-[var(--lw-green)] group-hover:bg-[var(--lw-green)] group-hover:text-white transition-all">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <span className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TRUST & SECURITY - Quality Assurance focus */}
            <section className="py-32 bg-zinc-900 dark:bg-black/60 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <Image src={service.secondaryImage} alt="Security Visual" fill className="object-cover" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        {[
                            { icon: Shield, title: "Data Integrity", text: "Secure handling protocols for your most proprietary data assets." },
                            { icon: Zap, title: "Scale with Speed", text: "Elastic compute and workforce capacity to meet deadline demands." },
                            { icon: Globe, title: "Domain Experts", text: "Native language and specialized domain knowledge across 30+ sectors." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                            >
                                <div className="h-16 w-16 mx-auto rounded-2xl bg-[var(--lw-green)]/20 text-[var(--lw-green)] flex items-center justify-center mb-6">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="py-40 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="rounded-[4rem] bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-12 lg:p-24 text-center relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--lw-green)_0%,transparent_60%)] opacity-30 group-hover:opacity-40 transition-opacity" />

                        <div className="relative z-10">
                            <h2 className="text-4xl font-extrabold text-white sm:text-6xl mb-8 tracking-tight">
                                Empower your AI journey
                            </h2>
                            <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-12">
                                Join global innovators who trust Lifewood for their mission-critical data needs. Let's build something extraordinary together.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-full bg-[var(--lw-green)] px-10 py-5 text-sm font-black text-white hover:scale-105 active:scale-95 transition-all shadow-xl shadow-emerald-500/20"
                                >
                                    START A CONVERSATION
                                    <ArrowRight size={20} />
                                </Link>
                                <Link
                                    href="/services"
                                    className="px-10 py-5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/5 transition-all"
                                >
                                    Other Solutions
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
