// scripts/prerender.js
// После `vite build` создаёт отдельный HTML-файл для каждой страницы
// с готовой разметкой, title/description/canonical и schema.org,
// а также sitemap.xml и 404.html.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-server', 'entry-server.js');

const { render, PAGES, NOT_FOUND_PAGE, canonicalUrl, localBusinessJsonLd, SITE } =
  await import(pathToFileURL(serverEntry).href);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const headTags = (page) => {
  const url = canonicalUrl(page.path);
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const jsonLd = JSON.stringify(localBusinessJsonLd()).replace(/</g, '\\u003c');
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${page.noindex ? 'noindex, follow' : 'index, follow'}" />`,
    page.noindex ? '' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ');
};

const buildHtml = (page, url) =>
  template
    // Функции-заменители, чтобы "$" в тексте не воспринимались как шаблоны замены
    .replace(/<title>.*?<\/title>/s, () => headTags(page))
    .replace('<div id="root"></div>', () => `<div id="root">${render(url)}</div>`);

const writePage = (relFile, html) => {
  const file = path.join(distDir, relFile);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log(`  prerendered ${relFile}`);
};

for (const page of PAGES) {
  const relFile = page.path === '/' ? 'index.html' : `${page.path.slice(1)}/index.html`;
  writePage(relFile, buildHtml(page, page.path));
}
writePage('404.html', buildHtml(NOT_FOUND_PAGE, '/404'));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
  (p) => `  <url>
    <loc>${canonicalUrl(p.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('  wrote sitemap.xml');

fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
