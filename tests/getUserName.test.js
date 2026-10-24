import { describe, it, expect, beforeEach } from 'vitest'
import { getUsername } from '../js/utils/storage.js'

beforeEach(() => {
  localStorage.clear()
})

describe('getUsername', () => {
  it('returns the name from the user object in storage', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'Adrian' }))
    expect(getUsername()).toBe('Adrian')
  })

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBeNull()
  })
})
