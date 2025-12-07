/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Electric Blue
        dark: "#0f172a",    // Slate 900
        light: "#f8fafc",   // Slate 50
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      },
      // 👇 ADDED: Custom styling for the Blog content
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.600'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: '#2563eb', // A slightly darker blue on hover
              },
            },
            h1: { color: theme('colors.slate.900') },
            h2: { color: theme('colors.slate.900') },
            h3: { color: theme('colors.slate.900') },
            strong: { color: theme('colors.slate.900') },
            code: {
              color: theme('colors.pink.500'), // Pink text for code
              backgroundColor: theme('colors.slate.100'),
              padding: '2px 4px',
              borderRadius: '4px',
              fontWeight: '600',
            },
            'code::before': { content: '""' }, // Removes default backticks
            'code::after': { content: '""' },
          },
        },
        invert: {
          css: {
            color: theme('colors.slate.400'),
            a: { color: theme('colors.primary') },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            code: {
              color: theme('colors.pink.400'),
              backgroundColor: theme('colors.slate.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};