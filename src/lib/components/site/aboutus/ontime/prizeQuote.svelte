<script lang="ts">
	import type { DirectusImage } from '$components/ui/image/image.svelte';
	import { BaselineFormatQuote } from '$icons';
	import * as EnhancedImage from '$lib/components/ui/image';

	export let cite: string;
	export let logo: DirectusImage;
</script>

<div class="mb-6 last:mb-0 md:flex md:items-end">
	<BaselineFormatQuote class="size-8 text-secondary md:mr-2" />
	<blockquote {cite} class="text-sm md:mr-6">
		<slot />
	</blockquote>
	{#if logo}
		<EnhancedImage.Root
			image={logo.image}
			queries={logo.queries}
			class="max-w-24 mt-2 max-h-7 w-auto"
		></EnhancedImage.Root>
	{/if}
</div>
