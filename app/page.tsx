"use client";

import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
