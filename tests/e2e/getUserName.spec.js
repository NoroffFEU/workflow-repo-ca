import { describe, it, expect } from "vitest";
import { getUserName } from "../../js/functions";

describe("getUserName", () => {
  it("Returns the name from the user object in storage", () => {
    localStorage.setItem("user", JSON.stringify({ name: "John Doe" }));
    expect(getUserName()).toBe("John Doe");
  });

  it("Returns null when no user exists in storage", () => {
    localStorage.removeItem("user");
    expect(getUserName()).toBe(null);
  });
});
