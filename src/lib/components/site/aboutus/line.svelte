<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;

	export { className as class };
</script>

<div
	class={cn(
		'h-full w-px bg-grey-300 opacity-50 place-self-center row-start-1 col-start-1',
		className
	)}
></div>
