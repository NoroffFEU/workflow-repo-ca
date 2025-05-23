import { describe, it, expect, beforeEach } from 'vitest';
import { isActivePath } from '../js/utils/userInterface.js';
import { getUsername } from '../js/utils/storage.js';

describe('isActivePath', () => {
  it('returns true when current path matches href exactly', () => {
    expect(isActivePath('/about.html', '/about.html')).toBe(true);
  });

  it('returns true for root path ("/") when currentPath is "/"', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  it('returns true for root path ("/") when currentPath is "/index.html"', () => {
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  it('returns true when current path includes href', () => {
    expect(isActivePath('/products', '/products/shoes')).toBe(true);
  });

  it('returns false when paths do not match', () => {
    expect(isActivePath('/about', '/contact')).toBe(false);
  });
});

describe('getUsername', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns the name from the user object stored', () => {
    const user = { name: 'Remy' };
    localStorage.setItem('user', JSON.stringify(user));
    expect(getUsername()).toBe('Remy');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBe(null);
  });
});
