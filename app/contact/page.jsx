"use client";

import { Navbar } from "@/components/lifewood/navbar";
import { GlobalPresence } from "@/components/lifewood/global-presence";
import { Footer } from "@/components/lifewood/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <GlobalPresence />
      </div>
      <Footer />
    </main>
  );
}