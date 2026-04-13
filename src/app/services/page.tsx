"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ClipboardCheck,
  Lightbulb,
  GraduationCap,
  BarChart3,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
} from "lucide-react";
import { useI18n } from "@/i18n/context";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const serviceKeys = [
  { key: "audit" as const, icon: ClipboardCheck, img: "/images/img-1.jpg" },
  { key: "consulting" as const, icon: Lightbulb, img: "/images/img-4.jpg" },
  { key: "capacity" as const, icon: GraduationCap, img: "/images/cecos-3.jpeg" },
  { key: "evaluation" as const, icon: BarChart3, img: "/images/img-5.jpg" },
  { key: "studies" as const, icon: BookOpen, img: "/images/img-23.JPG" },
  { key: "risk" as const, icon: ShieldCheck, img: "/images/img-20.jpg" },
];

export default function ServicesPage() {
  const { t, locale } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              {t.services.sectionLabel}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {t.services.pageTitle}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.services.pageSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="py-8 bg-accent/30 border-y border-border sticky top-16 lg:top-20 z-30 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {serviceKeys.map((service) => {
              const Icon = service.icon;
              const data = t.services[service.key];
              return (
                <a
                  key={service.key}
                  href={`#${service.key}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:border-primary/40 hover:bg-primary/5 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <Icon className="w-4 h-4" />
                  {data.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-32">
          {serviceKeys.map((service, index) => {
            const Icon = service.icon;
            const data = t.services[service.key];
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.key}
                id={service.key}
                className="scroll-mt-40"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start`}
                >
                  {/* Content side */}
                  <div className={isReversed ? "lg:order-2" : ""}>
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                          {locale === "fr" ? "Service" : "Service"} {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                          {data.title}
                        </h2>
                      </div>
                    </div>

                    {/* Long description */}
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {data.longDescription}
                    </p>

                    {/* Deliverables */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                        {locale === "fr" ? "Nos prestations" : "Our deliverables"}
                      </h3>
                      <ul className="space-y-3">
                        {data.deliverables.map((item: string, i: number) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Standards + Clients badges */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-accent/50 border border-border flex-1">
                        <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-foreground block mb-0.5">
                            {locale === "fr" ? "Normes" : "Standards"}
                          </span>
                          <span className="text-xs text-muted-foreground leading-relaxed">
                            {data.standards}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-accent/50 border border-border flex-1">
                        <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-foreground block mb-0.5">
                            {locale === "fr" ? "Clients" : "Clients"}
                          </span>
                          <span className="text-xs text-muted-foreground leading-relaxed">
                            {data.clients}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image side */}
                  <div
                    className={`${isReversed ? "lg:order-1" : ""}`}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden sticky top-44">
                      <Image
                        src={service.img}
                        alt={data.title}
                        fill
                        className="object-cover"
                      />
                      {/* Subtle overlay with service number */}
                      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md rounded-xl px-4 py-2 border border-border">
                        <span className="text-xs font-semibold text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          / {String(serviceKeys.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Divider */}
                {index < serviceKeys.length - 1 && (
                  <div className="mt-32 border-t border-border" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-accent/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t.cta.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
              {t.cta.subtitle}
            </p>
            <Link href="/contact">
              <InteractiveHoverButton
                text={t.cta.button}
                className="w-64 mx-auto border-primary text-primary text-base"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
