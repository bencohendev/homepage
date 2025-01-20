<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import type { TProject } from '../proxy+page';

	export let project: TProject;

	const { title, description, image, link, date } = project;
</script>

<div class="mb-8 flex flex-1 flex-col items-stretch gap-4 p-8">
	<div class="mb-4">
		<a href={link} target="_blank">
			<Heading text={title} size="md" />
		</a>
	</div>
	<div class="flex">
		{description}
	</div>
	<div class="p-8 transition-all hover:scale-110">
		<a href={link} target="_blank">
			<img src={image} alt="" />
		</a>
	</div>
</div>
