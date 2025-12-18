import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "./storage.js";

// simple fake localStorage
const fakeStorage = {
  store: {},
  setItem(key, value) {
    this.store[key] = value;
  },
  getItem(key) {
    return this.store[key] ?? null;
  },
  clear() {
    this.store = {};
  },
};

beforeEach(() => {
  fakeStorage.clear();
  globalThis.localStorage = fakeStorage;
});

describe("getUsername", () => {
  it("returns the name from the user object in storage", () => {
    const user = { name: "Test User" };
    localStorage.setItem("user", JSON.stringify(user));

    const result = getUsername();

    expect(result).toBe("Test User");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();

    expect(result).toBeNull();
  });
});
