/**
 * isActivePath function:
    1. Returns true when current path matches href exactly
    2. Returns true for root path ("/") when path is "/" or "/index.html"
    3. Returns true when current path includes the href
    4. Returns false when paths don't match
 */

import { describe, expect, it } from 'vitest';
import { isActivePath } from './userInterface.js';

describe('isActivePath', () => {
  it('returns true for exact match', () => {
    expect(isActivePath('/about', '/about')).toBe(true);
  });

  it('returns true for root path "/"', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  it('returns true when current path includes href', () => {
    expect(isActivePath('/blog', '/blog/post-1')).toBe(true);
    expect(isActivePath('/products', '/products/item/42')).toBe(true);
  });

  it('returns false for non-matching paths', () => {
    expect(isActivePath('/contact', '/about')).toBe(false);
    expect(isActivePath('/services', '/products')).toBe(false);
  });
});
