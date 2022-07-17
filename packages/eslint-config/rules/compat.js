'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['compat'],
  rules: {
    'compat/compat': 'error',
  },
};
