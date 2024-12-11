import { beforeEach, describe, expect, test } from 'vitest';
import { isActivePath } from '../../utils/userInterface';
import { getUsername, saveUser } from '../../utils/storage';

describe('isActivePath', () => {
	// 1. Returns true when current path matches href exactly
	// 2. Returns true for root path ("/") when path is "/" or "/index.html"
	// 3. Returns true when current path includes the href
	// 4. Returns false when paths don't match

	// 1
	test('returns true when path matches', () => {
		const href = '/beans';
		const currentPath = '/beans';

		expect(isActivePath(href, currentPath)).toBe(true);
	});
	// 2
	test('returns true when path and href are both root', () => {
		const href = '/';
		const currentPath = '/index.html';

		expect(isActivePath(href, currentPath)).toBe(true);
	});
	// 3
	test('returns true when current path includes href', () => {
		const href = '/path';
		const currentPath = 'www.website.com/path';

		expect(isActivePath(href, currentPath)).toBe(true);
	});
	// 4
	test("returns false when paths don't match", () => {
		const href = '/beansontoast';
		const currentPath = 'www.website.com/path';

		expect(isActivePath(href, currentPath)).toBe(false);
	});
});

describe('getUsername', () => {
	// 1 Test that it returns the name from the user object in storage (first save a user object to storage)
	// 2 Test that it returns null when no user exists in storage

	// 1
	beforeEach(() => {
		localStorage.clear();
	});

	test('returns the name from the user object in storage', () => {
		const user = { name: 'someDude' };
		saveUser(user);
		const result = getUsername();
		expect(result).toBe('someDude');
	});

	test('returns null when no user exists in storage', () => {
		// call getUsername without data present
		const result = getUsername();
		expect(result).toBe(null);
	});
});
