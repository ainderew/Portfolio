module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors:{
				accent: '#DE682C',
				lightAccent: 'hsl(200,100%,60%)'
			}
		},
	},
	plugins: [],
};