<script lang="ts">
	import type { TSections } from '../../routes/+layout';
	import { page } from '$app/state';
	import { Menu } from 'lucide-svelte';
	import { X as Close } from 'lucide-svelte';
	import NavItem from '$lib/components/header/NavItem.svelte';
	import ThinBar from '$lib/components/ThinBar.svelte';
	import SubHeader from './SubHeader.svelte';
	import { slide } from 'svelte/transition';

	let { sections, showMenu = $bindable() }: { sections: TSections; showMenu: boolean } = $props();
	let active = $state(page.url.pathname);
	let hovered = $state(-1);
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-row items-center justify-between gap-4 sm:justify-normal">
		<h1 class="whitespace-nowrap text-center text-4xl text-home-cream hover:scale-105 lg:text-6xl">
			<a href={'/'} onclick={() => (active = '/')}> Ben Cohen-Chen </a>
		</h1>
		<div class="block sm:hidden">
			{#if showMenu}
				<Close color={'white'} onclick={() => (showMenu = !showMenu)} />
			{:else}
				<Menu color={'white'} onclick={() => (showMenu = !showMenu)} />
			{/if}
		</div>
		<ul
			class="hidden w-full justify-center gap-2 text-home-cream sm:flex sm:justify-end lg:gap-6 lg:text-xl"
		>
			{#each sections as link, i}
				<NavItem bind:active {link} bind:hovered {i} lastItem={i === sections.length - 1} />
			{/each}
		</ul>
	</div>
	<ThinBar variant="primary" />
	<div class="hidden sm:block">
		<SubHeader />
	</div>
	{#if showMenu}
		<div
			in:slide={{ duration: 500 }}
			out:slide={{ duration: 500 }}
			class="flex h-lvh flex-col gap-8 bg-black"
		>
			<ul class="flex w-full flex-col items-center justify-center gap-6 text-2xl text-home-cream">
				{#each sections as link, i}
					<NavItem bind:active {link} bind:hovered i={i + 1} lastItem={i === sections.length - 1} />
				{/each}
			</ul>
			<ThinBar variant="primary" />
			<SubHeader />
		</div>
	{/if}
</div>
