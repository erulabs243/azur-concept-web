import DefaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				"open-sauce": ["Open Sauce One", DefaultTheme.fontFamily.sans],
				sans: ["Open Sauce One", DefaultTheme.fontFamily.sans],
			},
			container: {
				center: true,
			},
		},
	},
	darkMode: "class",
	plugins: [daisyui],
	daisyui: {
		themes: ["corporate"],
	},
};
