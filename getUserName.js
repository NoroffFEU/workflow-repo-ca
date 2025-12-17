// getUserName function:

export function getUserName() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.name : null;
}
