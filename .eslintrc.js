module.exports = {
  extends: ['standard', 'plugin:@typescript-eslint/recommended', 'eslint:recommended', 'prettier'],
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'off', // 关闭any类型警告
    '@typescript-eslint/ban-types': 'off',
  },
  plugins: ['@typescript-eslint', 'prettier'],
};
