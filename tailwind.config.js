/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'mono': ['Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
    
  },
  plugins: [],
}

