<script>
	import { cn } from '$lib/utils';

	let className = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'col-span-full row-span-full bg-gradient-to-tr from-primary-ultradark/80 to-60% to-transparent relative',
		className
	)}
	{...$$restProps}
></div>
