import { getUserName } from "./storage.js";

beforeEach(() => localStorage.clear());

it("returns name from stored user object", () => {
  localStorage.setItem("user", JSON.stringify({ name: "Mikkel" }));
  expect(getUserName()).toBe("Mikkel");
});

it("returns null when no user exists", () => {
  expect(getUserName()).toBeNull();
});