import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "./storage.js";

describe("Set up storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("getUsername", () => {
    it("should return the user's name when a user is stored", () => {
      const user = { name: "Ole" };
      localStorage.setItem("user", JSON.stringify(user));

      const result = getUsername();
      expect(result).toBe("Ole");
    });

    it("should return null when no user exists in storage", () => {
      const result = getUsername();
      expect(result).toBeNull();
    });
  });
});
