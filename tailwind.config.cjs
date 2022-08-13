/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"color-1": "#181818",
				"color-2": "#212121",
				"color-3": "#3d3d3d",
				"color-4": "#aaaaaa",
				"color-5": "#ffffff",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
