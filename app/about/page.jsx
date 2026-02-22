"use client";

import { Navbar } from "@/components/lifewood/navbar";
import { About } from "@/components/lifewood/about";
import { Footer } from "@/components/lifewood/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}