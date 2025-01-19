<script lang="ts">
	import type { TSkill } from '../proxy+page';
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let progress = new Tween(0, {
		duration: 400,
		easing: cubicOut,
	});

	export let skill: TSkill;
	const { name, level } = skill;
	progress.target = level * 0.01;

	let animate = false;
	let barColor = 'bg-red-900';
	barColor = getProgressColor();
	function getProgressColor(): string {
		switch (true) {
			case level <= 49:
				barColor = 'bg-red-900';
				break;
			case level > 49 && level < 75:
				barColor = 'bg-home-yellow';
				break;
			case level >= 75:
				barColor = 'bg-home-orange';
				break;
			default:
				break;
		}
		return barColor;
	}

	onMount(() => {
		animate = true;
	});
</script>

<section>
	<div class="flex flex-col">
		<label for={name}>
			{name}
		</label>
		<div>
			{#if animate}
				<progress
					id={name}
					class={`[&::-webkit-progress-bar]:bg-slate-300
           [&::-webkit-progress-value]:${barColor}
            [&::-moz-progress-bar]:${barColor}
             w-56
              [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg`}
					value={progress.current}
				></progress>
			{/if}
		</div>
	</div>
</section>
