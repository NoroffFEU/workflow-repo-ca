import { describe, it, expect, beforeEach } from "vitest";
import { saveUser, getUsername, clearStorage } from "../storage";

// Clears localStorage before each Test.
describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "Senbet Gereslase" };
    saveUser(user);

    const result = getUsername();
    expect(result).toBe("Senbet Gereslase");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBe(null);
  });
});
