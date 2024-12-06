import { expect, describe, it } from 'vitest';
import { isActivePath } from '../../js/utils/userInterface';

describe('isActivePath', () => {
  it('returns true for the exact match of href and current path', () => {
    expect(isActivePath('/login', '/login')).toBe(true);
  });

  it('returns true for the root path ("/") when current path is "/" or "/index.html"', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/', '/index.html')).toBe(true);
    expect(isActivePath('/', '/login')).toBe(false);
  });

  it('returns true when the current path includes the href', () => {
    expect(isActivePath('/login', '/login/index.html')).toBe(true);
  });

  it('returns false when paths do not match or include href', () => {
    expect(isActivePath('/login', '/register')).toBe(false);
  });
});
