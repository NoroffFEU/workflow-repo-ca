import { describe, it, expect, beforeEach } from 'vitest';
import { saveUser, getUsername } from '../js/utils/storage.js';

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

describe('getUserName', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns the name from the user object in storage', () => {
    saveUser({ name: 'Petter' });
    expect(getUsername()).toBe('Petter');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBe(null);
  });
});
