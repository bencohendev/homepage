<script>
	import { Github, Linkedin, Phone, Map, Mail } from 'lucide-svelte';
</script>

<div class="flex justify-between">
	<div class="flex gap-4 text-home-cream">
		<a href="https://github.com/bencohendev">
			<Github color={'white'} />
		</a>
		|
		<a href="https://www.linkedin.com/in/ben-cohen-chen/">
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
		<a href="https://www.google.com/maps/place/Portland,+OR/">
			<Map color={'white'} />
		</a>
	</div>
</div>
