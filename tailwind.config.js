/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        backgroundLight: "var(--backgroundLight)",
      },
      fontFamily: {
        KelsonRegular: ["KelsonRegular", "sans-serif"],
        KelsonBold: ["KelsonBold", "sans-serif"],
        KelsonExtraBold: ["KelsonExtraBold", "sans-serif"],
        KelsonLight: ["KelsonLight", "sans-serif"],
        KelsonExtraLight: ["KelsonExtraLight", "sans-serif"],
        KelsonMedium: ["KelsonMedium", "sans-serif"],
      },
      borderRadius: {
        common: "14px",
      },
    },
  },
  plugins: [
    // Set a default value on the `:root` element
    ({ addBase }) =>
      addBase({
        ":root": {
          "--background": "#ffffff",
          "--foreground": "#171717",
          "--primary": "#6c56f2",
          "--backgroundLight": "#f5f5f5",
        },
        light: {
          "--background": "#ffffff",
          "--foreground": "#171717",
          "--primary": "#6c56f2",
          "--backgroundLight": "#f5f5f5",
        },
        dark: {
          "--background": "#171717",
          "--foreground": "#ffffff",
          "--primary": "#6c56f2",
          "--backgroundLight": "#1f1f1f",
        },
      }),
  ],
};
