import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { marlboroughTheme } from './src/marlborough-theme';

export default {
  theme: { extend: {} },
  plugins: [
    skeleton({
      themes: { custom: [marlboroughTheme] }
    })
  ]
} satisfies Config;
