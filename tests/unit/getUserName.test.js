import { describe, it, expect, beforeEach } from 'vitest';
import { getUserName } from '../../js/utils/storage.js';

describe('getUserName', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it('returns the user name when user is stored in localStorage', () => {
    const user = { name: 'Krzysztof', email: 'krzysztof@noroff.no' };
    localStorage.setItem('user', JSON.stringify(user));
    expect(getUserName()).toBe('Krzysztof');
  });
  it('returns null when no user is stored in localStorage', () => {
    expect(getUserName()).toBe(null);
  });
});
