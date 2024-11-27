import { describe, it, expect, beforeEach, afterEach } from 'vitest'

// The function being tested
function isActivePath(currentPath, href) {
  if (currentPath === href) return true;
  if (href === '/' && (currentPath === '/' || currentPath === '/index.html')) return true;
  if (currentPath.includes(href)) return true;
  return false;
}

describe('isActivePath function', () => {
  
  it('should return true when current path matches href exactly', () => {
    expect(isActivePath('/about', '/about')).toBe(true)
    expect(isActivePath('/contact', '/contact')).toBe(true)
  })
  
  it('should return true for root path "/" when path is "/" or "/index.html"', () => {
    expect(isActivePath('/', '/')).toBe(true)
    expect(isActivePath('/index.html', '/')).toBe(true)
  })
  
  it('should return true when current path includes the href', () => {
    expect(isActivePath('/about/details', '/about')).toBe(true)
    expect(isActivePath('/contact/123', '/contact')).toBe(true)
  })
  
  it('should return false when paths do not match', () => {
    expect(isActivePath('/about', '/contact')).toBe(false)
    expect(isActivePath('/home', '/about')).toBe(false)
  })
})


// The function being tested
function getUserName() {
  const user = JSON.parse(localStorage.getItem('user'))
  return user ? user.name : null
}

describe('getUserName function', () => {

  beforeEach(() => {
    // Setup: Clear localStorage before each test
    localStorage.clear()
  })

  afterEach(() => {
    // Cleanup: Clear localStorage after each test
    localStorage.clear()
  })

  it('should return the name from the user object in storage', () => {
    const user = { name: 'John Doe', age: 30 }
    localStorage.setItem('user', JSON.stringify(user))

    expect(getUserName()).toBe('John Doe')
  })

  it('should return null when no user exists in storage', () => {
    expect(getUserName()).toBe(null)
  })
})
