<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;

	export { className as class };
</script>

<div
	class={cn(
		'row-start-1 col-start-1 mt-1 lg:mt-2 bg-common-white size-4 justify-self-center z-10',
		className
	)}
></div>
