<script lang="ts">
	import { Button } from 'bits-ui';
	import { type Events, type Props, buttonVariants } from '.';
	import { cn } from '$lib/utils';

	type $$Props = Props;
	type $$Events = Events;

	let className: string | undefined = undefined;
	let target: $$Props['target'] = undefined;
	let rel: $$Props['rel'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export { className as class };
	export { target, rel };

	$: normalizedTarget = target === 'blank' ? '_blank' : target;
	$: normalizedRel =
		normalizedTarget === '_blank'
			? rel
				? rel
				: 'noopener noreferrer'
			: rel;
	$: normalizedProps = { ...$$restProps, target: normalizedTarget, rel: normalizedRel };
</script>

<Button.Root
	class={cn(buttonVariants({ variant, size, className }))}
	type="button"
	{...normalizedProps}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
>
	<slot />
</Button.Root>
