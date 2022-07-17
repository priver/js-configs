'use strict';

const { rules } = require('eslint-config-prettier');

const OMIT_KEYS = ['curly', 'no-tabs', 'quotes', '@typescript-eslint/quotes'];

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: Object.fromEntries(Object.entries(rules).filter(([key]) => !OMIT_KEYS.includes(key))),
};
