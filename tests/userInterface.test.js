import { expect, describe, it } from "vitest";
import { isActivePath } from "../js/utils/userInterface";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    const href = "/profile";
    const currentPath = "/profile";

    const result = isActivePath(href, currentPath);

    expect(result).toBe(true);
  });

  it('returns true for root path "/" when path is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    const result = isActivePath("/profile", "/profile/settings");
    expect(result).toBe(true);
  });

  it("returns false when paths don't match", () => {
    const result = isActivePath("/profile", "/login");
    expect(result).toBe(false);
  });
});
