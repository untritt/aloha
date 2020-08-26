exports.snippet = {
  parserOptions: {
    ecmaVersion: "2020",
    sourceType: "script",
  },
  plugins: ["prettier", "jest"],
  extends: [
    "airbnb-base",
    "plugin:jest/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
  },
  env: {
    "node": true,
    "commonjs": true,
    "jest/globals": true,
  },
}
exports.overrides = {
  files: ["__tests__/**/*.test.js", "**/*.test.js"],
}
