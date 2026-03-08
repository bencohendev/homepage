<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import type { TSkill } from '../+page';

	let progress = new Tween(0, {
		duration: 900,
		easing: cubicOut,
	});

	let { skill } : {skill: TSkill} = $props();
	let animate = $state(false);
	const barColor = $derived.by(() => {
		if (skill.level <= 49) return '[&::-webkit-progress-value]:bg-home-red [&::-moz-progress-bar]:bg-home-red';
		if (skill.level < 75) return '[&::-webkit-progress-value]:bg-home-yellow [&::-moz-progress-bar]:bg-home-yellow';
		return '[&::-webkit-progress-value]:bg-home-green [&::-moz-progress-bar]:bg-home-green';
	});

	$effect(() => {
		animate = true;
		progress.target = skill.level * 0.01;
	});
</script>

<section>
	<div class="flex flex-col">
		<label for={skill.name}>
			{skill.name}
		</label>
		<div>
				<progress
					id={skill.name}
					class={`[&::-webkit-progress-bar]:bg-slate-300
          ${barColor}
          w-56
          [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg`}
					value={progress.current}
				></progress>
		</div>
	</div>
</section>
