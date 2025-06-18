import React from 'react';
import { Code2, Palette, Zap, Globe, Layers, Cpu } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Palette,
      title: "Design Visuel",
      skills: ["UI/UX Design", "Web Design", "Figma, Adobe Xd", "Adobe illustrator, Photoshop, Indesign"],
      level: 95,
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Code2,
      title: "Développement",
      skills: ["ReactJs, AngularJs, NodeJs", "Taiwind CSS", "WebGL", "SpringBoot, Java"],
      level: 90,
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Motion Design",
      skills: ["After Effects", "Premiere Pro", "3D Animation", "Interactive Media"],
      level: 85,
      color: "from-yellow-500 to-orange-600"
    // },
    // {
    //   icon: Globe,
    //   title: "Stratégie UX",
    //   skills: ["User Research", "Prototyping", "A/B Testing", "Analytics"],
    //   level: 85,
    //   color: "from-green-500 to-emerald-600"
    // },
    // {
    //   icon: Layers,
    //   title: "Design System",
    //   skills: ["Component Libraries", "Atomic Design", "Figma", "Storybook"],
    //   level: 90,
    //   color: "from-purple-500 to-indigo-600"
    // },
    // {
    //   icon: Cpu,
    //   title: "Technologies",
    //   skills: ["AI/ML Design", "AR/VR", "Blockchain UI", "IoT Interfaces"],
    //   level: 78,
    //   color: "from-teal-500 to-cyan-600"
    // }
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-black via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-magenta-500/5"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-magenta-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full px-8 py-3 mb-8">
              <span className="text-cyan-300 font-semibold">Arsenal Créatif</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Maîtrise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-400">Multidisciplinaire</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Fusion unique de compétences techniques et artistiques, 
              constamment évoluant avec les technologies émergentes et les tendances créatives.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Skills list */}
                <div className="space-y-3 mb-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded-full"></div>
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Skill level */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-medium">Niveau d'expertise</span>
                    <span className="text-white font-bold">{category.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 delay-${index * 100}`}
                      style={{ width: `${category.level}%` }}
                    ></div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
              </div>
            ))}
          </div>

          {/* Bottom stats */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-black text-cyan-400 mb-2">4+</div>
                  <div className="text-white/70">Années d'Exp.</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-magenta-400 mb-2">15+</div>
                  <div className="text-white/70">Tech. Maîtrisées</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-purple-400 mb-2">200+</div>
                  <div className="text-white/70">Projets Réalisés</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-400 mb-2">99%</div>
                  <div className="text-white/70">Satisfaction Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}