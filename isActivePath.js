// isActivePath function:

export function isActivePath(currentPath, href) {
  if (href === "/") {
    return currentPath === "/" || currentPath === "/index.html";
  }

  return currentPath.includes(href);
}
