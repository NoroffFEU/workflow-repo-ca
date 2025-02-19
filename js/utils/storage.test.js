import { expect, describe, it, beforeEach } from 'vitest';
import { getUsername, saveUser, clearStorage } from './storage.js';

describe('Storage functions', () => {
  beforeEach(() => {
    clearStorage();
  });

  it('check if saving and retrieving username from localStorage returns name', () => {
    const user = { name: 'Ronny' };
    saveUser(user);

    const result = getUsername();

    expect(result).toBe(user.name);
  });

  it('returns null when no user is saved in storage', () => {
    const result = getUsername();

    expect(result).toBe(null);
  });
});
