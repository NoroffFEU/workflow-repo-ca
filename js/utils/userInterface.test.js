import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface.js"; // Adjust the import path as needed

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  it("returns true for root path ('/') when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    expect(isActivePath("/venues/details", "/getVenues")).toBe(true);
  });

  it("returns false when paths don’t match", () => {
    expect(isActivePath("/register", "/login")).toBe(false);
  });
});
