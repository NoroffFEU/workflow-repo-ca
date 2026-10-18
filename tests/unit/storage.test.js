import { beforeEach, expect, test } from "vitest";
import { getUsername, saveUser, clearStorage } from "../../js/utils/storage.js";

beforeEach(() => {
  clearStorage();
});

test("returns the username when user is saved in storage", () => {
  const user = {
    data: {
      name: "Denise",
    },
  };

  saveUser(user);

  expect(getUsername()).toBe("Denise");
});

test("returns null when user is not saved in storage", () => {
  expect(getUsername()).toBe(null);
});
