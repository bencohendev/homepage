<script lang="ts">
	import { fly } from 'svelte/transition';

	export let variant: 'primary' | 'secondary' = 'primary';
	export let flyDirection: 'left' | 'right' = 'left';

	const color = variant === 'primary' ? 'bg-home-purple' : 'bg-home-orange';
	const flyX = flyDirection === 'left' ? -1000 : 1000;
</script>

<div in:fly={{ x: flyX }} class={`${color} h-4 w-full`}></div>
