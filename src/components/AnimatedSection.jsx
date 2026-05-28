import { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const transforms = {
    up: visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    down: visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10',
    left: visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
    right: visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${transforms[direction] || transforms.up} ${className}`}
    >
      {children}
    </div>
  );
}
