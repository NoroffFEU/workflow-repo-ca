import { isActivePath } from '../../js/utils/userInterface.js';

describe('isActivePath', () => {
  test('returns true when current path matches href exactly', () => {
    expect(isActivePath('/login/index.html', '/login/index.html')).toBe(true);
    expect(isActivePath('/venue/123', '/venue/123')).toBe(true);
  });

  test('returns true for root path ("/") when path is "/" or "/index.html"', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/index.html', '/')).toBe(true);
  });

  test('returns true when current path includes the href', () => {
    expect(isActivePath('/venue/123/details', '/venue')).toBe(true);
    expect(isActivePath('/register/index.html', '/register')).toBe(true);
  });

  test("returns false when paths don't match", () => {
    expect(isActivePath('/login/index.html', '/register')).toBe(false);
    expect(isActivePath('/venue/123', '/login')).toBe(false);
  });
});
