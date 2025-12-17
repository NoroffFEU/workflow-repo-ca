import { describe, expect, test, beforeEach } from "vitest";
import { getUserName } from "../getUserName";

describe("getUserName", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("returns the name from the user object in storage", () => {
    const user = { name: "Jørgen" };
    localStorage.setItem("user", JSON.stringify(user));

    const result = getUserName();

    expect(result).toBe("Jørgen");
  });

  test("returns null when no user exists in storage", () => {
    const result = getUserName();

    expect(result).toBeNull();
  });
});
