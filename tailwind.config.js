module.exports = {
	purge: [],
	// {
	// 	enabled: true,
	// 	content: ["./**/*.html"],
	// },
	// important: true,
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				900: "900px",
				500: "500px",
			},
			margin: {
				133: "133px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
