

import { useEffect, useState, useRef } from 'react';

export default function AnimateOnScroll({ children, className, animation = 'fadeUp', threshold = 0.1 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);
  
  // Animation transform properties based on animation type
  const getInitialStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fadeUp':
          return 'opacity-0 translate-y-5';
        case 'fadeDown':
          return 'opacity-0 -translate-y-5';
        case 'fadeLeft':
          return 'opacity-0 translate-x-5';
        case 'fadeRight':
          return 'opacity-0 -translate-x-5';
        case 'zoomIn':
          return 'opacity-0 scale-90';
        case 'zoomOut':
          return 'opacity-0 scale-110';
        default:
          return 'opacity-0';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };
  
  return (
    <div 
      ref={ref}
      className={`${className || ''} ${getInitialStyles()} transition-all duration-700 ease-in-out`}
    >
      {children}
    </div>
  );
}
