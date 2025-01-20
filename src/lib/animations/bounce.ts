import { elasticOut } from 'svelte/easing';

export type TTransitionParams = {
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	css?: (t: number, u: number) => string;
};

export function customTransition(
	node: HTMLElement,
	{ delay, duration, easing, css }: TTransitionParams,
) {
	return {
		delay,
		duration,
		easing,
		css,
	};
}

export const bounceParams = {
	delay: 0,
	duration: 4000,
	easing: elasticOut,
	css: (t: number, u: number) => `transform: translateY(${u * 15}%)`,
};
