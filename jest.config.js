const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      "tsConfigFile": "tsconfig.json",
      "enableTsDiagnostics": true
    }
  },
  testMatch: [
    "**/?(*.)+(spec|test).[t]s?(x)"
  ],
  rootDir: './',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , { prefix: '<rootDir>/' } )
};