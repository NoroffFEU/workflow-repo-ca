import { describe, it, expect, beforeEach } from "vitest";
import { saveUser, getUsername } from "./storage";

beforeEach(() => {
  let store = {};

  globalThis.localStorage = {
    getItem: (key) => (key in store ? store[key] : null),
    setItem: (key, value) => {
      store[key] = value;
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
});

describe("getUsername", () => {
  it("returns the name from the user object in storage", () => {
    const user = { name: "Alice", email: "alice@example.com" };
    saveUser(user);

    const username = getUsername();
    expect(username).toBe("Alice");
  });

  it("returns null when no user exists in storage", () => {
    const username = getUsername();
    expect(username).toBeNull();
  });
});
