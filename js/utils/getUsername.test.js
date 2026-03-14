import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("returns the name from user object in storage", () => {
    saveUser({ name: "Mary" });
    expect(getUsername()).toBe("Mary");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBe(null);
  });
});
