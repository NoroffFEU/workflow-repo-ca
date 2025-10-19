import { isActivePath } from '../../js/utils/nav.js';

describe('isActivePath', () => {
  it('returnerer true når current path matcher href eksakt', () => {
    expect(isActivePath('/login/index.html', '/login/index.html')).toBe(true);
  });

  it('returnerer true for "/" når path er "/" eller "/index.html"', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/index.html', '/')).toBe(true);
  });

  it('returnerer true når current path inkluderer href', () => {
    expect(isActivePath('/venue/123/index.html', '/venue')).toBe(true);
  });

  it('returnerer false når paths ikke matcher', () => {
    expect(isActivePath('/register/index.html', '/login')).toBe(false);
  });
});
