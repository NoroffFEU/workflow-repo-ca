import { describe, it, expect } from 'vitest';
import { isActivePath } from '../../js/utils/isActivePath.js';

describe('isActivePath', () => {
  it('true on exact match', () => {
    expect(isActivePath('/about.html', '/about.html')).toBe(true);
  });
  it('true for root "/" or "/index.html"', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/index.html', '/')).toBe(true);
  });
  it('true when current path includes href', () => {
    expect(isActivePath('/venue/123.html', '/venue')).toBe(true);
  });
  it('false when no match', () => {
    expect(isActivePath('/contact.html', '/about.html')).toBe(false);
  });
});
