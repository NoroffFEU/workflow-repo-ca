import { describe, beforeAll, it, vi, expect } from "vitest";
import { getUsername } from "./storage";

beforeAll(() => {
  window.localStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };
});

describe("getUsername function", () => {
  it("Returns username value as an object from local storage.", () => {
    const testUser = { name: "user" };
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(testUser));

    const result = getUsername();
    expect(result).toBeDefined();
    expect(result).toBe("user");
  });

  it("Returns null when no user object exists in local storage.", () => {
    localStorage.getItem.mockReturnValueOnce(null);

    const result = getUsername();
    expect(result).toBeNull();
  });
});
