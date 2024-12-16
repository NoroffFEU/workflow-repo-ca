import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "../js/utils/storage";

beforeEach(() => {
  global.localStorage = {
    storage: {},
    setItem(key, value) {
      this.storage[key] = value;
    },
    getItem(key) {
      return this.storage[key] || null;
    },
    removeItem(key) {
      delete this.storage[key];
    },
    clear() {
      this.storage = {};
    },
  };
});

describe("getUsername", () => {
  it("returns the name from the user object in storage", () => {
    saveUser({ name: "Emily" });
    expect(getUsername()).toBe("Emily");
  });

  it("returns null when no user exists in storage", () => {
    clearStorage();
    expect(getUsername()).toBeNull();
  });
});
