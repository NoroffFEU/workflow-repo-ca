import { getUsername } from './storage.js';

// Adapter to match test expectations
export function getUserName() {
  return getUsername();
}
