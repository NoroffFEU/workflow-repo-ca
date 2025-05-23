import { describe, it, expect } from 'vitest';
import { isActivePath } from './userinterface';

describe('isActivePath', () => {
  it("returns true when href is '/' and currentPath is '/'", () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  it("returns true when href is '/' and currentPath is '/index.html'", () => {
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  it('returns true when currentPath includes href (non-root)', () => {
    expect(isActivePath('/products', '/products/shoes')).toBe(true);
  });

  it('returns false when currentPath does not include href', () => {
    expect(isActivePath('/about', '/contact')).toBe(false);
  });
});
