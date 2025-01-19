<script lang="ts">
	import type { TSkill } from '../proxy+page';

	export let skill: TSkill;
	const { name, category, level } = skill;
</script>

<section>
	<div>
		{name}
		{category}
		{level}
	</div>
</section>
