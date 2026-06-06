"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useCart } from "@/context/CartContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import type { Product } from "@/lib/products"
import { CONFIG } from "@/CLIENT_CONFIG"

interface Props {
  product: Product
  related: Product[]
}

export default function ProductDetailClient({ product, related }: Props) {
  const { addItem } = useCart()
  const [adding, setAdding] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAddToCart = async () => {
    setAdding(true)
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    })
    await new Promise((r) => setTimeout(r, 700))
    setAdding(false)
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <>
      <Header />

      <main className="bg-[#faf7f2] pt-28 md:pt-32">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-8 md:px-20 py-4">
          <ol className="flex items-center gap-2 font-sans text-[11px] text-[#8a847c]">
            <li>
              <Link href="/" className="hover:text-[#1c1a17] transition-colors">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/catalog" className="hover:text-[#1c1a17] transition-colors">
                Nos créations
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#1c1a17]" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>

        {/* Product main */}
        <div className="max-w-7xl mx-auto px-8 md:px-20 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#f0ebe3]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  priority
                  className="object-cover object-center"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#faf7f2] bg-[#9b7e5e] px-3 py-1.5 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-start"
            >
              {/* Category */}
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#9b7e5e] mb-3">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="font-serif italic text-[#1c1a17] text-4xl md:text-5xl leading-[0.95] mb-2">
                {product.title}
              </h1>

              {/* Subtitle */}
              <p className="font-sans text-[14px] text-[#8a847c] mb-5 leading-relaxed">
                {product.subtitle}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-serif italic text-[#1c1a17] text-3xl tabular-nums">
                  {product.price}{CONFIG.shop.currencySymbol}
                </span>
                <span className="font-sans text-[11px] text-[#8a847c] uppercase tracking-[0.15em]">
                  Livraison le jour même
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-[14px] text-[#8a847c] leading-[1.9] mb-8 max-w-md">
                {product.longDescription}
              </p>

              {/* CTA */}
              <motion.button
                onClick={handleAddToCart}
                disabled={adding}
                whileTap={{ scale: 0.98 }}
                className={`w-full md:max-w-xs py-4 rounded-full font-sans text-[11px] uppercase tracking-[0.28em] transition-all duration-400 mb-4 focus:outline-none focus:ring-2 focus:ring-[#9b7e5e] ${
                  added
                    ? "bg-[#7a8c6e] text-[#faf7f2]"
                    : "bg-[#1c1a17] text-[#faf7f2] hover:bg-[#9b7e5e]"
                }`}
              >
                {adding ? "Ajout..." : added ? "Ajouté au panier" : "Ajouter au panier"}
              </motion.button>

              {/* Trust info */}
              <div className="flex flex-col gap-2 mb-10">
                <p className="font-sans text-[11px] text-[#8a847c] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7a8c6e] flex-shrink-0" aria-hidden="true" />
                  Livraison le jour même à Paris (avant 14h)
                </p>
                <p className="font-sans text-[11px] text-[#8a847c] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7a8c6e] flex-shrink-0" aria-hidden="true" />
                  Carte manuscrite offerte avec chaque commande
                </p>
                <p className="font-sans text-[11px] text-[#8a847c] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7a8c6e] flex-shrink-0" aria-hidden="true" />
                  Fleurs sélectionnées le matin même à Rungis
                </p>
              </div>

              {/* Product details */}
              <div className="border-t border-[#e8e2d9] pt-6 space-y-4">
                {/* Composition */}
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none py-3 border-b border-[#e8e2d9]">
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#1c1a17]">
                      Composition
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <ul className="mt-3 space-y-1.5">
                    {product.ingredients.map((ing) => (
                      <li key={ing} className="font-sans text-[13px] text-[#8a847c] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#9b7e5e]" aria-hidden="true" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </details>

                {/* Entretien */}
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none py-3 border-b border-[#e8e2d9]">
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#1c1a17]">
                      Entretien
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <p className="mt-3 font-sans text-[13px] text-[#8a847c] leading-relaxed">
                    {product.usage}
                  </p>
                </details>

                {/* Dimensions */}
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none py-3 border-b border-[#e8e2d9]">
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#1c1a17]">
                      Dimensions
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <div className="mt-3 space-y-2">
                    <p className="font-sans text-[13px] text-[#8a847c]">{product.volume}</p>
                    <p className="font-sans text-[13px] text-[#8a847c]">{product.texture}</p>
                  </div>
                </details>

                {/* Certification */}
                <div className="py-3">
                  <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#9b7e5e] mb-2">
                    Certification
                  </p>
                  <p className="font-sans text-[13px] text-[#8a847c]">{product.certification}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="bg-[#faf7f2] px-8 md:px-20 py-16 md:py-24 border-t border-[#e8e2d9]">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-serif italic text-[#1c1a17] text-3xl mb-10">
                Vous aimerez aussi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-[60] md:hidden bg-[#faf7f2]/95 backdrop-blur-sm border-t border-[#e8e2d9] px-4 py-3.5 safe-area-inset-bottom">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-serif italic text-[#1c1a17] text-lg">{product.title}</p>
            <p className="font-sans text-[12px] text-[#9b7e5e]">{product.price}{CONFIG.shop.currencySymbol}</p>
          </div>
          <motion.button
            onClick={handleAddToCart}
            disabled={adding}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 px-6 py-3 bg-[#1c1a17] text-[#faf7f2] font-sans text-[10px] uppercase tracking-[0.22em] rounded-full hover:bg-[#9b7e5e] transition-colors duration-300"
          >
            {adding ? "..." : "Ajouter"}
          </motion.button>
        </div>
      </div>

      <Footer />
    </>
  )
}
