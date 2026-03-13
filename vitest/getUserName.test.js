import { describe, test, expect, beforeEach } from 'vitest';
import { getUsername } from '../js/utils/storage.js';

describe('getUsername', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('return name from user in storage', () => {
    const user = {
      name: 'Gro',
      email: 'gro@test.com',
    };
    localStorage.setItem('user', JSON.stringify(user));
    const result = getUsername();
    expect(result).toBe('Gro');
  });

  test('return null when no user in storage', () => {
    const result = getUsername();
    expect(result).toBe(null);
  });
});
