<script lang="ts">
	import { getEmblaContext } from './context.js';
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';
	type Dots = {
		direction?: 'ltr' | 'rtl' | 'ttb' | 'btt';
	};

	type $$Props = HTMLAttributes<HTMLDivElement> & Dots;

	let className: $$Props['class'] = undefined;
	export let direction: $$Props['direction'] = 'ttb';
	export { className as class };

	const { scrollSnapList, selectedIndex, handleKeyDown } = getEmblaContext('<Carousel.Next/>');
</script>

<ul
	role="tablist"
	class={cn(
		'flex',
		className,
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
			<slot index={i} selected={$selectedIndex} />
		</li>
	{/each}
</ul>
