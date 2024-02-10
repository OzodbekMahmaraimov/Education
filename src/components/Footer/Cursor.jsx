import React, { useState, useEffect } from 'react';
import './CursorTracker.css'; // Create a CSS file for styling

const CursorTracker = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-tracker">
      <div className="cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }} />
      {/* Your beautiful element goes here */}
    </div>
  );
};

export default CursorTracker;
