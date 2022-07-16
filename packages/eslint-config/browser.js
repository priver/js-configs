'use strict';

module.exports = {
  extends: [
    require.resolve('./rules/core'),
    require.resolve('./rules/compat'),
    require.resolve('./rules/eslint-comments'),
    require.resolve('./rules/import'),
    require.resolve('./rules/typescript'),
    require.resolve('./rules/prettier'),
  ],
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/ignore': ['\\.(json|css|png|svg)$'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js'],
      },
    },
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
        require.resolve('./rules/typescript'),
        require.resolve('./rules/jest'),
        require.resolve('./rules/jest-formatting'),
        require.resolve('./rules/prettier'),
      ],
    },
    {
      files: '*.tsx',
      extends: [
        require.resolve('./rules/core'),
        require.resolve('./rules/compat'),
        require.resolve('./rules/eslint-comments'),
        require.resolve('./rules/import'),
        require.resolve('./rules/react'),
        require.resolve('./rules/react-hooks'),
        require.resolve('./rules/typescript'),
        require.resolve('./rules/prettier'),
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      overrides: [
        {
          files: ['*.test.tsx'],
          env: {
            'jest/globals': true,
          },
          extends: [
            require.resolve('./rules/core'),
            require.resolve('./rules/eslint-comments'),
            require.resolve('./rules/typescript'),
            require.resolve('./rules/react'),
            require.resolve('./rules/react-hooks'),
            require.resolve('./rules/jest'),
            require.resolve('./rules/jest-formatting'),
            require.resolve('./rules/prettier'),
          ],
        },
      ],
    },
  ],
};
