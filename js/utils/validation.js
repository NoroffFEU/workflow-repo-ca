export function validateEmail(email) {
  if (typeof email !== "string") return false;
  const emailRegex = /^[^\s@]*@(stud\.)?noroff\.no$/i;
  return emailRegex.test(email);
}
export function validatePassword(password) {
  return password.length >= 8;
}

export function validateLoginForm(email, password) {
  const errors = [];

  if (!validateEmail(email)) {
    errors.push("Please enter a noroff.no or stud.noroff.no email address.");
  }

  if (!validatePassword(password)) {
    errors.push(`Password must be at least 8 characters.`);
  }

  return {
    isValid: errors.length === 0,
    errors: errors,
  };
}
