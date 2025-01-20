<script>
	import { Download } from 'lucide-svelte';
	import ThinBar from '$lib/components/ThinBar.svelte';
	import Job from './components/Job.svelte';
	import Skills from './components/Skills.svelte';

	let { data } = $props();
	const { jobs, skills } = data;
</script>

<a
	class="mb-4 flex px-12 text-home-cream"
	href="/Resume_Ben_Cohen-Chen.pdf"
	download="Resume_Ben_Cohen-Chen.pdf">Download as PDF <Download color={'white'} /></a
>
<div class="flex justify-between gap-12 px-12 text-home-cream">
	<section class="">
		<div class="mb-4">
			<h2 class="w-fit text-4xl font-bold">Experience <ThinBar /></h2>
		</div>
		<div>
			{#each jobs as job}
				<div class="mb-8">
					<Job {job} />
				</div>
			{/each}
		</div>
	</section>
	<section class="flex flex-col">
		<div class="mb-4">
			<h2 class="w-fit text-4xl font-bold">Skills <ThinBar /></h2>
		</div>
		<div>
			<Skills {skills} />
		</div>
	</section>
</div>
