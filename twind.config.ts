import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
       fontFamily: {
            'shrimp': '"Shrimp"',
       }
    }
  },
  preflight: {
    '@font-face': [
        {
            fontFamily: 'Shrimp',
            fontWeight: '400',
            src: 'url(/SHRIMP.ttf)',
        }
    ]
  }
} as Options;
