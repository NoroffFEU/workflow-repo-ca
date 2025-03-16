import { describe, test, expect } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

describe("isActivePath", () => {
  test("Returns true when current path matches href exactly", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/login", "/login")).toBe(true);
    expect(isActivePath("/register", "/register")).toBe(true);
  });

  test("Returns true for root path (/) when current path is / or /index.html", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  test("Returns true when current path includes href", () => {
    expect(isActivePath("/venue", "venue/"));
  });

  test("Returns false when paths don't match", () => {
    expect(isActivePath("/login", "/register")).toBe(false);
  });
});
