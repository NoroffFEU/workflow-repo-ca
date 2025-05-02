import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  const testCases = [
    {
      title: "returns true when current path matches href exactly",
      cases: [
        { href: "/login", path: "/login", expected: true },
        { href: "/register", path: "/register", expected: true },
        { href: "/venue", path: "/venue", expected: true },
      ],
    },
    {
      title: "returns true for root path when path is '/' or '/index.html'",
      cases: [
        { href: "/", path: "/", expected: true },
        { href: "/", path: "/index.html", expected: true },
      ],
    },
    {
      title: "returns true when current path includes the href",
      cases: [
        { href: "/venue", path: "/venue/123", expected: true },
        { href: "/login", path: "/login/reset", expected: true },
      ],
    },
    {
      title: "returns false when paths don't match",
      cases: [
        { href: "/login", path: "/register", expected: false },
        { href: "/venue", path: "/login", expected: false },
        { href: "/register", path: "/login/reset", expected: false },
      ],
    },
  ];

  // Loop through each test group
  testCases.forEach(({ title, cases }) => {
    it(title, () => {
      // Loop through each test case within the group
      cases.forEach(({ href, path, expected }) => {
        expect(isActivePath(href, path)).toBe(expected);
      });
    });
  });
});
