"use client";

import { Navbar } from "@/components/lifewood/navbar";
import { Careers } from "@/components/lifewood/careers";
import { Footer } from "@/components/lifewood/footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Careers />
      </div>
      <Footer />
    </main>
  );
}