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
    // Make sure this is included
    'plugin:lingui/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint', 'lingui'],
  rules: {
    // ... your existing rules ...
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

    // LINGUI RULES - This is the key part
    'lingui/no-unlocalized-strings': [
      'error',
      {
        ignore: [
          // Only ignore single words without spaces that don't start with uppercase
          '^(?![A-Z])\\S+$',
          // Only ignore FULL UPPERCASE constants
          '^[A-Z0-9_-]+$',
        ],
        ignoreNames: [
          // CSS related only
          'className',
          'styleName',
          // HTML attributes only
          'src',
          'srcSet',
          'type',
          'id',
          'width',
          'height',
          'role',
          'href',
          'alt',
          // Very specific technical attributes
          'displayName',
          'Authorization',
        ],
        ignoreFunctions: [
          // Utility functions
          'cva',
          'cn',
          'clsx',
          // Console only
          'console.log',
          'console.error',
          'console.warn',
          'console.info',
          // Specific DOM methods
          '*.addEventListener',
          '*.removeEventListener',
          '*.getElementById',
          '*.querySelector',
          // Array methods that typically use technical strings
          '*.includes',
          '*.indexOf',
          '*.endsWith',
          '*.startsWith',
          // Build tools
          'require',
        ],
        useTsTypes: true,
        ignoreMethodsOnTypes: ['Map.get', 'Map.has', 'Set.has'],
      },
    ],

    // Additional helpful Lingui rules
    'lingui/no-single-variables-to-translate': 'warn',
    'lingui/no-expression-in-message': 'warn',
    'lingui/no-single-tag-to-translate': 'warn',
    'lingui/t-call-in-function': 'error',
  },
};