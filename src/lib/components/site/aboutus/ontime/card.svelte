<script lang="ts">
	import type { ImageToolsPictureWithMediaQuery } from '$components/ui/image';
	import { BaselineFormatQuote } from '$icons';
	import * as EnhancedImage from '$lib/components/ui/image';

	type Prize = {
		title: string;
		cite: string;
		logo: ImageToolsPictureWithMediaQuery;
	};

	export let prizes: Prize[];
</script>

<ul>
	{#each prizes as prize}
		{@const { title, cite, logo } = prize}
		<li>
			<BaselineFormatQuote class="size-10 text-secondary" />
			<blockquote {cite}>
				{title}
			</blockquote>
			<EnhancedImage.Root image={logo}></EnhancedImage.Root>
		</li>
	{/each}
</ul>
