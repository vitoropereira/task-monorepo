/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@rocketseat/eslint-config/node"],
  plugin: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error'
  }
}