import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "./storage.js";

describe("getUsername", () => {
    beforeEach(() => {
        const storage = {};

        globalThis.localStorage = {
            setItem: (key, value) => (storage[key] = value),
            getItem: (key) => storage[key],
        };
    });

    it("returns the name from the user object in storage", () => {
        localStorage.setItem("user", JSON.stringify({ name: "Ada" }));

        const result = getUsername();

        expect(result).toBe("Ada");
    });

    it("returns null when no user exists in storage", () => {
        const result = getUsername();

        expect(result).toBeNull();
    });
});
