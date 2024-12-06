import { expect, test } from "vitest";
import { isActivePath } from "./userInterface";

// 1. Returns true when current path matches href exactly
test("returns true when current path matches href exactly", () => {
  expect(isActivePath("/about", "/about")).toBe(true);
});

// 2. Returns true for root path ("/") when path is "/" or "/index.html"
test('returns true for root path ("/") when path is "/"', () => {
  expect(isActivePath("/", "/")).toBe(true);
});

test('returns true for root path ("/") when path is "/index.html"', () => {
  expect(isActivePath("/", "/index.html")).toBe(true);
});

// 3. Returns true when current path includes the href
test("returns true when current path includes the href", () => {
  expect(isActivePath("/about", "/about/team")).toBe(true);
});

// 4. Returns false when paths don't match
test("returns false when paths don't match", () => {
  expect(isActivePath("/about", "/contact")).toBe(false);
});
