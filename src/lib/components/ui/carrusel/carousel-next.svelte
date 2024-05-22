<script lang="ts">
	import type { VariantProps } from 'tailwind-variants';
	import { getEmblaContext } from './context.js';
	import { cn } from '$lib/utils.js';
	import { Button, type Props, type buttonVariants } from '$lib/components/ui/button/index.js';

	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let variant: VariantProps<typeof buttonVariants>['variant'] = 'default';
	export let size: VariantProps<typeof buttonVariants>['size'] = 'default';
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
	<span class="sr-only">Siguiente</span>
</Button>
