<script lang="ts">
	import { Button, type Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = ButtonPrimitive.Props;
	type $$Events = ButtonPrimitive.Events;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<Button.Root
	type="button"
	class={cn(className, 'my-minimal')}
	{...$$restProps}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
>
	Story
</Button.Root>
