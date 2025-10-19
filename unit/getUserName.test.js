/* @vitest-environment jsdom */
import { describe, it, expect, beforeEach } from "vitest";
import { getUserName } from "../js/utils/storage.js";

describe("getUserName", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returnerer navnet fra user-objekt i storage", () => {
    localStorage.setItem("user", JSON.stringify({ name: "Helena" }));
    expect(getUserName()).toBe("Helena");
  });

  it("returnerer null når ingen bruker finnes", () => {
    expect(getUserName()).toBeNull();
  });
});
