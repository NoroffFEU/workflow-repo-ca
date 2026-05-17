import { describe, test, expect, beforeEach } from "vitest";

import { isActivePath } from "../js/utils/userInterface.js";

import { getUsername } from "../js/utils/storage.js";

describe("isActivePath", () => {
  test("returns true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });

  test('returns true for root path "/"', () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  test('returns true for "/index.html"', () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  test("returns true when current path includes href", () => {
    expect(isActivePath("/venues", "/venues/details")).toBe(true);
  });

  test("returns false when paths do not match", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
  });
});

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("returns the name from storage", () => {
    const user = {
      name: "Julie",
    };

    localStorage.setItem("user", JSON.stringify(user));

    expect(getUsername()).toBe("Julie");
  });

  test("returns null when no user exists", () => {
    expect(getUsername()).toBe(null);
  });
});
