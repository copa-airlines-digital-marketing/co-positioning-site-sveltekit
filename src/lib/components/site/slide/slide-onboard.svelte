<script lang="ts">
	import type { DirectusImage } from '$components/ui/image/image.svelte';
	import * as EnhancedImage from '$lib/components/ui/image';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		image: DirectusImage;
		loading?: HTMLImgAttributes['loading'];
		position?: HTMLImgAttributes['class'];
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let image: $$Props['image'];
	export let loading: $$Props['loading'] = 'lazy';
	export let position: $$Props['class'] = 'center';
</script>

<div class={cn('container-grid grid-rows-[auto_1fr_auto] h-full relative', className)}>
	<div class="h-5 mt-roomy row-start-1"></div>
	<div class="col-span-full row-span-full">
		<EnhancedImage.Root
			{loading}
			image={image.image}
			queries={image.queries}
			class={cn('absolute left-0 top-0 h-full w-full object-cover', position)}
			alt=""
		></EnhancedImage.Root>
	</div>
	<slot />
	<div class="mb-roomy row-start-3 h-10"></div>
</div>
