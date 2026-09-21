import { expect, test } from "vitest";
import { isActivePath } from "./userInterface.js";

test("Href and current path matches to be true", () => {
  expect(isActivePath("/index.html", "/index.html")).toBe(true);
});
test("Path is root or index - return true", () => {
  expect(isActivePath("/", "/")).toBe(true);
});
test("Returns true when current path includes the href", () => {
  expect(isActivePath("/", "/index.html")).toBe(true);
});
test("Paths don't match - return false", () => {
  expect(isActivePath("/", "google.com")).toBe(false);
});
