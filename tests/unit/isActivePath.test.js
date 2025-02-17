import { describe, expect, test } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

describe("isActivePath", () => {
  test("Returns true when currentPath matches href exactly", () => {
    const href = "/about";
    const currentPath = "/about";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  test("Returns true for root path ('/') when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  test("Returns true when currentPath includes href", () => {
    const href = "/dashboard";
    const currentPath = "/dashboard/settings";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  test("Returns false when paths don't match", () => {
    const href = "/about";
    const currentPath = "/contact";
    expect(isActivePath(href, currentPath)).toBe(false);
  });
});

