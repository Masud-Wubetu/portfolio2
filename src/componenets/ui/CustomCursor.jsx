import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();

    const moveMouse = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseenter', () => setIsVisible(true));
    window.addEventListener('mouseleave', () => setIsVisible(false));
    
    const updateLinks = () => {
      const links = document.querySelectorAll('a, button, [role="button"], input, textarea');
      links.forEach(link => {
        link.addEventListener('mouseenter', handleHover);
        link.addEventListener('mouseleave', handleUnhover);
      });
    };

    updateLinks();
    const interval = setInterval(updateLinks, 2000);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseenter', () => setIsVisible(true));
      window.removeEventListener('mouseleave', () => setIsVisible(false));
      clearInterval(interval);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Circle - Gray Filled */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 bg-white/10 rounded-full pointer-events-none z-[9998] mix-blend-difference backdrop-blur-[2px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
        }}
      />
      {/* Inner Circle - Increased Radius, Purple */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-primary rounded-full pointer-events-none z-[9999] shadow-[0_0_20px_rgba(122,19,255,0.6)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 0.6 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
