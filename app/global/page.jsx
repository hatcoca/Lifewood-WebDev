"use client";

import { Navbar } from "@/components/lifewood/navbar";
import { PhilanthropyImpact } from "@/components/lifewood/philanthropy-impact";

export default function GlobalPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <PhilanthropyImpact />
      </div>
    </main>
  );
}