import { useState, useEffect } from 'react';

export function useTypingEffect(texts, typingSpeed = 80, deletingSpeed = 40, pauseTime = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsDeleting(false);
  }, [texts]);

  useEffect(() => {
    const current = texts[currentIndex] || '';

    if (!isDeleting && displayText === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const t = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(t);
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}
