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

<div class={cn('container-grid grid-rows-[auto_auto_1fr] h-full', className)}>
	<div class="h-5 mt-roomy row-start-1"></div>
	<div class="h-6 my-minimal row-start-2"></div>
	<div class="col-span-full row-start-1 row-span-full bg-gray-400">
		<EnhancedImage.Root {image} class="absolute left-0 top-0 h-full w-full object-cover" alt=""
		></EnhancedImage.Root>
	</div>
	<slot />
</div>
