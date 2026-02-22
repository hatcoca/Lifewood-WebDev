"use client";

import { Navbar } from "@/components/lifewood/navbar";
import { Services } from "@/components/lifewood/services";
import { Footer } from "@/components/lifewood/footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </main>
  );
}