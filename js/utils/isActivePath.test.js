import { describe, it, expect } from "vitest";
import { isActivePath } from "./isActivePath.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    const result = isActivePath("/login/index.html", "/login/index.html");
    expect(result).toBe(true);
  });

  it('returns true for root "/" when path is "/"', () => {
    const result = isActivePath("/", "/");
    expect(result).toBe(true);
  });

  it('returns true for root "/" when path is "/index.html"', () => {
    const result = isActivePath("/index.html", "/");
    expect(result).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    const result = isActivePath("/venue/123", "/venue");
    expect(result).toBe(true);
  });

  it("returns false when paths do not match", () => {
    const result = isActivePath("/login/index.html", "/register/index.html");
    expect(result).toBe(false);
  });
});
