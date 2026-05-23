import { expect, describe, it, beforeEach } from "vitest";
import { saveUser, getUsername } from "./storage";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    saveUser({ name: "JohnDoe" });
    expect(getUsername()).toBe("JohnDoe");
  });

  it("returns null when no user exist", () => {
    expect(getUsername()).toBeNull();
  });
});
