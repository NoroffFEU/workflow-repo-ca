import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "./storage";

describe("getUserName", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    localStorage.setItem(" user", JSON.stringify({ name: "JayFlow" }));
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
