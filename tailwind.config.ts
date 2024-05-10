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
