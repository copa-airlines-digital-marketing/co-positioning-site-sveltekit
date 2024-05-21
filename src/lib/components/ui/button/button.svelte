<script lang="ts">
	import { Button } from 'bits-ui';
	import { type Events, type Props, buttonVariants } from '.';
	import { cn } from '$lib/utils';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export { className as class };
</script>

<Button.Root
	class={cn(buttonVariants({ variant, size, className }))}
	type="button"
	{...$$restProps}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
>
	<slot />
</Button.Root>
