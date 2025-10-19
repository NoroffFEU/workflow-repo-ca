import { getUsername } from '../../js/utils/storage.js';

describe('getUsername', () => {
  beforeEach(() => localStorage.clear());

  it('returnerer navnet når bruker finnes i localStorage', () => {
    const mockUser = { name: 'Caroline' };
    localStorage.setItem('user', JSON.stringify(mockUser));
    expect(getUsername()).toBe('Caroline');
  });

  it('returnerer null når ingen bruker finnes i localStorage', () => {
    expect(getUsername()).toBeNull();
  });
});
