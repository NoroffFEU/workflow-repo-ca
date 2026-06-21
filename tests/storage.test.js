import { beforeEach, describe, expect, it } from "vitest";
import { clearStorage, getUsername, saveUser } from "../js/utils/storage";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("returns the name from the user object in storage", () => {
    saveUser({ name: "John Doe" });
    expect(getUsername()).toBe("John Doe");
  });

  it("returns null if there is no user in storage", () => {
    expect(getUsername()).toBe(null);
  });
});
