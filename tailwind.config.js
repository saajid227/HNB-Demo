/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict 5-color palette - NO OTHER COLORS ALLOWED
        'deep': '#1957A6',
        'primary': '#2FB0E4',
        'accent': '#FADD02',
        'soft': '#BADFEC',
        'white': '#FFFFFF',
      },
      // Remove all default grays
      gray: {},
      slate: {},
      zinc: {},
      neutral: {},
      stone: {},
      // Use only palette colors for shadows
      boxShadow: {
        'primary': '0 6px 18px rgba(47, 176, 228, 0.25)',
        'deep': '0 4px 14px rgba(25, 87, 166, 0.3)',
        'accent': '0 4px 12px rgba(250, 221, 2, 0.3)',
        'none': 'none',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
  // Disable default colors
  corePlugins: {
    // Remove default Tailwind colors
  },
}
