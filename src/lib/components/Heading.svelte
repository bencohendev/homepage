<script lang="ts">
	import Bar from './Bar.svelte';
	export let text;
	export let size: keyof typeof textSize = 'lg';
	const textSize = {
		lg: 'text-4xl',
		md: 'text-2xl',
	};
</script>

<h2 class={`w-fit ${textSize[size]} font-bold`}>{text} <Bar /></h2>
