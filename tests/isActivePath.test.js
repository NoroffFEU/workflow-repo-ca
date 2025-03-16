import { describe, test, expect } from 'vitest';
import { isActivePath } from '../js/utils/userInterface.js';

describe('isActivePath', () => {
  test('returns true when current path matches href exactly', () => {
    expect(isActivePath('/about', '/about')).toBe(true);
  });

  test('returns true for root path ("/") when path is "/" or "/index.html', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/index.html', '/')).toBe(true);
  });

  test('returns true when current path includes the href', () => {
    expect(isActivePath('/about/us', '/about')).toBe(true);
  });

  test('returns false when paths don’t match', () => {
    expect(isActivePath('/contact', '/about')).toBe(false);
  });
});
