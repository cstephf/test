const { join } = require('path');

module.exports = {
  extends: ['../../.eslintrc.js'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: join(__dirname, '.babelrc')
    }
  }
};
