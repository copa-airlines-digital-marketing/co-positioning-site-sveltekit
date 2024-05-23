<script>
	import { cn } from '$lib/utils';

	let className = undefined;
	export { className as class };
</script>

<div class="relative col-span-full row-span-full container mx-auto grid grid-cols-12 grid-rows-12">
	<div class={cn('h-full flex flex-col justify-start items-start', className)}>
		<slot />
	</div>
</div>
