export function isActivePath(currentPath, href) {
  if (!currentPath || !href) {
    return false;
  }

  if (href === "/") {
    return currentPath === "/" || currentPath === "/index.html";
  }

  if (currentPath === href) {
    return true;
  }

  if (currentPath.startsWith(href)) {
    return true;
  }

  return false;
}
