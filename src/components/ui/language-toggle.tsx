"use client";

import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/context";
import { usePageTransition } from "@/components/ui/page-transition";
import { motion } from "framer-motion";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, toggleLocale } = useI18n();
  const { isTransitioning, startPageTransition } = usePageTransition();
  const isFr = locale === "fr";

  const handleToggle = () => {
    startPageTransition(toggleLocale);
  };

  return (
    <div
      className={cn(
        "relative flex w-[72px] h-8 p-0.5 rounded-full cursor-pointer transition-all duration-300 border",
        "bg-zinc-950 border-zinc-800 dark:bg-zinc-950 dark:border-zinc-800",
        "bg-white border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800",
        isTransitioning && "pointer-events-none opacity-80",
        className
      )}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
      aria-label={`Switch to ${isFr ? "English" : "French"}`}
      aria-busy={isTransitioning}
    >
      <motion.div
        className="absolute top-0.5 w-[32px] h-[28px] rounded-full bg-primary"
        animate={{ left: isFr ? "2px" : "36px" }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <div className="relative z-10 flex w-full">
        <button
          className={cn(
            "flex-1 text-xs font-semibold transition-colors duration-200 rounded-full",
            isFr ? "text-primary-foreground" : "text-muted-foreground"
          )}
          type="button"
        >
          FR
        </button>
        <button
          className={cn(
            "flex-1 text-xs font-semibold transition-colors duration-200 rounded-full",
            !isFr ? "text-primary-foreground" : "text-muted-foreground"
          )}
          type="button"
        >
          EN
        </button>
      </div>
    </div>
  );
}
