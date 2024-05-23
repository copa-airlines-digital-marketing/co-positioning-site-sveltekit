<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & { image: string };

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let image: string;
</script>

<div class={cn('grid grid-cols-1 grid-rows-1', className)}>
	<div class="col-span-full row-span-full relative">
		<enhanced:img src={image} class="absolute left-0 top-0 h-full w-full object-cover" alt=""
		></enhanced:img>
	</div>

	<slot />
</div>
