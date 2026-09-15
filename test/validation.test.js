import { expect, describe, it } from "vitest";
import { validateEmail } from "../js/utils/validation.js";

describe("validateEmail", () => {
  it("returns true for valid student Noroff email", () => {
    expect(validateEmail("student@stud.noroff.no")).toBe(true);
  });

  it("returns true for valid Noroff staff email", () => {
    expect(validateEmail("teacher@noroff.no")).toBe(true);
  });

  it("returns false for non-Noroff email", () => {
    expect(validateEmail("student@gmail.com")).toBe(false);
  });

  it("returns false for invalid email format", () => {
    expect(validateEmail("not-an-email")).toBe(false);
  });
});
