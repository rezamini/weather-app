import type { Config } from 'tailwindcss'

const config: Config = {
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
      colors: {
        backgroundColor: "hsl(var(--background-color))",
        foregroundColor: "hsl(var(--foreground-color))",
        foregroundSecondaryColor: "hsl(var(--foreground-secondary-color))",
        oddRowColor: "hsl(var(--odd-row-color))",
        evenRowColor: "hsl(var(--even-row-color))",
        brown: {
          50: '#fdf8f6',
        },
      },
    },
  },
  plugins: [],
}
export default config
