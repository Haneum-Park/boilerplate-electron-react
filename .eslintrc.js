module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['off', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 'off',
    'object-curly-newline': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/no-children-prop': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 0,
    'no-alert': 0,
    'no-nested-ternary': 0,
    'no-restricted-syntax': 0,
    'no-await-in-loop': 0,
    'no-underscore-dangle': 0,
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['*', '.js', '.jsx'],
      },
    },
  },
};
