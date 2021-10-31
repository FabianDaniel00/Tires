module.exports = {
	purge: [],
	// {
	// 	enabled: true,
	// 	content: ["./**/*.html"],
	// },
	// important: true,
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
