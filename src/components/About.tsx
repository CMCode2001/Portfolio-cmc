import React from 'react';
import { Brain, Heart, Zap, Target } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Brain,
      title: "Innovation Cognitive",
      description: "Fusion entre psychologie utilisateur et technologies émergentes"
    },
    {
      icon: Heart,
      title: "Émotion Authentique",
      description: "Chaque création raconte une histoire qui résonne avec l'âme"
    },
    {
      icon: Zap,
      title: "Impact Révolutionnaire",
      description: "Transformer les idées en expériences qui changent la donne"
    },
    {
      icon: Target,
      title: "Précision Artistique",
      description: "Équilibre parfait entre créativité débridée et stratégie métrique"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-magenta-500/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full px-8 py-3 mb-8">
              <span className="text-cyan-300 font-semibold">Vision Artistique</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              L'Art de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-400">Révolutionner</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Designer multidisciplinaire passionné par la création d'expériences numériques 
              qui transcendent les limites traditionnelles entre art, technologie et émotion humaine.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:scale-105"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-magenta-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Stats section */}
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white mb-4">
                150+
              </div>
              <p className="text-white/80 font-medium">Projets Révolutionnaires</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-magenta-400 to-white mb-4">
                150+
              </div>
              <p className="text-white/80 font-medium">Utilisateurs Impactés</p>
            </div>
            {/* <div className="group">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white mb-4">
                25+
              </div>
              <p className="text-white/80 font-medium">Refonte d'une vie artistique</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}