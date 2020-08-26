exports.snippet = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: ".",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prettier", "jest"],
  extends: [
    "airbnb-typescript",
    "plugin:jest/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  env: {
    "node": true,
    "browser": true,
    "jest/globals": true,
  },
}
exports.overrides = {
  files: ["__tests__/**/*.test.tsx", "**/*.test.tsx"],
}
