const c = (v) => `rgb(var(--${v}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: c("bg"),
        panel: c("panel"),
        fg: c("fg"),
        muted: c("muted"),
        line: c("line"),
        accent: c("accent"),
        on: c("on"),
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Cascadia Code", "Consolas", "Menlo", "monospace"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        reveal: { from: { clipPath: "inset(0 0 100% 0)" }, to: { clipPath: "inset(0 0 0 0)" } },
        line: { from: { opacity: 0, transform: "translateY(4px)" }, to: { opacity: 1, transform: "none" } },
      },
      animation: {
        line: "line .35s ease-out both",
        float: "float 5s ease-in-out infinite",
        reveal: "reveal 1.1s cubic-bezier(.2,.7,.2,1) both",
        rise: "line .7s ease-out both",
      },
    },
  },
  plugins: [],
};
