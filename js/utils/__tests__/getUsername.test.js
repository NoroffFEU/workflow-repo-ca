import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "../storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("returns the name from the user object in storage", () => {
    saveUser({ name: "Christina" });
    expect(getUsername()).toBe("Christina");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
