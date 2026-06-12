<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;

	export { className as class };
</script>

<div class={cn('col-start-2 row-span-1 relative grid grid-cols-[32px_1fr] gap-2', className)}>
	<slot />
</div>
