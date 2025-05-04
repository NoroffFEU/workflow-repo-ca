import { describe, expect, test, beforeEach } from "vitest";
import { isActivePath } from "../utils/userInterface";
import { config } from "../config";

describe("check if path is correct", () => {
  beforeEach(() => {
    global.fetch = config;
  });

  const testCases = [
    { href: "/", currentPath: "/", expected: true },
    { href: "/index.html", currentPath: "/index.html", expected: true },
    { href: "/about", currentPath: "/contact", expected: false },
  ];

  testCases.forEach(({ href, currentPath, expected }) => {
    test(`returns ${expected} for href (${href}) and currentPath (${currentPath})`, () => {
      const result = isActivePath(href, currentPath);
      expect(result).toBe(expected);
    });
  });
});
