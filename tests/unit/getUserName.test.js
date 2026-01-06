import { describe, it, expect, beforeEach } from "vitest";
import { getUserName } from "../../js/utils/storage.js";

describe("getUserName", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    localStorage.setItem("user", JSON.stringify({ name: "Ola Nordmann" }));
    expect(getUserName()).toBe("Ola Nordmann");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUserName()).toBe(null);
  });
});
