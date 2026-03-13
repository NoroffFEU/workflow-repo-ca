import { describe, test, expect } from 'vitest';
import { isActivePath } from '../js/utils/userInterface.js';

describe('isActivePath', () => {
  test('true when path matches correctly', () => {
    expect(isActivePath('/profile', '/profile')).toBe(true);
  });

  test('true for root when path is "/"', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  test('true for root when path is "/index.html"', () => {
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  test('true when current path inc href', () => {
    expect(isActivePath('/profile', '/profile/settings')).toBe(true);
  });

  test('false when paths do not match', () => {
    expect(isActivePath('/posts', '/profile')).toBe(false);
  });
});
