// src/components/ScrollToTop.jsx
// При переходе на другую страницу прокручивает окно наверх (без этого SPA остаётся внизу).
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
