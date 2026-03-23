"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState, useMemo, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"

const GhostCursor = dynamic(() => import('./GhostCursor'), { ssr: false })
const Threads = dynamic(() => import('../Threads'), { ssr: false })
const Waves = dynamic(() => import('../Waves'), { ssr: false })

const heroWords = ["AI-powered data solutions.", "global transformation.", "smart innovation."]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const router = useRouter()
  const typedRef = useRef("")

  const threadsColor = useMemo(() => [0.0, 0.87, 0.505], [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if user is typing in an input/textarea
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;

      typedRef.current = (typedRef.current + e.key.toLowerCase()).slice(-20);
      if (typedRef.current.includes("haraadmin")) {
        typedRef.current = ""; // Reset
        router.push("/admin/login");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % heroWords.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-full w-full overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-lw-green/10 via-transparent to-transparent opacity-80 dark:from-lw-green/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent opacity-80 dark:from-indigo-500/10" />

        <motion.div
          animate={{ transform: ["translate(0px, 0px)", "translate(40px, -20px)", "translate(0px, 0px)"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] -left-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[var(--lw-green)]/15 to-emerald-400/10 blur-[100px] dark:from-[var(--lw-green)]/30"
        />

        <div className="absolute inset-0 z-0">
          <GhostCursor color="var(--lw-green)" brightness={1.5} />
        </div>

        <div className="absolute inset-0 z-0 pointer-events-auto opacity-30 dark:opacity-20">
          <Waves
            lineColor="rgba(4, 98, 65, 0.3)"
            backgroundColor="transparent"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 pt-32 pb-20">
        <div className="flex w-full flex-col items-center justify-center z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* MODIFIED: 
              1. Added 'tracking-tighter' for letters.
              2. Added 'tight-words' (custom CSS) to bring words closer.
            */}
            <h1 className="text-balance text-[3.25rem] font-medium leading-[1.05] tracking-tighter tight-words text-zinc-900 sm:text-6xl lg:text-[4.25rem] dark:text-white">
              The world’s leading provider  <br className="hidden sm:block" />
              {" "}
              <span className="relative inline-flex flex-col h-[1.1em] overflow-hidden min-w-[300px] sm:min-w-[450px] align-bottom">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 35, mass: 0.8 }}
                    className="absolute inset-x-0 top-0 inline-block font-bold bg-gradient-to-br from-[var(--lw-green)] to-[#209c73] bg-clip-text text-transparent pb-2 text-center tracking-tighter"
                  >
                    {heroWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible select-none pointer-events-none">AI-powered data solutions.</span>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-zinc-900 px-8 py-4 text-white transition-all hover:scale-[1.02] dark:bg-white dark:text-zinc-900 tracking-tight"
              >
                <span className="relative">Contact Us</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}