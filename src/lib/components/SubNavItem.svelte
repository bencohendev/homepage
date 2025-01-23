<script>
	let { Icon, link, active = $bindable(), index } = $props();
</script>

<a
	onmouseenter={() => (active = index)}
	onmouseleave={() => (active = 0)}
	class={`${active && active !== index ? 'scale-75 opacity-75' : ''} hover:scale-110`}
	href={link}
	target="_blank"
>
	<Icon color={'white'} />
</a>
