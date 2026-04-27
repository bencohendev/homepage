<script lang="ts">
	import type { TJob } from '../+page';

	let { job }: { job: TJob } = $props();
</script>

<section class="text-home-cream">
	<div class="flex flex-col gap-4">
		<div>
			<h3 class="text-home-yellow w-fit text-2xl font-bold hover:scale-110">
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL -->
				<a href={job.link} target="_blank">
					{job.company}
				</a>
			</h3>
			<div>
				{job.subhead}
			</div>
		</div>
		<div class="flex flex-col sm:flex-row sm:items-center sm:gap-4">
			<div class="text-home-blue text-xl font-bold">
				{job.title}
			</div>
			<div class="hidden sm:block">|</div>
			<div class="italic">
				{job.date}
			</div>
		</div>
		<ul class="flex flex-col">
			{#each job.bullets as bullet (bullet.text)}
				<li class="mb-2 ml-8 list-disc">
					{bullet.text}
				</li>
				{#if bullet?.subPoints?.length}
					{#each bullet.subPoints as subPoint (subPoint.text)}
						<li class="mb-1 ml-12 list-disc">
							{subPoint.text}
						</li>
					{/each}
				{/if}
			{/each}
		</ul>
	</div>
</section>
