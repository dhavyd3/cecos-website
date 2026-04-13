"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useI18n } from "@/i18n/context";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img-9.jpg"
          alt="CECOS consulting"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60 dark:from-zinc-950 dark:via-zinc-950/90 dark:to-zinc-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              {t.hero.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link href="/contact">
              <InteractiveHoverButton
                text={t.hero.cta}
                className="w-48 border-primary text-primary"
              />
            </Link>
            <Link
              href="/services"
              className="px-6 py-2.5 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-accent transition-all duration-200"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
