<script lang="ts">
	import { Github, Linkedin, Phone, MapPinned, Mail } from 'lucide-svelte';

	let active: number | null = $state(0);
</script>

<div class="flex justify-center gap-6 sm:justify-between sm:gap-0">
	<div class=" flex gap-6 text-home-cream">
		<a
			onmouseenter={() => (active = 1)}
			onmouseleave={() => (active = 0)}
			class={`${active && active !== 1 ? 'scale-75 opacity-75' : ''} hover:scale-110`}
			href="https://github.com/bencohendev"
			target="_blank"
		>
			<Github color={'white'} />
		</a>
		|
		<a
			onmouseenter={() => (active = 2)}
			onmouseleave={() => (active = 0)}
			class={`${active && active !== 2 ? 'scale-75 opacity-75' : ''} hover:scale-110`}
			href="https://www.linkedin.com/in/ben-cohen-chen/"
			target="_blank"
		>
			<Linkedin color={'white'} />
		</a>
	</div>
	<div class="text-home-cream sm:hidden">|</div>
	<div class="flex gap-6 text-home-cream">
		<a
			onmouseenter={() => (active = 3)}
			onmouseleave={() => (active = 0)}
			href="mailto:ben@bencohen.dev"
			class={`${active && active !== 3 ? 'scale-75 opacity-75' : ''} hover:scale-110`}
		>
			<Mail color={'white'} />
		</a>
		|
		<a
			onmouseenter={() => (active = 4)}
			onmouseleave={() => (active = 0)}
			class={`${active && active !== 4 ? 'scale-75 opacity-75' : ''} hover:scale-110`}
			href="tel:9316259833"
		>
			<Phone color={'white'} />
		</a>
		|
		<a
			onmouseenter={() => (active = 5)}
			onmouseleave={() => (active = 0)}
			class={`${active && active !== 5 ? 'scale-75 opacity-75' : ''} hover:scale-110`}
			href="https://www.google.com/maps/place/Portland,+OR/"
			target="_blank"
		>
			<MapPinned color={'white'} />
		</a>
	</div>
</div>
