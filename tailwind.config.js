/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    backgroundImage: {
      "woman-in-black":
        "url('https://user-images.githubusercontent.com/95094057/193284518-44ca0774-79e4-486a-acab-1b4258b583a2.png')",
    },
    backdropBlur: {
      'none': 'none',
      'blur': 'blur(20px)'
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
