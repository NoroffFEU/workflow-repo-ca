import { describe, it, expect, beforeEach } from "vitest";
import { getUserName } from "../js/utils/user.js";

const store = {};
const mockStorage = {
  getItem: k => (k in store ? store[k] : null),
  setItem: (k, v) => (store[k] = String(v)),
  removeItem: k => delete store[k],
  clear: () => Object.keys(store).forEach(k => delete store[k]),
};

beforeEach(() => {
  mockStorage.clear();
  globalThis.localStorage = mockStorage;
});

describe("getUserName", () => {
  it("returns the name from the user object in storage", () => {
    const user = { name: "Monica", email: "monica@example.com" };
    localStorage.setItem("user", JSON.stringify(user));
    expect(getUserName()).toBe("Monica");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUserName()).toBe(null);
  });
});
