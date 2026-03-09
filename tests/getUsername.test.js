import { describe, it, expect, beforeEach } from 'vitest';
import { getUsername } from '../js/utils/storage.js';

describe('getUsername', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns the name from the user object in storage', () => {
    const mockUser = { name: 'Test' };
    localStorage.setItem('user', JSON.stringify(mockUser));

    expect(getUsername()).toBe('Test');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBe(null);
  });
});
