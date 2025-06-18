import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light' | 'cinematic';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme') as Theme;
      return saved || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-dark', 'theme-light', 'theme-cinematic');
    
    // Add current theme class
    root.classList.add(`theme-${theme}`);
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      switch (prev) {
        case 'dark': return 'light';
        case 'light': return 'cinematic';
        case 'cinematic': return 'dark';
        default: return 'dark';
      }
    });
  };

  return { theme, setTheme, toggleTheme };
}