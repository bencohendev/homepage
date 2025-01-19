<script lang="ts">
	import ThinBar from '$lib/components/ThinBar.svelte';
	import Header from '$lib/sections/Header.svelte';
	import '../app.css';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<main class="bg-black h-lvh p-1 font-grotesk">
	<div class="flex px-8 py-2">
		<div class="w-full">
			<Header />
			<ThinBar />
		</div>
	</div>

	{@render children?.()}
</main>

<style></style>
