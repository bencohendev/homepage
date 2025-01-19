<script lang="ts">
	import type { TJob } from '../proxy+page';

	export let job: TJob;
	const { company, title, link, date, subhead, bullets } = job;
</script>

<section class="text-home-cream">
	<div class="flex flex-col">
		<h3>
			<a href={link}>
				{company}
			</a>
		</h3>
		<div class="flex justify-between">
			<div>
				{title}
			</div>
			<div>
				{date}
			</div>
		</div>
		<div>
			{subhead}
		</div>
		<ul class="flex flex-col">
			{#each bullets as bullet}
				<li class="ml-2">
					{bullet.text}
				</li>
				{#if bullet?.subPoints?.length}
					{#each bullet.subPoints as subPoint}
						<li class="ml-4">
							{subPoint.text}
						</li>
					{/each}
				{/if}
			{/each}
		</ul>
	</div>
</section>
