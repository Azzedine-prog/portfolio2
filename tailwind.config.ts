import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#080C18",
                foreground: "#EAE8F0",
                primary: {
                    DEFAULT: "#F0A830",
                    dark: "#C8871A",
                    glow: "rgba(240, 168, 48, 0.15)",
                },
                secondary: {
                    DEFAULT: "#6B7FD4",
                    dark: "#4A5BB8",
                },
                surface: "#0E1222",
                muted: "#8A8FA8",
                accent: "#E85D75",
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
                mono: ["var(--font-roboto-mono)", "ui-monospace", "SFMono-Regular"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            boxShadow: {
                "glow-gold": "0 0 30px rgba(240, 168, 48, 0.2), 0 0 60px rgba(240, 168, 48, 0.08)",
                "glow-soft": "0 8px 40px rgba(0,0,0,0.4)",
            },
            animation: {
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float": "float 6s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-8px)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
