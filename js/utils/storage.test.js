import { expect, describe, it, beforeEach } from "vitest";
import { saveUser, getUsername } from "./storage";

// Test to check that the getUsername returns either a username or null if nothing is saved in storage
describe("Test for getUsername function", () => {
  beforeEach(() => {
    // Clearing local storage before each test
    localStorage.clear();
  });

  // Testing that it returns the name from the user object in storage
  it("returns the name from the user object in storage", () => {
    const testUser = { name: "Hanna" };
    saveUser(testUser);

    const username = getUsername();
    expect(username).toBe("Hanna");
  });

  // Testing that it returns null if no user exists in storage
  it("returns null when no user exists in storage", () => {
    const username = getUsername();
    expect(username).toBeNull();
  });
});
