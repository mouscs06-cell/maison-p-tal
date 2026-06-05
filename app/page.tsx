import type { Metadata } from "next"
import { CONFIG } from "@/CLIENT_CONFIG"
import HomePageClient from "@/components/HomePageClient"

export const metadata: Metadata = {
  title: CONFIG.seo.title,
  description: CONFIG.seo.description,
}

export default function Page() {
  return <HomePageClient />
}
