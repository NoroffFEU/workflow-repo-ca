/**
 * Checks if a given href matches or is included in the current path.
 * Handles the root path "/" and "/index.html".
 */
export function isActivePath(currentPath, href) {
  if (href === "/") {
    return currentPath === "/" || currentPath === "/index.html";
  }
  if (currentPath === href) {
    return true;
  }
  return currentPath.includes(href);
}
