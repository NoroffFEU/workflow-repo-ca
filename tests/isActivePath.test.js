import { isActivePath } from '../js/utils/userInterface.js';

describe('isActivePath', () => {
  it('returns true when current path matches href exactly', () => {
    expect(isActivePath('/about', '/about')).toBe(true);
  });

  it('returns true for root path when path is /', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  it('returns true for root path when path is /index.html', () => {
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  it('returns true when current path includes the href', () => {
    expect(isActivePath('/venue', '/venue/details')).toBe(true);
  });

  it('returns false when paths do not match', () => {
    expect(isActivePath('/about', '/contact')).toBe(false);
  });
});
