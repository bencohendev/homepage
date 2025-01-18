<script>
	import '../app.css';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<main class="bg-home-purple font-grotesk h-lvh p-1">
	{@render children?.()}
</main>

<style></style>
