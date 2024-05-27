/** @type {import('tailwindcss').Config} */
// import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				it: {
					purple: {
						100: "#C0C4F5",
						200: "#9993EB",
						300: "#7857E0",
					},
					teal: {
						100: "#C9FFFA",
						200: "#87E6DF",
						300: "#36D4CA",
					},
					blue: {
						100: "#CEE8FF",
						200: "#5796D5",
						300: "#2979E6",
					},
					gray: {
						100: "#F3F7FA",
						200: "#E5ECF2",
						300: "#B2C5D4",
						400: "#9BACB9",
						500: "#6D7C87",
					},
					black: "#181A1A",
				},
			},
			fontFamily: {
				afacad: "Afacad, sans-serif",
				lexend: "Lexend, sans-serif",
			},
		},
	},
	plugins: [],
};
