exports.snippet = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: `.`,
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "airbnb-typescript/base",
  ],
  env: {
    browser: true,
  },
  rules: {
    "prettier/prettier": "error",
  },
}
exports.overrides = {
  files: ["**/*.test.ts"],
  excludedFiles: ["__tests__", "**/*.test.ts"],
}
