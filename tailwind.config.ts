import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: { fontFamily: { grotesk: ['Space Grotesk'], lobster: ['Lobster Two'] } }
	},

	plugins: []
} satisfies Config;
