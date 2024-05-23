<script lang="ts">
	import { type Props, headingVariants } from '.';
	import { cn } from '$lib/utils';

	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'displayBig';
	export let tag: $$Props['tag'] = 'h2';
	export { className as class };
</script>

<svelte:element this={tag} class={cn(headingVariants({ variant, className }))} {...$$restProps}>
	<slot />
</svelte:element>
