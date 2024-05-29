<script lang="ts">
	import { cn } from '$lib/utils';
	import { Button, type Button as ButtonPrimitive } from 'bits-ui';
	import { getEmblaContext } from './context';

	type CarouselDot = {
		slide: number;
		jump?: boolean | undefined;
	};

	type $$Props = ButtonPrimitive.Props & CarouselDot;
	type $$Events = ButtonPrimitive.Events;

	let className: $$Props['class'] = undefined;
	export let slide: $$Props['slide'];
	export let jump: $$Props['jump'] = false;
	export { className as class };

	const { scrollTo, selectedIndex, autoPlayReset } = getEmblaContext('<Carousel.Next/>');

	const goToSlide = (index: number) => () => {
		scrollTo(index, jump);
		autoPlayReset();
	};
</script>

<Button.Root
	class={cn('touch-manipulation', className)}
	on:click={goToSlide(slide)}
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	aria-selected={$selectedIndex === slide}
>
	<slot />
</Button.Root>
