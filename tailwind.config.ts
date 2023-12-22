import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    width: {
      mc: "94%",
    },
    colors: {
      pink: '#f4669e',
      purple: '#712f93',
    },
    transitionDuration: {
      '200': '0.2s',
    },
    transitionTimingFunction: {
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    container: {
      screens: {
        xs: "400px",
        sm: "450px",
        md: "500px",
        lg: "600px",
        xl: "600px",
        "2xl": "627px",
      },
    },
    screens: {
      xs: "400px",
      sm: "450px",
      md: "500px",
      lg: "600px",
      xl: "600px",
      "2xl": "627px",
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.transition-myColor1': {
          '--myColor1': '#f4669e',
        },
        '.transition-myColor2': {
          '--myColor2': '#712f93',
        },
        '.gradient-text': {
          'background-image': 'linear-gradient(45deg, var(--myColor1), var(--myColor2))',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
export default config
