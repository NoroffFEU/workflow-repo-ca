import { expect, describe, it } from 'vitest';
import { isActivePath } from './userInterface.js';

describe('isActivePath', () => {
  it('returns true when href matches currentPath exactly', () => {
    const href = '/login';
    const currentPath = '/login';

    const result = isActivePath(href, currentPath);

    expect(result).toBe(true);
  });

  it('Returns true for root path (“/”) when path is “/” or “/index.html”', () => {
    const href = '/';
    const currentPath = '/';

    const result1 = isActivePath(href, currentPath);

    expect(result1).toBe(true);

    const currentPathAlt = '/index.html';

    const result2 = isActivePath(href, currentPathAlt);

    expect(result2).toBe(true);
  });

  it('Returns true when current path includes the href', () => {
    const href = '/login';
    const currentPath = '/login/details';

    const result = isActivePath(href, currentPath);

    expect(result).toBe(true);
  });

  it('Returns false when paths don’t match', () => {
    const href = '/login';
    const currentPath = '/index';

    const result = isActivePath(href, currentPath);

    expect(result).toBe(false);
  });
});
