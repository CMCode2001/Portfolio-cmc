import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Palette, Zap, Image } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import LogoCMC from '../assets/img/CMC-logo .png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Portfolio', href: '#portfolio', icon: Palette },
    { name: 'Galerie', href: '#gallery', icon: Image },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Contact', href: '#contact', icon: Zap },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="group cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="relative">
                
                <div className="w-20 h-10 bg-gradient-to-br from-cyan-900 to-black-900 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  
                  <img src={LogoCMC} alt="LogoCMC" width={200} height={300} />
                </div>
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-magenta-500 rounded-lg blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <span className="text-white font-bold tracking-wider group-hover:text-cyan-300 transition-colors duration-300 text-sm md:text-xl">
                Developper & Graphic Designer
              </span>
              
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-white/80 hover:text-cyan-300 transition-all duration-300 flex items-center space-x-2"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{item.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-magenta-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden flex items-center space-x-4"> */}
            {/* <ThemeToggle /> 
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:text-cyan-300 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          */}
        </div>
      
        {/* Overlay noir mobile */}
        {isOpen && (
          <div
            className=" bg-black/90 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100 z-50' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-300 hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}