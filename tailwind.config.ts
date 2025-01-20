import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				home: {
					purple: '#372554',
					cream: '#FEFFEC',
					orange: '#ef8354',
					yellow: '#f1d302',
					blue: '#508991',
					green: '#447604',
					red: '#BF0603',
				},
			},
			fontFamily: { grotesk: ['Space Grotesk'] },
		},
	},

	plugins: [],
} satisfies Config;
