import { getUserName } from '../../js/utils/getUserName.js';

describe('getUserName', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('returns the name from a saved user object in storage', () => {
    const user = { name: 'Alice' };
    localStorage.setItem('user', JSON.stringify(user));
    expect(getUserName()).toBe('Alice');
  });

  test('returns null when no user exists in storage', () => {
    expect(getUserName()).toBeNull();
  });
});
