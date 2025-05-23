// src/js/utils/utils.test.js
import { describe, it, expect, beforeEach } from 'vitest';
import { isActivePath, getUserName } from './utils.js';

describe('isActivePath()', () => {
  it('returns true when paths match exactly', () => {
    expect(isActivePath('/about', '/about')).toBe(true);
  });

  it('returns true for root path variants', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  it('returns true when current path includes href', () => {
    expect(isActivePath('/about/team', '/about')).toBe(true);
  });

  it('returns false when paths don’t match', () => {
    expect(isActivePath('/contact', '/about')).toBe(false);
  });
});

describe('getUserName()', () => {
  beforeEach(() => {
    // clear any existing mock storage
    globalThis.localStorage.clear();
  });

  it('returns username from storage', () => {
    localStorage.setItem(
      'user',
      JSON.stringify({
        name: 'ailin_user',
        email: 'ailinmari@shutdown.noroff.no ',
      })
    );
    expect(getUserName()).toBe('ailin_user');
  });

  it('returns null if no user is stored', () => {
    expect(getUserName()).toBeNull();
  });
});
