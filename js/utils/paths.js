export function normalizePath(path = "") {
  let p = String(path).split(/[?#]/)[0];
  if (p.endsWith("/index.html")) p = p.slice(0, -"/index.html".length) || "/";
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p || "/";
}

export function isActivePath(currentPath, href) {
  const cur = normalizePath(currentPath);
  const target = normalizePath(href);
  if (target === "/") return cur === "/" || cur === "/index.html" || cur === "";
  if (cur === target) return true;
  return cur.startsWith(target + "/");
}
