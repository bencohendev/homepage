import type { LayoutLoad } from './$types';

export type TSections = Array<{
	label: string;
	slug: string;
}>;

export const load: LayoutLoad = () => {
	return {
		sections: [
			{ label: 'Resume', slug: '/resume' },
			{ label: 'Portfolio', slug: '/portfolio' },
			{ label: 'About', slug: '/about' },
		],
	};
};
