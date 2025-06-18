import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter, icons, Disc } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/cheikh-mbacké-coly-26047127b', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Github, href: 'https://github.com/CMCode2001', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Twitter, href: 'https://x.com/Cmcode2001', label: 'Twitter', color: 'hover:text-sky-400' },
    
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-purple-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-magenta-500/5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-magenta-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-full px-8 py-3 mb-8">
              <span className="text-cyan-300 font-semibold">Collaboration Révolutionnaire</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Créons <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-400">l'Impossible</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Prêt à transformer votre vision en une expérience numérique révolutionnaire ? 
              Collaborons pour créer quelque chose d'extraordinaire qui marquera les esprits.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Démarrons un Projet</h3>
                <p className="text-white/70 mb-8">
                  Chaque grand projet commence par une conversation. Partagez votre vision, 
                  et transformons-la ensemble en réalité révolutionnaire.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Votre nom *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email professionnel *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Sujet de votre projet *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                />

                <textarea
                  name="message"
                  placeholder="Décrivez votre vision révolutionnaire... *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none"
                />

                <button
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-xl font-bold text-white hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Send className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Lancer la Révolution</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Informations de Contact</h3>
                <p className="text-white/70 mb-8">
                  Disponible pour des collaborations ambitieuses et des projets qui repoussent 
                  les limites du possible. Contactez-moi par votre moyen préféré.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-cyan-300">
                       <a href="mailto:cheikh.mc2024@gmail">
                        cheikh.mc2024@gmail.com
                        </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Téléphone</div>
                    <div className="text-magenta-300">
                      <a href="tel:+221771660823"> 77 166 08 23</a> 
                       &nbsp; - 
                      <a href="tel:+221764243926"> 76 424 39 26</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Localisation</div>
                    <div className="text-purple-300">Dakar,Thies • Sénégal</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Réseaux Créatifs</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-semibold">Disponible pour nouveaux projets</span>
                </div>
                <p className="text-white/70 text-sm">
                  Actuellement ouvert à des collaborations créatives et des projets innovants.
                  N'hésitez pas à me contacter pour discuter de vos idées et de la manière dont nous pouvons les transformer ensemble.
                </p>
                  Réponse garantie sous 24h.
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}