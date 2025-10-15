import { describe, it, expect, beforeEach } from 'vitest';
import { getUsername } from '../js/utils/storage.js';

describe('getUsername', () => {
  const KEY = 'user';

  beforeEach(() => {
    localStorage.clear();
  });

  it('returns the name from the user object in storage', () => {
    localStorage.setItem(KEY, JSON.stringify({ name: 'Alice', email: 'a@b.com' }));
    expect(getUsername()).toBe('Alice');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBeNull();
  });
});
