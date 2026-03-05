import { getUsername, saveUser } from '../js/utils/storage.js';

describe('getUsername', () => {
  it('returns the name from the user object in storage', () => {
    saveUser({ name: 'TestUser' });
    expect(getUsername()).toBe('TestUser');
  });

  it('returns null when no user exists in storage', () => {
    localStorage.clear();
    expect(getUsername()).toBeNull();
  });
});
