<script>
	import { Github, Linkedin, Phone, MapPinned, Mail } from 'lucide-svelte';
</script>

<div class="flex justify-between">
	<div class="flex gap-4 text-home-cream">
		<a href="https://github.com/bencohendev" target="_blank">
			<Github color={'white'} />
		</a>
		|
		<a href="https://www.linkedin.com/in/ben-cohen-chen/" target="_blank">
			<Linkedin color={'white'} />
		</a>
	</div>
	<div class="flex gap-4 text-home-cream">
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
