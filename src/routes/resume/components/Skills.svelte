<script lang="ts">
	import type { TSkill } from '../+page';
	import Skill from './Skill.svelte';

	let { skills }: { skills: Array<TSkill> } = $props();
	const languages = $derived(skills.filter((skill) => skill.category === 'Languages'));
	const technologies = $derived(skills.filter((skill) => skill.category === 'Technologies'));
	const tooling = $derived(skills.filter((skill) => skill.category === 'Tooling'));
	const process = $derived(skills.filter((skill) => skill.category === 'Process'));
</script>

<section class="flex flex-col gap-4">
	<div>
		<h3 class="text-2xl font-bold text-home-yellow">Languages</h3>
		{#each languages as skill (skill.name)}
			<Skill {skill} />
		{/each}
	</div>
	<div>
		<h3 class="text-2xl font-bold text-home-yellow">Technologies</h3>
		{#each technologies as skill (skill.name)}
			<Skill {skill} />
		{/each}
	</div>
	<div>
		<h3 class="text-2xl font-bold text-home-yellow">Tooling</h3>
		{#each tooling as skill (skill.name)}
			<Skill {skill} />
		{/each}
	</div>
	<div>
		<h3 class="text-2xl font-bold text-home-yellow">Process</h3>
		{#each process as skill (skill.name)}
			<Skill {skill} />
		{/each}
	</div>
</section>
