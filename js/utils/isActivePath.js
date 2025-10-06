export function isActivePath(currentPath, href) {
  const norm = (p) => p.replace(/\/index\.html$/, '/');
  const c = norm(currentPath);
  const h = norm(href);
  if (h === '/') return c === '/' || c === '' || c === '/index.html';
  if (c === h) return true;
  return c.includes(h);
}
