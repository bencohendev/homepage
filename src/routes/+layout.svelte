<script lang="ts">
	import Header from '$lib/sections/Header.svelte';
	import '../app.css';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<main class="bg-black h-lvh p-1 font-grotesk">
	<Header />
	{@render children?.()}
</main>

<style></style>
