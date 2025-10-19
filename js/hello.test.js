import { describe, it, expect } from "vitest";

describe("Hello World Test", () => {
  it("adds numbers correctly", () => {
    expect(1 + 1).toBe(2);
  });

  it("checks a string contains 'flow'", () => {
    expect("workflow").toContain("flow");
  });
});
