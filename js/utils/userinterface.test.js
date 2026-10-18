import { expect, test } from "vitest";
import { isActivePath } from "./userInterface.js";

test("will return true when the path matches exactly", () => {
  expect(isActivePath("/venue", "/venue")).toBe(true);
});

test("returns true for the home page", () => {
  expect(isActivePath("/", "/")).toBe(true);
  expect(isActivePath("/", "/index.html")).toBe(true);
});

test("will return true when the current path includes the href", () => {
  expect(isActivePath("/venue", "/venue/123")).toBe(true);
});

test("will return false when the path don't match", () => {
  expect(isActivePath("/login", "/register")).toBe(false);
});
