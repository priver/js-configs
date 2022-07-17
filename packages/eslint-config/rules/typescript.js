'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    'jsdoc/require-property-type': 0,

    // Supported Rules
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
    '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: { constructors: 'no-public' },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          memberTypes: [
            'signature',
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',
            'public-abstract-field',
            'protected-abstract-field',
            'private-abstract-field',

            'public-constructor',
            'protected-constructor',
            'private-constructor',

            'public-static-method',
            'protected-static-method',
            'private-static-method',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
            'public-abstract-method',
            'protected-abstract-method',
            'private-abstract-method',
          ],
          order: 'as-written',
        },
        interfaces: {
          memberTypes: ['signature', 'field', 'constructor', 'method'],
          order: 'alphabetically',
        },
        typeLiterals: {
          memberTypes: ['signature', 'field', 'constructor', 'method'],
          order: 'alphabetically',
        },
      },
    ],
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: ['variableLike', 'property', 'parameterProperty'],
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'parameter',
        modifiers: ['unused'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: ['objectLiteralProperty', 'typeProperty'],
        format: ['camelCase', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: ['objectLiteralProperty', 'typeProperty'],
        format: null,
        modifiers: ['requiresQuotes'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-void-type': [
      'error',
      {
        allowInGenericTypeArguments: true,
      },
    ],
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      {
        ignoreStringArrays: true,
      },
    ],
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        checkCompoundAssignments: true,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'never',
        types: 'never',
        lib: 'never',
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    // Extension Rules
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/comma-spacing': 'off',

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/keyword-spacing': 'off',

    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],

    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-invalid-this': 'off',

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    '@typescript-eslint/no-magic-numbers': 'off',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    '@typescript-eslint/no-restricted-imports': 'off',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false,
      },
    ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: false,
        classes: false,
        functions: false,
        ignoreTypeReferences: false,
        typedefs: false,
      },
    ],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    '@typescript-eslint/object-curly-spacing': 'off',

    'quotes': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],

    '@typescript-eslint/require-await': 'off',

    'no-return-await': 'off',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],

    '@typescript-eslint/padding-line-between-statements': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-blocks': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/space-infix-ops': 'off',
  },
};
