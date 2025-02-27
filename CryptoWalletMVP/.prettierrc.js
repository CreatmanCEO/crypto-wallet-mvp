module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  endOfLine: 'auto',
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  useTabs: false,
  importOrder: [
    '^react$',
    '^react-native$',
    '^@react-navigation',
    '^@/',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
