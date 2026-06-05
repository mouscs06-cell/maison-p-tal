export const CONFIG = {
  brandName: "MAISON PÉTALE",
  tagline: "L'art floral, sublimé",
  description:
    "Compositions florales artisanales créées dans notre atelier parisien. Fleurs fraîches, livraison le jour même.",
  founded: "2019",
  city: "Paris",

  colors: {
    background: "#faf7f2",
    backgroundDark: "#1c1a17",
    accent: "#9b7e5e",
    accentDark: "#7a6548",
    accentGreen: "#7a8c6e",
    accentRose: "#c9a090",
    text: "#1c1a17",
    textSecondary: "#8a847c",
  },

  nav: {
    links: [
      { label: "BOUQUETS", href: "/catalog" },
      { label: "ATELIER", href: "/#atelier" },
      { label: "SAVOIR-FAIRE", href: "/#savoir-faire" },
    ],
    cta: { label: "COMMANDER", href: "/catalog" },
  },

  shop: {
    currency: "EUR",
    currencySymbol: "€",
    freeShippingThreshold: 80,
    shippingCost: 9.9,
    expressShippingCost: 14.9,
    allowedCountries: ["FR"],
    returnDays: 14,
  },

  contact: {
    email: "contact@maisonpetale.fr",
    phone: "01 44 78 92 15",
    hours: "Mar-Sam · 9h-19h",
    address: "8 Rue de Bretagne, 75003 Paris",
  },

  seo: {
    title: "MAISON PÉTALE — L'Art Floral, Sublimé",
    description:
      "Compositions florales artisanales créées dans notre atelier parisien. Livraison le jour même à Paris.",
  },

  social: {
    instagram: "https://instagram.com/maisonpetale",
    tiktok: "",
    facebook: "",
  },

  reassurance: [
    {
      label: "Fraicheur garantie",
      description: "Fleurs cueillies le matin même",
      icon: "petal",
    },
    {
      label: "Livraison le jour même",
      description: "Commandez avant 14h à Paris",
      icon: "van",
    },
    {
      label: "Fait main à l'atelier",
      description: "Chaque bouquet est unique",
      icon: "scissors",
    },
    {
      label: "Message personnalisé",
      description: "Carte manuscrite offerte",
      icon: "letter",
    },
  ],

  testimonials: [
    {
      name: "Émilie L.",
      text: "Le plus beau bouquet que j'aie jamais reçu. Les fleurs ont tenu 12 jours. Extraordinaire.",
      rating: 5,
    },
    {
      name: "Antoine D.",
      text: "J'offre Maison Pétale à chaque anniversaire. Ma femme est toujours émerveillée.",
      rating: 5,
    },
    {
      name: "Claire M.",
      text: "L'emballage est aussi beau que les fleurs. On sent le soin dans chaque détail.",
      rating: 5,
    },
    {
      name: "Sophie R.",
      text: "Livraison impeccable en 2 heures. Les fleurs étaient parfaites pour notre mariage.",
      rating: 5,
    },
    {
      name: "Marc B.",
      text: "Enfin un fleuriste qui comprend que la simplicité est le sommet de l'élégance.",
      rating: 5,
    },
    {
      name: "Isabelle V.",
      text: "L'abonnement mensuel transforme mon appartement. Chaque livraison est une surprise.",
      rating: 5,
    },
  ],
}
