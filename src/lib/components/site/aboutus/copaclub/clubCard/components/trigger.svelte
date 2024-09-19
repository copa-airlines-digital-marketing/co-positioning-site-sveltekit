<script lang="ts">
	import { Drawer } from 'vaul-svelte';
	import { Heading } from '$components/ui/heading';
	import { OutlineInfo, OutlineLocationOn } from '$icons';
	import * as EnhancedImage from '$lib/components/ui/image';
	import type { DirectusImage } from '$components/ui/image/image.svelte';

	export let image: DirectusImage;
</script>

<Drawer.Trigger
	class="bg-backgound-paper shadow-md h-full w-full group hover:bg-primary transition-colors flex flex-col"
>
	<span class="block w-full bg-grey-100">
		<EnhancedImage.Root
			loading="lazy"
			image={image.image}
			queries={image.queries}
			class="aspect-[4_/_2] object-cover"
			alt=""
		/>
	</span>
	<span
		class="text-primary-light flex justify-between items-center py-tiny px-minimal group-hover:text-common-white transition-colors w-full flex-grow"
	>
		<span class="flex">
			<OutlineLocationOn class="size-6" />
			<Heading
				variant="h4"
				tag="h4"
				class="text-left text-primary-light group-hover:text-common-white transition-colors"
			>
				<slot />
			</Heading>
		</span>
		<OutlineInfo class="size-6" />
	</span>
</Drawer.Trigger>
