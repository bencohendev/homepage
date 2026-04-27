<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve -- static asset href below is not a route */
	import { Download } from 'lucide-svelte';
	import { base } from '$app/paths';
	import Job from './components/Job.svelte';
	import Skills from './components/Skills.svelte';
	import Heading from '$lib/components/Heading.svelte';

	let { data } = $props();
</script>

<div class="text-home-cream mb-4 flex justify-center px-12 sm:justify-end">
	<a
		class="flex gap-2 hover:scale-110"
		href="{base}/Ben_Cohen-Chen_Senior_Engineer.pdf"
		download="Ben_Cohen-Chen_Senior_Engineer.pdf"
		>Download as PDF <span class="relative bottom-0.5"><Download color="white" /></span>
	</a>
</div>
<section class="text-home-cream flex flex-col justify-center gap-24 px-12 lg:flex-row">
	<div>
		<div class="mb-4">
			<Heading text="Experience" />
		</div>
		<div>
			{#each data.jobs as job (job.company)}
				<div class="mb-8">
					<Job {job} />
				</div>
			{/each}
		</div>
	</div>
	<div class="flex flex-col items-center sm:items-start">
		<div>
			<div class="mb-4">
				<Heading text="Skills" />
			</div>
			<div>
				<Skills skills={data.skills} />
			</div>
		</div>
	</div>
</section>
