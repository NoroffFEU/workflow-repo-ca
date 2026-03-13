import { expect, describe, it, beforeEach } from "vitest";
import { getUsername } from "../js/utils/storage";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "Jakob" };

    localStorage.setItem("user", JSON.stringify(user));

    const result = getUsername();

    expect(result).toBe("Jakob");
  });

  it("returns null when no user exists", () => {
    const user = getUsername();
    expect(user).toBeNull();
  });
});
