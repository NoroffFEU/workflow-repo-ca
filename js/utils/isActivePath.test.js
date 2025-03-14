import { test, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

test("Returns true when current path matches href exactly", () => {
  expect(isActivePath("/index.html", "/index.html")).toBe(true);
});

test('Returns true for root path ("/") when path is "/" or "/index.html"', () => {
  expect(isActivePath("/", "/")).toBe(true);
});

test("Returns true when current path includes the href", () => {
  expect(isActivePath("/index.html", "/index.html")).toBe(true);
});

test("Returns false when paths don't match", () => {
  expect(isActivePath("/contact", "/about")).toBe(false);
});
