import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser } from "../storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from user object in storage", () => {
    saveUser({ name: "Therese" });
    expect(getUsername()).toBe("Therese");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
