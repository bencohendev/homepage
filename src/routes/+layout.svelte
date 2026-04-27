<script lang="ts">
	import '../app.css';
	import Header from '$lib/sections/Header.svelte';

	let props = $props();
	let showMenu = $state(false);
</script>

<main
	class={`${showMenu ? 'max-h-lvh overflow-hidden' : ''} h-full min-h-lvh bg-black p-1 font-grotesk`}
>
	<div class="mb-8 flex px-8 py-2">
		<div class="flex w-full flex-col gap-3">
			<Header bind:showMenu sections={props.data.sections} />
		</div>
	</div>
	{@render props.children()}
</main>

<style></style>
