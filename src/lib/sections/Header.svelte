<script lang="ts">
	import ThickBar from '$lib/components/ThickBar.svelte';

	let active = $state('Home');
	const links = [
		{ label: 'Home', url: '' },
		{ label: 'Resume', url: '/resume' },
		{ label: 'Portfolio', url: '/portfolio' },
		{ label: 'About', url: '/about' },
	];
	$effect(() => console.log(active));
</script>

<div class="flex justify-between px-8 py-2">
	{#if active !== 'Home'}
		<h1 class="w-content mb-8 whitespace-nowrap text-center text-6xl text-home-cream">
			Ben Cohen-Chen
			<ThickBar />
		</h1>
	{/if}
	<ul class="flex w-full justify-end gap-6 p-10 text-xl text-home-cream">
		{#each links as link, i}
			<li
				class={active === link.label
					? 'font-bold underline decoration-home-orange underline-offset-4'
					: ''}
			>
				<a href={link.url} onclick={() => (active = link.label)}>
					{link.label}
				</a>
			</li>
			{#if i !== links.length - 1}
				|
			{/if}
		{/each}
	</ul>
</div>
