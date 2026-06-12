<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { getEmblaContext } from './context.js';
	import { cn } from '$lib/utils.js';

	type $$Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & { class?: string | null };

	let className: string | undefined | null = undefined;
	export { className as class };

	const { orientation } = getEmblaContext('<Carousel.Content/>');
</script>

<div
	class={cn('flex', $orientation === 'horizontal' ? 'flex-row' : 'flex-col', className)}
	data-embla-container=""
	{...$$restProps}
>
	<slot />
</div>
