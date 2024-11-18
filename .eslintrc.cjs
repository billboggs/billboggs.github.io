module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:testing-library/dom',
    'plugin:testing-library/react',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '!.storybook', 'generated'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'sort-exports'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@billboggs/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': ['error', {callbacksLast: true, ignoreCase: true}],
    'react/sort-prop-types': [
      'error',
      {callbacksLast: true, checkTypes: true, ignoreCase: true},
    ],
    'react-refresh/only-export-components': 'warn',
    'sort-exports/sort-exports': [
      'error',
      {sortDir: 'asc', ignoreCase: true, pattern: '**/index.ts'},
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'testing-library/prefer-find-by': 'error',
  },
};
