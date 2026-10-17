import { beforeEach, describe, expect, test } from "vitest";
import { clearStorage, getUsername, saveUser } from "../../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  test("returns the name from the user object in storage", () => {
    const user = {
      data: {
        name: "Sivert",
      },
    };

    saveUser(user);

    expect(getUsername()).toBe("Sivert");
  });

  test("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
