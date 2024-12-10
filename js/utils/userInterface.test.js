import { describe, it, expect } from 'vitest';
import { isActivePath } from './userInterface'; // Adjust the path if necessary

describe('isActivePath', () => {
  it('should return true if href is "/" and currentPath is "/"', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  it('should return true if href is "/" and currentPath is "/index.html"', () => {
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  it('should return false if href is "/" and currentPath is something else', () => {
    expect(isActivePath('/', '/about')).toBe(false);
  });

  it('should return true if currentPath includes the href', () => {
    expect(isActivePath('/about', '/about/team')).toBe(true);
  });

  it('should return false if currentPath does not include the href', () => {
    expect(isActivePath('/about', '/contact')).toBe(false);
  });
});
