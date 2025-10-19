import { isActivePath } from "./path.js";

describe("isActivePath", () => {
  it("true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });

  it('true for root when path is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("true when current path includes the href", () => {
    expect(isActivePath("/venues", "/venues/123")).toBe(true);
  });

  it("false when paths don't match", () => {
    expect(isActivePath("/contact", "/about")).toBe(false);
  });
});
