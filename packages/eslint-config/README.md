# @priver/eslint-config

Shareable config for [eslint].

[![NPM version](https://img.shields.io/npm/v/@priver/eslint-config)](https://www.npmjs.com/package/@priver/eslint-config)
[![Node version](https://img.shields.io/node/v/@priver/eslint-config)](https://www.npmjs.com/package/@priver/eslint-config)
[![Dependency status](https://img.shields.io/librariesio/release/npm/@priver/eslint-config)](https://www.npmjs.com/package/@priver/eslint-config)
[![NPM License](https://img.shields.io/npm/l/@priver/eslint-config)](https://www.npmjs.com/package/@priver/eslint-config)

## Installation

```sh
npm install --save-dev eslint @rushstack/eslint-patch @priver/eslint-config
```

## What's included

- [typescript-eslint]
- [eslint-plugin-import]
- [eslint-plugin-compat]
- [eslint-plugin-react]
- [eslint-plugin-react-hooks]
- [eslint-plugin-n]
- [eslint-plugin-jest]
- [eslint-plugin-jest-formatting]
- [eslint-plugin-eslint-comments]
- [eslint-config-prettier]

## Usage

All configs require that you set up [browserslist] configuration. Test should have \*.test.\* suffix.

### TypeScript: browser apps or libs

Add the following in your `.eslintrc.js`:

```js
'use strict';

require('@rushstack/eslint-config/patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@priver/eslint-config/browser'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.eslint.json',
      },
    },
    'jest': {
      version: 27,
    },
    'react': {
      version: '17.0',
    },
    'formComponents': [{ name: 'Form', formAttribute: 'endpoint' }],
    'linkComponents': [{ name: 'Link', linkAttribute: 'to' }],
  },
  rules: {
    'react/react-in-jsx-scope': 'error', // for React < 18
  },
};
```

### TypeScript: node apps and libs

Add the following in your `.eslintrc.js`:

```js
'use strict';

require('@rushstack/eslint-config/patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@priver/eslint-config/node-ts'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.eslint.json',
      },
    },
    'jest': {
      version: 27,
    },
  },
};
```

### JavaScript: node apps, libs and condigs in CommonJS

Add the following in your `.eslintrc.js`:

```js
'use strict';

require('@rushstack/eslint-config/patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@priver/eslint-config/node-cjs'],
  settings: {
    jest: {
      version: 27,
    },
  },
};
```

[eslint]: https://eslint.org/
[typescript-eslint]: https://typescript-eslint.io/
[eslint-plugin-import]: https://github.com/import-js/eslint-plugin-import
[eslint-plugin-compat]: https://github.com/amilajack/eslint-plugin-compat
[eslint-plugin-react]: https://github.com/jsx-eslint/eslint-plugin-react
[eslint-plugin-react-hooks]: https://reactjs.org/docs/hooks-rules.html
[eslint-plugin-n]: https://github.com/weiran-zsd/eslint-plugin-node
[eslint-plugin-jest]: https://github.com/jest-community/eslint-plugin-jest
[eslint-plugin-jest-formatting]: https://github.com/dangreenisrael/eslint-plugin-jest-formatting
[eslint-plugin-eslint-comments]: https://mysticatea.github.io/eslint-plugin-eslint-comments/
[eslint-config-prettier]: https://github.com/prettier/eslint-config-prettier
[browserslist]: https://github.com/browserslist/browserslist
