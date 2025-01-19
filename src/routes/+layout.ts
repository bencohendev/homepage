import type { LayoutLoad } from './$types';

export type Sections = Array<{
	label: string;
	slug: string;
}>;

export const load: LayoutLoad = () => {
	return {
		sections: [
			{ label: 'Home', slug: '/' },
			{ label: 'Resume', slug: '/resume' },
			{ label: 'Portfolio', slug: '/portfolio' },
			{ label: 'About', slug: '/about' },
		],
	};
};
