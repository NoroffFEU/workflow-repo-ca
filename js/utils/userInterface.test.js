import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    const result = isActivePath("/login", "/login");
    expect(result).toBe(true);
  });

  it('returns true for root path "/" when path is "/"', () => {
    const result = isActivePath("/", "/");
    expect(result).toBe(true);
  });

  it('returns true for root path "/" when path is "/index.html"', () => {
    const result = isActivePath("/", "/index.html");
    expect(result).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    const result = isActivePath("/venue", "/venue/index.html?id=123");
    expect(result).toBe(true);
  });

  it("returns false when paths don't match", () => {
    const result = isActivePath("/register", "/login");
    expect(result).toBe(false);
  });
});
