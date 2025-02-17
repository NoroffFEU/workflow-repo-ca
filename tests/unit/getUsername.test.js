import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "../../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage(); 
  });

  afterEach(() => {
    clearStorage(); 
  });

  it("should return the username from localStorage", () => {
    const user = { name: "TestUser" };
    saveUser(user); 
    expect(getUsername()).toBe("TestUser"); // Expect us to get the correct name back
  });

  it("should return null when no user is in storage", () => {
    expect(getUsername()).toBeNull(); // Should be `null' if no user is saved
  });
});
