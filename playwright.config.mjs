/* eslint-disable no-unused-vars */
/* eslint-env node */

import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

export default defineConfig({
  testDir: './tests/e2e',
});
