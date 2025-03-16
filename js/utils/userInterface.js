export function isActivePath(currentPath, href) {
  if (href === '/' && (currentPath === '/' || currentPath === '/index.html')) {
    return true;
  }
  return currentPath.startsWith(href);
}
