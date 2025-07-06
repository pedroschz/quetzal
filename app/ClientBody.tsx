"use client";

import { ScrollProgress } from "@/components/scroll-progress";
import { Header } from "@/components/header";
import { MissionSection } from "@/components/mission-section";
import { StatsSection } from "@/components/stats-section";
import { DigitalDivideSection } from "@/components/digital-divide-section";
import { GoalSection } from "@/components/goal-section";
import { HowSection } from "@/components/how-section";
import { ProcessSection } from "@/components/process-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export function ClientBody() {
  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-dark">
        <Header />
        <HeroSection />
        <MissionSection />
        <StatsSection />
        <TestimonialsSection />
        <DigitalDivideSection />
        <GoalSection />
        <HowSection />
        <ProcessSection />
        <Footer />
      </div>
    </>
  );
} 