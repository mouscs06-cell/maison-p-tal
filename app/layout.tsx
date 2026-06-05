import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/CartContext"
import LenisProvider from "@/components/LenisProvider"
import CartSidebar from "@/components/CartSidebar"
import { CONFIG } from "@/CLIENT_CONFIG"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: CONFIG.seo.title,
  description: CONFIG.seo.description,
  openGraph: {
    title: CONFIG.seo.title,
    description: CONFIG.seo.description,
    type: "website",
    locale: "fr_FR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-[100dvh] flex flex-col antialiased">
        <CartProvider>
          <LenisProvider>
            {children}
            <CartSidebar />
          </LenisProvider>
        </CartProvider>
      </body>
    </html>
  )
}
