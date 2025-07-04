import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a') || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.closest('[role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Hide cursor when interacting with input fields
    const handleInputFocus = () => setIsVisible(false);
    const handleInputBlur = () => setIsVisible(true);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add event listeners to existing inputs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', handleInputFocus);
      input.addEventListener('blur', handleInputBlur);
    });

    // Observer for dynamically added inputs
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            const newInputs = node.querySelectorAll('input, textarea');
            newInputs.forEach(input => {
              input.addEventListener('focus', handleInputFocus);
              input.addEventListener('blur', handleInputBlur);
            });
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      inputs.forEach(input => {
        input.removeEventListener('focus', handleInputFocus);
        input.removeEventListener('blur', handleInputBlur);
      });
      
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] rounded-full transition-all duration-200 ease-out"
        style={{
          left: position.x - 10,
          top: position.y - 10,
          width: isHovering ? '24px' : '20px',
          height: isHovering ? '24px' : '20px',
          background: isClicking 
            ? 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--secondary)))' 
            : isHovering 
              ? 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))'
              : 'hsl(var(--primary))',
          transform: `scale(${isClicking ? '0.7' : '1'})`,
          boxShadow: isHovering ? '0 0 20px hsl(var(--primary) / 0.5)' : '0 0 10px hsl(var(--primary) / 0.3)',
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998] rounded-full transition-all duration-300 ease-out"
        style={{
          left: position.x - 25,
          top: position.y - 25,
          width: '50px',
          height: '50px',
          border: `2px solid hsl(var(--primary) / ${isHovering ? '0.4' : '0.2'})`,
          opacity: isHovering ? '0.8' : '0.4',
          transform: `scale(${isHovering ? '1.2' : '1'})`,
        }}
      />
      <div
        className="fixed pointer-events-none z-[9997] rounded-full transition-all duration-500 ease-out"
        style={{
          left: position.x - 35,
          top: position.y - 35,
          width: '70px',
          height: '70px',
          background: `radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)`,
          opacity: isHovering ? '0.6' : '0.2',
          transform: `scale(${isClicking ? '0.8' : isHovering ? '1.1' : '1'})`,
        }}
      />
    </>
  );
};

export default CustomCursor;