module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "airbnb-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: { project: true, tsconfigRootDir: "./" },
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: ["dist"],
  rules: {
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "react/jsx-wrap-multilines": 0,
  },
  overrides: [
    { files: ["*.{c,m,}{t,j}s", "*.{t,j}sx"] },
    { files: ["*{test,spec}.{t,j}s?(x)"], env: { jest: true } },
  ],
}
