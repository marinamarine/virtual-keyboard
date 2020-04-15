module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': [2, 'ignorePackages', { js: 'always' }],
    'no-underscore-dangle': ["error", { "allowAfterThis": true }],
    'linebreak-style': ["error", "windows"],
  },
};
