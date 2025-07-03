import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a') || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          width: isHovering ? '32px' : '16px',
          height: isHovering ? '32px' : '16px',
          background: isClicking ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
          transform: `scale(${isClicking ? '0.8' : '1'})`,
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border-2 border-primary/30 transition-all duration-300 ease-out"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: '40px',
          height: '40px',
          opacity: isHovering ? '0.6' : '0.3',
          transform: `scale(${isHovering ? '1.5' : '1'})`,
        }}
      />
    </>
  );
};

export default CustomCursor;