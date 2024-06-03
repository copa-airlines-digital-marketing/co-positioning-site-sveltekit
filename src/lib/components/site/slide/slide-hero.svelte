<script lang="ts">
	import * as EnhancedImage from '$lib/components/ui/image';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		image: EnhancedImage.ImageToolsPictureWithMediaQuery;
		loading?: HTMLImgAttributes['loading'];
		position?: 'center' | 'top';
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let image: $$Props['image'];
	export let loading: $$Props['loading'] = 'lazy';
	export let position: $$Props['position'] = 'center';
</script>

<div class={cn('grid grid-cols-1 grid-rows-[auto_1fr]', className)}>
	<div class="h-11 mt-roomy row-start-1"></div>
	<div class="col-span-full row-span-full relative">
		<EnhancedImage.Root
			{loading}
			{image}
			class={cn(
				'absolute left-0 top-0 h-full w-full object-cover object-top',
				position === 'center' ? 'object-center' : 'object-top'
			)}
			alt=""
		></EnhancedImage.Root>
	</div>
	<slot />
</div>
