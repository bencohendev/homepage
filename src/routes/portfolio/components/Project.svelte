<script lang="ts">
	import type { TProject } from '../proxy+page';

	export let project: TProject;

	const { title, description, image, link } = project;
</script>

<div class="mb-8 flex flex-1 flex-col items-stretch gap-4 px-8">
	<div>
		<a class="text-home-yellow" href={link} target="_blank">
			<h3 class="w-fit text-2xl font-bold text-home-yellow hover:scale-110">{title}</h3>
		</a>
	</div>
	<div class="flex min-h-32">
		{description}
	</div>
	<div class="transition-all hover:scale-110 lg:p-8">
		<a href={link} target="_blank">
			<img src={image} alt="" />
		</a>
	</div>
</div>
