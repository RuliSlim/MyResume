module.exports = {
	purge: [ "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html" ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				xxs: "0.5rem"
			}
		},
		container: (theme) => ({
			padding: {
				default: theme("spacing.4"),
				sm: theme("spacing.5"),
				lg: theme("spacing.6"),
				xl: theme("spacing.8"),
			},
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};