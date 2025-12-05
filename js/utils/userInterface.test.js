import { isActivePath } from "./userInterface";
import { expect, describe, it } from "vitest"

describe('Testing the isActivePath function', () => {
    it('Testing if path matches href', () => {
        const href = '/index.html'
        const path = '/index.html'
        const result = isActivePath(href, path)
        expect(result).toBe(true)
    }) //Success!

    it('Testing if true for root path ("/") when path is "/" ', () => {
        const root = '/'
        const path = '/'
        const result = isActivePath(root, path)
        expect(result).toBe(true)
    }) //success!

    it('Testing if true for root path ("/") when path is "/index.html" ', () => {
        const href = '/'
        const path = '/index.html'
        const result = isActivePath(href, path)
        expect(result).toBe(true)
    }) //Success!


    it('Testing if it returns true when the path includes the href', () =>{
        const path = '/login/index.html'
        const href = '/index.html'
        const result = isActivePath(href, path)
        expect(result).toBe(true)
    }) //Success!

    it('Testing if path and href does not match', () => {
        const path = '/login/index.html'
        const href = 'https://www.google.com'
        const result = isActivePath(href, path)
        expect(result).toBe(false)
    }) //Success!
})