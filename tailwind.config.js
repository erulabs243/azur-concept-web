import DefaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				"open-sans": ["Open Sans Variable", DefaultTheme.fontFamily.sans],
				sans: ["Open Sans Variable", DefaultTheme.fontFamily.sans],
			},
		},
	},
	darkMode: "class",
	plugins: [daisyui],
};
