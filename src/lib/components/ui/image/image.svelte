<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import type { ImageToolsPictureWithMediaQuery } from '.';

	type EnhancedImage = {
		image: ImageToolsPictureWithMediaQuery;
	};

	type $$Props = HTMLImgAttributes & EnhancedImage;

	let className: $$Props['class'] = undefined;
	export let image: $$Props['image'];
	export let alt: $$Props['alt'] = '';
	export { className as class };

	let firstImage = image[Object.keys(image)[0]];
</script>

<picture>
	{#each Object.keys(image) as mediaQuery}
		{@const query = image[mediaQuery]}
		{#each Object.keys(query.sources) as format}
			{#if Object.keys(image).length === 1}
				<source srcset={query.sources[format]} type="image/{format}" />
			{:else}
				<source media={mediaQuery} srcset={query.sources[format]} type="image/{format}" />
			{/if}
		{/each}
	{/each}
	<img
		src={firstImage.img.src}
		{alt}
		width={firstImage.img.w}
		height={firstImage.img.h}
		class={className}
	/>
</picture>
