"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Heart, Globe2, ArrowRight, MousePointer2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

function RotatingText() {
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setRotation(window.scrollY * 0.2)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="relative flex flex-col items-center justify-center mt-6">
            <div className="relative h-28 w-28 flex items-center justify-center">
                <motion.div style={{ rotate: rotation }} className="absolute inset-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path id="circlePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="transparent" />
                        <text className="text-[12px] font-bold uppercase tracking-widest fill-zinc-800">
                            <textPath xlinkHref="#circlePath">
                                be amazed • be amazed • be •
                            </textPath>
                        </text>
                    </svg>
                </motion.div>
                <div className="relative z-10 h-[10px] w-[10px] rounded-full bg-[#fca13f] shadow-[0_0_15px_rgba(252,161,63,0.8)]" />
            </div>
            {/* The thin yellow downward arrow below */}
            <div className="mt-1 flex flex-col items-center">
                <div className="h-10 w-px bg-[#fca13f]/60" />
                <svg width="6" height="4" viewBox="0 0 6 4" fill="none" className="text-[#fca13f]/60 -mt-[1px]">
                     <path d="M1 1L3 3L5 1" stroke="currentColor" strokeLinecap="square" />
                </svg>
            </div>
        </div>
    )
}

export function PhilanthropyImpact() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Cinematic Parallax speeds for intro
    const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

    return (
        <section ref={containerRef} id="impact" className="relative bg-[#020202] text-white">
            
            {/* 1. CINEMATIC INTRO (FULL BLEED PARALLAX) */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 w-full h-[120%]">
                    <Image
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop"
                        alt="Global Community Impact"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-[#020202]/40" />
                </motion.div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-px w-10 bg-[#fca13f]" />
                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.5em] text-[#fca13f]">Our Mission</span>
                        <div className="h-px w-10 bg-[#fca13f]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-10"
                    >
                        Impact <br />
                        <span className="italic text-[#205b38]">Beyond Profit.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl leading-relaxed"
                    >
                        We direct resources into education and developmental projects that create lasting change, empowering communities for generations.
                    </motion.p>
                </div>
            </div>

            {/* Spacer to give the intro text room to breathe before the overlay scrolls up */}
            <div className="h-[10vh] md:h-[15vh] w-full" />

            {/* CONTENT OVERLAY (LIGHT THEME) */}
            <div className="relative z-20 bg-white rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-40px_100px_rgba(0,0,0,0.8)] pt-16 md:pt-24 pb-32 md:pb-60">
                
                {/* 2. VISION STATEMENT */}
                <div className="mx-auto max-w-5xl px-6 lg:px-10 mb-16 md:mb-24 flex flex-col items-center text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-600 mb-8"
                    >
                        Our vision is of a world where <span className="text-lw-green italic">financial investment</span> plays a central role in solving the social and environmental challenges facing the global community, specifically in Africa and the Indian sub-continent
                    </motion.h3>

                    {/* Screenshot-matched Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            href="/about"
                            className="group bg-[#0f2e1f] hover:bg-[#0a2115] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
                        >
                            Know Us Better
                            <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                                <ArrowRight size={12} strokeWidth={3} />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* 3. NEXT-GEN GEOGRAPHIC REACH MAP */}
                <div className="mx-auto max-w-6xl px-6 lg:px-10 mb-32 md:mb-40">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-8">
                        <motion.h4
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f2e1f] leading-none"
                        >
                            Transforming Communities <br /> 
                            Worldwide
                        </motion.h4>
                        <div className="relative hidden md:flex items-center">
                            <RotatingText />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative min-h-[500px] aspect-[4/3] md:aspect-[21/9] w-full rounded-[1.5rem] bg-zinc-100 border border-zinc-200 overflow-hidden shadow-md"
                    >
                        <iframe 
                            src="https://lifewoodworldwidemap.vercel.app/" 
                            className="absolute inset-0 w-full h-full border-0 pointer-events-auto"
                            title="Lifewood Global Impact Map"
                        />
                    </motion.div>
                </div>

                {/* 4. STICKY STORY CARDS */}
                <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16 lg:space-y-24">
                    
                    {/* Story Block 1 */}
                    <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                        <motion.div 
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="sticky top-40 h-[45vh] xl:h-[60vh] rounded-[2rem] overflow-hidden bg-zinc-100 shadow-xl"
                        >
                            <motion.div
                                initial={{ scale: 1.2 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="absolute inset-0"
                            >
                                <Image src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2670&auto=format&fit=crop" alt="Partnership" fill className="object-cover" />
                            </motion.div>
                        </motion.div>
                        <div className="py-8 lg:py-32 flex flex-col justify-center">
                            <h5 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 md:mb-6 text-[#0f2e1f]">Partnership</h5>
                            <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed">
                                In exclusive collaboration with our philanthropic partners, Lifewood has rigorously expanded critical operations inside South Africa, Nigeria, Ghana, Kenya, and beyond.
                            </p>
                        </div>
                    </div>

                    {/* Story Block 2 */}
                    <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                        <div className="order-2 lg:order-1 py-8 lg:py-32 flex flex-col justify-center">
                            <h5 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 md:mb-6 text-[#0f2e1f]">Application</h5>
                            <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed">
                                True transformation requires the systemic application of our methods and technological experience to architect the development of people in under-resourced, high-potential economies.
                            </p>
                        </div>
                        <motion.div 
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2 sticky top-40 h-[45vh] xl:h-[60vh] rounded-[2rem] overflow-hidden bg-zinc-100 shadow-xl"
                        >
                            <motion.div
                                initial={{ scale: 1.2 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="absolute inset-0"
                            >
                                <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" alt="Application" fill className="object-cover" />
                            </motion.div>
                        </motion.div>
                    </div>

                     {/* Story Block 3 */}
                     <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="sticky top-40 h-[45vh] xl:h-[60vh] rounded-[2rem] overflow-hidden bg-zinc-100 shadow-xl"
                        >
                            <motion.div
                                initial={{ scale: 1.2 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="absolute inset-0"
                            >
                                <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop" alt="Expanding" fill className="object-cover" />
                            </motion.div>
                        </motion.div>
                        <div className="py-8 lg:py-32 flex flex-col justify-center">
                            <h5 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 md:mb-6 text-[#0f2e1f]">Expanding</h5>
                            <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed">
                                We are aggressively expanding access to AI training, establishing equitable wage structures, and creating concrete career progressions to ensure multi-generational change.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 5. EMOTIONAL CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 1 }}
                    className="mt-32 mx-auto max-w-4xl text-center flex flex-col items-center"
                >
                    <div className="h-24 w-24 rounded-full bg-lw-green/10 flex items-center justify-center mb-8 relative">
                        <div className="absolute inset-0 h-full w-full rounded-full bg-lw-green animate-ping opacity-20" />
                        <Heart className="text-lw-green fill-lw-green" size={32} />
                    </div>
                    <h6 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-10 text-[#0f2e1f]">
                        Working with new <span className="text-lw-green italic">intelligence</span> <br/> for a better world.
                    </h6>
                    <Link
                        href="/contact"
                        className="group bg-[#0f2e1f] hover:bg-[#0a2115] text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all flex items-center gap-4 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Initiate Social Change
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}
