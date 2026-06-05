"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "@/context/CartContext"
import { CONFIG } from "@/CLIENT_CONFIG"

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, count } = useCart()
  const panelRef = useRef<HTMLDivElement>(null)

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart()
    }
    if (isOpen) document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [isOpen, closeCart])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const shipping =
    total >= CONFIG.shop.freeShippingThreshold ? 0 : CONFIG.shop.shippingCost
  const orderTotal = total + shipping

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1c1a17]/40 backdrop-blur-sm z-[90]"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            ref={panelRef}
            role="dialog"
            aria-label="Votre panier"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed right-0 top-0 h-full w-full max-w-[420px] bg-[#faf7f2] z-[91] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8e2d9]">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#9b7e5e]">
                  Votre panier
                </p>
                <p className="font-sans text-sm text-[#8a847c] mt-0.5">
                  {count} {count === 1 ? "article" : "articles"}
                </p>
              </div>
              <button
                onClick={closeCart}
                aria-label="Fermer le panier"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#e8e2d9] text-[#8a847c] hover:border-[#1c1a17] hover:text-[#1c1a17] transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Delivery banner */}
            {total < CONFIG.shop.freeShippingThreshold && (
              <div className="px-6 py-3 bg-[#f0ebe3] border-b border-[#e8e2d9]">
                <p className="font-sans text-xs text-[#8a847c] leading-relaxed">
                  Plus que{" "}
                  <strong className="text-[#9b7e5e]">
                    {(CONFIG.shop.freeShippingThreshold - total).toFixed(2)}{CONFIG.shop.currencySymbol}
                  </strong>{" "}
                  pour la livraison offerte
                </p>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#f0ebe3] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4M3 6h18M16 10a4 4 0 01-8 0" stroke="#9b7e5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-serif italic text-2xl text-[#1c1a17]">Votre panier est vide</p>
                    <p className="font-sans text-sm text-[#8a847c] mt-1">
                      Découvrez nos créations florales
                    </p>
                  </div>
                  <Link
                    href="/catalog"
                    onClick={closeCart}
                    className="mt-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[#1c1a17] border-b border-[#1c1a17] pb-0.5 hover:text-[#9b7e5e] hover:border-[#9b7e5e] transition-colors"
                  >
                    Voir nos bouquets
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-4 py-4 border-b border-[#e8e2d9] last:border-0"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-[#f0ebe3]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-serif italic text-[#1c1a17] text-base leading-tight truncate">
                        {item.title}
                      </p>
                      <p className="font-sans text-[13px] text-[#9b7e5e] font-medium mt-1">
                        {item.price}{CONFIG.shop.currencySymbol}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Diminuer la quantité"
                          className="w-7 h-7 rounded-full border border-[#e8e2d9] flex items-center justify-center text-[#8a847c] hover:border-[#1c1a17] hover:text-[#1c1a17] transition-colors"
                        >
                          <span aria-hidden="true">-</span>
                        </button>
                        <span className="font-sans text-sm text-[#1c1a17] w-4 text-center tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Augmenter la quantité"
                          className="w-7 h-7 rounded-full border border-[#e8e2d9] flex items-center justify-center text-[#8a847c] hover:border-[#1c1a17] hover:text-[#1c1a17] transition-colors"
                        >
                          <span aria-hidden="true">+</span>
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label={`Retirer ${item.title}`}
                      className="self-start text-[#c9a090] hover:text-[#9b7e5e] transition-colors mt-0.5"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-[#e8e2d9] space-y-3">
                <div className="flex justify-between font-sans text-sm text-[#8a847c]">
                  <span>Sous-total</span>
                  <span className="tabular-nums">{total.toFixed(2)}{CONFIG.shop.currencySymbol}</span>
                </div>
                <div className="flex justify-between font-sans text-sm text-[#8a847c]">
                  <span>Livraison</span>
                  <span className="tabular-nums">
                    {shipping === 0 ? "Offerte" : `${shipping.toFixed(2)}${CONFIG.shop.currencySymbol}`}
                  </span>
                </div>
                <div className="flex justify-between font-serif italic text-lg text-[#1c1a17] pt-2 border-t border-[#e8e2d9]">
                  <span>Total</span>
                  <span className="tabular-nums">{orderTotal.toFixed(2)}{CONFIG.shop.currencySymbol}</span>
                </div>

                <Link
                  href="/api/checkout"
                  className="block w-full py-4 bg-[#1c1a17] text-[#faf7f2] font-sans text-[11px] uppercase tracking-[0.25em] text-center rounded-full hover:bg-[#9b7e5e] transition-colors duration-300 mt-4"
                  onClick={closeCart}
                >
                  Commander
                </Link>

                <p className="font-sans text-[10px] text-[#8a847c] text-center leading-relaxed">
                  Livraison le jour même avant 14h · Carte manuscrite offerte
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
