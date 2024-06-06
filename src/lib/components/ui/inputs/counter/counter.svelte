<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import Button from '../../button/button.svelte';
	import { Input } from '../base';
	import { OutlineMinus, OutlineAdd } from '$icons';

	type $$Props = HTMLInputAttributes;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class={cn('flex gap-4 place-content-center')}>
	<Button>
		<OutlineMinus class="size-6" />
		<slot name="decrease" />
	</Button>
	<Input readonly class="border-none" {...$$restProps} />
	<Button>
		<OutlineAdd class="size-6" />
		<slot name="increase" />
	</Button>
</div>
