export function isActivePath(currentPath, href) {
  const normalizedPath = currentPath === '/index.html' ? '/' : currentPath;

  if (normalizedPath === href) {
    return true;
  }

  if (
    href === '/' &&
    (normalizedPath === '/' || normalizedPath === '/index.html')
  ) {
    return true;
  }

  if (href !== '/' && normalizedPath.startsWith(href)) {
    return true;
  }

  return false;
}

export function updateTitle(newTitle) {
  document.title = newTitle;
}

export function updateMainHeading(text) {
  const heading = document.querySelector('main h1');
  if (heading) {
    heading.textContent = text;
  }
}
