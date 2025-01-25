<script lang="ts">
	let { active = $bindable(), link, hovered = $bindable(), i, lastItem } = $props();

	const activeClass =
		active === link.slug
			? 'font-bold underline decoration-home-orange underline-offset-4'
			: 'hover:scale-110';
</script>

<li
	class={`
${activeClass} ${hovered && hovered !== i ? 'scale-90 opacity-75' : ''}`}
	onmouseenter={() => (hovered = i)}
	onmouseleave={() => (hovered = 0)}
>
	<a href={link.slug} onclick={() => (active = link.slug)}>
		{link.label}
	</a>
</li>

{#if !lastItem}
	|
{/if}
