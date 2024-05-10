import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1269F4',
      },
      backgroundImage: {
        'spiral-highlight':
          'repeating-conic-gradient(from var(--rotate), #3b82f6 0, #02112A 14%, #02112A 36%, #3b82f6 50%)',
      },
      animation: {
        'spin-spiral': 'spin-spiral 10s linear infinite',
      },
      keyframes: {
        'spin-spiral': {
          '0%': {
            '--rotate': '0deg',
          },
          '100%': {
            '--rotate': '360deg',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    {
      handler: ({ addVariant }) => {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
      },
    },
  ],
};
export default config;
