"use client"

import { useParams, useRouter } from "next/navigation"
import { offersData } from "@/lib/data/offers"
import { ArrowLeft, CheckCircle2, Globe, Cpu, Layers, Sparkles, TrendingUp, ArrowRight, MousePointer2, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/lifewood/navbar"
import { useEffect, useRef, useState } from "react"

export default function OfferDetailPage() {
    const { slug } = useParams()
    const router = useRouter()
    const offer = offersData.find((o) => o.slug === slug)

    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Fixed section states for sticky navigation
    const [activeSection, setActiveSection] = useState("01")

    if (!offer) return (
        <div className="flex h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
            <div className="text-center">
                <h1 className="text-6xl font-black text-zinc-900 dark:text-white mb-4">404</h1>
                <p className="text-zinc-500 mb-8">Offer category not found.</p>
                <Link href="/#esg" className="text-[var(--lw-green)] font-bold flex items-center justify-center gap-2">
                    <ArrowLeft size={18} /> Return to Portfolio
                </Link>
            </div>
        </div>
    )

    const sections = [
        { id: "01", data: offer.objective, type: "objective" },
        { id: "02", data: offer.solution, type: "solution" },
        { id: "03", data: offer.results, type: "results" }
    ]

    return (
        <main ref={containerRef} className="bg-white dark:bg-[#080808] min-h-screen selection:bg-[var(--lw-green)] selection:text-white relative">
            {/* MESH GRADIENT BACKGROUND */}
            <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 animate-pulse"
                    style={{ backgroundColor: offer.color }}
                />
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-10 animate-pulse"
                    style={{ backgroundColor: offer.color }}
                />
            </div>

            <Navbar />

            {/* PROGRESS BAR */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[var(--lw-green)] z-[60] origin-left"
                style={{ scaleX }}
            />

            {/* STICKY SIDE NAV */}
            <div className="fixed left-10 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-8">
                {sections.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => document.getElementById(`section-${s.id}`).scrollIntoView({ behavior: 'smooth' })}
                        className="group flex items-center gap-4 transition-all"
                    >
                        <div className={`h-1 w-8 rounded-full transition-all duration-500 ${activeSection === s.id ? "bg-[var(--lw-green)] w-16" : "bg-zinc-200 dark:bg-zinc-800"}`} />
                        <span className={`text-[0.65rem] font-black uppercase tracking-widest transition-opacity duration-300 ${activeSection === s.id ? "opacity-100 text-zinc-900 dark:text-white" : "opacity-0 group-hover:opacity-100 text-zinc-400"}`}>
                            {s.data.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* HERO SECTION - IMMERSIVE OVERLAY */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute inset-0 z-0"
                >
                    {offer.video ? (
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-80 dark:opacity-40 grayscale-[0.3] contrast-125"
                        >
                            <source src={offer.video} type="video/mp4" />
                        </video>
                    ) : (
                        <Image
                            src={offer.image}
                            alt={offer.title}
                            fill
                            className="object-cover opacity-80 dark:opacity-40 grayscale-[0.3] contrast-125"
                            priority
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white dark:from-black/20 dark:via-[#080808] to-[#080808]" />
                </motion.div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 text-white mb-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
                    >
                        <span className="text-[0.7rem] font-black uppercase tracking-[0.5em]">{offer.type}</span>
                        <div className="h-4 w-px bg-white/20" />
                        <span className="text-[0.7rem] font-black uppercase tracking-[0.5em] text-[var(--lw-saffron)]">Industrial Vertical</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, filter: "blur(20px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-7xl md:text-9xl lg:text-[11rem] font-black text-zinc-900 dark:text-white tracking-tighter leading-[0.8] mb-16"
                    >
                        {(() => {
                            const words = offer.title.split(' ');
                            if (words.length > 1) {
                                return (
                                    <>
                                        {words.slice(0, -1).join(' ')} <br className="hidden lg:block" />
                                        <span className="text-[var(--lw-green)]">{words[words.length - 1]}</span>
                                    </>
                                );
                            }
                            return offer.title;
                        })()}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-8 text-zinc-500 dark:text-zinc-400 font-medium"
                    >
                        <p className="text-xl max-w-xl leading-relaxed">{offer.subtitle}</p>
                        <div className="h-px w-20 bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
                        <Link href="#section-01" className="group flex items-center gap-3 text-zinc-900 dark:text-white font-black text-xs tracking-widest uppercase hover:text-[var(--lw-green)] transition-colors">
                            Begin Exploration <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* STORYTELLING SECTIONS */}
            <div className="relative">
                {/* STORYLINE CONNECTOR LINE */}
                <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent hidden lg:block -z-10" />

                {sections.map((section, sidx) => (
                    <NarrativeSection
                        key={section.id}
                        section={section}
                        sidx={sidx}
                        offer={offer}
                        setActive={setActiveSection}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>

            {/* CALL TO ACTION */}
            <section className="py-24 lg:pb-60 relative overflow-hidden">
                <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-24 w-24 rounded-[2.5rem] bg-zinc-900 dark:bg-white flex items-center justify-center mx-auto mb-16 shadow-2xl rotate-3"
                    >
                        <Sparkles className="text-[var(--lw-green)]" size={36} />
                    </motion.div>

                    <h2 className="text-5xl lg:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter mb-8 max-w-2xl mx-auto leading-[0.95]">
                        Ready to Engineered <br /> Excellence?
                    </h2>

                    <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-16 font-medium max-w-xl mx-auto">
                        Join leading enterprises leveraging Lifewood's high-fidelity AI data solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Link
                            href="/contact"
                            className="group px-14 py-7 rounded-full bg-[var(--lw-green)] text-white font-black text-sm tracking-widest hover:scale-105 transition-all shadow-[0_30px_60px_-15px_rgba(4,98,65,0.3)] flex items-center gap-4"
                        >
                            REQUEST PROPOSAL
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <button
                            onClick={() => router.push('/#esg')}
                            className="text-zinc-900 dark:text-white font-black text-xs tracking-[0.3em] uppercase border-b-2 border-transparent hover:border-[var(--lw-green)] transition-all py-2"
                        >
                            Explore other services
                        </button>
                    </div>
                </div>

                {/* Ambient background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-gradient-to-b from-transparent via-[var(--lw-green)]/5 to-transparent blur-[120px]" />
            </section>
        </main>
    )
}

function NarrativeSection({ section, sidx, offer, setActive, scrollYProgress }) {
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <SectionWrapper
            id={section.id}
            setActive={setActive}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">

                    {/* CONTENT BLOCK */}
                    <div className={`lg:col-span-6 relative ${sidx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative"
                        >
                            {/* Huge watermarked number - more integrated */}
                            <div className="absolute -top-24 -left-12 text-[14rem] font-black text-zinc-100 dark:text-zinc-900/30 -z-10 select-none pointer-events-none">
                                {section.id}
                            </div>

                            <div className="inline-flex items-center gap-4 mb-6">
                                <div className="h-0.5 w-10 bg-[var(--lw-green)]" />
                                <span className="text-[0.65rem] font-black uppercase tracking-[0.6em] text-[var(--lw-green)]">{section.data.label}</span>
                            </div>

                            <h2 className="text-4xl lg:text-6xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter leading-[1]">
                                {section.data.title}
                            </h2>

                            <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-10 font-medium leading-relaxed max-w-lg">
                                {section.data.description}
                            </p>

                            {/* Conditional layouts based on section type */}
                            {section.type === "objective" && (
                                <div className="flex flex-col gap-6">
                                    {section.data.list.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-zinc-900 dark:text-white font-black text-lg">
                                            <div className="h-8 w-8 rounded-xl bg-[var(--lw-green)]/10 text-[var(--lw-green)] flex items-center justify-center shrink-0">
                                                <ChevronRight size={18} />
                                            </div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.type === "solution" && (
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {section.data.features.map((feat, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -5 }}
                                            className="p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-white/5 group/feat"
                                        >
                                            <div className="h-12 w-12 rounded-2xl bg-white dark:bg-black flex items-center justify-center mb-6 shadow-sm border border-zinc-100 dark:border-white/10 text-[var(--lw-green)] group-hover/feat:bg-[var(--lw-green)] group-hover/feat:text-white transition-all duration-300">
                                                <feat.icon size={22} />
                                            </div>
                                            <h4 className="font-black text-zinc-900 dark:text-white text-sm uppercase mb-2 tracking-tight">{feat.title}</h4>
                                            <p className="text-xs text-zinc-400 font-medium leading-relaxed">{feat.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {section.type === "results" && (
                                <div className="flex flex-wrap gap-8">
                                    {section.data.stats.map((stat, i) => (
                                        <div key={i} className="relative">
                                            <div className="text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-1">{stat.value}</div>
                                            <div className="text-[0.65rem] font-black text-zinc-400 uppercase tracking-widest">{stat.label}</div>
                                            {i < section.data.stats.length - 1 && (
                                                <div className="absolute top-1/2 -right-4 h-8 w-px bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 hidden sm:block" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* VISUAL BLOCK */}
                    <div className={`lg:col-span-6 relative ${sidx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="relative aspect-[4/5] lg:aspect-[5/4] w-full rounded-[3.5rem] overflow-hidden group shadow-[0_40px_80px_-30px_rgba(0,0,0,0.3)]"
                        >
                            <Image
                                src={offer.image}
                                alt={section.data.title}
                                fill
                                className="object-cover transition-transform duration-[2.5s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                            {/* Minimal Glass Badge */}
                            <div className="absolute bottom-10 left-10 right-10 p-6 rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/10 text-white transform transition-all duration-500 group-hover:translate-y-[-5px]">
                                <p className="text-[0.6rem] font-black uppercase tracking-widest mb-1 opacity-50">Industrial Insight</p>
                                <p className="text-lg font-black tracking-tight">{section.data.title}</p>
                            </div>
                        </motion.div>

                        {/* Decorative Parallax Element - FIXED STYLE PROP */}
                        <motion.div
                            style={{
                                y: yParallax,
                                backgroundColor: offer.color
                            }}
                            className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 mix-blend-screen"
                        />
                    </div>

                </div>
            </div>
        </SectionWrapper>
    )
}

function SectionWrapper({ id, children, setActive }) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
                        setActive(id)
                    }
                })
            },
            { threshold: [0, 0.2, 0.4, 0.6, 0.8] }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [id, setActive])

    return (
        <section id={`section-${id}`} ref={ref} className="relative">
            {children}
        </section>
    )
}
