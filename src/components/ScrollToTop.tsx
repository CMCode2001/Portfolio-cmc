import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          padding: '10px 15px',
          fontSize: '18px',
          borderRadius: '100px',
          background: '#00D9FF',
          color: '#000',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000
        }}
        aria-label="Remonter en haut"
      >
        ↑ 
      </button>
    )
  );
};

export default ScrollToTop;