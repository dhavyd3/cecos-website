"use client";

import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useI18n } from "@/i18n/context";

const testimonialsFr = [
  {
    quote:
      "CECOS a réalisé un audit financier rigoureux de notre programme, en conformité totale avec les normes ISA. Leur professionnalisme et leur connaissance du contexte africain sont exceptionnels.",
    name: "Programme de Santé Publique",
    designation: "Financé par le Fonds Mondial — Burundi",
    src: "/images/cecos-2.jpeg",
  },
  {
    quote:
      "L'évaluation à mi-parcours réalisée par le cabinet CECOS nous a permis de réorienter notre stratégie et d'optimiser l'utilisation de nos ressources. Un partenaire de confiance.",
    name: "Projet de Développement Agricole",
    designation: "Financé par le FIDA — Afrique de l'Est",
    src: "/images/img-8.jpg",
  },
  {
    quote:
      "La formation en gestion des risques dispensée par Dr. Ntezimana a été un véritable catalyseur pour notre équipe. CECOS combine expertise académique et expérience terrain.",
    name: "Organisation Internationale",
    designation: "Basée à Genève — Suisse",
    src: "/images/img-10.jpg",
  },
  {
    quote:
      "Le renforcement des capacités mené par CECOS a transformé la gestion financière de notre organisation. Une équipe compétente et engagée.",
    name: "Projet d'Appui Institutionnel",
    designation: "Financé par la Banque Mondiale — Burundi",
    src: "/images/img-23.JPG",
  },
];

const testimonialsEn = [
  {
    quote:
      "CECOS conducted a rigorous financial audit of our program, fully compliant with ISA standards. Their professionalism and understanding of the African context are exceptional.",
    name: "Public Health Program",
    designation: "Funded by the Global Fund — Burundi",
    src: "/images/cecos-2.jpeg",
  },
  {
    quote:
      "The mid-term evaluation by CECOS allowed us to reorient our strategy and optimize resource utilization. A trusted partner.",
    name: "Agricultural Development Project",
    designation: "Funded by IFAD — East Africa",
    src: "/images/img-8.jpg",
  },
  {
    quote:
      "The risk management training led by Dr. Ntezimana was a true catalyst for our team. CECOS combines academic expertise with field experience.",
    name: "International Organization",
    designation: "Based in Geneva — Switzerland",
    src: "/images/img-10.jpg",
  },
  {
    quote:
      "The capacity building led by CECOS transformed our organization's financial management. A competent and dedicated team.",
    name: "Institutional Support Project",
    designation: "Funded by the World Bank — Burundi",
    src: "/images/img-23.JPG",
  },
];

export function TestimonialsSection() {
  const { t, locale } = useI18n();
  const testimonials = locale === "fr" ? testimonialsFr : testimonialsEn;

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-4"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            {t.testimonials.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.testimonials.title}
          </h2>
        </motion.div>

        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}
