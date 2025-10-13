/**
 * Retrieves the user's name from localStorage.
 * Returns null if no user is found or data is invalid.
 */
export function getUserName() {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return null;
  }

  try {
    const user = JSON.parse(storedUser);
    return user?.name || null;
  } catch (error) {
    console.error("Error parsing user data:", error);
    return null;
  }
}
