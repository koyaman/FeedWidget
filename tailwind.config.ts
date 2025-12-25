import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#050505",
          dark: "#0a0f14",
          slate: "#1a1f26",
          text: "#e0e0e0",
          dim: "#8a94a6",
          primary: "#00f0ff", // Cyan
          secondary: "#ff0099", // Magenta
          accent: "#39ff14", // Lime
          warning: "#fcee0a", // Yellow
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f0ff, 0 0 10px #00f0ff40',
        'neon-pink': '0 0 5px #ff0099, 0 0 10px #ff009940',
        'neon-green': '0 0 5px #39ff14, 0 0 10px #39ff1440',
      },
      dropShadow: {
        'neon-text': '0 0 2px rgba(0, 240, 255, 0.5)',
      }
    },
  },
  plugins: [],
};
export default config;