import { describe, expect, it } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath function", () => {
  //Test case 1
  it("Should return true when current path matched href exactly", () => {
    const inputHref = "/index.html";

    const currentPath = "/index.html";

    const result = isActivePath(inputHref, currentPath);

    expect(result).toBe(true);
  });

  //Test case 2
  it('Should return true for root path "/" when current path is "/" or "/index.html"', () => {
    const inputHref = "/";

    const result1 = isActivePath(inputHref, "/");
    const result2 = isActivePath(inputHref, "/index.html");

    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  //Test case 3
  it("Should return true when current path includes href", () => {
    const inputHref = "login";

    const currentPath1 = "/login/index.html";
    const currentPath2 = "/login";

    const result1 = isActivePath(inputHref, currentPath1);
    const result2 = isActivePath(inputHref, currentPath2);

    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  //Test case 4
  it("Should return false when paths don't match", () => {
    const inputHref = "register";

    const currentPath = "/venue/index.html";

    const result = isActivePath(inputHref, currentPath);

    expect(result).toBe(false);
  });
});
