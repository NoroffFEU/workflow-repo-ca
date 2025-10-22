import { isActivePath } from "../../js/utils/isActivePath.js";

describe("isActivePath", () => {
  function withLocation(pathname, fn) {
    const { location } = window;
    delete window.location;
    window.location = new URL(`http://localhost${pathname}`);
    try { fn(); } finally { window.location = location; }
  }

  it("returns true when current path matches href exactly", () => {
    withLocation("/about", () => {
      expect(isActivePath("/about")).toBe(true);
      expect(isActivePath("/contact")).toBe(false);
    });
  });

  it('returns true for root ("/") when path is "/" or "/index.html"', () => {
    withLocation("/", () => {
      expect(isActivePath("/")).toBe(true);
      expect(isActivePath("/index.html")).toBe(true);
    });
    withLocation("/index.html", () => {
      expect(isActivePath("/")).toBe(true);
      expect(isActivePath("/index.html")).toBe(true);
    });
  });

  it("returns true when current path includes the href", () => {
    withLocation("/venue/123", () => {
      expect(isActivePath("/venue")).toBe(true);
    });
  });

  it("returns false when paths don't match", () => {
    withLocation("/login", () => {
      expect(isActivePath("/register")).toBe(false);
    });
  });
});
