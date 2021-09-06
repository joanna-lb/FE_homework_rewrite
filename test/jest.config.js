/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const path = require('path');
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.css$": "identity-obj-proxy",
    "^.+\\.scss$":"identity-obj-proxy"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$":
      "identity-obj-proxy",
  },
  modules: true,
};
