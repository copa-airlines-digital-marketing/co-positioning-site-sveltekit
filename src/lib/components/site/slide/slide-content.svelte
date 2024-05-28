<script>
	import { cn } from '$lib/utils';

	let className = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'relative col-span-full row-start-2 container mx-auto w-full grid grid-cols-12 grid-rows-12',
		className
	)}
>
	<slot />
</div>
