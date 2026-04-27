import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="font-mono text-xl md:text-2xl text-gray-300">
      {currentText}
      <span className="animate-pulse inline-block w-[2px] h-[1em] bg-gray-300 ml-1 align-middle -translate-y-[2px]"></span>
    </span>
  );
};

export default TypewriterText;
