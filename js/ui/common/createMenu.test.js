import { expect, test } from 'vitest';
import { isActivePath } from '../../utils/userInterface';

// 1. Returns true when current path matches href exactly
// 2. Returns true for root path ("/") when path is "/" or "/index.html"
// 3. Returns true when current path includes the href
// 4. Returns false when paths don't match

test('returns true when path matches', () => {
	const href = '/beans';
	const currentPath = '/beans';

	expect(isActivePath(href, currentPath)).toBe(true);
});

test('returns true when path and href are both root', () => {
	const href = '/';
	const currentPath = '/index.html';

	expect(isActivePath(href, currentPath)).toBe(true);
});

test('returns true when current path includes href', () => {
	const href = '/path';
	const currentPath = 'www.website.com/path';

	expect(isActivePath(href, currentPath)).toBe(true);
});

test("returns false when paths don't match", () => {
	const href = '/beansontoast';
	const currentPath = 'www.website.com/path';

	expect(isActivePath(href, currentPath)).toBe(false);
});
