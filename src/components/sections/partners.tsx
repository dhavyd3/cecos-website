"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";

const partners = [
  "Banque Mondiale",
  "Union Européenne",
  "Banque Africaine de Développement",
  "Fonds Mondial",
  "GAVI Alliance",
  "OMS",
  "FIDA",
  "KFW",
  "USAID",
  "ONUSIDA",
  "OPEP",
  "Deloitte",
];

export function PartnersSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            {t.partners.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.partners.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center p-5 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 min-h-[80px]"
            >
              <span className="text-sm font-medium text-muted-foreground text-center leading-tight">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
