import React, { useEffect } from 'react';

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.pageXOffset, y: window.pageYOffset });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

export default useScroll;