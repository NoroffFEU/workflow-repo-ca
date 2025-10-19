export function isActivePath(href, currentPath = (typeof location !== "undefined" ? location.pathname : "/")) {
  if (!href) return false;
  if (href === "/" && (currentPath === "/" || currentPath === "/index.html")) return true;
  if (currentPath === href) return true;
  return currentPath.includes(href);
}