// js/utils/userInterface.js

export function isActivePath(currentPath, href) {
  if (href === "/") {
    return currentPath === "/" || currentPath === "/index.html";
  }

  return currentPath === href || currentPath.includes(href);
}
