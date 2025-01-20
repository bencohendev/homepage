<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let variant: 'primary' | 'secondary' = 'primary';
	export let flyDirection: 'left' | 'right' = 'left';

	const color = variant === 'primary' ? 'bg-home-purple' : 'bg-home-orange';
	const flyX = flyDirection === 'left' ? -1000 : 1000;

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<div class="relative">
		<div
			in:fly={{ x: flyX, delay: 25, easing: cubicOut }}
			class={`${color} absolute h-4 w-full`}
		></div>
	</div>
{/if}
