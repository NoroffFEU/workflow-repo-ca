// Minimal localStorage mock for Node test environment
class LocalStorageMock {
  constructor() {
    this.store = new Map();
  }
  clear() {
    this.store.clear();
  }
  getItem(key) {
    const v = this.store.get(String(key));
    return v === undefined ? null : v;
  }
  setItem(key, value) {
    this.store.set(String(key), String(value));
  }
  removeItem(key) {
    this.store.delete(String(key));
  }
  key(index) {
    return Array.from(this.store.keys())[index] ?? null;
  }
  get length() {
    return this.store.size;
  }
}

if (typeof globalThis.localStorage === 'undefined') {
  globalThis.localStorage = new LocalStorageMock();
}
