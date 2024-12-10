import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser } from "../js/utils/storage";

describe("getUserName", () => {
  let storage;

  beforeEach(() => {
    storage = {};

    global.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
      clear: () => (storage = {}),
    };
  });

  it("should return the name of the user from storage", () => {
    const user = { name: "John Doe", email: "john.doe@example.com" };
    saveUser(user);

    const username = getUsername();
    expect(username).toBe("John Doe");
  });

  it("should return null if no user exists in storage", () => {
    const username = getUsername();
    expect(username).toBeNull();
  });
});
