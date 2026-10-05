/// <reference types="vitest" />

import { describe, test, expect } from 'vitest';
import { activePath } from '../src/utils/activePath.js';

describe('activePath', () => {
  test('returns true when current path matches href exactly', () => {
    expect(activePath('/about', '/about')).toBe(true);
  });

  test('returns true for root path when href is "/"', () => {
    expect(activePath('/', '/')).toBe(true);
  });

  test('returns true for root path when href is "/index.html"', () => {
    expect(activePath('/', '/index.html')).toBe(true);
  });

  test('returns true when current path includes href', () => {
    expect(activePath('/blog/post', '/blog')).toBe(true);
  });

  test('returns false when paths don’t match', () => {
    expect(activePath('/contact', '/about')).toBe(false);
  });
});
