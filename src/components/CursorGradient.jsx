'use client'
import { useState, useEffect } from 'react';

const GradientBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen pointer-events-none z-50 bg-gradient-to-r from-[${position.x / 10}%] via-[${position.y / 10}%] to-[${(position.x + position.y) / 10}%] bg-[length:400%_400%] animate-gradient-move`}
    />
  );
};

export default GradientBackground;