export function activePath(current, href) {
  if (!current || !href) return false;

  if (href === '/' || href === '/index.html') {
    return current === '/' || current === '/index.html';
  }

  return current === href || current.includes(href);
}
