export function isActivePath(pathname, href) {
  if (href === '/') return pathname === '/' || pathname === '/index.html';
  if (pathname === href) return true;
  return pathname.includes(href);
}

export function getUserName() {
  try {
    const raw = localStorage.getItem('user');
    if (!raw) return null;
    const user = JSON.parse(raw);
    return user?.name ?? null;
  } catch {
    return null;
  }
}
