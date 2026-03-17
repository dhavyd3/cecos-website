import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CECOS — Cabinet d'Expertise, de Conseil et de Services",
  description:
    "Plus de 20 ans d'excellence en audit, conseil en management et renforcement des capacités. Bujumbura, Burundi | Genève, Suisse.",
  keywords: [
    "CECOS",
    "audit",
    "conseil",
    "consulting",
    "Burundi",
    "Genève",
    "management",
    "capacités",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
