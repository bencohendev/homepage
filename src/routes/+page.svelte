<script>
	import About from '$lib/sections/About.svelte';
</script>

<svelte:head>
	<title>Ben Cohen Dev</title>
</svelte:head>

<div class=" flex h-full flex-col items-center justify-between">
	<section class="flex flex-col items-center justify-center py-8 text-home-cream">
		<h1 class="mb-8 w-full text-center text-6xl">Ben Cohen-Chen</h1>
		<p class="mb-4 text-xl font-normal">Typescript | React | Svelte</p>
		<p class="text-white text-4xl">Let's talk: ben@bencohen.dev</p>
	</section>
	<section>
		<About />
	</section>
	<section class="flex flex-col items-center justify-center pb-8">
		<div class="text-lg text-home-orange active:text-home-blue">
			<a class="underline" href="https://theme.bencohen.dev">theme generator</a>
			<span>|</span>
			<a class="underline" href="https://pitch.bencohen.dev">pitch generator</a>
		</div>
	</section>
</div>

<style>
	a {
		margin: 0 1rem;
		text-decoration: none;
	}
</style>
