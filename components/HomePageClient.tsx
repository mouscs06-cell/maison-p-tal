"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WordReveal from "@/components/WordReveal"
import ProductCard from "@/components/ProductCard"
import { useCart } from "@/context/CartContext"
import { PRODUCTS } from "@/lib/products"
import { CONFIG } from "@/CLIENT_CONFIG"

gsap.registerPlugin(ScrollTrigger)

/* ── Ticker ──────────────────────────────────────────────────── */
function Ticker() {
  const items = [
    "ROSES", "PIVOINES", "RENONCULES", "EUCALYPTUS",
    "DAHLIAS", "ORCHIDÉES", "GYPSOPHILE", "LAVANDE",
  ]
  const repeated = [...items, ...items]

  return (
    <div className="overflow-hidden bg-[#9b7e5e] py-3.5" aria-hidden="true">
      <div className="ticker-track flex items-center whitespace-nowrap" style={{ width: "max-content" }}>
        {repeated.map((item, i) => (
          <span key={i} className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#faf7f2] px-8">
            {item}
            <span className="mx-8 text-[#faf7f2]/40">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Section 2 — Collection Phare ───────────────────────────── */
function CollectionPhare() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const images = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal-img")
    if (!images) return

    images.forEach((img) => {
      gsap.fromTo(
        img,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: img, start: "top 88%" },
        }
      )
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="bg-[#faf7f2] px-8 md:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Top label */}
        <div className="mb-10 md:mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#9b7e5e]">
            Collection Printemps
          </p>
        </div>

        {/* Grid row 1: large left + 2 stacked right */}
        <div className="grid grid-cols-12 gap-3 md:gap-4 mb-3 md:mb-4">
          {/* Large — 7 cols */}
          <Link
            href="/products/coeur-de-paris"
            className="col-span-12 md:col-span-7 group relative overflow-hidden rounded-2xl reveal-img"
          >
            <div className="relative aspect-[4/5] md:aspect-auto md:h-[620px]">
              <Image
                src="/f2.jpg"
                alt="Le Jardin Sauvage"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                quality={80}
                priority
                className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[#1c1a17]/[0.03] mix-blend-multiply pointer-events-none z-[1]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a17]/60 to-transparent z-[2]" />
              <div className="absolute bottom-6 left-6 right-6 z-[3]">
                <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#c9a090] mb-1.5">
                  Bouquets Signature
                </p>
                <h3 className="font-serif italic text-[#faf7f2] text-3xl md:text-4xl leading-tight mb-2">
                  Le Coeur de Paris
                </h3>
                <p className="font-sans text-[#faf7f2]/80 text-sm">185{CONFIG.shop.currencySymbol}</p>
              </div>
            </div>
          </Link>

          {/* Right column — 5 cols, 2 stacked */}
          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-3 md:gap-4">
            <Link
              href="/products/jardin-sauvage"
              className="group relative overflow-hidden rounded-2xl reveal-img"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/f3.jpg"
                  alt="Le Jardin Sauvage"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  quality={80}
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#1c1a17]/[0.03] mix-blend-multiply pointer-events-none z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a17]/55 to-transparent z-[2]" />
                <div className="absolute bottom-4 left-4 right-4 z-[3]">
                  <h3 className="font-serif italic text-[#faf7f2] text-xl leading-tight">
                    Le Jardin Sauvage
                  </h3>
                  <p className="font-sans text-[#faf7f2]/70 text-xs mt-1">155{CONFIG.shop.currencySymbol}</p>
                </div>
              </div>
            </Link>

            <Link
              href="/products/automne-dore"
              className="group relative overflow-hidden rounded-2xl reveal-img"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/f5.jpg"
                  alt="L'Automne Doré"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  quality={80}
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#1c1a17]/[0.03] mix-blend-multiply pointer-events-none z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a17]/55 to-transparent z-[2]" />
                <div className="absolute bottom-4 left-4 right-4 z-[3]">
                  <h3 className="font-serif italic text-[#faf7f2] text-xl leading-tight">
                    L'Automne Doré
                  </h3>
                  <p className="font-sans text-[#faf7f2]/70 text-xs mt-1">165{CONFIG.shop.currencySymbol}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Panoramic row */}
        <Link
          href="/catalog"
          className="group block relative overflow-hidden rounded-2xl reveal-img"
        >
          <div className="relative h-[220px] md:h-[300px]">
            <Image
              src="/f4.jpg"
              alt="Explorer les créations"
              fill
              sizes="100vw"
              quality={80}
              className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[#1c1a17]/[0.03] mix-blend-multiply pointer-events-none z-[1]" />
            <div className="absolute inset-0 bg-[#1c1a17]/40 group-hover:bg-[#1c1a17]/50 transition-colors duration-500 z-[2]" />
            <div className="absolute inset-0 flex items-center justify-center z-[3]">
              <div className="text-center">
                <p className="font-serif italic text-[#faf7f2] text-3xl md:text-4xl lg:text-5xl mb-4">
                  Explorer nos créations
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.3em] text-[#faf7f2] border border-[#faf7f2]/40 px-6 py-2.5 rounded-full group-hover:bg-[#faf7f2]/10 transition-colors">
                  Voir tout
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

/* ── Section 3 — Philosophie / Atelier ──────────────────────── */
function Atelier() {
  const stats = [
    { value: "2 500+", label: "bouquets / an" },
    { value: "12", label: "variétés" },
    { value: "98%", label: "satisfaction" },
    { value: "24h", label: "livraison" },
  ]

  return (
    <section id="atelier" className="bg-[#1c1a17] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[680px] md:min-h-[760px]">
        {/* Image */}
        <div className="relative aspect-[3/4] md:aspect-auto md:min-h-full">
          <Image
            src="/f6.jpg"
            alt="Notre atelier parisien"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1c1a17]/[0.03] mix-blend-multiply pointer-events-none z-[1]" />
          <div className="absolute inset-0 bg-[#1c1a17]/20 z-[2]" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 md:py-20">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#9b7e5e] mb-8">
            Notre Atelier
          </p>

          <WordReveal
            text={"Chaque bouquet\nest une histoire"}
            className="font-serif italic text-[#faf7f2] text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-8"
          />

          <p className="font-sans text-[14px] text-[#8a847c] leading-[1.9] mb-10 max-w-[340px]">
            Depuis {CONFIG.founded}, nous sélectionnons les plus belles fleurs au marché de Rungis
            au petit matin pour composer des arrangements qui racontent vos émotions les plus précieuses.
          </p>

          {/* 3 values */}
          <div className="flex flex-col gap-3 mb-12">
            {["Fleurs fraîches", "Fait main", "Livré avec soin"].map((v) => (
              <div key={v} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#9b7e5e]" aria-hidden="true" />
                <p className="font-sans text-[13px] text-[#faf7f2]/70 uppercase tracking-[0.15em]">{v}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif italic text-[#faf7f2] text-2xl md:text-3xl tabular-nums">{s.value}</p>
                <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#8a847c] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Section 4 — Grille Produits Asymétrique ─────────────────── */
function ProductGrid() {
  return (
    <section className="bg-[#faf7f2] px-8 md:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <WordReveal
            text={"Compositions\nde saison"}
            className="font-serif italic text-[#1c1a17] text-4xl md:text-6xl lg:text-7xl leading-[0.92]"
          />
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <ProductCard product={PRODUCTS[0]} priority />
          <ProductCard product={PRODUCTS[1]} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <ProductCard product={PRODUCTS[2]} />
          <ProductCard product={PRODUCTS[3]} />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <ProductCard product={PRODUCTS[4]} />
          <ProductCard product={PRODUCTS[5]} />
        </div>

        {/* Panoramic — Abonnement Saison */}
        <Link
          href="/products/abonnement-saison"
          className="group block relative overflow-hidden rounded-2xl"
        >
          <div className="relative h-[280px] md:h-[380px]">
            <Image
              src="/f14.jpg"
              alt="L'Abonnement Saison"
              fill
              sizes="100vw"
              quality={80}
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[#1c1a17]/[0.03] mix-blend-multiply pointer-events-none z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c1a17]/70 via-[#1c1a17]/40 to-transparent z-[2]" />
            <div className="absolute inset-0 flex items-center z-[3]">
              <div className="pl-8 md:pl-14">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#c9a090] block mb-3">
                  Offre Spéciale
                </span>
                <h3 className="font-serif italic text-[#faf7f2] text-3xl md:text-5xl leading-tight mb-2">
                  L'Abonnement Saison
                </h3>
                <p className="font-sans text-[#faf7f2]/70 text-sm mb-5">1 bouquet par mois · 3 mois</p>
                <span className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.25em] text-[#faf7f2] border border-[#faf7f2]/30 px-5 py-2.5 rounded-full group-hover:bg-[#faf7f2]/10 transition-colors">
                  195{CONFIG.shop.currencySymbol}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

/* ── Section 5 — Savoir-Faire ────────────────────────────────── */
function SavoirFaire() {
  const steps = [
    {
      src: "/f15.jpg",
      title: "Sélection au marché",
      subtitle: "Rungis · Chaque matin à 5h",
    },
    {
      src: "/f16.jpg",
      title: "Composition à l'atelier",
      subtitle: "Paris 3e · Fait main",
    },
    {
      src: "/f17.jpg",
      title: "Livraison avec soin",
      subtitle: "Paris · Le jour même",
    },
  ]

  return (
    <section id="savoir-faire" className="bg-[#1c1a17] px-8 md:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#9b7e5e] mb-6">
            Notre Savoir-Faire
          </p>
          <WordReveal
            text={"De la tige\nau bouquet"}
            className="font-serif italic text-[#faf7f2] text-4xl md:text-6xl leading-[0.92]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              {/* Circle image */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 ring-1 ring-[#faf7f2]/10">
                <Image
                  src={step.src}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  quality={80}
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#1c1a17]/[0.03] mix-blend-multiply pointer-events-none z-[1]" />
                <div className="absolute inset-0 bg-[#1c1a17]/15 z-[2]" />
              </div>
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#9b7e5e] mb-2">
                0{i + 1}
              </p>
              <h3 className="font-serif italic text-[#faf7f2] text-xl md:text-2xl mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-[12px] text-[#8a847c] tracking-wide">{step.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section 6 — Lookbook / Galerie ─────────────────────────── */
function Lookbook() {
  const images = [
    { src: "/f2.jpg",  span: "md:col-span-1 md:row-span-2" },
    { src: "/f5.jpg",  span: "md:col-span-1" },
    { src: "/f8.jpg",  span: "md:col-span-1" },
    { src: "/f11.jpg", span: "md:col-span-1 md:row-span-2" },
    { src: "/f14.jpg", span: "md:col-span-1" },
    { src: "/f17.jpg", span: "md:col-span-1" },
  ]

  return (
    <section className="bg-[#faf7f2] px-8 md:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#9b7e5e] mb-6">
            Inspirations
          </p>
          <WordReveal
            text={"L'art de\nla fleur"}
            className="font-serif italic text-[#1c1a17] text-4xl md:text-6xl leading-[0.92]"
          />
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4" style={{ gridAutoRows: "280px" }}>
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-xl group ${img.span}`}
            >
              <Image
                src={img.src}
                alt={`Inspiration florale ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                quality={80}
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[#1c1a17]/[0.03] mix-blend-multiply pointer-events-none z-[1]" />
              <div className="absolute inset-0 bg-[#1c1a17]/0 group-hover:bg-[#1c1a17]/20 transition-colors duration-500 z-[2]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section 7 — Campagne Editoriale ────────────────────────── */
function Campagne() {
  return (
    <section className="bg-[#1c1a17] px-8 md:px-20 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[500px] md:min-h-[660px]">
        {/* Left image */}
        <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden rounded-2xl">
          <Image
            src="/f3.jpg"
            alt="Collection Printemps 2025"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1c1a17]/[0.03] mix-blend-multiply pointer-events-none z-[1]" />
        </div>

        {/* Right — text overlay */}
        <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden rounded-2xl">
          <Image
            src="/f18.jpg"
            alt="Collection Printemps 2025"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1c1a17]/[0.03] mix-blend-multiply pointer-events-none z-[1]" />
          <div className="absolute inset-0 bg-[#1c1a17]/30 z-[2]" />
          <div className="absolute inset-0 flex items-end justify-start p-8 md:p-14 z-[3]">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#c9a090] mb-3">
                Paris · 2025
              </p>
              <WordReveal
                text={"PRINTEMPS\n2025"}
                className="font-serif italic text-[#faf7f2] text-5xl md:text-7xl leading-[0.9] mb-6"
              />
              <Link
                href="/catalog"
                className="inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.25em] text-[#faf7f2] border-b border-[#faf7f2]/40 pb-0.5 hover:border-[#faf7f2] transition-colors duration-200"
              >
                Découvrir la collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Section 8 — Témoignages (2-row infinite marquee) ────────── */
function Testimonials() {
  const row1 = CONFIG.testimonials.slice(0, 3)
  const row2 = CONFIG.testimonials.slice(3, 6)

  const TestimonialCard = ({ item }: { item: (typeof CONFIG.testimonials)[0] }) => (
    <div
      className="flex-shrink-0 w-[280px] md:w-[320px] bg-white/70 backdrop-blur-sm border border-[#e8e2d9] rounded-2xl p-6 mx-3"
      style={{ boxShadow: "0 2px 20px rgba(28,26,23,0.06)" }}
    >
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: item.rating }).map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#9b7e5e" aria-hidden="true">
            <path d="M6 1l1.39 2.83L10.5 4.27l-2.25 2.19.53 3.1L6 8.08 3.22 9.56l.53-3.1L1.5 4.27l3.11-.44L6 1z" />
          </svg>
        ))}
      </div>
      <p className="font-serif italic text-[#1c1a17] text-[15px] leading-relaxed mb-4">
        {item.text}
      </p>
      <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#9b7e5e]">
        {item.name}
      </p>
    </div>
  )

  return (
    <section className="bg-[#faf7f2] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-20 mb-12 md:mb-16">
        <WordReveal
          text={"Ce qu'ils\ndisent de nous"}
          className="font-serif italic text-[#1c1a17] text-4xl md:text-6xl leading-[0.92]"
        />
      </div>

      {/* Row 1 - scrolls left */}
      <div className="mb-4 overflow-hidden">
        <div className="ticker-track flex">
          {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right (reverse) */}
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            animation: "tickerScroll 24s linear infinite reverse",
            width: "max-content",
          }}
        >
          {[...row2, ...row2, ...row2, ...row2].map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section 9 — Réassurance ─────────────────────────────────── */
const reassuranceIcons: Record<string, React.ReactNode> = {
  petal: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C7 2 3 6.5 3 10.5c0 5.5 9 11.5 9 11.5s9-6 9-11.5C21 6.5 17 2 12 2z" stroke="#9b7e5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  van: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="1" y="6" width="15" height="12" rx="2" stroke="#9b7e5e" strokeWidth="1.5" />
      <path d="M16 9l4 3v6h-4V9z" stroke="#9b7e5e" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="5.5" cy="18" r="1.5" stroke="#9b7e5e" strokeWidth="1.5" />
      <circle cx="18.5" cy="18" r="1.5" stroke="#9b7e5e" strokeWidth="1.5" />
    </svg>
  ),
  scissors: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="3" stroke="#9b7e5e" strokeWidth="1.5" />
      <circle cx="6" cy="18" r="3" stroke="#9b7e5e" strokeWidth="1.5" />
      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" stroke="#9b7e5e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  letter: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#9b7e5e" strokeWidth="1.5" />
      <path d="M2 8l10 6 10-6" stroke="#9b7e5e" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
}

function Reassurance() {
  return (
    <section className="bg-[#1c1a17] px-8 md:px-20 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {CONFIG.reassurance.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#faf7f2]/6 border border-[#faf7f2]/10 flex items-center justify-center mb-4">
                {reassuranceIcons[item.icon]}
              </div>
              <h3 className="font-serif italic text-[#faf7f2] text-lg mb-1.5">{item.label}</h3>
              <p className="font-sans text-[12px] text-[#8a847c] leading-relaxed max-w-[180px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section 10 — Newsletter ─────────────────────────────────── */
function Newsletter() {
  return (
    <section className="relative bg-[#faf7f2] px-8 md:px-20 py-24 md:py-36 overflow-hidden">
      {/* Background image filigrane */}
      <div className="absolute inset-0 opacity-[0.06]">
        <Image src="/f1.jpg" alt="" fill className="object-cover object-center" aria-hidden="true" />
      </div>

      <div className="relative max-w-xl mx-auto text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#9b7e5e] mb-6">
          La lettre florale
        </p>
        <h2 className="font-serif italic text-[#1c1a17] text-3xl md:text-5xl leading-[0.95] mb-4">
          Recevoir nos inspirations florales
        </h2>
        <p className="font-sans text-[14px] text-[#8a847c] leading-relaxed mb-10 max-w-sm mx-auto">
          Sélections de saison, coulisses de l'atelier et compositions exclusives, directement dans votre boite.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-[400px] mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Votre adresse email
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Votre adresse email"
            className="flex-1 px-5 py-3.5 rounded-full border border-[#e8e2d9] bg-white font-sans text-[13px] text-[#1c1a17] placeholder:text-[#8a847c] focus:outline-none focus:ring-2 focus:ring-[#9b7e5e]/40 focus:border-[#9b7e5e]"
          />
          <button
            type="submit"
            className="px-6 py-3.5 bg-[#1c1a17] text-[#faf7f2] font-sans text-[10px] uppercase tracking-[0.25em] rounded-full whitespace-nowrap hover:bg-[#9b7e5e] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#9b7e5e]"
          >
            S'inscrire
          </button>
        </form>

        <p className="font-sans text-[10px] text-[#8a847c] mt-4">
          Aucun spam. Désabonnement possible à tout moment.
        </p>
      </div>
    </section>
  )
}

/* ── Main Component ──────────────────────────────────────────── */
export default function HomePageClient() {
  return (
    <>
      <Header />

      {/* Section 1 — Hero */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/fleurs.mp4"
        bgImageSrc="/f1.jpg"
        title="MAISON PÉTALE"
        date="Collection Printemps 2025"
        scrollToExpand="Défiler pour découvrir"
        textBlend={false}
      >
        <div className="max-w-4xl mx-auto text-center py-20 px-6">
          <p className="font-sans text-[9px] uppercase tracking-[0.5em] text-[#9b7e5e] mb-6">
            ART FLORAL · PARIS
          </p>
          <h2 className="font-serif italic text-[#faf7f2] text-4xl md:text-6xl leading-[0.95] mb-8">
            L'art floral,<br />sublimé
          </h2>
          <p className="font-sans text-[15px] text-[#faf7f2]/70 leading-[1.8] max-w-lg mx-auto mb-10">
            Chaque composition naît d'un dialogue entre la fleur sauvage et l'élégance parisienne.
          </p>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#faf7f2] text-[#1c1a17] font-sans text-[10px] uppercase tracking-[0.28em] rounded-full hover:bg-[#9b7e5e] hover:text-[#faf7f2] transition-colors duration-400"
          >
            Découvrir nos créations
          </Link>
        </div>
      </ScrollExpandMedia>

      {/* Ticker */}
      <Ticker />

      {/* Section 2 — Collection Phare */}
      <CollectionPhare />

      {/* Section 3 — Atelier */}
      <Atelier />

      {/* Section 4 — Grille Produits */}
      <ProductGrid />

      {/* Section 5 — Savoir-Faire */}
      <SavoirFaire />

      {/* Section 6 — Lookbook */}
      <Lookbook />

      {/* Section 7 — Campagne Editoriale */}
      <Campagne />

      {/* Section 8 — Testimonials */}
      <Testimonials />

      {/* Section 9 — Reassurance */}
      <Reassurance />

      {/* Section 10 — Newsletter */}
      <Newsletter />

      <Footer />
    </>
  )
}
