import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/vitest/**/*.test.js'], // Files to include for testing
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
      all: true,
    },
  },
})
