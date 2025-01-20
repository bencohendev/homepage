<script lang="ts">
	import ThinBar from './ThinBar.svelte';
	export let text;
	export let size: keyof typeof textSize = 'lg';
	const textSize = {
		lg: 'text-4xl',
		md: 'text-2xl',
	};
</script>

<h2 class={`w-fit ${textSize[size]} font-bold`}>{text} <ThinBar /></h2>
