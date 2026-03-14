import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  it("returns true for root path when path is /", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it("returns true for root path when path is /index.html", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes href", () => {
    expect(isActivePath("/venue", "/venue/details")).toBe(true);
  });

  it("returns false when paths don't match", () => {
    expect(isActivePath("/login", "/register")).toBe(false);
  });
});
