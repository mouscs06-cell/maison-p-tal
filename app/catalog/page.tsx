"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import { PRODUCTS, CATEGORIES } from "@/lib/products"
import { motion, AnimatePresence } from "framer-motion"

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("Tout")

  const filtered =
    activeCategory === "Tout"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory)

  return (
    <>
      <Header />

      <main className="bg-[#faf7f2] min-h-[100dvh]">
        {/* Hero banner */}
        <div className="bg-[#1c1a17] pt-36 pb-16 px-8 md:px-20">
          <div className="max-w-7xl mx-auto">
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#9b7e5e] mb-4">
              Art Floral · Paris
            </p>
            <h1 className="font-serif italic text-[#faf7f2] text-5xl md:text-7xl leading-[0.9]">
              Nos Créations
            </h1>
          </div>
        </div>

        {/* Delivery banner */}
        <div className="bg-[#9b7e5e] py-3.5 px-5 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#faf7f2]">
            Livraison le jour même · Commande avant 14h à Paris
          </p>
        </div>

        {/* Filters */}
        <div className="sticky top-0 z-[40] bg-[#faf7f2]/95 backdrop-blur-sm border-b border-[#e8e2d9] px-8 md:px-20 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 font-sans text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-all duration-250 ${
                    activeCategory === cat
                      ? "bg-[#1c1a17] text-[#faf7f2] border-[#1c1a17]"
                      : "bg-transparent text-[#8a847c] border-[#e8e2d9] hover:border-[#1c1a17] hover:text-[#1c1a17]"
                  }`}
                >
                  {cat === "Tout" ? "Tout" : cat.replace("Bouquets ", "")}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="max-w-7xl mx-auto px-8 md:px-20 py-12 md:py-16">
          <p className="font-sans text-[12px] text-[#8a847c] mb-8">
            {filtered.length} {filtered.length === 1 ? "composition" : "compositions"}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProductCard product={product} priority={i < 4} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </>
  )
}
