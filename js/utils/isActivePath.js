/**
 * Checks if a navigation link should be highlighted as "active"
 * Based on the current page path
 * 
 * @param {string} currentPath - The current page path (e.g., "/venue/123")
 * @param {string} href - The link href to check (e.g., "/venue")
 * @returns {boolean} - True if the link should be active, false otherwise
 * 
 * @example
 * // Exact match
 * isActivePath("/login", "/login") // returns true
 * 
 * @example
 * // Nested path (venue detail page)
 * isActivePath("/venue/123", "/venue") // returns true
 * 
 * @example
 * // No match
 * isActivePath("/login", "/register") // returns false
 */
export function isActivePath(currentPath, href) {
  // Special case: Homepage can be "/" or "/index.html"
  if (href === "/") {
    return currentPath === "/" || currentPath === "/index.html";
  }

  // Exact match: current path exactly matches the href
  if (currentPath === href) {
    return true;
  }

  // Partial match: current path includes the href
  // Example: currentPath="/venue/123" includes href="/venue"
  return currentPath.includes(href);
}