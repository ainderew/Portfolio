module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors:{
				accent: '#0AA1DD',
				lightAccent: 'hsl(200,100%,60%)'
			}
		},
	},
	plugins: [],
};