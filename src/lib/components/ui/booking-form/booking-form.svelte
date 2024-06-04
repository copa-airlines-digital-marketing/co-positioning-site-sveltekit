<script lang="ts">
	import type { HTMLFormAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	import { Button } from '../button';
	import { OutlineArrowForward, OutlineSearch, PictogramStopover } from '$lib/components/icons';

	type $$Props = HTMLFormAttributes;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<form
	method="get"
	action="https://shopping.copaair.com/"
	target="_blank"
	class={cn('bg-common-white shadow-lg', className)}
	{...$$restProps}
>
	<!-- Optional Inputs -->
	<div class="px-8 py-4 flex items-center justify-between"></div>
	<div class="h-px w-full opacity-50 bg-grey-300 caret-transparent"></div>
	<!-- Main Inputs  -->
	<div class="p-6"></div>
	<!-- Other Options -->
	<div class="px-6 flex flex-col gap-2 place-items-center">
		<Button
			href="https://shopping.copaair.com/booking-panel?roundtrip=true&area1=&area2=&date1=&date2=&flexible_dates_v2=false&adults=1&children=0&infants=0&isMiles=false&advanced_air_search=false&stopover=false&sf=co&langid=es"
			target="_blank"
			class="font-semibold"
			variant="transparent"
		>
			Búsqueda avanzada
			<OutlineArrowForward class="size-5" />
		</Button>
		<Button
			href="https://shopping.copaair.com/booking-panel?roundtrip=false&flexible_dates_v2=false&adults=1&children=0&infants=0&isMiles=false&advanced_air_search=true&stopover=true&sf=co&langid=es"
			target="_blank"
			variant="transparent"
			size="fancySmall"
			class="place-items-center font-semibold"
		>
			<PictogramStopover class="size-8" />
			Panamá Stopover
			<OutlineArrowForward class="size-5" />
		</Button>
	</div>
	<div class="px-6 py-4">
		<Button type="submit" class="w-full place-content-center">
			<OutlineSearch class="size-5" />
			Buscar
		</Button>
	</div>
	<input type="hidden" name="" />
</form>
