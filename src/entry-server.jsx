// src/entry-server.jsx
// Используется только при сборке: рендерит каждую страницу в HTML (см. scripts/prerender.js).
/* eslint-disable react-refresh/only-export-components -- серверная точка входа, не используется с HMR */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

export { PAGES, NOT_FOUND_PAGE, canonicalUrl, localBusinessJsonLd } from './config/seo.js';
export { SITE } from './config/site.js';

export const render = (url) =>
  renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
