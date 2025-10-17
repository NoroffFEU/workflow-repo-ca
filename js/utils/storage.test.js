import { describe, it, expect, beforeEach } from "vitest";
import { saveUser, getUsername, clearStorage } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    saveUser({ name: "test1234567" });
    expect(getUsername()).toBe("test1234567");
  });

  it("returns null when no user exists in storage", () => {
    clearStorage();
    expect(getUsername()).toBeNull();
  });
});
