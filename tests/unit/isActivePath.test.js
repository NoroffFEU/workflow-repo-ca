import { describe, it, expect } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

describe("isActivePath", () => {
  it("returns true when path matches exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });

  it("returns true when href is '/' and path is '/'", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it("returns true when href is '/' and path is '/index.html'", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when href is included in path", () => {
    expect(isActivePath("/venues", "/venues/123")).toBe(true);
  });

  it("returns false when they don’t match", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
  });
});
