import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getUserName } from "./getUserName.js";

describe("getUserName", () => {
  /**
   * Clean up localStorage before each test
   * This ensures tests don't affect each other
   */
  beforeEach(() => {
    localStorage.clear();
  });

  /**
   * Clean up localStorage after all tests
   * Good practice to leave it clean
   */
  afterEach(() => {
    localStorage.clear();
  });

  /**
   * REQUIRED TEST 1 (from brief):
   * Test that it returns the name from the user object in storage
   * (first save a user object to storage)
   */
  it("returns the user's name when user exists in storage", () => {
    // Arrange: Create a realistic user object
    // This is what would be saved after login to Noroff API
    const mockUser = {
      name: "Sergiu",
      email: "sergiu@stud.noroff.no",
      accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    };

    // Act: Save the user to localStorage (simulating what login does)
    localStorage.setItem("user", JSON.stringify(mockUser));

    // Assert: Function should return the name
    const result = getUserName();
    expect(result).toBe("Sergiu");
  });

  /**
   * REQUIRED TEST 2 (from brief):
   * Test that it returns null when no user exists in storage
   */
  it("returns null when no user exists in storage", () => {
    // Arrange: localStorage is already clear (from beforeEach)
    // This simulates a user who hasn't logged in yet

    // Act: Call the function
    const result = getUserName();

    // Assert: Should return null
    expect(result).toBeNull();
  });

  /**
   * BONUS TEST 3: Edge case - Invalid JSON
   * Tests error handling for corrupted data
   */
  it("returns null when stored user data is invalid JSON", () => {
    // Arrange: Put invalid JSON in storage
    // This could happen if data gets corrupted
    localStorage.setItem("user", "{invalid:json}");

    // Act: Call the function
    const result = getUserName();

    // Assert: Should return null (not crash!)
    expect(result).toBeNull();
  });

  /**
   * BONUS TEST 4: Edge case - User object has no name property
   * Tests the ?. optional chaining operator
   */
  it("returns null when user object has no name property", () => {
    // Arrange: User object without name
    // This might happen with malformed API responses
    const mockUser = {
      email: "test@stud.noroff.no",
      accessToken: "token123"
    };
    localStorage.setItem("user", JSON.stringify(mockUser));

    // Act: Call the function
    const result = getUserName();

    // Assert: Should return null
    expect(result).toBeNull();
  });

  /**
   * BONUS TEST 5: Edge case - User object has empty name
   * Tests that empty strings are treated as null
   */
  it("returns null when user name is an empty string", () => {
    // Arrange: User with empty name
    const mockUser = {
      name: "",
      email: "test@stud.noroff.no"
    };
    localStorage.setItem("user", JSON.stringify(mockUser));

    // Act: Call the function
    const result = getUserName();

    // Assert: Should return null (because || null converts "" to null)
    expect(result).toBeNull();
  });
});