import { expect, describe, it, beforeEach, afterEach, vi } from "vitest";
import { saveUser, getUsername } from "./storage.js";

describe("getUsername", () => {
  // Save the original localStorage
  const originalLocalStorage = { ...global.localStorage };

  beforeEach(() => {
    // Create a mock localStorage for testing
    global.localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    };
  });

  afterEach(() => {
    // Restore the original localStorage after tests
    global.localStorage = originalLocalStorage;

    // Clear any mocks
    vi.resetAllMocks();
  });

  it("returns the name from the user object in storage", () => {
    // Setup - mock localStorage.getItem to return a user object with a name
    const testUser = { name: "Test User", email: "test@noroff.no" };
    localStorage.getItem = vi.fn().mockReturnValue(JSON.stringify(testUser));

    // First save a user to storage
    saveUser(testUser);

    // Execute
    const result = getUsername();

    // Verify
    expect(result).toBe("Test User");
    expect(localStorage.getItem).toHaveBeenCalledWith("user");
  });

  it("returns null when no user exists in storage", () => {
    // Setup - mock localStorage.getItem to return null (no user in storage)
    localStorage.getItem = vi.fn().mockReturnValue(null);

    // Execute
    const result = getUsername();

    // Verify
    expect(result).toBeNull();
    expect(localStorage.getItem).toHaveBeenCalledWith("user");
  });
});
