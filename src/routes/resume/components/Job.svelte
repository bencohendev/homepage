<script lang="ts">
	import type { TJob } from '../proxy+page';

	export let job: TJob;
	const { company, title, link, date, subhead, bullets } = job;
</script>

<section class="text-home-cream">
	<div class="flex flex-col gap-4">
		<div>
			<h3 class="w-fit text-2xl font-bold text-home-yellow hover:scale-110">
				<a href={link} target="_blank">
					{company}
				</a>
			</h3>
			<div>
				{subhead}
			</div>
		</div>
		<div class="flex flex-col sm:flex-row sm:items-center sm:gap-4">
			<div class="text-xl font-bold text-home-blue">
				{title}
			</div>
			<div class="hidden sm:block">|</div>
			<div class="italic">
				{date}
			</div>
		</div>
		<ul class="flex flex-col">
			{#each bullets as bullet}
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
