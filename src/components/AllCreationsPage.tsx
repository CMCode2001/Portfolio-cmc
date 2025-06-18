import React, { useState } from 'react';

const categories = [
  { id: 'all', name: 'Tous les Designs' },
  { id: 'logo', name: 'Logo Design' },
  { id: 'flyers', name: 'Flyers' },
  { id: 'ux-ui', name: 'UX-UI Web' },
];

const designs = [
  {
    id: 1,
    title: "Groupe Africa Services",
    category: "logo",
    image: "/logo/LG0.jpg",
    likes: 342,
    views: 12500,
    description: "Refonte du logo pour une entreprise de services africains"
  },
  {
    id: 2,
    title: "KOOLUTE",
    category: "logo",
    image: "/logo/L0.jpg",
    likes: 289,
    views: 8900,
    description: "Refonte de l'identité visuelle pour une startup culuinaire",
  },
  {
    id: 3,
    title: "Flyers Menu Pro",
    category: "flyers",
    image: "/img/A2.jpg",
    likes: 456,
    views: 15600,
    description: "Affiche menu pro pour une startup culinaire innovante"
  },
  {
    id: 4,
    title: "Flyers Menu Special Plat",
    category: "flyers",
    image: "/img/A3.jpg",
    likes: 523,
    views: 18200,
    description: "Affiche promotionnelle pour un plat spécial de restaurant"
  },
  {
    id: 5,
    title: "Logo MKA",
    category: "logo",
    image: "/logo/L2.png",
    likes: 198,
    views: 7400,
    description: "Logo Automobile moderne pour une marque de luxe"
  },
  {
    id: 6,
    title: "Logo Kawsara Business",
    category: "logo",
    image: "/logo/L1.png",
    likes: 367,
    views: 11800,
    description: "refonte du logo pour une entreprise de services agricoles",
  },
  {
    id: 7,
    title: "Flyers Kawsara Business",
    category: "flyers",
    image: "/img/A11.png",
    likes: 445,
    views: 16900,
    description: "Affiche promotionnelle pour une entreprise de services agricoles"
  },
  {
    id: 8,
    title: "Flyers Kawsara Business",
    category: "flyers",
    image: "/img/A12.png",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour une entreprise de services agricoles"
  },
  {
    id: 9,
    title: "Garap Mobile App",
    category: "ux-ui",
    image: "/ux-ui/U2.jpg",
    likes: 612,
    views: 22100,
    description: "Design d'application mobile moderne pour une expérience utilisateur fluide"
  },
  {
    id: 10,
    title: "Tukkijamm Web App",
    category: "ux-ui",
    image: "/ux-ui/U8.png",
    likes: 612,
    views: 22100,
    description: "Design d'application web pour une startup de covoiturage innovante",
  },
  {
    id: 11,
    title: "Senepremium Web App",
    category: "ux-ui",
    image: "/ux-ui/X3.png",
    likes: 612,
    views: 22100,
    description: "Design d'application web pour une plateforme de services premium",
  },
  {
    id: 12,
    title: "Mentor Me Web App",
    category: "ux-ui",
    image: "/ux-ui/U6.jpg",
    likes: 612,
    views: 22100,
    description: "Design d'application web pour une plateforme de mentorat innovante"
  },
  {
    id: 13,
    title: "Affiche Cuisine",
    category: "flyers",
    image: "/img/A1.jpg",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour un restaurant de cuisine locale",
  },
  {
    id: 14,
    title: "Affiche Jus Frais Koolute",
    category: "flyers",
    image: "/img/A4.jpg",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour une boisson fraîche naturelle",
  },
  {
    id: 15,
    title: "Affiche Ecrin Sucré",
    category: "flyers",
    image: "/img/A5.jpg",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour une pâtisserie artisanale",
  },
  {
    id: 16,
    title: "Sofia Automonile",
    category: "flyers",
    image: "/img/A6.png",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour une entreprise de vente automobile",
  },
  {
    id: 17,
    title: "Affiche Nafila Ramadan",
    category: "flyers",
    image: "/img/A13.jpg",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour les nafilas du jour - Ramadan",
  },
  {
    id: 18,
    title: "Inna'Shop",
    category: "flyers",
    image: "/img/A8.jpg",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour une boutique de mode en ligne",
  },
  {
    id: 19,
    title: " Inna'Shop",
    category: "flyers",
    image: "/img/A9.jpg",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour une boutique de mode en ligne",
  },
  {
    id: 20,
    title: "Affiche Salon Beauté",
    category: "flyers",
    image: "/img/A10.jpg",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour un salon de beauté et de bien-être",
  },
  {
    id: 21,
    title: "Affiche Coin Poulet",
    category: "flyers",
    image: "/img/A14.jpg",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour la vente de poulet",
  },
  {
    id: 22,
    title: "Affiche Ndogou",
    category: "flyers",
    image: "/img/A15.jpg",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour un Special Ndogou a SupInfo",
  },
  {
    id: 23,
    title: "Affiche Graduation L2i",
    category: "flyers",
    image: "/img/A13.jpg",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour la graduation de la L2i",
  },
  {
    id: 24,
    title: "Affiche Livreur Express",
    category: "flyers",
    image: "/img/A16.jpg",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour un service de livraison express",
  },
  {
    id: 25,
    title: "Affiche Caravane Bus",
    category: "flyers",
    image: "/img/A17.png",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour un caravane en bus",
  },
  {
    id: 26,
    title: "Old Nafila Ramadan",
    category: "flyers",
    image: "/img/A20.jpg",
    likes: 612,
    views: 22100,
    description: "Affiche promotionnelle pour les anciens nafilas du jour - Ramadan",
  },
  {
    id: 27,
    title: "Logo NBK ",
    category: "logo",
    image: "/logo/L6.jpg",
    likes: 612,
    views: 22100,
    description: "Logo moderne pour une entreprise de transformation agricole,NBK",
  },
  {
    id: 29,
    title: "Logo DMF",
    category: "logo",
    image: "/logo/L3.png",
    likes: 612,
    views: 22100,
    description: "Logo moderne pour le dahira DMF",
  },
  {
    id: 30,
    title: "Logo Licence Ingenierie Informatique : L2i",
    category: "logo",
    image: "/logo/L4.png",
    likes: 612,
    views: 22100,
    description: "Logo officiel de la Licence en Ingénierie Informatique (L2i)",
  },
  {
    id: 31,
    title: "Logo SMB ",
    category: "logo",
    image: "/logo/L5.jpg",
    likes: 612,
    views: 22100,
    description: "Logo moderne pour une entreprise de BTP,Topographe SMB",
  },
  {
    id: 32,
    title: "Logo Club English UASZ ",
    category: "logo",
    image: "/logo/L15.png",
    likes: 612,
    views: 22100,
    description: "Logo moderne pour le Club English UASZ",
  },
  {
    id: 33,
    title: "Refonte Logo Club Informatique ",
    category: "logo",
    image: "/logo/L7.jpg",
    likes: 612,
    views: 22100,
    description: "Refonte du logo pour le Club Informatique UASZ",
  },
  {
    id: 34,
    title: "Logo Diao Couture ",
    category: "logo",
    image: "/logo/L8.png",
    likes: 612,
    views: 22100,
    description: "Logo moderne pour une entreprise de couture, Diao Couture",
  },
  {
    id: 35,
    title: "Logo Heritage Shoes ",
    category: "logo",
    image: "/logo/L9.png",
    likes: 612,
    views: 22100,
    description: "Logo moderne pour une entreprise de chaussures, Heritage Shoes",
  },
  {
    id: 36,
    title: "Logo Elandi Collection Parfumerie ",
    category: "logo",
    image: "/logo/L10.jpg",
    likes: 612,
    views: 22100,
    description: "Logo moderne pour une entreprise de parfumerie, Elandi Collection",
  },
  {
    id: 37,
    title: "Logo Social Servir Senegal ",
    category: "logo",
    image: "/logo/L11.png",
    likes: 612,
    views: 22100,
    description: "Logo moderne pour une entreprise de services sociaux, Servir Senegal",
  },
  {
    id: 38,
    title: "Logo Darou Optic ",
    category: "logo",
    image: "/logo/L12.png",
    likes: 612,
    views: 22100,
    description: "Logo moderne pour une entreprise d'optique, Darou Optic",
  },
  {
    id: 39,
    title: "Logo Almakhba Electronique ",
    category: "logo",
    image: "/logo/L13.jpg",
    likes: 612,
    views: 22100,
    description: "Logo moderne pour une entreprise d'électronique, Almakhba Electronique",
  },
  {
    id: 40,
    title: "Redesign Maquette Senepremium ",
    category: "ux-ui",
    image: "/ux-ui/X1.png",
    likes: 612,
    views: 22100,
    description: "Maquette de branding pour Senepremium, une plateforme de services premium",
  },
  {
    id: 41,
    title: "Redesign Maquette Senepremium ",
    category: "ux-ui",
    image: "/ux-ui/X2.png",
    likes: 612,
    views: 22100,
    description: "Maquette de branding pour Senepremium, une plateforme de services premium",
  },
  {
    id: 42,
    title: "Redesign Maquette Senepremium ",
    category: "ux-ui",
    image: "/ux-ui/X3.png",
    likes: 612,
    views: 22100,
    description: "Maquette de branding pour Senepremium, une plateforme de services premium",
  },
  {
    id: 43,
    title: "Redesign Maquette Senepremium ",
    category: "ux-ui",
    image: "/ux-ui/X4.png",
    likes: 612,
    views: 22100,
    description: "Maquette de branding pour Senepremium, une plateforme de services premium",
  },
  {
    id: 44,
    title: "Redesign Maquette Senepremium v-mobile ",
    category: "ux-ui",
    image: "/ux-ui/U4.jpg",
    likes: 612,
    views: 22100,
    description: "Maquette de branding pour Senepremium, une plateforme de services premium",
  },
  {
    id: 45,
    title: "Redesign Maquette Senepremium v-mobile ",
    category: "ux-ui",
    image: "/ux-ui/U5.jpg",
    likes: 612,
    views: 22100,
    description: "Maquette de branding pour Senepremium, une plateforme de services premium",
  },
  {
    id: 46,
    title: "GARAP Mobile App ",
    category: "ux-ui",
    image: "/ux-ui/U2.jpg",
    likes: 612,
    views: 22100,
    description: "Design d'application mobile moderne pour une expérience utilisateur fluide",
  },
  {
    id: 47,
    title: "GARAP Mobile App ",
    category: "ux-ui",
    image: "/ux-ui/U3.jpg",
    likes: 612,
    views: 22100,
    description: "Design d'application mobile moderne pour une expérience utilisateur fluide",
  },
  {
    id: 48,
    title: "Mentor Me Web App ",
    category: "ux-ui",
    image: "/ux-ui/U7.png",
    likes: 612,
    views: 22100,
    description: "Design d'application web pour une plateforme de mentorat innovante",
  },
  {
    id: 49,
    title: "E-learning Platform ",
    category: "ux-ui",
    image: "/ux-ui/U9.jpg",
    likes: 612,
    views: 22100,
    description: "Design d'une plateforme d'apprentissage en ligne intuitive et engageante",
  },
  {
    id: 50,
    title: "Portail Web L2i ",
    category: "ux-ui",
    image: "/ux-ui/U10.jpg",
    likes: 612,
    views: 22100,
    description: "Design d'application web pour la Licence en Ingénierie Informatique (L2i)",
  },
  {
    id: 51,
    title: "Portail Web UASZ ",
    category: "ux-ui",
    image: "/ux-ui/U11.jpg",
    likes: 612,
    views: 22100,
    description: "Design d'application web pour l'Université Assane SECK de Ziguinchor",
  },
  {
    id: 52,
    title: "Portail Web UASZ ",
    category: "ux-ui",
    image: "/ux-ui/U12.jpg",
    likes: 612,
    views: 22100,
    description: "Design d'application web pour l'Université Assane SECK de Ziguinchor",
  },
  {
    id: 53,
    title: "Portail Web UASZ ",
    category: "ux-ui",
    image: "/ux-ui/U13.jpg",
    likes: 612,
    views: 22100,
    description: "Design d'application web pour l'Université Assane SECK de Ziguinchor",
  },
  {
    id: 54,
    title: "Portail Web UASZ ",
    category: "ux-ui",
    image: "/ux-ui/U14.jpg",
    likes: 612,
    views: 22100,
    description: "Design d'application web pour l'Université Assane SECK de Ziguinchor",
  }
];

