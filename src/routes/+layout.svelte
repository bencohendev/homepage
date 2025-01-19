<script lang="ts">
	import '../app.css';
	import Header from '$lib/sections/Header.svelte';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	/** @type {{children?: import('svelte').Snippet}} */
	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<main class="bg-black h-full p-1 font-grotesk">
	<div class="mb-8 flex px-8 py-2">
		<div class="flex w-full flex-col gap-3">
			<Header sections={data.sections} />
		</div>
	</div>

	{@render children()}
</main>

<style></style>
