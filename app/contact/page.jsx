"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 lg:px-8 selection:bg-lw-green selection:text-white">
      {/* Immersive Botanical Background */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop" 
          alt="Dark Botanical Leaves" 
          fill 
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Dark overlay to ensure text contrast and premium feel */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-lg mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] bg-zinc-900/60 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 shadow-2xl"
        >
          <div className="mb-8 text-center sm:text-left hidden">
            <h1 className="text-3xl font-bold text-white tracking-tight">Get in Touch</h1>
            <p className="text-white/60 mt-2 text-sm">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-[0.85rem] font-bold text-white mb-2 tracking-wide">
                Name
              </label>
              <input 
                type="text" 
                id="name"
                className="w-full h-12 bg-black/40 border border-white/5 rounded-xl px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-lw-green/50 transition-all placeholder:text-white/20"
                placeholder=""
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-[0.85rem] font-bold text-white mb-2 tracking-wide">
                Email
              </label>
              <input 
                type="email" 
                id="email"
                className="w-full h-12 bg-black/40 border border-white/5 rounded-xl px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-lw-green/50 transition-all placeholder:text-white/20"
                placeholder=""
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-[0.85rem] font-bold text-white mb-2 tracking-wide">
                Message
              </label>
              <textarea 
                id="message"
                className="w-full min-h-[140px] bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-lw-green/50 transition-all resize-none placeholder:text-white/40"
                placeholder="Message here..."
              />
            </div>

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full bg-[#1A362D] hover:bg-[#11241E] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-black/20"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </main>
  )
}