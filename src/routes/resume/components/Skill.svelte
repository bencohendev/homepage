<script lang="ts">
	import type { TSkill } from '../proxy+page';
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let progress = new Tween(0, {
		duration: 900,
		easing: cubicOut,
	});

	export let skill: TSkill;
	const { name, level } = skill;
	progress.target = level * 0.01;

	let animate = false;
	let barColor = '';
	barColor = getProgressColor();
	function getProgressColor(): string {
		switch (true) {
			case level <= 49:
				barColor = '[&::-webkit-progress-value]:bg-home-red [&::-moz-progress-bar]:bg-home-red';
				break;
			case level > 49 && level < 75:
				barColor =
					'[&::-webkit-progress-value]:bg-home-yellow [&::-moz-progress-bar]:bg-home-yellow';
				break;
			case level >= 75:
				barColor = '[&::-webkit-progress-value]:bg-home-green [&::-moz-progress-bar]:bg-home-green';
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
          ${barColor}
          w-56
          [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg`}
					value={progress.current}
				></progress>
			{:else}
				<progress
					id={name}
					class={`[&::-webkit-progress-bar]:bg-slate-300 w-56 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg`}
					value={0}
				></progress>
			{/if}
		</div>
	</div>
</section>
