import { describe, test, expect } from "vitest";
import { isActivePath } from "../js/utils/userInterface.js";

describe("isActivePath", () => {
  test("returns true when current path matches href exactly", () => {
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  test("returns true for root path '/' when current path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  test("returns true when current path includes the href", () => {
    expect(isActivePath("/venue", "/venue/?id=123")).toBe(true);
  });

  test("returns false when paths do not match", () => {
    expect(isActivePath("/login", "/register")).toBe(false);
    expect(isActivePath("/", "/login")).toBe(false);
  });
});
