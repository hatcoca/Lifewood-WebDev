"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Globe2, Plus, Minus, MoveRight } from "lucide-react"

// Data based on the second screenshot
const reachData = [
  {
    title: "40+ Global Delivery Centers",
    color: "bg-[#F3EFE0]", // Light beige
    textColor: "text-zinc-900",
    iconColor: "text-zinc-400",
    content: "Strategically located facilities worldwide ensuring round-the-clock operations and resilient data delivery.",
  },
  {
    title: "30+ Countries Across All Continents",
    color: "bg-[#F7B761]", // Orange/Saffron
    textColor: "text-zinc-900",
    iconColor: "text-white",
    content: "An expansive international footprint allowing us to source local expertise and understand regional nuances.",
  },
  {
    title: "50+ Language Capabilities and Dialects",
    color: "bg-lw-green", // Brand Green
    textColor: "text-white",
    iconColor: "text-lw-green bg-white",
    content: "Comprehensive linguistic support to train AI models for diverse, global audiences without barriers.",
  },
  {
    title: "56,000+ Global Online Resources",
    color: "bg-black", // Black
    textColor: "text-white",
    iconColor: "text-black bg-white",
    content: "With 56,788 online specialists worldwide, Lifewood mobilizes a flexible workforce for scalable data collection, annotation, and quality assurance, operating 24/7 across regions.",
  }
]

export function GlobalReach() {
  const [openIndex, setOpenIndex] = useState(3) // Default to the last one being open like the screenshot
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={containerRef} className="relative bg-white dark:bg-[#060606] pt-4 pb-20 lg:pt-8 lg:pb-32 overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <div className="flex flex-col gap-4">
          {reachData.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={`group relative overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] cursor-pointer transition-all duration-500 ease-out ${item.color} ${isOpen ? 'shadow-2xl' : 'hover:scale-[1.01] hover:shadow-lg'}`}
              >
                {/* Accordion Header */}
                <div className={`flex items-center justify-between p-6 lg:p-8 lg:px-12 ${item.textColor}`}>
                  <h3 className="text-xl lg:text-3xl font-bold tracking-tight pr-8">
                    {item.title}
                  </h3>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`flex-shrink-0 flex items-center justify-center h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                       <Minus size={20} className={item.textColor} />
                    ) : (
                       <Plus size={20} className={item.textColor} />
                    )}
                  </div>
                </div>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-8 lg:px-12 lg:pb-12 ${item.textColor} opacity-80 pt-4 lg:pt-16`}>
                        <p className="text-sm lg:text-[0.95rem] font-medium leading-relaxed max-w-3xl">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
