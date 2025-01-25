<script lang="ts">
	let { active = $bindable(), link, hovered = $bindable(), i, lastItem } = $props();

	let activeClass = $derived(
		active === link.slug
			? 'font-bold underline decoration-home-orange underline-offset-4'
			: 'hover:scale-110',
	);

	let hoveredClass = $derived(hovered && hovered !== i ? 'sm:scale-90 sm:opacity-75' : '');
</script>

<li
	class={`${activeClass}  ${hoveredClass}`}
	onmouseenter={() => (hovered = i)}
	onmouseleave={() => (hovered = 0)}
>
	<a href={link.slug} onclick={() => (active = link.slug)}>
		{link.label}
	</a>
</li>

{#if !lastItem}
	<span class="hidden sm:block">|</span>
{/if}
