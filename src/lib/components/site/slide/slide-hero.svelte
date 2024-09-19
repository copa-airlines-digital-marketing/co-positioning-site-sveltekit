<script lang="ts">
	import type { DirectusImage } from '$components/ui/image/image.svelte';
	import * as EnhancedImage from '$lib/components/ui/image';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		image: DirectusImage;
		loading?: HTMLImgAttributes['loading'];
		position?: HTMLAttributes<HTMLDivElement>['class'];
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let image: $$Props['image'];
	export let loading: $$Props['loading'] = 'lazy';
	export let position: $$Props['class'] = 'object-center';
	export let id: $$Props['id'];
</script>

<div class={cn('grid grid-cols-1 grid-rows-[auto_1fr_auto]', className)}>
	<div class="h-11 mt-roomy row-start-1"></div>
	<div class="col-span-full row-span-full relative">
		<EnhancedImage.Root
			{loading}
			{id}
			image={image.image}
			queries={image.queries}
			class={cn('absolute left-0 top-0 h-full w-full object-cover', position)}
			alt=""
		></EnhancedImage.Root>
	</div>
	<slot />
	<div class="mb-roomy row-start-3 col-start-2 h-16 hidden md:block"></div>
</div>
