// src/js/utils/utils.js

export function isActivePath(currentPath, href) {
  // normalize “/” and “/index.html” both to “/”
  const normalize = (p) => (p === '/' || p.endsWith('/index.html') ? '/' : p);
  const c = normalize(currentPath);
  const h = normalize(href);
  return c === h || c.startsWith(h + '/');
}

export function getUserName() {
  const raw = localStorage.getItem('user');
  if (!raw) return null;
  try {
    return JSON.parse(raw).name ?? null;
  } catch {
    return null;
  }
}
