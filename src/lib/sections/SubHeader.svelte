<script lang="ts">
	import SubNavItem from '$lib/components/SubNavItem.svelte';
	import { Github, Linkedin, Phone, MapPinned, Mail } from 'lucide-svelte';

	let active: number = $state(0);
</script>

<div class="flex justify-center gap-6 sm:justify-between sm:gap-0">
	<div class=" flex gap-6 text-home-cream">
		<SubNavItem link="https://github.com/bencohendev" Icon={Github} bind:active index={1} />
		|
		<SubNavItem
			link="https://www.linkedin.com/in/ben-cohen-chen/"
			Icon={Linkedin}
			bind:active
			index={2}
		/>
	</div>
	<div class="text-home-cream sm:hidden">|</div>
	<div class="flex gap-6 text-home-cream">
		<SubNavItem link="mailto:ben@bencohen.dev" Icon={Mail} bind:active index={3} />
		|
		<SubNavItem link="tel:9316259833" Icon={Phone} bind:active index={4} />
		|
		<SubNavItem
			link="https://www.google.com/maps/place/Portland,+OR/"
			Icon={MapPinned}
			bind:active
			index={5}
		/>
	</div>
</div>
