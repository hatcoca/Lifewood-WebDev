"use client";

import { Navbar } from "@/components/lifewood/navbar";
import { Hero } from "@/components/lifewood/hero";
import { About } from "@/components/lifewood/about";
import { Footer } from "@/components/lifewood/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
    