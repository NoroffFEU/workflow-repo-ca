import { describe, it, expect } from "vitest";
import { isActivePath } from "../js/utils/userInterface.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/venue", "/venue")).toBe(true);
  });

  it("returns true for root path when current path is /", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it("returns true for root path when current path is /index.html", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes href", () => {
    expect(isActivePath("/venue", "/venue/index.html")).toBe(true);
  });

  it("returns false when paths don't match", () => {
    expect(isActivePath("/login", "/venue")).toBe(false);
  });
});
