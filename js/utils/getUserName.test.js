import { getUsername, clearStorage, saveUser } from "./storage.js";
import { describe, it, expect, beforeEach, afterEach } from "vitest";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  afterEach(() => {
    clearStorage();
  });

  it("returns the name of the user object inside localStorage", () => {
    //arrange
    const mockUser = { name: "Marco Sabatini", email: "marco@example.com" };
    // action
    saveUser(mockUser);
    const userName = getUsername();
    // expect
    expect(userName).toBe("Marco Sabatini");
  });
  it("returns null if there is no user saved in our localStorage", () => {
    const userName = getUsername();

    expect(userName).toBeNull();
  });
});
