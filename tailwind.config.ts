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
        primary: {
          200: 'hsl(148, 38%, 91%)',
          600: 'hsl(169, 82%, 27%)',
        },
        success: 'hsl(185, 24%, 22%)',
        red: {
          
          500:'hsl(0, 66%, 54%)',
          },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          gray: {
            500: 'hsl(186, 15%, 59%)',
            900: 'hsl(187, 24%, 22%)',
          },
        },
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      fontSize: {
        label: '16px',
      },
    },
  },
  plugins: [],
};

export default config;
