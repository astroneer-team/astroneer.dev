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
        primary: '#F47340',
      },
      backgroundImage: {
        'spiral-highlight':
          'repeating-conic-gradient(from var(--rotate), #F47340 0, transparent 14%, transparent 36%, #F47340 50%)',
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
