/**
 * getUserName function:
 * Test that it returns the name from the user object in storage (first save a user object to storage)
 * Test that it returns null when no user exists in storage
 */

import { describe, beforeEach, it, expect } from 'vitest';
import { getUsername } from './storage.js';

// i made a mock localStorage since Vitest runs in Node by default
beforeEach(() => {
  global.localStorage = {
    store: {},
    getItem(key) {
      return this.store[key] || null;
    },
    setItem(key, value) {
      this.store[key] = value.toString();
    },
    removeItem(key) {
      delete this.store[key];
    },
    clear() {
      this.store = {};
    },
  };
});

describe('getUsername', () => {
  beforeEach(() => localStorage.clear());

  it('returns the name from user object in storage', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'Alice' }));
    expect(getUsername()).toBe('Alice');
  });

  it('returns null if no user exists in storage', () => {
    expect(getUsername()).toBeNull();
  });
});
