"use client";

import { Navbar } from "@/components/lifewood/navbar";
import { ESG } from "@/components/lifewood/esg";
import { Footer } from "@/components/lifewood/footer";

export default function ESGPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ESG />
      </div>
      <Footer />
    </main>
  );
}