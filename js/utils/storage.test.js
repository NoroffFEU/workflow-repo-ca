// @vitest-environment jsdom

import { expect, test } from "vitest";
import { getUsername, saveUser, clearStorage } from "./storage.js";

test("will return the username from the save user", () => {
  clearStorage();

  saveUser({
    data: {
      name: "Test user",
    },
  });

  expect(getUsername()).toBe("Test user");
  clearStorage();
});

test("will return null when no user exists in storage", () => {
  clearStorage();

  expect(getUsername()).toBe(null);
});
