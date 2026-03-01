"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section className="bg-white py-24 pb-32 dark:bg-[#060606]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white"
          >
            AI DATA SERVICES
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[0.9rem] font-medium text-zinc-600 dark:text-zinc-400 max-w-3xl"
          >
            Lifewood offers AI and IT services that enhance decision-making, reduce costs, and improve productivity to optimize organizational performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[550px]">
          {/* Audio - Spans 3 columns top */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-[1.5rem] bg-zinc-100 dark:bg-zinc-900 md:col-span-3 md:row-span-1 h-[250px] md:h-auto group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2670&auto=format&fit=crop" 
              alt="Audio Waveform" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <span className="absolute top-6 left-6 text-white text-sm font-medium">Audio</span>
          </motion.div>

          {/* Text - Spans 2 rows right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-[1.5rem] bg-zinc-100 dark:bg-zinc-900 md:col-span-1 md:row-span-2 h-[300px] md:h-auto group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2573&auto=format&fit=crop" 
              alt="Text book" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105 object-[70%_top]"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <span className="absolute top-6 left-6 text-white text-sm font-medium">Text</span>
          </motion.div>

          {/* Image - Bottom Left */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden rounded-[1.5rem] bg-zinc-100 dark:bg-zinc-900 md:col-span-1 md:row-span-1 h-[250px] md:h-auto group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2664&auto=format&fit=crop" 
              alt="Camera Image" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <span className="absolute top-6 left-6 text-white text-sm font-medium">Image</span>
          </motion.div>

          {/* Video - Bottom Middle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative overflow-hidden rounded-[1.5rem] bg-zinc-100 dark:bg-zinc-900 md:col-span-2 md:row-span-1 h-[250px] md:h-auto group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
              alt="Video Editing Dashboard" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <span className="absolute top-6 left-6 text-white text-sm font-medium">Video</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
