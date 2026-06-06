import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Retours et Remboursements — MAISON PÉTALE",
  description:
    "Politique de retour et de remboursement de Maison Pétale. Fraicheur garantie sur toutes nos compositions.",
}

export default function RetoursPage() {
  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-8 md:px-20">
          {/* Hero */}
          <div className="mb-16">
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#9b7e5e] mb-4">
              Retours et garanties
            </p>
            <h1 className="font-serif italic text-[#1c1a17] text-5xl md:text-6xl leading-[0.92]">
              Votre satisfaction,<br />notre engagement
            </h1>
          </div>

          {/* Freshness guarantee */}
          <div className="bg-[#1c1a17] text-[#faf7f2] rounded-2xl p-8 mb-12">
            <h2 className="font-serif italic text-2xl mb-3">La garantie fraicheur</h2>
            <p className="font-sans text-[13px] text-[#8a847c] leading-relaxed">
              Toutes nos compositions sont garanties fraîches à la livraison. Si vos fleurs ne
              correspondent pas à nos standards de qualité, nous vous offrons un remplacement ou
              un avoir complet, sans condition.
            </p>
          </div>

          <div className="space-y-10 font-sans text-[14px] text-[#8a847c] leading-[1.9]">
            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-2xl mb-4">
                Produits non conformes
              </h2>
              <p className="mb-4">
                En raison de la nature périssable des fleurs, les retours physiques ne sont pas
                possibles. En revanche, si votre commande présente l'un des problèmes suivants,
                nous prenons en charge intégralement :
              </p>
              <ul className="space-y-2">
                {[
                  "Fleurs fanées ou endommagées à la livraison",
                  "Composition différente de celle commandée",
                  "Colis endommagé lors du transport",
                  "Livraison non conforme aux spécifications",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9b7e5e] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-2xl mb-4">
                Comment signaler un problème
              </h2>
              <p className="mb-4">
                Pour signaler un problème avec votre commande :
              </p>
              <ol className="space-y-3">
                {[
                  "Prenez des photos de la commande reçue dans les 24h suivant la livraison.",
                  "Envoyez-les par email à contact@maisonpetale.fr en indiquant votre numéro de commande.",
                  "Notre équipe vous répond sous 24h ouvrées avec une solution.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-serif italic text-[#9b7e5e] text-lg flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-2xl mb-4">
                Solutions proposées
              </h2>
              <ul className="space-y-2">
                {[
                  "Remplacement de la commande (sous réserve de disponibilité)",
                  "Avoir valable 12 mois sur notre boutique",
                  "Remboursement complet sur votre moyen de paiement initial (3-5 jours ouvrés)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9b7e5e] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-2xl mb-4">
                Annulation de commande
              </h2>
              <p>
                Vous pouvez annuler votre commande gratuitement jusqu'à 2 heures avant la livraison
                prévue. Au-delà, l'annulation n'est plus possible car la composition est en cours
                de préparation. Contactez-nous rapidement au 01 44 78 92 15.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
