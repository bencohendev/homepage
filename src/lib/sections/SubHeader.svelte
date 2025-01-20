<script>
	import { Github, Linkedin, Phone, MapPinned, Mail } from 'lucide-svelte';
</script>

<div class="flex justify-center gap-6 sm:justify-between sm:gap-0">
	<div class="flex gap-6 text-home-cream">
		<a href="https://github.com/bencohendev" target="_blank">
			<Github color={'white'} />
		</a>
		|
		<a href="https://www.linkedin.com/in/ben-cohen-chen/" target="_blank">
			<Linkedin color={'white'} />
		</a>
	</div>
	<div class="text-home-cream sm:hidden">|</div>
	<div class="flex gap-6 text-home-cream">
		<a href="mailto:ben@bencohen.dev">
			<Mail color={'white'} />
		</a>
		|
		<a href="tel:9316259833">
			<Phone color={'white'} />
		</a>
		|
		<a href="https://www.google.com/maps/place/Portland,+OR/" target="_blank">
			<MapPinned color={'white'} />
		</a>
	</div>
</div>
