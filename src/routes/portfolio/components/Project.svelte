<script lang="ts">
	import type { TProject } from '../+page';

	let { project }: { project: TProject } = $props();
</script>

<div class="flex h-full flex-col gap-4 px-8 pb-8">
	<div>
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL -->
		<a class="text-home-yellow" href={project.link} target="_blank">
			<h3 class="text-home-yellow w-fit text-2xl font-bold hover:scale-110">{project.title}</h3>
		</a>
	</div>
	<div class="flex min-h-32 flex-1">
		{project.description}
	</div>
	<div class="mx-auto max-w-96 transition-all hover:scale-110">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL -->
		<a href={project.link} target="_blank">
			<img src={project.image} alt="" />
		</a>
	</div>
</div>
