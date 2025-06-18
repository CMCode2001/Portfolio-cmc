import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { DesignGallery } from './components/DesignGallery';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import AllCreationsPage from './components/AllCreationsPage';
import LogoCMC from './assets/img/CMC-logo .png';
import { Cursor } from './components/Cursor';

function App() {
  const date = new Date();
  return (
    <Router>
      <div className="relative">
        <Cursor />
        <Header />
        <br/>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <DesignGallery />
                  <About />
                  {/* <Portfolio /> */}
                  <Skills />
                  <Contact />
                </>
              }
            />
            <Route path="/creations" element={<AllCreationsPage />} />
          </Routes>
        </main>
        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-12">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-14 h-10 bg-gradient-to-br from-cyan-900 to-black rounded-lg flex items-center justify-center">
                  <img src={LogoCMC} alt="LogoCMC" width={200} height={300} />
                </div>
                <span className="text-white font-bold text-xl">
                  Developper & Graphic Designer
                </span>
              </div>
              <p className="text-white/70 mb-6">
                Créateur d'expériences numériques révolutionnaires • Designer du futur
              </p>
              <div className="flex justify-center space-x-8 text-sm text-white/50">
                <span>© {date.getFullYear()} CMC-Developer</span>
                <span>•</span>
                <span>CMC-Design</span>
                <span>•</span>
                <span>Tous droits reservés</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;