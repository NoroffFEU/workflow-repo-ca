import { test, expect, beforeEach, vi } from "vitest";
import { getUsername } from "./storage.js";

// Mock localStorage
beforeEach(() => {
  vi.stubGlobal("localStorage", {
    getItem: vi.fn((key) => mockStorage[key] ?? null),
    setItem: vi.fn((key, value) => {
      mockStorage[key] = value;
    }),
    removeItem: vi.fn((key) => {
      delete mockStorage[key];
    }),
    clear: vi.fn(() => {
      Object.keys(mockStorage).forEach((key) => delete mockStorage[key]);
    }),
  });
});

const mockStorage = {};

test("Returns the name from the user object in storage", () => {
  localStorage.setItem("user", JSON.stringify({ name: "Alice" }));
  expect(getUsername()).toBe("Alice");
});

test("Returns null when no user exists in storage", () => {
  localStorage.removeItem("user");
  expect(getUsername()).toBe(null);
});
