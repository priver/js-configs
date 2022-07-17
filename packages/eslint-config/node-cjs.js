'use strict';

const nodeGlobals = require('./globals/node');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    require.resolve('./rules/core'),
    require.resolve('./rules/compat'),
    require.resolve('./rules/eslint-comments'),
    require.resolve('./rules/node'),
    require.resolve('./rules/prettier'),
  ],
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'script',
  },
  globals: {
    ...nodeGlobals,
    __dirname: 'readonly',
    __filename: 'readonly',
    exports: 'writable',
    module: 'readonly',
    require: 'readonly',
  },
  rules: {
    'no-console': 'off',
  },
  overrides: [
    {
      files: [
        '**/.eslintrc.js',
        '**/.lintstagedrc.js',
        '**/.prettierrc.js',
        '**/jest.config.js',
        '**/webpack.*.js',
      ],
      rules: {
        'n/no-unpublished-require': 'off',
      },
    },
    {
      files: ['**/bin/**'],
      rules: {
        'n/shebang': 'off',
      },
    },
    {
      files: ['*.test.js'],
      env: {
        'jest/globals': true,
      },
      extends: [
        require.resolve('./rules/core'),
        require.resolve('./rules/eslint-comments'),
        require.resolve('./rules/node'),
        require.resolve('./rules/jest'),
        require.resolve('./rules/jest-formatting'),
        require.resolve('./rules/prettier'),
      ],
    },
  ],
};
