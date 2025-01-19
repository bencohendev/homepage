<script lang="ts">
	import { MoveDown } from 'lucide-svelte';
	import About from '$lib/sections/About.svelte';
	import { customTransition, bounceParams } from '$lib/animations/bounce';
	import Intro from '$lib/sections/Intro.svelte';
	import Header from '$lib/sections/Header.svelte';
</script>

<svelte:head>
	<title>Ben Cohen Dev</title>
</svelte:head>

<Header />
<div class=" flex h-full flex-col items-center justify-between">
	<section class="flex flex-col items-center justify-center py-8 text-home-cream">
		<Intro />
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
</style>
