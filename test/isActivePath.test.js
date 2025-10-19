import { describe, it, expect } from "vitest";
import { isActivePath } from "../js/utils/paths.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
    expect(isActivePath("/venues", "/venues")).toBe(true);
  });

  it('returns true for root ("/") when path is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/index.html", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path starts with the href (section active)", () => {
    expect(isActivePath("/venues/123", "/venues")).toBe(true);
    expect(isActivePath("/venues/list?page=2", "/venues")).toBe(true);
  });

  it("returns false when paths don't match", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
    expect(isActivePath("/venues", "/about")).toBe(false);
  });
});
