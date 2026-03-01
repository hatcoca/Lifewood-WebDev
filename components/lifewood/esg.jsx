"use client"

import { ArrowRight, ChevronDown, CheckCircle2, Star, Zap, Layout, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { offersData } from "@/lib/data/offers"

export function ESG() {
  const [activeTab, setActiveTab] = useState(0)
  const router = useRouter()

  return (
    <section id="esg" className="relative bg-[#FAFAFA] dark:bg-[#060606] py-32 lg:py-52 overflow-hidden">
      {/* Brand-aligned organic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--lw-green),transparent_50%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--lw-saffron),transparent_50%)] opacity-5" />

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-emerald-500/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-1/4 h-[800px] w-[800px] rounded-full bg-lw-green/10 blur-[120px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* SECTION HEADER */}
        <div className="relative mb-32 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-0.5 w-12 bg-lw-green" />
            <span className="text-xs font-black uppercase tracking-[0.5em] text-lw-green">
              Modular Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-8xl font-black text-zinc-950 dark:text-white tracking-tighter leading-[0.9]"
          >
            What We <br />
            <span className="text-lw-green italic">Provide.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 text-2xl leading-relaxed text-zinc-500 dark:text-zinc-400 font-medium max-w-2xl"
          >
            Lifewood provides a full-cycle AI data ecosystem, from raw data engineering to advanced generative production.
          </motion.p>
        </div>

        {/* TABS / LIQUID SELECTION */}
        <div className="flex flex-wrap gap-4 mb-24 overflow-x-auto pb-4 no-scrollbar">
          {offersData.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(i)}
              className="group relative px-10 py-6 rounded-[2.5rem] text-sm font-black transition-all duration-700 whitespace-nowrap"
            >
              <div className="relative z-10 flex flex-col items-start gap-1">
                <span className={`text-[0.6rem] font-black uppercase tracking-[0.3em] transition-colors duration-500 ${activeTab === i ? "text-lw-green" : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"}`}>{item.type}</span>
                <span className={`transition-colors duration-500 ${activeTab === i ? "text-white dark:text-zinc-950" : "text-zinc-500 dark:text-zinc-400"}`}>{item.title}</span>
              </div>

              {activeTab === i && (
                <motion.div
                  layoutId="activeOfferTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className="absolute inset-0 bg-zinc-950 dark:bg-white rounded-[2.5rem] shadow-2xl"
                />
              )}
              {activeTab !== i && (
                <div className="absolute inset-0 border border-zinc-200 dark:border-white/10 rounded-[2.5rem] group-hover:bg-zinc-50 dark:group-hover:bg-zinc-900/50 transition-colors" />
              )}
            </button>
          ))}
        </div>

        {/* CONTENT REVEAL */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => router.push(`/offers/${offersData[activeTab].slug}`)}
              className="group/card cursor-pointer grid lg:grid-cols-12 gap-12 lg:gap-32 items-center bg-white dark:bg-zinc-900/30 p-12 lg:p-24 rounded-[5rem] border border-zinc-100 dark:border-white/5 shadow-sm hover:shadow-[0_80px_100px_-40px_rgba(0,0,0,0.1)] transition-all duration-1000"
            >
              {/* Left Side: Info */}
              <div className="lg:col-span-6">
                <div className="flex flex-col gap-10 mb-14">
                  <div className="h-28 w-28 flex items-center justify-center rounded-[3rem] bg-zinc-50 dark:bg-zinc-800 shadow-inner border border-zinc-100 dark:border-white/10 text-lw-green group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-1000">
                    {(() => {
                      const Icon = offersData[activeTab].icon;
                      return <Icon size={48} strokeWidth={2.5} />;
                    })()}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles size={16} className="text-lw-green" />
                      <span className="text-[0.65rem] font-black uppercase tracking-[0.6em] text-lw-green">High Fidelity Promise</span>
                    </div>
                    <h3 className="text-5xl lg:text-7xl font-black text-zinc-950 dark:text-white tracking-tighter leading-[0.9]">
                      {(() => {
                        const words = offersData[activeTab].subtitle.split(' ');
                        return (
                          <>
                            {words.slice(0, -1).join(' ')} <span className="text-lw-green">{words[words.length - 1]}</span>
                          </>
                        );
                      })()}
                    </h3>
                  </div>
                </div>

                <p className="text-[1.25rem] leading-relaxed text-zinc-500 dark:text-zinc-400 mb-16 font-medium max-w-2xl">
                  {offersData[activeTab].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20">
                  {offersData[activeTab].features.map((feature, fidx) => (
                    <motion.div
                      key={fidx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * fidx }}
                      className="flex items-start gap-5 group/feat"
                    >
                      <div className="h-8 w-8 rounded-2xl bg-lw-green/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/feat:bg-lw-green group-hover/feat:scale-110 transition-all duration-500">
                        <CheckCircle2 size={16} className="text-lw-green group-hover/feat:text-white" />
                      </div>
                      <span className="text-[1.05rem] font-black text-zinc-700 dark:text-zinc-200 leading-tight">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="group/cta flex items-center gap-6 text-lw-green font-black text-xs tracking-[0.3em] transition-all">
                  EXPLORE CASE STUDIES
                  <div className="h-14 w-14 rounded-2xl border border-lw-green/20 flex items-center justify-center group-hover/cta:bg-lw-green group-hover/cta:text-white transition-all duration-500">
                    <ArrowRight size={20} className="group-hover/cta:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Right Side: Immersive Visual */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-square lg:aspect-[5/6] w-full rounded-[4.5rem] overflow-hidden shadow-2xl transition-all duration-1000 group-hover/card:scale-[1.02] group-hover/card:-rotate-1">
                  {offersData[activeTab].video ? (
                    <video
                      key={offersData[activeTab].video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover scale-110 group-hover/card:scale-100 transition-transform duration-[2000ms]"
                    >
                      <source src={offersData[activeTab].video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={offersData[activeTab].image}
                      alt={offersData[activeTab].title}
                      fill
                      className="object-cover scale-110 group-hover/card:scale-100 transition-transform duration-[2000ms]"
                    />
                  )}

                  {/* High-Impact Stat Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-12 right-12 lg:-right-12 lg:bottom-24 p-12 pr-20 rounded-[4rem] bg-white dark:bg-zinc-950 shadow-2xl border border-white/10 z-10"
                  >
                    <div className="text-6xl font-black text-zinc-950 dark:text-white tracking-tighter leading-none mb-2">{offersData[activeTab].results.stats[0].value}</div>
                    <div className="text-[0.7rem] font-black text-lw-green uppercase tracking-[0.4em]">{offersData[activeTab].results.stats[0].label}</div>
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity duration-1000" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA BOTTOM */}
        <div className="mt-40 pt-24 border-t border-zinc-200 dark:border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <h4 className="text-3xl lg:text-4xl font-black text-zinc-950 dark:text-white tracking-tighter mb-4">Ready to fuel your next cycle?</h4>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium">Engineer your advantage with Lifewood's precision ecosystem.</p>
          </div>
          <Link
            href="/contact"
            className="group relative flex items-center gap-8 rounded-[2.5rem] bg-lw-green px-14 py-7 text-sm font-black text-white overflow-hidden shadow-[0_40px_80px_-20px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            INITIATE PARTNERSHIP
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </section>
  )
}
