"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useCart } from "@/context/CartContext"
import type { Product } from "@/lib/products"
import { CONFIG } from "@/CLIENT_CONFIG"

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useCart()
  const [adding, setAdding] = useState(false)

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setAdding(true)
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    })
    await new Promise((r) => setTimeout(r, 700))
    setAdding(false)
  }

  return (
    <Link href={`/products/${product.id}`} className="group block">
      {/* Double-Bezel outer shell */}
      <div className="rounded-2xl bg-[#f0ebe3]/40 p-1.5 ring-1 ring-[#1c1a17]/5">
        {/* Inner core */}
        <div className="rounded-[calc(1rem-6px)] bg-[#faf7f2] overflow-hidden">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-[#f0ebe3]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              priority={priority}
              className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
            />
            {/* Global image color treatment */}
            <div className="absolute inset-0 bg-[#1c1a17]/[0.03] mix-blend-multiply pointer-events-none z-[1]" />
            {/* Permanent bottom gradient */}
            <div className="absolute bottom-0 inset-x-0 h-2/5 bg-gradient-to-t from-[#1c1a17]/25 to-transparent z-[2]" />

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-3 left-3 z-[3]">
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#faf7f2] bg-[#1c1a17] px-2.5 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>
            )}

            {/* Add to cart on hover */}
            <div className="absolute bottom-3 inset-x-3 z-[3] translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)]">
              <motion.button
                onClick={handleAddToCart}
                disabled={adding}
                whileTap={{ scale: 0.97 }}
                aria-label={`Ajouter ${product.title} au panier`}
                className="w-full py-3 bg-white/90 backdrop-blur-sm text-[#1c1a17] font-sans text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-[#1c1a17] hover:text-[#faf7f2] transition-colors duration-300 disabled:opacity-70"
              >
                {adding ? "Ajouté" : "Ajouter au panier"}
              </motion.button>
            </div>
          </div>

          {/* Card info */}
          <div className="px-4 py-4">
            <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#9b7e5e] mb-1">
              {product.category}
            </p>
            <h3 className="font-serif italic text-[#1c1a17] text-xl leading-tight mb-0.5">
              {product.title}
            </h3>
            <p className="font-sans text-[12px] text-[#8a847c] mb-3 leading-relaxed">
              {product.subtitle}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-sans text-[#1c1a17] text-base font-medium tabular-nums">
                {product.price}{CONFIG.shop.currencySymbol}
              </span>
              <span className="font-sans text-[10px] text-[#8a847c] uppercase tracking-[0.12em]">
                Livraison J+0
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
