<script lang="ts">
	import '../app.css';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<svelte:head>
	<title>Ben Cohen Dev</title>
</svelte:head>

<main class="bg-black h-full p-1 font-grotesk">
	{@render children?.()}
</main>

<style></style>
