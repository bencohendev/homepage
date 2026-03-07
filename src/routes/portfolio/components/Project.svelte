<script lang="ts">
	import type { TProject } from '../proxy+page';

	export let project: TProject;

	const { title, description, image, link } = project;
</script>

<div class="flex h-full flex-col gap-4 px-8 pb-8">
	<div>
		<a class="text-home-yellow" href={link} target="_blank">
			<h3 class="w-fit text-2xl font-bold text-home-yellow hover:scale-110">{title}</h3>
		</a>
	</div>
	<div class="flex flex-1 min-h-32">
		{description}
	</div>
	<div class="transition-all hover:scale-110 max-w-96 mx-auto">
		<a href={link} target="_blank">
			<img src={image} alt="" />
		</a>
	</div>
</div>
