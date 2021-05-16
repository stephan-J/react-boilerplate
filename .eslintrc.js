module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "import/no-unresolved": "off",
        'import/extensions': [
            "error",
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                json: 'always'
            },
        ],
    },
};
