import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    enviroment: 'jsdom',
    include: ['**/*.{test,spec}.js'],
  },
    
  });