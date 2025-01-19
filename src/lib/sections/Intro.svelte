<script>
	import { bounceParams, customTransition } from '$lib/animations/bounce';
	import ThickBar from '$lib/components/ThickBar.svelte';
	import { MoveDown } from 'lucide-svelte';

	export let y;
</script>

<section class="fixed flex flex-col items-center justify-center py-8 text-home-cream">
	<h1 class="mb-8 w-full text-center text-6xl">
		Ben Cohen-Chen
		{#if y > 50}
			<ThickBar />
		{/if}
	</h1>
	<p class="mb-4 text-xl font-normal">Typescript | React | Svelte</p>
	<p class="text-white mb-12 text-4xl">Let's talk: ben@bencohen.dev</p>
	<div class="an" in:customTransition={bounceParams}>
		<MoveDown color={'white'} size={180} />
	</div>
</section>
