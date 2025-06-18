import React, { useState } from 'react';
import { Eye, Heart, Download, Share2, ZoomIn, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function DesignGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'Tous les Designs', count: 56 },
    { id: 'logo', name: 'Logo Design', count: 17 },
    { id: 'flyers', name: 'Flyers', count: 20 },
    { id: 'ux-ui', name: 'UX-UI Web', count: 19 },
    // { id: 'digital-art', name: 'Art Digital', count: 5 }
  ];

  // Placeholder designs - vous remplacerez ces URLs par vos vraies images
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
    }
  ];

  const filteredDesigns = selectedCategory === 'all' 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-black via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-transparent to-magenta-500/3"></div>
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-magenta-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full px-8 py-3 mb-8">
              <span className="text-cyan-300 font-semibold">Galerie Créative</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-400">Créations</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Collection de mes designs les plus marquants, chaque création raconte une histoire unique 
              et repousse les limites de l'expression visuelle numérique.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-magenta-500 text-white scale-105'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
                {selectedCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full blur-lg opacity-50"></div>
                )}
              </button>
            ))}
          </div>

          {/* Design grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredDesigns.map((design, index) => (
              <div
                key={design.id}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/90 text-sm mb-3 line-clamp-2">
                        {design.category.replace('-', ' ')} 
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-white/70 text-sm">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{design.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{design.views}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedImage(design.id)}
                          className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300"
                        >
                          {/* <ZoomIn className="w-4 h-4 text-white" /> */}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Quick action buttons */}
                  {/*<div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70 transition-all duration-300">
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70 transition-all duration-300">
                      <Download className="w-4 h-4 text-white" />
                    </button>
                  </div>*/}
                </div>

                {/* Design info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {design.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60 capitalize">
                      {design.description.replace('-', ' ')}
                    </span>
                    {/* <div className="flex items-center space-x-3 text-white/50 text-sm">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{design.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{design.views}</span>
                      </div> 
                    </div>*/}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
            ))}
          </div>

          {/* Load more button */}
          <div className="text-center">
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 border border-cyan-500/30 rounded-full font-bold text-white hover:from-cyan-500/30 hover:to-magenta-500/30 hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/creations')}
            >
              <span>Charger Plus de Créations</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <button onClick={() => setSelectedImage(null)} style={{ position: 'absolute', top: 20, right: 20, color: 'white', fontSize: 30 }}>×</button>
          <img
            src={designs.find(d => d.id === selectedImage)?.image}
            alt="Design en grand"
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
          />
        </div>
      )}

      {/* Modal for full-size image view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-2xl"
            >
              ×
            </button>
            <img
              src={designs.find(d => d.id === selectedImage)?.image}
              alt="Design en grand"
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}