module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  settings: {
    'import/resolver': {
      alias: {
        map: ['@', './src'],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
        ],
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    'linebreak-style': 0,
    'no-unused-vars': 0,
    'arrow-parens': ['error', 'always'],
    'no-mixed-operators': 'off',
    'prefer-destructuring': ['error', { object: false, array: false }],
    'object-curly-newline': 0, // 强制花括号内换行符的一致性
    'no-await-in-loop': 'off', // 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
    'implicit-arrow-linebreak': 0,
    'no-restricted-globals': 0, // 禁用特定的全局变量
    'consistent-return': 0, // consistent-return默认要求箭头函数如果有写return
    'global-require': 0, // 要求 require() 出现在顶层模块作用域中
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'max-len': [
      'error',
      {
        code: 200,
        ignorePattern: '<.*>$',
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
