export function isActivePath(currentPath, href) {
  if (currentPath === href) {
    return true; // Eksakt samsvar
  }

  if (currentPath === "/" && (href === "/" || href === "/index.html")) {
    return true; // Root path sjekk
  }

  return currentPath.startsWith(href);
}
