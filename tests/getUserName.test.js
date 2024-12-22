import { describe, it, expect, beforeEach } from 'vitest';
import { getUserName, saveUser } from './userStorage';

describe('getUserName', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns the name from user storage', () => {
    saveUser({ name: 'John Doe' });
    expect(getUserName()).toBe('John Doe');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUserName()).toBe(null);
  });
});
