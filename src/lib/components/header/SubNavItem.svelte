<script>
	let { Icon, link, hovered = $bindable(), index } = $props();
</script>

<a
	onmouseenter={() => (hovered = index)}
	onmouseleave={() => (hovered = 0)}
	class={`${hovered && hovered !== index ? 'scale-75 opacity-75' : ''} hover:scale-110`}
	href={link}
	target="_blank"
>
	<Icon color={'white'} />
</a>
