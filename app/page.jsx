"use client";

import { Hero } from "@/components/lifewood/hero"
import { About } from "@/components/lifewood/about"
import { GlobalReach } from "@/components/lifewood/global-reach"
import { Services } from "@/components/lifewood/services"

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-[#060606] selection:bg-lw-green selection:text-white">
      {/* Sticky Hero Background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Hero />
      </div>
      
      {/* Scrollable Content Overlay */}
      <div className="relative z-10 bg-white dark:bg-[#060606] shadow-[0_-20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <About />
        <GlobalReach />
        <Services />
      </div>
    </main>
  );
}
