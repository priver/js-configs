'use strict';

module.exports = {
    'extends': [
        require.resolve('./rules/react'),
    ],
    'plugins': [
        'react',
    ],
    'parserOptions': {
        ecmaFeatures: {
            jsx: true,
        },
    },
};
