import { describe, it, expect, beforeEach } from 'vitest';
import { getUsername } from '../js/utils/storage.js';

beforeEach(() => {
  // mock localStorage in Node
  globalThis.localStorage = {
    store: {},
    getItem(key) {
      return this.store[key] || null;
    },
    setItem(key, value) {
      this.store[key] = value;
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
  it('returns the name when user is stored', () => {
    const user = { name: 'Lilly', email: 'test@example.com' };
    globalThis.localStorage.setItem('user', JSON.stringify(user));

    const result = getUsername();
    expect(result).toBe('Lilly');
  });

  it('returns null when no user is stored', () => {
    globalThis.localStorage.clear();
    const result = getUsername();
    expect(result).toBeNull();
  });
});
