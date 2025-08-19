module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
    'plugin:lingui/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint', 'lingui'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-array-index-key': 0,
    'no-console': 1,
    'import/prefer-default-export': 0,
    'react/function-component-definition': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'no-param-reassign': 0,
    'global-require': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-shadow': 'off',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-shadow': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prettier/prettier': 'warn',
    'lingui/no-unlocalized-strings': [
      'error',
      {
        ignore: [
          // Ignore strings which are a single "word" (no spaces)
          // and doesn't start with an uppercase letter
          '^(?![A-Z])\\S+$',
          // Ignore UPPERCASE literals
          // Example: const test = "FOO"
          '^[A-Z0-9_-]+$',
        ],
        ignoreNames: [
          // Ignore matching className (case-insensitive)
          { regex: { pattern: 'className', flags: 'i' } },
          // Ignore UPPERCASE names
          // Example: test.FOO = "ola!"
          { regex: { pattern: '^[A-Z0-9_-]+$' } },
          'styleName',
          'src',
          'srcSet',
          'type',
          'id',
          'width',
          'height',
          'displayName',
          'Authorization',
        ],
        ignoreFunctions: [
          'cva',
          'cn',
          'track',
          'Error',
          'console.*',
          '*headers.set',
          '*.addEventListener',
          '*.removeEventListener',
          '*.postMessage',
          '*.getElementById',
          '*.dispatch',
          '*.commit',
          '*.includes',
          '*.indexOf',
          '*.endsWith',
          '*.startsWith',
          'require',
        ],
        useTsTypes: true,
        ignoreMethodsOnTypes: ['Map.get', 'Map.has', 'Set.has'],
      },
    ],
  },
};
