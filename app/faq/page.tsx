"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Comment conserver mes fleurs le plus longtemps possible ?",
    answer:
      "Pour prolonger la vie de vos fleurs, placez-les dans un vase propre avec de l'eau fraiche. Recoupez les tiges en biais de 2 cm tous les 2-3 jours. Éloignez-les des sources de chaleur, de la lumière directe et des fruits (qui dégagent de l'éthylène). Changez l'eau régulièrement.",
  },
  {
    question: "Quelle est la durée de vie d'un bouquet Maison Pétale ?",
    answer:
      "Nos bouquets sont composés de fleurs sélectionnées le matin même. En suivant nos conseils d'entretien, comptez 7 à 14 jours selon les variétés. Les roses tiennent généralement 10-12 jours, les pivoines 5-7 jours, les ranunculus 7-10 jours.",
  },
  {
    question: "Livrez-vous le dimanche et les jours fériés ?",
    answer:
      "Nous livrons du mardi au samedi. Pour une livraison le jour même, la commande doit être passée avant 14h. Les livraisons le dimanche et les jours fériés sont possibles sur demande préalable - contactez-nous par téléphone ou email.",
  },
  {
    question: "Puis-je personnaliser les fleurs de mon bouquet ?",
    answer:
      "Oui, nous acceptons les demandes de personnalisation selon les disponibilités saisonnières. Contactez-nous par email à contact@maisonpetale.fr en précisant vos préférences de couleurs, fleurs ou style. Un supplément peut s'appliquer selon la nature de la personnalisation.",
  },
  {
    question: "Proposez-vous des compositions pour les mariages ?",
    answer:
      "Oui, nous réalisons des créations sur mesure pour les mariages : bouquets de mariée, compositions de table, centres de table, boutonnières et arches florales. Prenez rendez-vous en atelier au moins 3 mois avant votre date pour un devis personnalisé.",
  },
  {
    question: "Comment fonctionne l'abonnement floral mensuel ?",
    answer:
      "L'abonnement Saison vous garantit une livraison chaque premier vendredi du mois pendant 3 mois. Chaque bouquet est une composition unique élaborée avec les fleurs de saison. Le premier paiement couvre l'intégralité des 3 mois. Il n'y a aucun engagement au-delà.",
  },
  {
    question: "Livrez-vous en dehors de Paris ?",
    answer:
      "Nous livrons actuellement dans Paris intra-muros et la Petite Couronne (92, 93, 94). La livraison express le jour même est disponible à Paris uniquement. Pour les livraisons en Île-de-France, comptez 24-48h de délai selon votre localisation.",
  },
  {
    question: "Puis-je inclure un message personnalisé avec ma commande ?",
    answer:
      "Absolument. Chaque commande peut être accompagnée d'une carte manuscrite, rédigée par notre équipe. Cette carte est offerte. Indiquez votre message lors du passage de commande. Vous pouvez aussi demander que le prix ne soit pas visible sur la livraison.",
  },
  {
    question: "Comment suivre ma commande ?",
    answer:
      "Un email de confirmation est envoyé dès la validation de votre commande, puis un second email avec le numéro de suivi lors de la prise en charge par notre livreur. Vous pouvez aussi nous contacter par téléphone au 01 44 78 92 15 pour obtenir des informations en temps réel.",
  },
  {
    question: "Que faire si mes fleurs arrivent abimées ?",
    answer:
      "Si votre livraison ne correspond pas à nos standards de qualité, contactez-nous dans les 24h avec une photo à contact@maisonpetale.fr. Nous vous offrons un remplacement ou un avoir, sans condition. La satisfaction est notre priorité absolue.",
  },
]

function FaqItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-[#e8e2d9] last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-start justify-between w-full text-left py-5 gap-6 group"
      >
        <span className="font-serif italic text-[#1c1a17] text-lg md:text-xl leading-snug group-hover:text-[#9b7e5e] transition-colors">
          {item.question}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className={`flex-shrink-0 mt-1.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <path d="M7 1v12M1 7h12" stroke="#9b7e5e" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-[14px] text-[#8a847c] leading-[1.9] pb-5 max-w-2xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="bg-[#faf7f2] pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          {/* Hero */}
          <div className="mb-16">
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#9b7e5e] mb-4">
              Questions fréquentes
            </p>
            <h1 className="font-serif italic text-[#1c1a17] text-5xl md:text-6xl leading-[0.92]">
              Tout ce que vous<br />devez savoir
            </h1>
          </div>

          {/* FAQ list */}
          <div>
            {faqs.map((item, i) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-[#1c1a17] text-center">
            <h2 className="font-serif italic text-[#faf7f2] text-2xl mb-3">
              Vous n'avez pas trouvé votre réponse ?
            </h2>
            <p className="font-sans text-[13px] text-[#8a847c] mb-6">
              Notre équipe est disponible du mardi au samedi, de 9h à 19h.
            </p>
            <a
              href="mailto:contact@maisonpetale.fr"
              className="inline-flex items-center px-7 py-3.5 bg-[#9b7e5e] text-[#faf7f2] font-sans text-[10px] uppercase tracking-[0.25em] rounded-full hover:bg-[#7a6548] transition-colors duration-300"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
