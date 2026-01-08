import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath", () => {
    it("returns true when current path matches href exactly", () => {
        const href = "/login";
        const currentPath = "/login";
        const result = isActivePath(href, currentPath);
        expect(result).toBe(true);
    });

    it("returns true for root path (/) when path is / or /index.html", () => {
        const href = "/";
        expect(isActivePath(href, "/")).toBe(true);
        expect(isActivePath(href, "/index.html")).toBe(true);
    });

    it("returns true when current path matches href exactly", () => {
        const href = "/login";
        const currentPath = "/login";
        const result = isActivePath(href, currentPath);
        expect(result).toBe(true);
    });

    it("returns false when paths don't match", () => {
        const href = "/right-path";
        const currentPath = "/wrong-path";
        const result = isActivePath(href, currentPath);
        expect(result).toBe(false);
    });
});
