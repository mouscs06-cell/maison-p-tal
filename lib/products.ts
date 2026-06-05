export interface Product {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  price: number
  category: string
  image: string
  badge: string
  ingredients: string[]
  usage: string
  texture: string
  volume: string
  certification: string
}

export const PRODUCTS: Product[] = [
  {
    id: "coeur-de-paris",
    title: "Le Coeur de Paris",
    subtitle: "Roses rouges · Eucalyptus",
    description: "L'amour absolu en 35 roses",
    longDescription:
      "Trente-cinq roses rouges Naomi sélectionnées à Rungis au petit matin. Enveloppées d'eucalyptus cinerea et nouées d'un ruban de velours grenat. La déclaration ultime.",
    price: 185,
    category: "Bouquets Signature",
    image: "/f7.jpg",
    badge: "BEST SELLER",
    ingredients: ["35 roses rouges Naomi", "Eucalyptus cinerea", "Ruban velours grenat"],
    usage: "Changer l'eau tous les 2 jours. Recouper les tiges en biais.",
    texture: "Bouquet rond, dense et généreux",
    volume: "Diamètre 40 cm · Hauteur 50 cm",
    certification: "Fleurs françaises et hollandaises · Éco-responsable",
  },
  {
    id: "etoile-pastel",
    title: "L'Étoile Pastel",
    subtitle: "Ranunculus · Roses pâles · Eucalyptus",
    description: "La douceur en bouquet",
    longDescription:
      "Un poème floral tout en douceur. Ranunculus de Provence et roses pâles David Austin s'entremêlent avec du feuillage d'eucalyptus dans une composition aérienne et romantique.",
    price: 125,
    category: "Bouquets Poétiques",
    image: "/f8.jpg",
    badge: "NOUVEAU",
    ingredients: ["Ranunculus de Provence", "Roses David Austin", "Eucalyptus", "Limonium"],
    usage: "Éviter la lumière directe. Changer l'eau quotidiennement.",
    texture: "Bouquet aérien, textures variées",
    volume: "Diamètre 35 cm · Hauteur 45 cm",
    certification: "Fleurs de saison · Circuit court",
  },
  {
    id: "jardin-sauvage",
    title: "Le Jardin Sauvage",
    subtitle: "Fleurs de saison · Herbes aromatiques",
    description: "La nature à l'état brut",
    longDescription:
      "Comme cueilli dans un jardin anglais au petit matin. Pivoines, delphiniums, scabieuses et graminées composent un bouquet libre et généreux qui raconte une histoire de campagne.",
    price: 155,
    category: "Bouquets Champêtres",
    image: "/f9.jpg",
    badge: "SAISON",
    ingredients: ["Pivoines", "Delphiniums", "Scabieuses", "Graminées sauvages", "Menthe fraîche"],
    usage: "Laisser le bouquet s'ouvrir naturellement sur 3-4 jours.",
    texture: "Bouquet libre, mouvement naturel",
    volume: "Diamètre 45 cm · Hauteur 55 cm",
    certification: "100% fleurs de saison françaises",
  },
  {
    id: "neige-de-mai",
    title: "La Neige de Mai",
    subtitle: "Roses blanches · Gypsophile",
    description: "La pureté incarnée",
    longDescription:
      "Des roses blanches Avalanche d'une blancheur immaculée, enveloppées dans un nuage de gypsophile. Simplicité absolue, élégance intemporelle. Pour les moments les plus précieux.",
    price: 145,
    category: "Bouquets Signature",
    image: "/f10.jpg",
    badge: "",
    ingredients: ["Roses blanches Avalanche", "Gypsophile", "Ruban de soie ivoire"],
    usage: "Recouper les tiges de 2 cm tous les 3 jours.",
    texture: "Bouquet nuage, léger et aérien",
    volume: "Diamètre 40 cm · Hauteur 45 cm",
    certification: "Fleurs certifiées MPS",
  },
  {
    id: "automne-dore",
    title: "L'Automne Doré",
    subtitle: "Dahlias · Chrysanthèmes · Feuillages",
    description: "Les couleurs de l'arrière-saison",
    longDescription:
      "Un tableau vivant aux teintes de l'automne. Dahlias café au lait, chrysanthèmes bronze et feuillages dorés composent une pièce sculpturale qui célèbre la saison.",
    price: 165,
    category: "Bouquets Champêtres",
    image: "/f11.jpg",
    badge: "ÉDITION LIMITÉE",
    ingredients: [
      "Dahlias café au lait",
      "Chrysanthèmes bronze",
      "Leucadendron",
      "Feuillages automnaux",
    ],
    usage: "Brumiser les pétales le matin pour prolonger la fraîcheur.",
    texture: "Bouquet sculptural, textures riches",
    volume: "Diamètre 40 cm · Hauteur 50 cm",
    certification: "Fleurs de saison · Production raisonnée",
  },
  {
    id: "orchidee-royale",
    title: "L'Orchidée Royale",
    subtitle: "Phalaenopsis · Pot céramique",
    description: "L'élégance qui dure",
    longDescription:
      "Une orchidée Phalaenopsis double tige sélectionnée pour la perfection de ses pétales. Présentée dans un pot en céramique émaillée fait main dans notre atelier. Un cadeau qui fleurit pendant des mois.",
    price: 95,
    category: "Plantes",
    image: "/f12.jpg",
    badge: "",
    ingredients: [
      "Orchidée Phalaenopsis double tige",
      "Pot céramique émaillé artisanal",
      "Mousse naturelle",
    ],
    usage: "Arroser 1 fois par semaine. Lumière indirecte.",
    texture: "Plante élégante, floraison 2-3 mois",
    volume: "Hauteur 60 cm · Pot 14 cm",
    certification: "Culture raisonnée · Pot artisanal français",
  },
  {
    id: "coffret-eternel",
    title: "Le Coffret Éternel",
    subtitle: "Fleurs séchées · Coffret bois",
    description: "La beauté qui ne fane pas",
    longDescription:
      "Une composition de fleurs séchées sélectionnées pour leurs couleurs et leurs textures. Présentée dans un coffret en bois de noyer français. Un bouquet éternel qui traverse les saisons sans jamais perdre son éclat.",
    price: 110,
    category: "Fleurs Séchées",
    image: "/f13.jpg",
    badge: "EXCLUSIF",
    ingredients: [
      "Roses séchées",
      "Pampa",
      "Lavande de Provence",
      "Statice",
      "Coffret noyer français",
    ],
    usage: "Aucun entretien nécessaire. Éviter l'humidité.",
    texture: "Composition pérenne, textures sèches nobles",
    volume: "Coffret 30 x 20 cm · Hauteur composition 35 cm",
    certification: "Fleurs séchées naturellement · Bois FSC",
  },
  {
    id: "abonnement-saison",
    title: "L'Abonnement Saison",
    subtitle: "1 bouquet par mois · 3 mois",
    description: "La surprise florale mensuelle",
    longDescription:
      "Chaque mois, notre fleuriste compose un bouquet unique avec les plus belles fleurs de saison. Livré à votre porte le premier vendredi du mois. 3 mois de poésie florale.",
    price: 195,
    category: "Abonnements",
    image: "/f14.jpg",
    badge: "OFFRE SPÉCIALE",
    ingredients: [
      "Fleurs de saison sélectionnées",
      "Composition surprise mensuelle",
      "Carte manuscrite",
    ],
    usage: "Livraison le 1er vendredi de chaque mois.",
    texture: "Varie chaque mois selon les saisons",
    volume: "Bouquet généreux chaque mois",
    certification: "Engagement 3 mois · Sans engagement après",
  },
]

export const CATEGORIES = [
  "Tout",
  "Bouquets Signature",
  "Bouquets Poétiques",
  "Bouquets Champêtres",
  "Plantes",
  "Fleurs Séchées",
  "Abonnements",
]

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}
