import { describe, it, expect, beforeEach } from "vitest";
import { getUserName, storageKey } from "../../js/utils/storage.js";

describe("getUserName", () => {
  beforeEach(() => localStorage.clear());

  it("returns the name from the user object in storage", () => {
    localStorage.setItem(storageKey, JSON.stringify({ name: "Wanawsha" }));
    expect(getUserName()).toBe("Wanawsha");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUserName()).toBeNull();
  });
});
