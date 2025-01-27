<script context="module" lang="ts">
	type DirectusImageQuery = {
		heights?: string[] | undefined;
		widths?: string[] | undefined;
	};

	export type DirectusImage = {
		image: string;
		queries: [string, string, DirectusImageQuery][];
	};

	export const getDirectusImage = (id: string) => `https://cm-marketing.directus.app/assets/${id}`;
</script>

<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	type $$Props = HTMLImgAttributes & DirectusImage;

	let className: $$Props['class'] = undefined;
	export let image: $$Props['image'];
	export let queries: $$Props['queries'];
	export let alt: $$Props['alt'] = '';
	export let loading: $$Props['loading'] = 'lazy';
	export { className as class };

	const src = getDirectusImage(image);
</script>

<picture>
	{#each queries as [media, idByQuery, query]}
		{@const { widths, heights } = query}
		{@const heightsToQuery = widths && widths.map((v) => '&height=' + v)}
		{@const widthToQuery = heights && heights.map((v) => '&width=' + v)}
		{@const sizes = widthToQuery || heightsToQuery || []}
		{#each sizes as s, i}
			{@const currentWidth = widthToQuery?.[i]}
			{@const currentHeight = heightsToQuery?.[i]}
			{@const srcset = `${getDirectusImage(idByQuery)}${currentWidth ?? ''}${currentHeight ?? ''}`}
			{#if media === ''}
				<source {srcset} />
			{:else}
				<source {media} {srcset} />
			{/if}
		{/each}
	{/each}
	<img {src} {alt} class={className} {loading} />
</picture>
