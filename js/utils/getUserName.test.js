import { describe, it, expect, beforeEach } from "vitest";
import { getUserName } from "./getUserName";

describe("getUserName", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // Test 1: Returns the user's name from storage
  it("returns the user's name when user exists in storage", () => {
    const mockUser = { name: "Sergiu", email: "sergiu@stud.noroff.no" };
    localStorage.setItem("user", JSON.stringify(mockUser));
    const result = getUserName();
    expect(result).toBe("Sergiu");
  });

  // Test 2: Returns null when user key doesn't exist
  it("returns null when no user exists in storage", () => {
    const result = getUserName();
    expect(result).toBeNull();
  });

  // Test 3: Returns null when stored data is invalid JSON
  it("returns null when stored user data is invalid JSON", () => {
    localStorage.setItem("user", "{invalid:json}");
    const result = getUserName();
    expect(result).toBeNull();
  });

  // Test 4: Returns null when user has no name property
  it("returns null when user object has no name", () => {
    const mockUser = { email: "test@stud.noroff.no" };
    localStorage.setItem("user", JSON.stringify(mockUser));
    const result = getUserName();
    expect(result).toBeNull();
  });
});
