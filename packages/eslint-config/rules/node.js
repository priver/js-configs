'use strict';

module.exports = {
  plugins: ['n'],
  rules: {
    // Possible Errors
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-callback-literal': 'off',
    'n/no-exports-assign': 'error',
    'n/no-extraneous-import': 'error',
    'n/no-extraneous-require': 'error',
    'n/no-missing-import': 'error',
    'n/no-missing-require': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-process-exit': 'error',
    'n/no-unpublished-bin': 'error',
    'n/no-unpublished-import': 'error',
    'n/no-unpublished-require': 'error',
    'n/no-unsupported-features/es-builtins': 'error',
    'n/no-unsupported-features/es-syntax': 'error',
    'n/no-unsupported-features/node-builtins': 'error',
    'n/process-exit-as-throw': 'error',
    'n/shebang': 'error',

    // Best Practices
    'n/no-deprecated-api': 'error',

    // Stylistic Issues
    'n/callback-return': 'off',
    'n/exports-style': ['error', 'module.exports'],
    'n/file-extension-in-import': ['error', 'always'],
    'n/global-require': 'error',
    'n/no-mixed-requires': 'error',
    'n/no-process-env': 'off',
    'n/no-restricted-import': 'off',
    'n/no-restricted-require': 'off',
    'n/no-sync': 'off',
    'n/prefer-global/buffer': ['error', 'always'],
    'n/prefer-global/console': ['error', 'always'],
    'n/prefer-global/process': ['error', 'always'],
    'n/prefer-global/text-decoder': ['error', 'always'],
    'n/prefer-global/text-encoder': ['error', 'always'],
    'n/prefer-global/url-search-params': ['error', 'always'],
    'n/prefer-global/url': ['error', 'always'],
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',
  },
};
