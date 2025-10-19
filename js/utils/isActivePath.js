export function isActivePath(href) {
  const currentPath = window.location.pathname;
  if (
    currentPath === href ||
    (currentPath === "/" && (href === "/" || href === "/index.html")) ||
    (currentPath === "/index.html" && (href === "/" || href === "/index.html"))
  ) {
    return true;
  }
  {
    return false;
  }
}
