import { describe, it, expect } from 'vitest'
import { isActivePath } from '../js/utils/userInterface.js'

describe('isActivePath', () => {
  it('returns true when href matches current path exactly', () => {
    expect(isActivePath('/about', '/about')).toBe(true)
  })

  it('returns true for root href when current path is "/" or "/index.html"', () => {
    expect(isActivePath('/', '/index.html')).toBe(true)
    expect(isActivePath('/', '/')).toBe(true)
  })

  it('returns true when current path includes the href', () => {
    expect(isActivePath('/about', '/about/team')).toBe(true)
  })

  it("returns false when paths don't match", () => {
    expect(isActivePath('/contact', '/about')).toBe(false)
  })
})
