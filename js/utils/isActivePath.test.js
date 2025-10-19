/*import { isActivePath } from "./isActivePath.js";
import { describe, expect, it } from "vitest";

describe("isActivePath", ()=> {
    it("returns true if the current path matches the href", () => {
        // arrange
        // call the function
        //expect behave
    });
    it("returns true for root path '/'", ()=> {

    });
    it("returns true if current path includes href", ()=> {

    });

    it("returns false if path does not match with href", ()=> {

    })
    }) */

import { describe, it, expect, beforeEach } from "vitest";
import { isActivePath } from "./isActivePath.js";

describe("isActivePath", () => {
  beforeEach(() => {
    // Mock window.location
    delete window.location;
    window.location = { pathname: "/home" };
  });

  it("returns true if the current path matches the href", () => {
    expect(isActivePath("/home")).toBe(true);
  });

  it("returns true for root path '/' or '/index.html'", () => {
    window.location.pathname = "/";
    expect(isActivePath("/")).toBe(true);
    expect(isActivePath("/index.html")).toBe(true);

    window.location.pathname = "/index.html";
    expect(isActivePath("/")).toBe(true);
    expect(isActivePath("/index.html")).toBe(true);
  });

  it("returns false if path does not match href", () => {
    window.location.pathname = "/about";
    expect(isActivePath("/home")).toBe(false);
    expect(isActivePath("/")).toBe(false);
  });
});
