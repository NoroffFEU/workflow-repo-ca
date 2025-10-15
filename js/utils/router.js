export function isActivePath(currentPath, href) {
  if (!currentPath || !href) return false;
  if (href === '/' && (currentPath === '/' || currentPath === '/index.html')) return true;
  if (currentPath === href) return true;
  return currentPath.includes(href);
}
