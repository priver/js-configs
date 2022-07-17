'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['import'],
  rules: {
    // Static analysis
    'import/default': 'error',
    'import/named': 'off',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-relative-packages': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-unused-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',

    // Helpful warnings
    'import/export': 'error',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-useless-path-segments': 'error',

    // Module systems
    'import/no-amd': 'error',
    'import/no-commonjs': 'off',
    'import/no-import-module-exports': 'error',
    'import/no-nodejs-modules': 'off',
    'import/unambiguous': 'off',

    // Style guide
    'import/dynamic-import-chunkname': 'error',
    'import/exports-last': 'off',
    'import/extensions': [
      'error',
      'always',
      { cjs: 'never', js: 'never', mjs: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/first': ['error', 'absolute-first'],
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-default-export': 'off',
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-unassigned-import': 'off',
    'import/order': [
      'error',
      {
        'alphabetize': {
          caseInsensitive: false,
          order: 'asc',
        },
        'groups': [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling'],
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        'pathGroups': [
          {
            group: 'sibling',
            pattern: './*.styles',
            position: 'after',
          },
          {
            group: 'sibling',
            pattern: './*.css',
            position: 'after',
          },
        ],
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
