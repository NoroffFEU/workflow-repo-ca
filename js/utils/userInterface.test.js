import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface";

// Test for the isActivePath function
describe("Testing the isActivePath function", () => {
  // Returns true when the current path matches href exactly
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/index.html", "/index.html")).toBe(true);
  });

  // Returns true for root path ("/") when path is "/" or "/index.html
  it('returns true for root path ("/") when current path is "/"', () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it('returns true for root path ("/") when current path is "/index.html"', () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  //Returns true when current path includes the href
  it("returns true when current path includes the href", () => {
    expect(isActivePath("/index", "/index.html")).toBe(true);
  });

  // Returns false when paths don't match
  it("returns false when paths don't match", () => {
    expect(isActivePath("/", "/otherpath")).toBe(false);
    expect(isActivePath("/index.html", "/about")).toBe(false);
  });
});
