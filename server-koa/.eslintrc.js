module.exports = {
  env: {
    commonjs: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  globals: {
    KT: true,
  },
  rules: {
    'consistent-return': 0,
    'default-param-last': 0,
    'import/prefer-default-export': 'off',
  },
};
