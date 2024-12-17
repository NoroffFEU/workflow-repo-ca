import { describe, it, expect, beforeEach } from "vitest";
import { isActivePath } from "./userInterface.js";
import { getUsername } from "./storage.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/login/", "/login/")).toBe(true);
  });

  it("returns true for root path ('/') when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/venues/details", "/venues/details")).toBe(true);
  });

  it("returns false when paths don’t match", () => {
    expect(isActivePath("/register", "/login/")).toBe(false);
  });
});

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear(); // Clean storage before each test
  });

  it("returns the name from the user object in storage", () => {
    const mockUser = { name: "John Doe" };
    localStorage.setItem("user", JSON.stringify(mockUser));

    const result = getUsername();
    expect(result).toBe("John Doe");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBeNull();
  });
});
