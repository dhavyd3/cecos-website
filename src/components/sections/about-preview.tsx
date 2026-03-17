"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/context";

const stats = [
  { valueKey: "20+", labelKey: "experience" as const },
  { valueKey: "500+", labelKey: "projects" as const },
  { valueKey: "15+", labelKey: "countries" as const },
  { valueKey: "10+", labelKey: "partners" as const },
];

export function AboutPreviewSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/img-3.jpg"
                alt="CECOS team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-background shadow-xl hidden md:block">
              <Image
                src="/images/img-4.jpg"
                alt="CECOS consulting session"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              {t.about.sectionLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              {t.about.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.about.description}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.about.description2}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.labelKey} className="text-center p-4 rounded-xl bg-accent/50">
                  <div className="text-2xl font-bold text-primary">
                    {stat.valueKey}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {t.about[stat.labelKey]}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              {t.about.sectionLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
