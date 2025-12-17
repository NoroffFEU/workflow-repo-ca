import { describe, test, expect } from "vitest";
import { isActivePath } from "../isActivePath.js";

describe("isActivePath", () => {
  // 1.
  test("1. Returns true when current path matches href exactly", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  // 2.
  test('2. Returns true for root path ("/") when path is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/index.html", "/")).toBe(true);
  });

  // 3.
  test("3. Returns true when current path includes the href", () => {
    expect(isActivePath("/admin/users/1", "/admin/users")).toBe(true);
  });

  // 4.
  test("4. Returns false when paths don't match", () => {
    expect(isActivePath("/about", "settings")).toBe(false);
  });
});
