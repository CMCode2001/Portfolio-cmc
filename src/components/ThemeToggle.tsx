import React from 'react';
import { Moon, Sun, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  const getIcon = () => {
    switch (theme) {
      case 'light': return <Sun className="w-5 h-5" />;
      case 'cinematic': return <Zap className="w-5 h-5" />;
      default: return <Moon className="w-5 h-5" />;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
      aria-label="Toggle theme"
    >
      <div className="relative z-10 text-white group-hover:text-cyan-300 transition-colors duration-300">
        {getIcon()}
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
    </button>
  );
}