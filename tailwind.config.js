/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Use class strategy for dark mode
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          light: '#667eea',
          dark: '#764ba2',
        },
        // Dark mode custom colors
        dark: {
          background: '#121212',
          card: '#1e1e1e',
          highlight: '#2d2d2d',
          text: '#e0e0e0',
          muted: '#808080',
          accent: '#8a65cc',
        }
      },
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
