export function isActivePath(href, path) {
  if (href === "/" && (path === "/" || path === "/index.html")) return true;
  if (href === path) return true;
  return path.startsWith(href);
}
