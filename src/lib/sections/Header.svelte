<script lang="ts">
	import { page } from '$app/state';
	import type { Sections } from '../../routes/proxy+layout';

	let { sections }: { sections: Sections } = $props();
	let active = $state(page.url.pathname);
	$effect(() => console.log('🚀 ben ~ active:', active, sections));
</script>

<div class="flex items-center">
	{#if active !== 'Home'}
		<h1 class="whitespace-nowrap text-center text-6xl text-home-cream">Ben Cohen-Chen</h1>
	{/if}
	<ul class="flex w-full justify-end gap-6 text-xl text-home-cream">
		{#each sections as link, i}
			<li
				class={active === link.slug
					? 'font-bold underline decoration-home-orange underline-offset-4'
					: ''}
			>
				<a href={link.slug} onclick={() => (active = link.slug)}>
					{link.label}
				</a>
			</li>
			{#if i !== sections.length - 1}
				|
			{/if}
		{/each}
	</ul>
</div>
