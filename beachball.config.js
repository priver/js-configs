'use strict';

/** @type {import('beachball').BeachballConfig}*/
module.exports = {
  branch: 'origin/master',
  changehint: 'Run "npm run change" to create a change file',
  publish: false,
  push: false,
  ignorePatterns: [
    // lockfile
    'package-lock.json',

    // configs
    '.*ignore',
    '.browserslistrc',
    '.eslintrc.js',
    '.github/**',
    '.lintstagedrc.js',
    '.prettierrc.js',
    'beachball.config.js',
    'jest.config.js',
    'webpack.*.js',

    // docs
    '**/*.md',

    // tests
    '**/__tests__/**',
    '*.test.js',
    '*.test.ts',
    '*.test.tsx',
  ],
};
