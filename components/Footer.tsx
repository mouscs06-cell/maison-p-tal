"use client"

import Link from "next/link"
import { CONFIG } from "@/CLIENT_CONFIG"

const footerCollections = [
  { label: "Bouquets Signature", href: "/catalog" },
  { label: "Bouquets Poétiques", href: "/catalog" },
  { label: "Bouquets Champêtres", href: "/catalog" },
  { label: "Plantes", href: "/catalog" },
  { label: "Fleurs Séchées", href: "/catalog" },
  { label: "Abonnements", href: "/catalog" },
]

const footerService = [
  { label: "Guide des tailles", href: "/livraison" },
  { label: "Livraison", href: "/livraison" },
  { label: "Retours", href: "/retours" },
  { label: "FAQ", href: "/faq" },
]

const footerLegal = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1c1a17] text-[#faf7f2]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <p className="font-serif italic text-3xl text-[#faf7f2] mb-4">
              Maison Pétale
            </p>
            <p className="font-sans text-[13px] text-[#8a847c] leading-relaxed mb-6 max-w-[220px]">
              {CONFIG.description}
            </p>
            <div className="flex flex-col gap-1.5">
              <p className="font-sans text-[12px] text-[#8a847c]">{CONFIG.contact.address}</p>
              <a
                href={`mailto:${CONFIG.contact.email}`}
                className="font-sans text-[12px] text-[#c9a090] hover:text-[#faf7f2] transition-colors"
              >
                {CONFIG.contact.email}
              </a>
              <a
                href={`tel:${CONFIG.contact.phone.replace(/\s/g, "")}`}
                className="font-sans text-[12px] text-[#8a847c] hover:text-[#faf7f2] transition-colors"
              >
                {CONFIG.contact.phone}
              </a>
              <p className="font-sans text-[12px] text-[#8a847c]">{CONFIG.contact.hours}</p>
            </div>

            {/* Instagram */}
            {CONFIG.social.instagram && (
              <a
                href={CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur Instagram"
                className="mt-6 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-[#8a847c] hover:text-[#faf7f2] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                Instagram
              </a>
            )}
          </div>

          {/* Collections */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8a847c] mb-5">
              Collections
            </p>
            <ul className="space-y-2.5">
              {footerCollections.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-sans text-[13px] text-[#faf7f2]/70 hover:text-[#faf7f2] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8a847c] mb-5">
              Service
            </p>
            <ul className="space-y-2.5">
              {footerService.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-sans text-[13px] text-[#faf7f2]/70 hover:text-[#faf7f2] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8a847c] mb-5">
              Atelier
            </p>
            <div className="space-y-3">
              <p className="font-sans text-[13px] text-[#faf7f2]/70 leading-relaxed">
                {CONFIG.contact.address}
              </p>
              <p className="font-sans text-[13px] text-[#8a847c]">
                Fondé en {CONFIG.founded}
              </p>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {CONFIG.social.instagram && (
                <a
                  href={CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-[#faf7f2]/15 flex items-center justify-center text-[#8a847c] hover:border-[#9b7e5e] hover:text-[#9b7e5e] transition-all duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#faf7f2]/8">
        <div className="max-w-7xl mx-auto px-8 md:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[11px] text-[#8a847c] order-2 md:order-1">
            &copy; {year} {CONFIG.brandName}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 order-1 md:order-2">
            {footerLegal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans text-[11px] text-[#8a847c] hover:text-[#faf7f2] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
