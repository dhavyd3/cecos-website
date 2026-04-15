"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/context";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-cecos-dark.png"
                alt="CECOS"
                width={140}
                height={70}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - HQ */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {t.contact.info.headquarters}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-zinc-400">
                  {t.contact.info.headquartersAddress}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-zinc-400">
                  {t.contact.info.phone}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-zinc-400">
                  {t.contact.info.email}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact - Branch */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {t.contact.info.branch}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-zinc-400">
                  {t.contact.info.branchAddress}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-zinc-400">
                  {t.contact.info.phoneAlt}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} CECOS. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-600">
              NIF: 4000054298 | RC: 50488
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
