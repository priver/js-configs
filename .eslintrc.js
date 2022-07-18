'use strict';

require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config}*/
module.exports = {
  root: true,
  extends: ['@priver/eslint-config/node-cjs'],
};
