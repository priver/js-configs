'use strict';

module.exports = {
    settings: {
        'import/extensions': ['.js'],
        'import/ignore': [
            'node_modules',
            '\\.(json|css|png|svg)$',
        ],
    },
    rules: {
        // Static analysis
        'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
        'import/named': 'error',
        'import/default': 'off',
        'import/namespace': 'off',
        'import/no-restricted-paths': 'off',
        'import/no-absolute-path': 'error',
        'import/no-cycle': 'off',
        'import/no-dynamic-require': 'error',
        'import/no-internal-modules': 'off',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-self-import': 'error',
        'import/no-relative-parent-imports': 'error',

        // Helpful warnings
        'import/export': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-deprecated': 'off',
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                '**/__tests__/**', // jest pattern
                '**/webpack.*.js', // webpack config
            ],
            optionalDependencies: false,
        }],
        'import/no-mutable-exports': 'error',
        'import/no-useless-path-segments': 'error',

        // Module systems
        'import/unambiguous': 'off',
        'import/no-commonjs': 'off',
        'import/no-amd': 'error',
        'import/no-nodejs-modules': 'off',

        // Style guide
        'import/first': ['error', 'absolute-first'],
        'import/no-duplicates': 'error',
        'import/no-namespace': 'off',
        'import/exports-last': 'error',
        'import/extensions': ['error', 'always', { js: 'never' }],
        'import/order': ['error', {
            'groups': [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index']],
            'newlines-between': 'always',
        }],
        'import/newline-after-import': 'error',
        'import/prefer-default-export': 'off',
        'import/max-dependencies': 'off',
        'import/no-unassigned-import': 'off',
        'import/no-named-default': 'error',
        'import/no-default-export': 'off',
        'import/no-anonymous-default-export': 'off',
        'import/group-exports': 'off',
        'import/dynamic-import-chunkname': 'error',
    },
};
