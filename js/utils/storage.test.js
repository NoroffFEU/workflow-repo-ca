// @vitest-environment jsdom
import { expect, describe, it, beforeEach } from "vitest";
import { getUsername } from "./storage.js";

beforeEach(() => {
  localStorage.clear();
});
describe("getUsername", () => {
  it("Returns the name from the user object in storage", () => {
    localStorage.setItem("user", JSON.stringify({ name: "TestName" }));
    expect(getUsername()).toBe("TestName");
  });

  it("Returns null when no user exists in storage", () => {
    localStorage.removeItem("user");
    expect(getUsername()).toBe(null);
  });
});
