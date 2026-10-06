import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const sourceFiles = ['src/**/*.{astro,ts}', 'src/**/*.astro/*.{js,ts}'];

export default [
  { ignores: ['node_modules/**', 'dist/**', '.astro/**', 'test-results/**', 'playwright-report/**'] },
  { ...js.configs.recommended, files: sourceFiles },
  ...tseslint.configs.recommended.map(config => ({ ...config, files: sourceFiles })),
  ...astro.configs['flat/recommended'],
  {
    files: sourceFiles,
    languageOptions: { globals: { ...globals.browser } },
    rules: { 'no-unreachable': 'error' },
  },
];
