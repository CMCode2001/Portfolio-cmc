import React, { useEffect, useRef } from 'react';

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && trailRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        trailRef.current.animate(
          [
            { transform: trailRef.current.style.transform },
            { transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0)` }
          ],
          { duration: 400, fill: 'forwards' }
        );
        trailRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div
        ref={trailRef}
        className="cursor-trail"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'rgba(0,255,255,0.15)',
          pointerEvents: 'none',
          zIndex: 50,
          transition: 'background 0.2s',
        }}
      />
      <div
        ref={cursorRef}
        className="cursor-dot"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: 'cyan',
          pointerEvents: 'none',
          zIndex: 51,
          boxShadow: '0 0 8px 2px cyan',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};