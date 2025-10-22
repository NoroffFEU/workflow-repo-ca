import { getUserName } from "../../js/utils/getUserName.js";

describe("getUserName", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    localStorage.setItem("user", JSON.stringify({ name: "Ada Lovelace" }));
    expect(getUserName()).toBe("Ada Lovelace");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUserName()).toBeNull();
  });
});
