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
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
  },
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
exports.overrides = {
  files: ["**/*.tsx"],
  excludedFiles: ["__tests__", "**/*.test.tsx"],
}
