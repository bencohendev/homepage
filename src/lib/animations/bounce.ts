import { elasticOut } from 'svelte/easing';

export type TransitionParams = {
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	css?: (t: number, u: number) => string;
};

export function customTransition(
	node: HTMLElement,
	{ delay, duration, easing, css }: TransitionParams
) {
	return {
		delay,
		duration,
		easing,
		css
	};
}

export const bounceParams = {
	delay: 0,
	duration: 4000,
	easing: elasticOut,
	css: (t: number, u: number) => `transform: translateY(${u * 15}%)`
};
