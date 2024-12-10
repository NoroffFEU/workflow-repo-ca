import { describe, it, expect } from "vitest";
import { isActivePath } from "../js/utils/userInterface.js";

describe("isActivePath function", () => {
  it("should return true when the current path matches href exactly", () => {
    const href = "/about";
    const currentPath = "/about";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it("should return true for the root path when the current path is '/'", () => {
    const href = "/";
    const currentPath = "/";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it("should return true for the root path when the current path is '/index.html'", () => {
    const href = "/";
    const currentPath = "/index.html";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it("should return true when the current path includes href", () => {
    const href = "/about";
    const currentPath = "/about/team";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it("should return false when paths do not match", () => {
    const href = "/contact";
    const currentPath = "/about";
    expect(isActivePath(href, currentPath)).toBe(false);
  });
});
