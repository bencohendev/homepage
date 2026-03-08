<script lang="ts">
	import type { TJob } from '../+page';

	let { job }: { job: TJob } = $props();
</script>

<section class="text-home-cream">
	<div class="flex flex-col gap-4">
		<div>
			<h3 class="w-fit text-2xl font-bold text-home-yellow hover:scale-110">
				<a href={job.link} target="_blank">
					{job.company}
				</a>
			</h3>
			<div>
				{job.subhead}
			</div>
		</div>
		<div class="flex flex-col sm:flex-row sm:items-center sm:gap-4">
			<div class="text-xl font-bold text-home-blue">
				{job.title}
			</div>
			<div class="hidden sm:block">|</div>
			<div class="italic">
				{job.date}
			</div>
		</div>
		<ul class="flex flex-col">
			{#each job.bullets as bullet}
				<li class="mb-2 ml-8 list-disc">
					{bullet.text}
				</li>
				{#if bullet?.subPoints?.length}
					{#each bullet.subPoints as subPoint}
						<li class="mb-1 ml-12 list-disc">
							{subPoint.text}
						</li>
					{/each}
				{/if}
			{/each}
		</ul>
	</div>
</section>
