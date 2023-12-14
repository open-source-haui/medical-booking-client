/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        
      }
    },
  },
  plugins: [],
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the antd's preflight instead (reset.css).
    preflight: false,
  },
  important: '#app',
};
