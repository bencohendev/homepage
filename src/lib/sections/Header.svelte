<script lang="ts">
	import { page } from '$app/state';
	import ThinBar from '$lib/components/ThinBar.svelte';
	import type { TSections } from '../../routes/proxy+layout';
	import SubHeader from './SubHeader.svelte';

	let { sections }: { sections: TSections } = $props();
	let active = $state(page.url.pathname);
	let hovered = $state(0);
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col items-center gap-4 lg:flex-row">
		{#if active !== 'Home'}
			<h1
				class="whitespace-nowrap text-center text-4xl text-home-cream hover:scale-105 lg:text-6xl"
			>
				<a href={'/'} onclick={() => (active = '/')}> Ben Cohen-Chen </a>
			</h1>
		{/if}
		<ul class="flex w-full justify-center gap-2 text-home-cream lg:justify-end lg:gap-6 lg:text-xl">
			{#each sections as link, i}
				<li
					class={`
          ${
						active === link.slug
							? 'font-bold underline decoration-home-orange underline-offset-4'
							: 'hover:scale-110'
					}
            ${hovered && hovered !== i + 1 ? 'scale-90 opacity-75' : ''}`}
					onmouseenter={() => (hovered = i + 1)}
					onmouseleave={() => (hovered = 0)}
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
