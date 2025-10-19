import { expect, describe, it } from "vitest";
import {
  validateEmail,
  validatePassword,
  validateLoginForm,
} from "./validation";

describe("validateEmail", () => {
  it("returns true for valid student Noroff email", () => {
    const email = "student@stud.noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true);
  });

  it("returns true for valid Noroff staff email", () => {
    const email = "@noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true);
  });

  it("returns false for emails that are not Noroff emails", () => {
    const email = "@gmail.com";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });

  it("returns false for invalid email format", () => {
    const email = "not-an-email";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });
});

describe("validatePassword", () => {
  const testCases = [
    { password: "short", expected: false },
    { password: "exactly8", expected: true },
    { password: "longerpassword", expected: true },
  ];

  testCases.forEach(({ password, expected }) => {
    it(`returns ${expected} for password "${password}"`, () => {
      const result = validatePassword(password);
      expect(result).toBe(expected);
    });
  });
});

describe("validateLoginForm", () => {
  const testCases = [
    //Testing the first when everything goes correctly.
    {
      email: "valid@stud.noroff.no",
      password: "validpass",
      expected: {
        isValid: true,
        errors: [],
      },
    },
    //Test when nothing works
    {
      email: "invalid@stud.noroff.no",
      password: "short",
      expected: {
        isValid: false,
        errors: {
          email: "Please enter a valid Noroff email address",
          password: "Password must be at least 8 characters",
        },
      },
    },
    // Test when email is good and password is short
    {
      email: "valid@stud.noroff.no",
      password: "short",
      expected: {
        isValid: false,
        errors: {
          password: "Password must be at least 8 characters",
        },
      },
    },
  ];

  testCases.forEach(({ email, password, expected }) => {
    it(`validates correctly for email "${email}" and password "${password}"`, () => {
      const result = validateLoginForm(email, password);
      expect(result).toEqual(expected);
    });
  });
});
