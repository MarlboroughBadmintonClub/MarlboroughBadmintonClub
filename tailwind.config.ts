import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { marlboroughTheme } from './src/marlborough-theme';

export default {
  darkMode: 'media',
  content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
  theme: {
    extend: {}
  },
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        custom: [marlboroughTheme]
      }
    })
  ]
} satisfies Config;
