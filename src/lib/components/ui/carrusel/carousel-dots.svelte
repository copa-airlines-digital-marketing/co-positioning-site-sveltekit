<script lang="ts">
	import { getEmblaContext } from './context.js';
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import Button from '../button/button.svelte';
	import type { Props } from '../button/index.js';

	type Dots = {
		getTextFn?: (index: number) => string;
		jump?: boolean | undefined;
		direction?: 'ltr' | 'rtl' | 'ttb' | 'btt';
	};

	type $$Props = HTMLAttributes<HTMLDivElement> & Dots & Props;

	const defaultTextFn = (index: number) => ('0' + index).slice(-2);

	let className: $$Props['class'] = undefined;
	export let getTextFn: $$Props['getTextFn'] = defaultTextFn;
	export let jump: $$Props['jump'] = undefined;
	export let direction: $$Props['direction'] = 'ttb';
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export { className as class };

	const { scrollSnapList, scrollTo, selectedIndex, handleKeyDown } =
		getEmblaContext('<Carousel.Next/>');

	const goToSlide = (index: number) => () => scrollTo(index, jump);
</script>

<ul
	role="tablist"
	class={cn(
		'flex',
		direction === 'ttb'
			? 'flex-col'
			: direction === 'btt'
				? 'flex-col-reverse'
				: direction === 'rtl'
					? 'flex-row-reverse'
					: 'flex-row'
	)}
	on:keydown={handleKeyDown}
>
	{#each $scrollSnapList as slide, i}
		<li role="tab">
			<Button
				on:click={goToSlide(i)}
				{variant}
				{size}
				class={cn(
					'transition-opacity',
					$selectedIndex === i ? 'opacity-100' : 'opacity-20',
					className
				)}
			>
				{getTextFn ? getTextFn(i + 1) : defaultTextFn}
				<slot />
			</Button>
		</li>
	{/each}
</ul>
