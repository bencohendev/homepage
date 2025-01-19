<script>
	import Job from './components/job/Job.svelte';

	let { data } = $props();
	const { jobs } = data;
</script>

<div class="flex flex-col items-center justify-center text-home-cream">
	<section>
		<h2>Experience</h2>
		<div>
			{#each jobs as job}
				<Job {job} />
			{/each}
		</div>
	</section>
	<section>
		<h2>Skills</h2>
	</section>
</div>
