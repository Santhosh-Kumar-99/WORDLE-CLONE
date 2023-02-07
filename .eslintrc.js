module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-cycle': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-no-constructed-context-values': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-nested-ternary': 'warn',
  },
};
