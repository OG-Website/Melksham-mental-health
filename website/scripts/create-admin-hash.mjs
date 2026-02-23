#!/usr/bin/env node
/**
 * Generate a bcrypt password hash suitable for use as ADMIN_PASSWORD_HASH.
 *
 * Usage (run from inside the website/ directory):
 *   node scripts/create-admin-hash.mjs 'YourPassword'
 *
 * IMPORTANT: bcrypt hashes contain $ signs. Wrap the value in SINGLE QUOTES
 * in your .env.local / Vercel environment variables to prevent Next.js from
 * expanding them as variable references:
 *
 *   ADMIN_PASSWORD_HASH='$2b$12$...'   ← correct (single quotes)
 *   ADMIN_PASSWORD_HASH=$2b$12$...     ← WRONG  (dollar signs expanded)
 */

import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(join(__dirname, '..', 'package.json'));

const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/create-admin-hash.mjs <password>');
  process.exit(1);
}

bcrypt.hash(password, 12, (/** @type {Error|null} */ err, /** @type {string} */ hash) => {
  if (err) {
    console.error('Error generating hash:', err.message);
    process.exit(1);
  }
  console.log('\nPassword hash generated successfully.\n');
  console.log('─────────────────────────────────────────────────────────────');
  console.log('For .env.local / .env files (escape $ with \\$):');
  console.log(`ADMIN_PASSWORD_HASH=${hash.replace(/\$/g, '\\$')}`);
  console.log('─────────────────────────────────────────────────────────────');
  console.log('For Vercel Dashboard environment variables (paste as-is):');
  console.log(hash);
  console.log('─────────────────────────────────────────────────────────────');
});
