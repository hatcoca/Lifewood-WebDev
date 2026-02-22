"use client";

import React from "react";
import { Navbar } from "@/components/lifewood/navbar";
import { Hero } from "@/components/lifewood/hero";
import { About } from "@/components/lifewood/about";
import { Footer } from "@/components/lifewood/footer";

const Home = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
