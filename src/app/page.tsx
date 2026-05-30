"use client";

import { AmbientBackground } from "@/components/landing/ambient-background";
import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { StatsSection } from "@/components/landing/stats-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050506]">
      {/* Layered ambient background */}
      <AmbientBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10 flex-1">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
