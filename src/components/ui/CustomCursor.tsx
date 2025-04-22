// src/components/ui/CustomCursor.tsx
import React from 'react';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999]" style={{ transform: `translate(${position.x - 16}px, ${position.y - 16}px)` }}>
      <div className="w-full h-full rounded-full bg-cyan-400/20 border border-cyan-300 shadow-lg animate-ping" />
    </div>
  );
};

export default CustomCursor;
