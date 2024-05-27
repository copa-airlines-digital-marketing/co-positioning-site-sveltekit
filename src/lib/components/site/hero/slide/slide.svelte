<script lang="ts">
	import * as EnhancedImage from '$lib/components/ui/image';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		image: EnhancedImage.ImageToolsPictureWithMediaQuery;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let image: $$Props['image'];
</script>

<div class={cn('grid grid-cols-1 grid-rows-[auto_1fr]', className)}>
	<div class="h-11 my-roomy row-start-1"></div>
	<div class="col-span-full row-span-full relative">
		<EnhancedImage.Root {image} class="absolute left-0 top-0 h-full w-full object-cover" alt=""
		></EnhancedImage.Root>
	</div>

	<slot />
</div>
