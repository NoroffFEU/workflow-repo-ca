import { describe, it, expect, beforeEach, vi } from "vitest";
import { saveUser, getUsername, clearKey } from "../../js/utils/storage.js";

beforeEach(() => {
  globalThis.localStorage = {
    storage: {},
    setItem: vi.fn(
      (key, value) => (globalThis.localStorage.storage[key] = value),
    ),
    getItem: vi.fn((key) => globalThis.localStorage.storage[key] || null),
    removeItem: vi.fn((key) => delete globalThis.localStorage.storage[key]),
    clear: vi.fn(() => (globalThis.localStorage.storage = {})),
  };
});

describe("getUsername", () => {
  it("returns username when user is saved", () => {
    saveUser({ name: "John" });
    expect(getUsername()).toBe("John");
  });

  it("returns null when no user is saved", () => {
    expect(getUsername()).toBe(null);
  });

  it("returns null when user is cleared", () => {
    saveUser({ name: "Janne" });
    clearKey("user");
    expect(getUsername()).toBe(null);
  });
});
