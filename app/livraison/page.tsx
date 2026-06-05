import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Livraison — MAISON PÉTALE",
  description:
    "Informations sur la livraison de vos compositions florales à Paris. Livraison le jour même avant 14h.",
}

export default function LivraisonPage() {
  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          {/* Hero */}
          <div className="mb-16">
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#9b7e5e] mb-4">
              Livraison
            </p>
            <h1 className="font-serif italic text-[#1c1a17] text-5xl md:text-6xl leading-[0.92]">
              Vos fleurs,<br />livrées avec soin
            </h1>
          </div>

          {/* Banner */}
          <div className="bg-[#9b7e5e] text-[#faf7f2] rounded-2xl p-6 mb-12">
            <p className="font-serif italic text-xl mb-1">Livraison le jour même à Paris</p>
            <p className="font-sans text-[13px] text-[#faf7f2]/80">
              Commandez avant 14h du mardi au samedi.
            </p>
          </div>

          <div className="space-y-10 font-sans text-[14px] text-[#8a847c] leading-[1.9]">
            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-2xl mb-4">Zones de livraison</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9b7e5e] mt-2 flex-shrink-0" />
                  <span><strong className="text-[#1c1a17]">Paris intra-muros (75) :</strong> Livraison le jour même, commande avant 14h.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9b7e5e] mt-2 flex-shrink-0" />
                  <span><strong className="text-[#1c1a17]">Petite Couronne (92, 93, 94) :</strong> Livraison sous 24-48h. Frais de port supplémentaires.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9b7e5e] mt-2 flex-shrink-0" />
                  <span><strong className="text-[#1c1a17]">Île-de-France :</strong> Livraison sur devis, contactez-nous.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-2xl mb-4">Tarifs de livraison</h2>
              <div className="border border-[#e8e2d9] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 divide-x divide-[#e8e2d9] border-b border-[#e8e2d9]">
                  <div className="p-4 font-sans text-[11px] uppercase tracking-[0.15em] text-[#8a847c]">Service</div>
                  <div className="p-4 font-sans text-[11px] uppercase tracking-[0.15em] text-[#8a847c]">Tarif</div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-[#e8e2d9] border-b border-[#e8e2d9]">
                  <div className="p-4 text-[#1c1a17]">Standard (commande sup. à 80€)</div>
                  <div className="p-4 text-[#9b7e5e] font-medium">Offerte</div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-[#e8e2d9] border-b border-[#e8e2d9]">
                  <div className="p-4 text-[#1c1a17]">Standard (commande inf. à 80€)</div>
                  <div className="p-4 text-[#1c1a17]">9,90€</div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-[#e8e2d9]">
                  <div className="p-4 text-[#1c1a17]">Express (livraison en 2h)</div>
                  <div className="p-4 text-[#1c1a17]">14,90€</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-2xl mb-4">Créneaux de livraison</h2>
              <p className="mb-4">
                Lors du passage de commande, vous pouvez choisir un créneau de livraison parmi les
                disponibilités du jour. Les créneaux proposés sont :
              </p>
              <ul className="space-y-2">
                {["10h - 12h", "12h - 14h", "14h - 17h", "17h - 19h"].map((slot) => (
                  <li key={slot} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9b7e5e] flex-shrink-0" />
                    {slot}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-2xl mb-4">Conditionnement</h2>
              <p>
                Chaque bouquet est soigneusement conditionné dans un emballage éco-conçu, conçu pour
                protéger les fleurs durant le transport. Un sachet d'eau est glissé autour des tiges
                pour maintenir leur fraicheur. La carte manuscrite est placée à l'intérieur.
              </p>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-2xl mb-4">Absence lors de la livraison</h2>
              <p>
                En cas d'absence, notre livreur tentera de laisser la commande en lieu sûr (gardien,
                voisin). Un message de notification sera envoyé. Si la livraison ne peut être effectuée,
                nous vous contacterons pour convenir d'un nouveau créneau.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
