import { getUsername } from '../js/utils/storage.js';

describe('getUsername', () => {
  const KEY = 'user';

  beforeEach(() => {
    localStorage.clear();
  });

  it('returns the name from the user object in storage', () => {
    const user = { name: 'Alice' };
    localStorage.setItem(KEY, JSON.stringify(user));
    expect(getUsername()).toBe('Alice');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBeNull();
  });
});
