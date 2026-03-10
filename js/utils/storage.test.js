import { describe, it, expect, beforeEach } from "vitest";
import { saveUser, getUsername } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    saveUser({ name: "Hampus", email: "hampus@stud.noroff.no" });

    const result = getUsername();

    expect(result).toBe("Hampus");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();

    expect(result).toBeNull();
  });
});
