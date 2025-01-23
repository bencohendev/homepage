<script>
	import { Download } from 'lucide-svelte';
	import Job from './components/Job.svelte';
	import Skills from './components/Skills.svelte';
	import Heading from '$lib/components/Heading.svelte';

	let { data } = $props();
	const { jobs, skills } = data;
</script>

<div class="mb-4 flex justify-center px-12 text-home-cream sm:justify-end">
	<a
		class="flex gap-2 hover:scale-110"
		href="/Resume_Ben_Cohen-Chen.pdf"
		download="Resume_Ben_Cohen-Chen.pdf"
		>Download as PDF <span class="relative bottom-0.5"><Download color={'white'} /></span>
	</a>
</div>
<section class="flex flex-col justify-center gap-24 px-12 text-home-cream lg:flex-row">
	<div class="">
		<div class="mb-4">
			<Heading text="Experience" />
		</div>
		<div>
			{#each jobs as job}
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
				<Skills {skills} />
			</div>
		</div>
	</div>
</section>
