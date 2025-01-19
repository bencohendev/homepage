<script lang="ts">
	import '../app.css';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<main class="bg-black h-lvh p-1 font-grotesk">
	{@render children?.()}
</main>

<style></style>
