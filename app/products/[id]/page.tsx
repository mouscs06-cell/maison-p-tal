import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProductById, PRODUCTS } from "@/lib/products"
import ProductDetailClient from "@/components/ProductDetailClient"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  if (!product) return {}
  return {
    title: `${product.title} — MAISON PÉTALE`,
    description: product.longDescription,
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) notFound()

  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3)

  return <ProductDetailClient product={product} related={related} />
}
