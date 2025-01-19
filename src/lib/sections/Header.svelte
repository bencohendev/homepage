<script lang="ts">
	import { page } from '$app/state';
	import ThinBar from '$lib/components/ThinBar.svelte';
	import type { TSections } from '../../routes/proxy+layout';
	import SubHeader from './SubHeader.svelte';

	let { sections }: { sections: TSections } = $props();
	let active = $state(page.url.pathname);
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center">
		{#if active !== 'Home'}
			<a href={'/'} onclick={() => (active = '/')}
				><h1 class="whitespace-nowrap text-center text-6xl text-home-cream">Ben Cohen-Chen</h1></a
			>
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
	<ThinBar variant="primary" />
	<SubHeader />
</div>
