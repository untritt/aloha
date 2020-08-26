exports.snippet = {
  parserOptions: {
    ecmaVersion: "2020",
    sourceType: "script",
  },
  plugins: ["prettier"],
  extends: ["airbnb-base", "prettier", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error",
  },
  env: {
    node: true,
    commonjs: true,
  },
}
exports.overrides = {
  files: ["**/*.js"],
  excludedFiles: ["__tests__/**/*.test.js", "**/*.test.js"],
}
