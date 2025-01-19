<script>
	import ThinBar from '$lib/components/ThinBar.svelte';
	import Job from './components/Job.svelte';
	import Skills from './components/Skills.svelte';

	let { data } = $props();
	const { jobs, skills } = data;
</script>

<div class="flex justify-between gap-12 px-12 text-home-cream">
	<section class="w-2/3">
		<div class="mb-4">
			<h2 class="w-fit text-4xl font-bold">Experience <ThinBar /></h2>
		</div>
		<div>
			{#each jobs as job}
				<Job {job} />
			{/each}
		</div>
	</section>
	<section class="w-1/3">
		<div class="mb-4">
			<h2 class="w-fit text-4xl font-bold">Skills <ThinBar /></h2>
		</div>
		<div>
			<Skills {skills} />
		</div>
	</section>
</div>
