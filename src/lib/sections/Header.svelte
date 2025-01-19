<script lang="ts">
	const active = $state('Home');
	const links = [
		{ label: 'Home', url: '/home' },
		{ label: 'About', url: '/about' },
		{ label: 'Portfolio', url: '/portfolio' },
		{ label: 'Resume', url: '/resume' }
	];
</script>

<ul class="flex justify-center gap-8 p-10 text-xl text-home-cream">
	{#each links as link, i}
		<li class={active === link.label ? 'underline decoration-home-orange underline-offset-4' : ''}>
			<a href={link.url}>
				{link.label}
			</a>
		</li>
		{#if i !== links.length - 1}
			|
		{/if}
	{/each}
</ul>
