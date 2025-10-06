import { describe, it, expect, beforeEach } from 'vitest';
import { getUserName } from '../../js/utils/getUserName.js';

beforeEach(() => localStorage.clear());

describe('getUserName', () => {
  it('reads name from storage', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'Ada Lovelace' }));
    expect(getUserName()).toBe('Ada Lovelace');
  });
  it('returns null when missing', () => {
    expect(getUserName()).toBeNull();
  });
});
