/* eslint-disable no-undef */
import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import { getUsername, saveToken } from '../js/utils/storage.js';

describe('saveToken', () => {
  beforeEach(() => {
    const storage = {};

    global.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
      removeItem: (key) => delete storage[key],
      clear: () => {
        for (let key in storage) {
          delete storage[key];
        }
      },
    };
  });

  test('saves the token to storage', () => {
    const testToken = 'test-token';
    saveToken(testToken);
    expect(localStorage.getItem('token')).toBe(JSON.stringify(testToken));
  });
});

describe('getUserName', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('returns the username from the user object', () => {
    const user = { name: 'Adlan Ilyasov' };
    localStorage.setItem('user', JSON.stringify(user));
    expect(getUsername()).toBe('Adlan Ilyasov');
  });

  test('returns null when user object is not found', () => {
    localStorage.removeItem('user');
    expect(getUsername()).toBe(null);
  });
});
