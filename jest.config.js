const path = require("path")

module.exports = {
  setupFilesAfterEnv: [
    path.resolve(__dirname, "./configs/jest/setup-test-env.js"),
  ],
  transform: {
    // "^.+\\.(tsx?|jsx?)$": "ts-jest",
    "\\.svg": "<rootDir>/configs/jest/__mocks__/svg-transform.js",
    "^.+\\.(tsx?|jsx?)$": `<rootDir>/configs/jest/jest-preprocess.js`,
  },
  moduleNameMapper: {
    // "\\.svg": `./configs/jest/__mocks__/file-mocks.js`,
    "\\.svg": `<rootDir>/configs/jest/__mocks__/svgTransform.js`,
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/configs/jest/__mocks__/file-mocks.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.([jt]sx?)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  collectCoverage: false,
  coverageReporters: ["lcov", "text", "html"],
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/configs/jest/loadershim.js`],
  "ts-jest": {
    tsConfig: 'configs/jest/tsconfig.jest.json',
  },
}
