import { describe, test, expect, beforeEach } from "vitest";
import { getUsername } from "../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("returns the name from the user object in storage", () => {
    const user = { name: "testuser", email: "testuser@stud.noroff.no" };
    localStorage.setItem("user", JSON.stringify(user));
    expect(getUsername()).toBe("testuser");
  });

  test("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
