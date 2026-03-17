"use client";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { I18nProvider } from "@/i18n/context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  PageTransitionLoader,
  PageTransitionContent,
} from "@/components/ui/page-transition";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        <PageTransitionLoader />
        <Navbar />
        <main className="min-h-screen">
          <PageTransitionContent>{children}</PageTransitionContent>
        </main>
        <Footer />
      </I18nProvider>
    </ThemeProvider>
  );
}
