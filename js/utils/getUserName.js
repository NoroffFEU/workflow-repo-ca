export function getUserName() {
  try {
    const raw = localStorage.getItem('user'); // adjust key if your app differs
    if (!raw) return null;
    const obj = JSON.parse(raw);
    return obj?.name ?? null;
  } catch {
    return null;
  }
}
