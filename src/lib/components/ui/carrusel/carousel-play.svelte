<script lang="ts">
	import { Button, type Props, type Events } from '$lib/components/ui/button';
	import { getEmblaContext } from './context';
	import { cn } from '$lib/utils';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;

	const { togglePlayStop } = getEmblaContext('<Carousel.Next/>');

	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export { className as class };
</script>

<Button
	{variant}
	{size}
	class={cn('touch-manipulation', className)}
	on:click={togglePlayStop}
	{...$$restProps}
>
	<slot />
</Button>
