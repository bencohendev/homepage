<script lang="ts">
	import type { TSkill } from '../proxy+page';
	import Skill from './Skill.svelte';

	export let skills: Array<TSkill>;
	const languages = skills.filter((skill) => skill.category === 'Languages');
	const technologies = skills.filter((skill) => skill.category === 'Technologies');
	const tooling = skills.filter((skill) => skill.category === 'Tooling');
	const process = skills.filter((skill) => skill.category === 'Process');
</script>

<section>
	<div>
		<h3>Languages</h3>
		{#each languages as skill}
			<Skill {skill} />
		{/each}
	</div>
	<div>
		<h3>Technologies</h3>
		{#each technologies as skill}
			<Skill {skill} />
		{/each}
	</div>
	<div>
		<h3>Tooling</h3>
		{#each tooling as skill}
			<Skill {skill} />
		{/each}
	</div>
	<div>
		<h3>Process</h3>
		{#each process as skill}
			<Skill {skill} />
		{/each}
	</div>
</section>
