import { expect, test } from 'vitest';
import { isActivePath } from '../../utils/userInterface';

// 1. Returns true when current path matches href exactly
// 2. Returns true for root path ("/") when path is "/" or "/index.html"
// 3. Returns true when current path includes the href
// 4. Returns false when paths don't match

test('returns true when path matches', () => {
	const href = '/href';
	const currentPath = '/href';

	expect(isActivePath(href, currentPath).toBe(true));
});
