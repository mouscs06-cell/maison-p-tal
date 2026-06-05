"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "@/context/CartContext"
import { CONFIG } from "@/CLIENT_CONFIG"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count, openCart } = useCart()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500`}
      >
        <div className="flex items-center justify-center px-4 md:px-8 pt-5">
          <div
            className={`w-full max-w-5xl flex items-center justify-between px-5 md:px-8 py-3.5 rounded-full transition-all duration-500 ${
              scrolled || menuOpen
                ? "bg-[#faf7f2]/95 backdrop-blur-md border border-[#e8e2d9] shadow-[0_4px_24px_rgba(28,26,23,0.08)]"
                : "bg-[#faf7f2]/80 backdrop-blur-sm border border-[#e8e2d9]/60"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-[#1c1a17] leading-none flex-shrink-0"
            >
              MAISON PÉTALE
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
              {CONFIG.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#8a847c] hover:text-[#1c1a17] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Cart */}
              <button
                onClick={openCart}
                aria-label={`Panier, ${count} article${count !== 1 ? "s" : ""}`}
                className="relative w-9 h-9 flex items-center justify-center text-[#1c1a17] hover:text-[#9b7e5e] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4M3 6h18M16 10a4 4 0 01-8 0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#9b7e5e] text-[#faf7f2] font-sans text-[9px] font-medium flex items-center justify-center tabular-nums">
                    {count > 9 ? "9+" : count}
                  </span>
                )}
              </button>

              {/* CTA - desktop */}
              <Link
                href={CONFIG.nav.cta.href}
                className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-[#1c1a17] text-[#faf7f2] font-sans text-[10px] uppercase tracking-[0.22em] hover:bg-[#9b7e5e] transition-colors duration-300"
              >
                {CONFIG.nav.cta.label}
              </Link>

              {/* Hamburger - mobile */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
              >
                <span
                  className={`w-5 h-px bg-[#1c1a17] block transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <span
                  className={`w-5 h-px bg-[#1c1a17] block transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-[0px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[70] bg-[#faf7f2]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8" aria-label="Menu principal">
              {CONFIG.nav.links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif italic text-4xl text-[#1c1a17] hover:text-[#9b7e5e] transition-colors"
                  >
                    {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={CONFIG.nav.cta.href}
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-flex items-center px-8 py-3.5 rounded-full bg-[#1c1a17] text-[#faf7f2] font-sans text-[11px] uppercase tracking-[0.25em] hover:bg-[#9b7e5e] transition-colors duration-300"
                >
                  Commander
                </Link>
              </motion.div>
            </nav>

            <div className="absolute bottom-12 flex flex-col items-center gap-1">
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8a847c]">
                {CONFIG.contact.hours}
              </p>
              <p className="font-sans text-xs text-[#8a847c]">
                {CONFIG.contact.phone}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
