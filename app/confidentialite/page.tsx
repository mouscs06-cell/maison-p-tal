import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Politique de Confidentialité — MAISON PÉTALE",
  description:
    "Politique de confidentialité et protection des données personnelles de Maison Pétale.",
}

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <div className="mb-12">
            <h1 className="font-serif italic text-[#1c1a17] text-5xl leading-[0.92]">
              Politique de confidentialité
            </h1>
            <p className="font-sans text-[13px] text-[#8a847c] mt-4">
              Dernière mise à jour : janvier 2025
            </p>
          </div>

          <div className="space-y-10 font-sans text-[14px] text-[#8a847c] leading-[1.9]">
            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">
                Responsable du traitement
              </h2>
              <p>
                MAISON PÉTALE, SAS, 8 Rue de Bretagne, 75003 Paris — contact@maisonpetale.fr
                est responsable du traitement de vos données personnelles.
              </p>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">
                Données collectées
              </h2>
              <p className="mb-3">
                Nous collectons les données suivantes lors de vos commandes et de votre
                navigation :
              </p>
              <ul className="space-y-1.5">
                {[
                  "Nom, prénom et adresse email",
                  "Adresse de livraison et de facturation",
                  "Numéro de téléphone",
                  "Données de paiement (traitées par Stripe, non stockées chez nous)",
                  "Historique des commandes",
                  "Données de navigation anonymisées (cookies d'analyse)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9b7e5e] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">
                Finalités du traitement
              </h2>
              <p className="mb-3">Vos données sont utilisées pour :</p>
              <ul className="space-y-1.5">
                {[
                  "Traitement et suivi de vos commandes",
                  "Service après-vente et gestion des réclamations",
                  "Envoi de la newsletter (avec votre consentement)",
                  "Amélioration de nos services via des statistiques anonymisées",
                  "Obligations légales et comptables",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9b7e5e] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">
                Durée de conservation
              </h2>
              <p>
                Vos données de commande sont conservées 3 ans après votre dernière commande.
                Les données comptables sont conservées 10 ans conformément à la loi française.
                Les adresses email pour la newsletter sont conservées jusqu'à votre
                désabonnement.
              </p>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">
                Vos droits
              </h2>
              <p className="mb-3">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des
                droits suivants :
              </p>
              <ul className="space-y-1.5">
                {[
                  "Droit d'accès à vos données",
                  "Droit de rectification",
                  "Droit à l'effacement (droit à l'oubli)",
                  "Droit d'opposition au traitement",
                  "Droit à la portabilité de vos données",
                  "Droit de retirer votre consentement à tout moment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9b7e5e] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous : contact@maisonpetale.fr. Vous pouvez
                également introduire une réclamation auprès de la CNIL (www.cnil.fr).
              </p>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">Cookies</h2>
              <p>
                Notre site utilise des cookies techniques nécessaires au fonctionnement du site
                et des cookies d'analyse anonymisés (Vercel Analytics). Aucun cookie publicitaire
                n'est utilisé. Vous pouvez gérer vos préférences de cookies dans les paramètres
                de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">
                Sous-traitants
              </h2>
              <p>
                Nous faisons appel à des sous-traitants de confiance : Stripe (paiement),
                Vercel (hébergement), Resend (emails transactionnels). Chacun est tenu de
                respecter la confidentialité de vos données et le RGPD.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
