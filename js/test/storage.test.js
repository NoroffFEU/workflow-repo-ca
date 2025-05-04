import { describe, test, expect, beforeEach } from "vitest";
import { getUsername } from "../utils/storage";

describe("get the username", () => {
  beforeEach(() => {
    const storage = {};
    global.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
    };
  });

  test("should return username from localStorage", () => {
    const userKey = "user";
    localStorage.setItem(userKey, JSON.stringify({ name: "Ola" }));
    expect(getUsername()).toBe("Ola");
  });

  test("should return null when no user is in localStorage", () => {
    const user = getUsername();
    expect(user).toBeNull();
  });
});
