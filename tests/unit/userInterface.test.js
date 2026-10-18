import { expect, test } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

test("returns true when the path matches the href", () => {
  expect(isActivePath("/login/", "/login/")).toBe(true);
});

test("returns true for the root path", () => {
  expect(isActivePath("/", "/")).toBe(true);
});

test("returns true for the root index page", () => {
  expect(isActivePath("/", "/index.html")).toBe(true);
});

test("returns true when the current path includes the href", () => {
  expect(isActivePath("/venue/", "/venue/index.html")).toBe(true);
});

test("returns false when paths do not match", () => {
  expect(isActivePath("/login/", "/register/")).toBe(false);
});
