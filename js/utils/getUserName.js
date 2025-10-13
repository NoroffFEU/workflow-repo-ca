/**
 * Retrieves the user's name from localStorage.
 * 
 * After logging in through the Noroff API, the user data is stored
 * in localStorage with the key "user". This function reads that data.
 * 
 * Expected user object structure in localStorage:
 * {
 *   "name": "Sergiu",
 *   "email": "sergiu@stud.noroff.no",
 *   "accessToken": "eyJhbGc..."
 * }
 * 
 * @returns {string|null} - The user's name, or null if not found/invalid
 * 
 * @example
 * // After successful login:
 * getUserName() // returns "Sergiu"
 * 
 * @example
 * // When no user is logged in:
 * getUserName() // returns null
 */
export function getUserName() {
  // Step 1: Try to get the "user" item from localStorage
  const storedUser = localStorage.getItem("user");

  // Step 2: If nothing is stored, return null immediately
  if (!storedUser) {
    return null;
  }

  // Step 3: Try to parse the JSON string
  try {
    const user = JSON.parse(storedUser);
    
    // Step 4: Return the name if it exists, otherwise null
    // The ?. operator safely checks if user.name exists
    return user?.name || null;
    
  } catch (error) {
    // Step 5: If JSON is invalid, log the error and return null
    console.error("Error parsing user data from localStorage:", error);
    return null;
  }
}