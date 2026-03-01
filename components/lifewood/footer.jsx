"use client"

import Link from "next/link"
import { Linkedin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 bg-white dark:bg-[#060606] pb-2 lg:pb-4">
      <div className="bg-[#193226] rounded-[2rem] lg:rounded-[3rem] text-white pt-16 pb-12 px-8 lg:px-24 mx-2 lg:mx-4 overflow-hidden relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 min-h-[220px]">
            
            {/* Left Column */}
            <div className="flex flex-col justify-between h-full space-y-16">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-[14px] w-[14px] rounded-full bg-[#fca13f]" />
                  <span className="text-[1.3rem] font-bold tracking-tight mt-1">lifewood</span>
                </div>
                <p className="text-[0.85rem] font-medium text-white/90 max-w-md leading-relaxed tracking-wide">
                  We provide global Data Engineering Services to enable AI Solutions.
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-[1.3rem] font-medium tracking-tight">Contact Us</h2>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-[0.6rem] font-medium text-white/50 uppercase tracking-[0.1em]">
                  <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                  <Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link>
                  <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between items-start lg:items-end h-full space-y-16 lg:space-y-0">
              <div className="space-y-5 lg:text-center mr-auto lg:mr-0 lg:ml-auto w-full lg:w-auto">
                <p className="text-[0.65rem] font-bold tracking-[0.2em] text-white/90">FIND US ON:</p>
                <div className="flex items-center gap-8 justify-start lg:justify-center">
                  <a href="#" className="flex flex-col items-center gap-3 group">
                    <Linkedin size={22} strokeWidth={1.5} className="group-hover:text-[#fca13f] transition-colors" />
                    <span className="text-[0.55rem] uppercase font-bold text-white/50 group-hover:text-white transition-colors tracking-widest">LinkedIn</span>
                  </a>
                  <a href="#" className="flex flex-col items-center gap-3 group">
                    <Facebook size={22} strokeWidth={1.5} className="group-hover:text-[#fca13f] transition-colors" />
                    <span className="text-[0.55rem] uppercase font-bold text-white/50 group-hover:text-white transition-colors tracking-widest">Facebook</span>
                  </a>
                  <a href="#" className="flex flex-col items-center gap-3 group">
                    <Instagram size={22} strokeWidth={1.5} className="group-hover:text-[#fca13f] transition-colors" />
                    <span className="text-[0.55rem] uppercase font-bold text-white/50 group-hover:text-white transition-colors tracking-widest">Instagram</span>
                  </a>
                  <a href="#" className="flex flex-col items-center gap-3 group">
                    <Youtube size={22} strokeWidth={1.5} className="group-hover:text-[#fca13f] transition-colors" />
                    <span className="text-[0.55rem] uppercase font-bold text-white/50 group-hover:text-white transition-colors tracking-widest">YouTube</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col-reverse lg:flex-row items-start lg:items-end justify-between w-full lg:w-auto lg:gap-16 pt-4 lg:pt-0">
                <p className="text-[0.65rem] font-semibold tracking-wider text-white/50 mt-6 lg:mt-0 mb-1">
                  © {new Date().getFullYear()} Lifewood - All Rights Reserved
                </p>
                <button className="flex items-center gap-3 bg-white text-zinc-900 px-5 py-2.5 rounded-full text-[0.7rem] font-bold hover:bg-zinc-100 transition-colors shadow-lg self-end lg:self-auto">
                  <MessageCircle size={15} />
                  How can I help?
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
