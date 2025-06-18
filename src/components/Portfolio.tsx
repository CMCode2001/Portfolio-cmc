import React, { useState } from 'react';
import { ExternalLink, Play, Award, TrendingUp } from 'lucide-react';

export function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "NeuroSync AI Platform",
      category: "UI/UX • Motion Design",
      description: "Interface révolutionnaire pour l'intelligence artificielle cognitive, fusionnant neurosciences et design émotionnel.",
      impact: {
        users: "2.3M",
        engagement: "+340%",
        awards: "3 Prix Design"
      },
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      tags: ["AI", "Neuroscience", "Motion", "3D"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      title: "Quantum Commerce",
      category: "Brand • Digital Art",
      description: "Identité visuelle futuriste pour une plateforme e-commerce next-gen, redéfinissant l'expérience d'achat.",
      impact: {
        users: "1.8M",
        engagement: "+520%",
        awards: "2 Awards"
      },
      image: "https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg",
      tags: ["Branding", "E-commerce", "AR", "Future"],
      gradient: "from-magenta-500 to-purple-600"
    },
    {
      id: 3,
      title: "Ethereal Gaming Universe",
      category: "Game Design • Motion",
      description: "Univers visuel immersif pour un MMORPG révolutionnaire, mêlant réalisme photoréaliste et esthétique onirique.",
      impact: {
        users: "5.2M",
        engagement: "+280%",
        awards: "5 Game Awards"
      },
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
      tags: ["Gaming", "3D", "Fantasy", "VR"],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-purple-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-transparent to-magenta-500/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full px-8 py-3 mb-8">
              <span className="text-cyan-300 font-semibold">Portfolio Révolutionnaire</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Créations <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-400">Légendaires</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Chaque projet raconte une histoire unique, transformant des visions audacieuses 
              en expériences digitales qui marquent les esprits et révolutionnent les industries.
            </p>
          </div>

          {/* Main project showcase */}
          <div className="mb-16">
            <div className="relative group">
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-1">
                <div className="relative h-full rounded-3xl overflow-hidden">
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                  
                  {/* Project info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="flex flex-wrap gap-3 mb-6">
                      {projects[activeProject].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white/90 border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                      {projects[activeProject].title}
                    </h3>
                    <p className="text-cyan-300 font-semibold mb-4 text-lg">
                      {projects[activeProject].category}
                    </p>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl leading-relaxed">
                      {projects[activeProject].description}
                    </p>

                    {/* Impact metrics */}
                    <div className="flex flex-wrap gap-8 mb-8">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-white font-bold">{projects[activeProject].impact.users}</span>
                        <span className="text-white/60">utilisateurs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Play className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-bold">{projects[activeProject].impact.engagement}</span>
                        <span className="text-white/60">engagement</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-yellow-400" />
                        <span className="text-white font-bold">{projects[activeProject].impact.awards}</span>
                      </div>
                    </div>

                    {/* Action button */}
                    <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full font-bold text-white hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                      <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span>Découvrir le Projet</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full blur-lg opacity-50 group-hover/btn:opacity-80 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <div className="absolute inset-0 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project navigation */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-white/10 border-2 border-cyan-500/50 scale-105'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-white/60 text-sm">{project.category}</p>
                
                {/* Active indicator */}
                {activeProject === index && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}