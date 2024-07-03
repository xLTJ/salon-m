import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                shimmer: "shimmer 2s linear infinite",
                "fade-up": "fade-up 0.5s",
                "fade-down": "fade-down 0.5s",
            },
            keyframes: {
                shimmer: {
                    from: {
                        backgroundPosition: "0 0",
                    },
                    to: {
                        backgroundPosition: "-200% 0",
                    },
                },
                "fade-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(10px)",
                    },
                    "80%": {
                        opacity: "0.6",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0px)",
                    },
                },
                "fade-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    "80%": {
                        opacity: "0.6",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0px)",
                    },
                },
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            {
                classic: {
                    ...require("daisyui/src/theming/themes")["cupcake"],
                    'primary': '#476186',
                    'primary-content': '#FFFFFF',
                    'secondary': '#f87171',
                    'secondary-content': '#FFFFFF',
                    'neutral': '#FFFFFF',
                    'neutral-content': '#000000',
                    'info': '#171618',
                    'info-content': '#FFF',
                    'base-content': '#000000',
                },
            },
        ],
    },
};
export default config;
