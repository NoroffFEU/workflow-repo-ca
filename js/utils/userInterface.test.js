import { describe, expect, it } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });
  it('returns true when current path ("/") when path is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/venue", "/venue/index.html")).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    expect(isActivePath("/venue", "/venue/index.html")).toBe(true);
  });

  it("returns false when paths do not match", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
  });
});
