'use strict';

module.exports = {
  '*.js': ['eslint --fix', 'prettier --write'],
  '*.{css,json,html,md,svg,yml}': 'prettier --write',
};
