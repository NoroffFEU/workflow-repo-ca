import { describe, expect, it, beforeEach, vi } from "vitest";
import { register } from "./register.js";

describe("register", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it("returns the data of the user after registration", async () => {
    const successResponse = {
      id: 1,
      name: "Marco Sabatini",
      email: "marco@stud.noroff.no",
    };

    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(successResponse),
    });

    const result = await register({
      id: 1,
      name: "Marco Sabatini",
      email: "marco@stud.noroff.no",
      password: "password123",
    });

    expect(result).toEqual(successResponse);
  });

  it("throws an error when registration fails", async () => {
    fetch.mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ message: "Email already exists" }),
    });

    await expect(
      register({
        id: 1,
        name: "Marco Sabatini",
        email: "marco@stud.noroff.no",
        password: "password123",
      }),
    ).rejects.toThrow("Sorry, sign up failed.");
  });
});
