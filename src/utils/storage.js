const KEY = "user";

export function getUserName() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const obj = JSON.parse(raw);
    return obj?.name ?? null;
  } catch {
    return null;
  }
}