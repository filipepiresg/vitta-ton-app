module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    '@react-native-community',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    '@react-native-community',
    'react',
    'react-native',
    'jsx-a11y',
    'import',
    'react-hooks',
    'prettier',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    camelcase: 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/destructuring-assignment': [0],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': [0],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/prop-types': [0],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-color-literals': 'off',
    'react-native/no-inline-styles': ['warn'],
    'react-native/no-raw-text': 'off',
    'no-underscore-dangle': 'off',
    'react-native/sort-styles': 'off',
    'react/no-array-index-key': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [2, { ignore: ['^~', '.js$', '.jsx$', '.ts$', '.tsx$'] }],
    'no-alert': 'error',
    'no-console': [
      'error',
      {
        allow: ['disableYellowBox', 'ignoredYellowBox', 'clear', 'error', 'info', 'log', 'warn'],
      },
    ],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-param-reassign': 'warn',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', '/^@react/', 'module', '/^~/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/extensions': [
      'error',
      'never',
      { svg: 'always', json: 'always', png: 'always', jpg: 'always' },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
};
