import { describe, it, expect } from "vitest";
import { isActivePath } from "../userInterface";

describe("isActivePath", () => {
  it('returns true for root path "/" when currentPath is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  it("returns true when current path includes href", () => {
    expect(isActivePath("/about", "/about/team")).toBe(true);
    expect(isActivePath("/venue", "/venue/123")).toBe(true);
  });

  it("returns false when paths don’t match", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
    expect(isActivePath("/venue", "/register")).toBe(false);
  });
});
