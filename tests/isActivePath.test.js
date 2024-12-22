import { describe, it, expect } from 'vitest';
import { isActivePath } from './path';

describe('isActivePath', () => {
  it('returns true when current path matches href exactly', () => {
    expect(isActivePath('/about', '/about')).toBe(true);
  });
  it('returns true for root path when path is "/" or "/index.html"', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/', '/index.html')).toBe(true);
  });
  it('returns true when current path includes href', () => {
    expect(isActivePath('/products/123', '/products')).toBe(true);
  });
  it('returns false when paths do not match', () => {
    expect(isActivePath('/about', '/contact')).toBe(false);
  });
});
