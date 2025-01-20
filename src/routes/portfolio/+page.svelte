<script>
	import Heading from '$lib/components/Heading.svelte';
	import Project from './components/Project.svelte';

	let { data } = $props();
	const { projects } = data;
</script>

<section class="px-12 text-home-cream">
	<Heading text="Personal Projects" />
	<p class="mb-8 mt-4">
		Below I have a sampling of some fun personal projects I've made over the years. For more
		information about development I've done in a professional capacity, please go take a look at my
		<a class="text-home-blue underline underline-offset-4 hover:opacity-75" href="/resume"
			>Resume Page</a
		>
	</p>
	<div class="flex">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</section>
