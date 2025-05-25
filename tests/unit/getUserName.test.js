import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "../../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage(); // clean slate before each test
  });

  afterEach(() => {
    clearStorage(); // clean slate after each test too
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "Azeb", email: "azeb@example.com" };
    saveUser(user);

    const result = getUsername();
    expect(result).toBe("Azeb");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBeNull();
  });
});
