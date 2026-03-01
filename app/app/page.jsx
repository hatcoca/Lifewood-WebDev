"use client";

import { Navbar } from "@/components/lifewood/navbar";
import { Hero } from "@/components/lifewood/hero";
import { MediaLab } from "@/components/lifewood/media-lab";
import { About } from "@/components/lifewood/about";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <MediaLab />
      <About />
    </main>
  );
}
