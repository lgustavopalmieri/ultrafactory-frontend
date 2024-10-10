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
    "react/function-component-definition": 0,
    "react/jsx-wrap-multilines": 0,
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.ts",
          "**/*.test.tsx",
          "src/setupTests.ts",
          "src/utils/test-utils.tsx",
        ],
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state"],
      },
    ],
  },
  overrides: [
    { files: ["*.ts", "*.tsx"] },
    {
      files: ["*.test.ts", "*.test.tsx", "*.spec.ts", "*.spec.tsx"],
      env: { jest: true },
    },
  ],
}
