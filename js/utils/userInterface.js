export const isActivePath = (currentPath, href) => {
  if (href === "/") {
    return currentPath === "/" || currentPath === "/index.html";
  }
  if (currentPath === href) {
    return true;
  }
  return currentPath.startsWith(href);
};
