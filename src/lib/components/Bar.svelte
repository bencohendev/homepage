<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let {
		variant = 'primary',
		flyDirection = 'left',
		thickness = 'thin',
	}: {
		variant?: 'primary' | 'secondary';
		flyDirection?: 'left' | 'right';
		thickness?: 'thin' | 'thick';
	} = $props();

	const color = $derived(variant === 'primary' ? 'bg-home-purple' : 'bg-home-orange');
	const flyX = $derived(flyDirection === 'left' ? -1000 : 1000);
	const height = $derived(thickness === 'thin' ? 'h-0.5' : 'h-4');
</script>

<div class="relative">
	<div
		in:fly={{ x: flyX, delay: 25, easing: cubicOut }}
		class={`${color} ${height} absolute w-full`}
	></div>
</div>
