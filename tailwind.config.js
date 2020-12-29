module.exports = {
	purge: [ "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html" ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				xxs: "0.5rem"
			},
		},
		height: {
			card: "20rem",
		},
		container: (theme) => ({
			padding: {
				default: theme("spacing.4"),
				sm: theme("spacing.5"),
				lg: theme("spacing.6"),
				xl: theme("spacing.8"),
			},
		}),
		scale: {
			"200": "2",
			"250": "2.5"
		},
		outline: {
			blue: [ "3px solid #0000ff", "0px" ],
		}
	},
	variants: {
		extend: {
			height: [ "hover", "focus" ],
			width: [ "hover", "focus" ],
			objectFit: [ "hover", "focus" ],
			zIndex: [ "hover", "focus", "active" ],
			borderColor: [ "focus" ],
			borderWidth: [ "focus" ],
			boxShadow: [ "focus" ],
			outline: [ "focus" ]
		},
	},
	plugins: [],
};