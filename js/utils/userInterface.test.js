import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath function", () => {
  const testCases = [
    {
      description: "Returns true when path matches exactly",
      href: "/login",
      currentPath: "/login",
      expected: true,
    },
    {
      description: 'Returns true for root path when path is exactly "/"',
      href: "/",
      currentPath: "/index.html",
      expected: true,
    },
    {
      description:
        'Returns true for root path when path is exactly "/index.html"',
      href: "/",
      currentPath: "/index.html",
      expected: true,
    },
    {
      description: "Returns true when current path includes the href",
      href: "/venue",
      currentPath: "/venue/id",
      expected: true,
    },
    {
      description: "Returns false when paths dont match",
      href: "/login",
      currentPath: "/register",
      expected: false,
    },
  ];

  testCases.forEach(({ description, href, currentPath, expected }) => {
    it(description, () => {
      const result = isActivePath(href, currentPath);
      expect(result).toBe(expected);
    });
  });
});
