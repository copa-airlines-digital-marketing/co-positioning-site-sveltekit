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

	const { canScrollPrev, scrollPrev, handleKeyDown } = getEmblaContext('<Carousel.Previous/>');
</script>

<Button
	{variant}
	{size}
	class={cn('touch-manipulation', className)}
	disabled={!$canScrollPrev}
	on:click={scrollPrev}
	on:keydown={handleKeyDown}
	{...$$restProps}
>
	<slot />
</Button>
