import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Mentions Légales — MAISON PÉTALE",
  description: "Mentions légales de Maison Pétale, fleuriste artisanal parisien.",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-8 md:px-20">
          <div className="mb-12">
            <h1 className="font-serif italic text-[#1c1a17] text-5xl leading-[0.92]">
              Mentions légales
            </h1>
          </div>

          <div className="space-y-10 font-sans text-[14px] text-[#8a847c] leading-[1.9]">
            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">Éditeur du site</h2>
              <p>
                Le site maisonpetale.fr est édité par la société MAISON PÉTALE, SAS au capital de
                10 000 euros, immatriculée au Registre du Commerce et des Sociétés de Paris
                sous le numéro SIRET 000 000 000 00000.
              </p>
              <p className="mt-2">
                Siège social : 8 Rue de Bretagne, 75003 Paris, France.<br />
                Téléphone : 01 44 78 92 15<br />
                Email : contact@maisonpetale.fr<br />
                Directrice de la publication : Maison Pétale
              </p>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">Hébergement</h2>
              <p>
                Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 801, San Francisco,
                CA 94104, États-Unis.
              </p>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">Propriété intellectuelle</h2>
              <p>
                L'ensemble des contenus présents sur ce site (textes, images, photographies,
                compositions florales, logo, vidéos) est la propriété exclusive de Maison Pétale
                ou de ses partenaires et est protégé par le droit d'auteur. Toute reproduction,
                même partielle, est strictement interdite sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">Responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont données à titre indicatif. Maison Pétale
                s'efforce de maintenir ces informations à jour mais ne peut garantir leur exactitude
                ou exhaustivité. Maison Pétale ne saurait être tenu responsable des dommages directs
                ou indirects résultant de l'utilisation de ce site.
              </p>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige,
                et après tentative de résolution amiable, les tribunaux compétents de Paris auront
                juridiction exclusive.
              </p>
            </section>

            <section>
              <h2 className="font-serif italic text-[#1c1a17] text-xl mb-3">Médiation</h2>
              <p>
                Conformément à l'article L.616-1 du Code de la consommation, vous pouvez recourir
                gratuitement au service de médiation de la consommation. Notre médiateur est la
                Commission Européenne via la plateforme de Règlement en Ligne des Litiges (RLL).
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
