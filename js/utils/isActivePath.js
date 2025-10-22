export function isActivePath(href) {
  const current = window.location.pathname;
  if (href === "/" || href === "/index.html") {
    return current === "/" || current === "/index.html";
  }
  return current === href || current.startsWith(href);
}

export function getUserName() {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return null;
    const user = JSON.parse(raw);
    return user?.name ?? null;
  } catch {
    return null;
  }
}
