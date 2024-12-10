import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getUsername } from './storage'; // Adjust the path if needed

// Mock the localStorage API
beforeEach(() => {
  global.localStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };
});

afterEach(() => {
  vi.restoreAllMocks(); // Restore mocks after each test
});

describe('getUsername', () => {
  it('should return the name from the user object in storage', () => {
    global.localStorage.getItem.mockReturnValue(
      JSON.stringify({ name: 'Ida' })
    );

    const result = getUsername();
    expect(global.localStorage.getItem).toHaveBeenCalledWith('user');
    expect(result).toBe('Ida');
  });

  it('should return null when no user exists in storage', () => {
    global.localStorage.getItem.mockReturnValue(null);

    const result = getUsername();
    expect(global.localStorage.getItem).toHaveBeenCalledWith('user');
    expect(result).toBeNull();
  });
});
