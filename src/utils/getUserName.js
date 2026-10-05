export function getUserName() {
  const userData = localStorage.getItem('user');
  if (!userData) return null;

  try {
    const user = JSON.parse(userData);
    return user.name || null;
  } catch {
    return null;
  }
}
