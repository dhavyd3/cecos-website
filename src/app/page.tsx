"use client";

import { HeroSection } from "@/components/sections/hero";
import { AboutPreviewSection } from "@/components/sections/about-preview";
import { ServicesPreviewSection } from "@/components/sections/services-preview";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PartnersSection } from "@/components/sections/partners";
import { CTASection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <ServicesPreviewSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}