export default function AllCreationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDesigns = selectedCategory === 'all'
    ? designs
    : designs.filter(design => design.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-black via-purple-900 to-slate-900 pt-24">
      {/* Sidebar */}
      <aside
        className="
          w-full md:w-64
          bg-black/40 border-b md:border-b-0 md:border-r border-white/10
          p-4 md:p-8
          flex flex-row md:flex-col
          overflow-x-auto md:overflow-visible
          gap-2 md:gap-0
          sticky top-24 z-10
        "
      >
        <h2 className="text-xl font-bold text-white mb-4 md:mb-8 shrink-0 hidden md:block">Catégories</h2>
        <ul className="flex flex-row md:flex-col w-full gap-2 md:gap-4 flex-nowrap">
          {categories.map(cat => (
            <li key={cat.id} className="flex-shrink-0">
              <button
                className={`min-w-[120px] px-4 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-magenta-500 text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-4 md:p-8">
        <h1 className="text-4xl font-black text-white mb-8">Toutes les Créations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDesigns.map(design => (
            <div key={design.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src={design.image} alt={design.title} className="w-full aspect-square object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">{design.title}</h3>
                <p className="text-white/60 text-sm mb-2">{design.description}</p>
                <span className="text-xs text-white/40 capitalize">{design.category.replace('-', ' ')}</span>
              </div>
            </div>
          ))}
        </div>
        {filteredDesigns.length === 0 && (
          <div className="text-center text-white/60 mt-16">Aucune création trouvée pour cette catégorie.</div>
        )}
      </main>
    </div>
  );
}