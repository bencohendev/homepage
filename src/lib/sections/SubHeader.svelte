<script lang="ts">
	import SubNavItem from '$lib/components/header/SubNavItem.svelte';
	import { Github, Linkedin, Phone, MapPinned, Mail } from 'lucide-svelte';

	let hovered: number = $state(0);
</script>

<div class="flex justify-center gap-6 sm:justify-between sm:gap-0">
	<div class=" flex gap-6 text-home-cream">
		<SubNavItem link="https://github.com/bencohendev" Icon={Github} bind:hovered index={0} />
		|
		<SubNavItem
			link="https://www.linkedin.com/in/ben-cohen-chen/"
			Icon={Linkedin}
			bind:hovered
			index={1}
		/>
	</div>
	<div class="text-home-cream sm:hidden">|</div>
	<div class="flex gap-6 text-home-cream">
		<SubNavItem link="mailto:ben@bencohen.dev" Icon={Mail} bind:hovered index={2} />
		|
		<SubNavItem link="tel:9316259833" Icon={Phone} bind:hovered index={3} />
		|
		<SubNavItem
			link="https://www.google.com/maps/place/Portland,+OR/"
			Icon={MapPinned}
			bind:hovered
			index={4}
		/>
	</div>
</div>
