import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: { fontFamily: { grotesk: ['Space Grotesk'] } },
		colors: {
			home: {
				purple: '#372554',
				cream: '#FEFFEC',
				orange: '#ef8354',
				yellow: 'f1d302',
				blue: '508991'
			}
		}
	},

	plugins: []
} satisfies Config;
