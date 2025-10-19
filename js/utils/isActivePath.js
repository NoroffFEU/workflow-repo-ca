export function isActivePath(currentPath, href) {
  if (!currentPath || !href) return false;

  const normalize = (p) => (p === "/index.html" ? "/" : p);
  const cur = normalize(currentPath);
  const link = normalize(href);

  if (cur === link) return true;
  if (link === "/" && (cur === "/" || cur === "/index.html")) return true;
  if (cur.startsWith(link) && link !== "/") return true;

  return false;
}

export default isActivePath;
