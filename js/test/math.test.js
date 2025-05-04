import { describe, expect, test } from "vitest";
import { add, multiply } from "../math.js";

describe("math", () => {
  test("adds 1+2 to be 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("multiply 5*5 to be 25", () => {
    expect(multiply(5, 5)).toEqual(25);
  });
});
