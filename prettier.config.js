module.exports = {
  singleQuote: false,
  tabWidth: 2,
  arrowParens: "avoid",
  semi: true,
  trailingComma: "none",
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 100,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["^[w+]", "^@core/(.*)$", "<THIRD_PARTY_MODULES>", "^@server/(.*)$", "^@ui/(.*)$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
