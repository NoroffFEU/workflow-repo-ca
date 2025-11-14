import { describe, it, expect } from 'vitest';
import { isActivePath } from '../js/utils/userInterface.js';

describe('isActivePath', () => {
  it('returns true when path matches exactly', () => {
    const result = isActivePath('/', '/');
    expect(result).toBe(true);
  });

  it('returns true when current path has trailing slash', () => {
    const result = isActivePath('/venue', '/venue/');
    expect(result).toBe(true);
  });

  it('returns true when current path has query params', () => {
    const result = isActivePath('/venue', '/venue?id=123');
    expect(result).toBe(true);
  });

  it('returns false when paths are different', () => {
    const result = isActivePath('/login', '/register');
    expect(result).toBe(false);
  });
});
