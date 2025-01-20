<script lang="ts">
	import type { TSkill } from '../proxy+page';
	import Skill from './Skill.svelte';

	export let skills: Array<TSkill>;
	const languages = skills.filter((skill) => skill.category === 'Languages');
	const technologies = skills.filter((skill) => skill.category === 'Technologies');
	const tooling = skills.filter((skill) => skill.category === 'Tooling');
	const process = skills.filter((skill) => skill.category === 'Process');
</script>

<section class="flex flex-col gap-4">
	<div>
		<h3 class="text-2xl font-bold text-home-yellow">Languages</h3>
		{#each languages as skill}
			<Skill {skill} />
		{/each}
	</div>
	<div>
		<h3 class="text-2xl font-bold text-home-yellow">Technologies</h3>
		{#each technologies as skill}
			<Skill {skill} />
		{/each}
	</div>
	<div>
		<h3 class="text-2xl font-bold text-home-yellow">Tooling</h3>
		{#each tooling as skill}
			<Skill {skill} />
		{/each}
	</div>
	<div>
		<h3 class="text-2xl font-bold text-home-yellow">Process</h3>
		{#each process as skill}
			<Skill {skill} />
		{/each}
	</div>
</section>
