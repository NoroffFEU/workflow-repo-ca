import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { saveUser, getUsername, clearStorage } from './storage';

describe('getUsername', () => {
  beforeEach(() => {
    clearStorage(); // clear localStorage before each test
  });

  afterEach(() => {
    clearStorage(); // cleanup after each test
  });

  it('returns the name from the user object in storage', () => {
    const user = { name: 'Alice' };
    saveUser(user); // save user object to localStorage
    expect(getUsername()).toBe('Alice');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBeNull();
  });
});
