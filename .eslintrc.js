module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'prettier',
  ],
  plugins: [
    'babel',
    'prettier',
  ],
  rules: {
    'babel/semi': 1,
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'es5'
    }],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    }
  }
}
