import React, { useState, useEffect } from 'react';

const TypewriterText = ({ texts, typingSpeed = 70, erasingSpeed = 40, pauseDuration = 2000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[textIndex % texts.length];
    
    let timer;

    if (isDeleting) {
      // Erasing logic
      timer = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
      }, erasingSpeed);
      
      if (currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => prev + 1);
      }
    } else {
      // Typing logic
      timer = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }, typingSpeed);

      if (currentText === currentFullText) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts, typingSpeed, erasingSpeed, pauseDuration]);

  return (
    <span className="font-mono text-xl md:text-2xl text-white/60">
      {currentText}
      <span className="animate-pulse inline-block w-[3px] h-[1.2em] bg-primary ml-1 align-middle -translate-y-[2px]"></span>
    </span>
  );
};

export default TypewriterText;
