const path = require("path");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'react/prop-types': 'off'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  ignorePatterns: ['node_modules/'],
  plugins: [
    "@typescript-eslint",
    'react'
  ],
  settings: {
    "import/resolver":{
      "webpack":{
        "config":"webpack.config.js"
      }
    }
  }
}
