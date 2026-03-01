"use client";

import { Navbar } from "@/components/lifewood/navbar";
import { Projects } from "@/components/lifewood/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Projects />
      </div>
    </main>
  );
}