'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
};
