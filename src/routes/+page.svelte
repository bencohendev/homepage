<script lang="ts">
	import { MoveDown } from 'lucide-svelte';
	import About from '$lib/sections/About.svelte';
	import { customTransition, bounceParams } from '$lib/animations/bounce';
	import ThickBar from '$lib/components/ThickBar.svelte';
	import { fade } from 'svelte/transition';
	import Intro from '$lib/sections/Intro.svelte';

	let y = $state(0);
	let content = $state(Intro);
	let Component = $derived.by(() => {
		if (y > 100) {
			return About;
		}
		return Intro;
	});
</script>

<svelte:window bind:scrollY={y} />

<div class=" flex h-[10000px] flex-col items-center">
	<Component />
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
