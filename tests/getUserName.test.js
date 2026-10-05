/// <reference types="vitest" />

import { describe, test, expect, beforeEach } from 'vitest';
import { getUserName } from '../src/utils/getUserName.js';

describe('getUserName', () => {
  beforeEach(() => {
    global.localStorage = {
      store: {},
      getItem(key) {
        return this.store[key] || null;
      },
      setItem(key, value) {
        this.store[key] = value;
      },
      clear() {
        this.store = {};
      },
    };

    localStorage.clear();
  });

  test('returns name from user object in storage', () => {
    const user = { name: 'Alice' };
    localStorage.setItem('user', JSON.stringify(user));
    expect(getUserName()).toBe('Alice');
  });

  test('returns null when no user exists in storage', () => {
    expect(getUserName()).toBeNull();
  });

  test('returns null if user data is malformed', () => {
    localStorage.setItem('user', 'not a json string');
    expect(getUserName()).toBeNull();
  });
});
