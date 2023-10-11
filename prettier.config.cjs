/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-organize-imports')],
  arrowParens: 'avoid',
  printWidth: 80,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
};

module.exports = config;
