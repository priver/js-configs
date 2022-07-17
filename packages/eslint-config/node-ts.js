'use strict';

const nodeGlobals = require('./globals/node');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    require.resolve('./rules/core'),
    require.resolve('./rules/compat'),
    require.resolve('./rules/eslint-comments'),
    require.resolve('./rules/import'),
    require.resolve('./rules/node'),
    require.resolve('./rules/typescript'),
    require.resolve('./rules/prettier'),
  ],
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/extensions': ['.ts', '.js'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/ignore': ['\\.(json|css|png|svg)$'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js'],
      },
    },
  },
  globals: {
    ...nodeGlobals,
    __dirname: 'off',
    __filename: 'off',
    exports: 'off',
    module: 'off',
    require: 'off',
  },
  rules: {
    'no-console': 'off',
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
    {
      files: ['*.test.ts'],
      env: {
        'jest/globals': true,
      },
      extends: [
        require.resolve('./rules/core'),
        require.resolve('./rules/eslint-comments'),
        require.resolve('./rules/node'),
        require.resolve('./rules/typescript'),
        require.resolve('./rules/jest'),
        require.resolve('./rules/jest-formatting'),
        require.resolve('./rules/prettier'),
      ],
    },
  ],
};
