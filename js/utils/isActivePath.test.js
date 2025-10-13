import { describe, it, expect } from "vitest";
import { isActivePath } from "./isActivePath.js";

describe("isActivePath", () => {
  /**
   * REQUIREMENT 1: Returns true when current path matches href exactly
   * Tests with actual paths from your project: /login, /register, /venue
   */
  it("returns true when current path matches href exactly", () => {
    // Test login page
    expect(isActivePath("/login", "/login")).toBe(true);
    
    // Test register page
    expect(isActivePath("/register", "/register")).toBe(true);
    
    // Test venue list page (if it existed as a separate page)
    expect(isActivePath("/venue", "/venue")).toBe(true);
  });

  /**
   * REQUIREMENT 2: Returns true for root path ("/") 
   * when path is "/" or "/index.html"
   * This tests your homepage with venue list
   */
  it('returns true for root path "/" when path is "/" or "/index.html"', () => {
    // Test homepage with "/"
    expect(isActivePath("/", "/")).toBe(true);
    
    // Test homepage with "/index.html"
    expect(isActivePath("/index.html", "/")).toBe(true);
  });

  /**
   * REQUIREMENT 3: Returns true when current path includes the href
   * Tests with your venue detail pages like /venue/123
   */
  it("returns true when current path includes the href", () => {
    // Test venue detail page (your actual use case!)
    expect(isActivePath("/venue/123", "/venue")).toBe(true);
    expect(isActivePath("/venue/456", "/venue")).toBe(true);
    
    // Test other nested paths (theoretical examples)
    expect(isActivePath("/login/forgot-password", "/login")).toBe(true);
  });

  /**
   * REQUIREMENT 4: Returns false when paths don't match
   * Tests with your actual project paths
   */
  it("returns false when paths don't match", () => {
    // Test different pages don't match
    expect(isActivePath("/login", "/register")).toBe(false);
    expect(isActivePath("/register", "/login")).toBe(false);
    expect(isActivePath("/venue", "/login")).toBe(false);
    
    // Test that partial match doesn't work backwards
    expect(isActivePath("/login", "/login/forgot-password")).toBe(false);
  });
});