<script lang="ts">
	import { getEmblaContext } from './context.js';
	import { cn } from '$lib/utils.js';
	import { Button, type Props, type Events } from '$lib/components/ui/button';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export { className as class };

	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';

	const { canScrollNext, scrollNext, handleKeyDown } = getEmblaContext('<Carousel.Next/>');
</script>

<Button
	{variant}
	{size}
	class={cn('touch-manipulation', className)}
	disabled={!$canScrollNext}
	on:click={scrollNext}
	on:keydown={handleKeyDown}
	{...$$restProps}
>
	<slot />
</Button>
