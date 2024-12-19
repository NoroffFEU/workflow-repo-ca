import { beforeEach, describe, expect, it } from "vitest";
import { getUsername } from "./storage";

describe("getUsername", () => {
  beforeEach(() => {
    const storage = {};

    global.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key] || null,
    };
  });

  //Test case 1
  it("Should return the name from the user object in storage", () => {
    const user = { name: "Jane Doe", email: "janedoe@stud.noroff.no" };
    localStorage.setItem("user", JSON.stringify(user));

    const username = getUsername();

    expect(username).toBe("Jane Doe");
  });

  //Test case 2
  it("Should return null when no user exists in the storage", () => {
    const username = getUsername();

    expect(username).toBeNull();
  });
});
