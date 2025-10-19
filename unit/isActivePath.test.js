import { describe, it, expect } from "vitest";
import { isActivePath } from "../js/utils/isActivePath.js";

describe("isActivePath", () => {
  it("true når path matcher href eksakt", () => {
    expect(isActivePath("/venue", "/venue")).toBe(true);
  });

  it('true for "/" når current er "/" eller "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/index.html", "/")).toBe(true);
  });

  it("true når current path inkluderer href", () => {
    expect(isActivePath("/venues/123", "/venues")).toBe(true);
  });

  it("false når paths ikke matcher", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
  });
});
