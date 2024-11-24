import { isActivePath } from '../js/utils/userInterface.js';
import { getUsername } from '../js/utils/storage.js'; 

describe('isActivePath', () => {
  test('Returns true when current path matches href', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });
  test('Returns false for unmatched paths', () => {
    expect(isActivePath('/about', '/contact')).toBe(false);
  });
});

describe('getUserName', () => {
  test('Returns name from storage', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'John Doe' }));
    expect(getUserName()).toBe('John Doe');
  });
  test('Returns null if no user exists', () => {
    localStorage.removeItem('user');
    expect(getUserName()).toBeNull();
  });
});
