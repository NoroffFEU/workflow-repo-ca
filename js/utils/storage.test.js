import { expect, describe, test, beforeEach } from "vitest";
import { saveUser, getUsername } from "./storage";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // Test 1: Returns the name from the user object in storage
  test("returns the name from the user object in storage", () => {
    const mockUser = { name: "Ola Nordmann", age: 30 };
    saveUser(mockUser);
    expect(getUsername()).toBe("Ola Nordmann");
  });

  // Test 2: Returns null when no user exists in storage
  test("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
