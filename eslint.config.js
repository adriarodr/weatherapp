import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import js from '@eslint/js';
import skipFormatting from 'eslint-config-prettier/flat';
import vueParser from 'vue-eslint-parser';

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
  },
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended-error'],
  {
    files: ['*.vue', '**/*.vue'],
    rules: {
      'vue/component-api-style': ['error',
        ['script-setup', 'composition'],
      ],
    },
    languageOptions: {
      parser: vueParser,
    }
  },
  skipFormatting,
]);
