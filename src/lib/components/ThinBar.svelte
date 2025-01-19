<script lang="ts">
	export let variant: 'primary' | 'secondary' = 'primary';

	const color = variant === 'primary' ? 'bg-home-purple' : 'bg-home-orange';
</script>

<hr class={`${color}h-1`} />
