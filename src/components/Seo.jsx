// src/components/Seo.jsx
// Обновляет <title>, description, canonical и OG-теги при переходах между страницами.
// Начальные значения уже вшиты в HTML при пререндере (scripts/prerender.js).
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPage, canonicalUrl } from '../config/seo.js';

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = getPage(pathname);
    const url = canonicalUrl(page.path);
    document.title = page.title;
    setMeta('name', 'description', page.description);
    setMeta('name', 'robots', page.noindex ? 'noindex, follow' : 'index, follow');
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:url', url);
    setCanonical(url);
  }, [pathname]);

  return null;
};

export default Seo;
