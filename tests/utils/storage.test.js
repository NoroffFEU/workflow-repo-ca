import { expect, describe, it, beforeEach } from 'vitest';

const mockStorage = {};
global.localStorage = {
  getItem: (key) => mockStorage[key] || null,
  setItem: (key, value) => {
    mockStorage[key] = value;
  },
  clear: () => {
    for (let key in mockStorage) delete mockStorage[key];
  },
};

const getUsername = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? user.name : null;
};

describe('getUsername', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns the name from the user object in storage (first save a user object to storage)', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'Davina' }));

    expect(getUsername()).toBe('Davina');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBeNull();
  });
});
