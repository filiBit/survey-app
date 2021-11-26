module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'max-len': 'warn',
    eqeqeq: 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
  },
};
