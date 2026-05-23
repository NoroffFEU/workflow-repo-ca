import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/register", "/register")).toBe(true);
  });

  it("returns true for root path " / " ", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    expect(isActivePath("/venue", "/venue/details")).toBe(true);
  });

  it("returns false when paths don't match", () => {
    expect(isActivePath("/login", "/register")).toBe(false);
  });
});
