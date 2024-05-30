<script lang="ts">
	import { Heading } from '$lib/components/ui/heading';
	import * as Carousel from '$lib/components/ui/carrusel';
	import * as Slide from '../slide';
	import * as EnhancedImage from '$lib/components/ui/image';
	import {
		BaselinePlayArrow,
		OutlineArrowBack,
		OutlineArrowForward,
		OutlinePause
	} from '$lib/components/icons';
	import { cn } from '$lib/utils';
	import { crossfade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import Autoplay from 'embla-carousel-autoplay';
	import { Button } from '$lib/components/ui/button';
	import sample from '$lib/assets/sample.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import refrigerio from '$lib/assets/refrigerio-a-bordo-de-aeronave.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import refrigerioPortrait from '$lib/assets/refrigerio-a-bordo-de-aeronave-portrait.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import equipaje from '$lib/assets/carry-on-sobre-asientos.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import equipajePortrait from '$lib/assets/carry-on-sobre-asientos-portrait.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import comodidad from '$lib/assets/persona-sentada-sonriendo-clase-economica.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import comodidadPortrait from '$lib/assets/persona-sentada-sonriendo-clase-economica-portrait.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import ejecutiva from '$lib/assets/disfrutando-clase-ejecutiva.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import ejecutivaPortrait from '$lib/assets/disfrutando-clase-ejecutiva-portrait.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});

	const images: Record<string, EnhancedImage.ImageToolsPictureWithMediaQuery> = {
		refrigerio: {
			'(orientation: portrait)': refrigerioPortrait,
			'(orientation: portait) and (min-width: 1367px)': refrigerio,
			'(orientation: landscape)': refrigerio
		},
		equipaje: {
			'(orientation: portrait)': equipajePortrait,
			'(orientation: portait) and (min-width: 1367px)': equipaje,
			'(orientation: landscape)': equipaje
		},
		comodidad: {
			'(orientation: portrait)': comodidadPortrait,
			'(orientation: portait) and (min-width: 1367px)': comodidad,
			'(orientation: landscape)': comodidad
		},
		ejecutiva: {
			'(orientation: portrait)': ejecutivaPortrait,
			'(orientation: portait) and (min-width: 1367px)': ejecutiva,
			'(orientation: landscape)': ejecutiva
		}
	} as const;
</script>

<div
	id="a-bordo"
	class="w-full portrait:h-[calc(100svh-64px)] portrait:sm:min-h-svh landscape:min-h-svh bg-gradient-to-b from-primary to-primary-ultradark container-grid grid-rows-[auto_1fr_auto] relative"
>
	<Heading
		variant="displayTiny"
		tag="h2"
		class="text-sm lg:text-sm row-start-1 mt-roomy col-start-2 text-common-white z-10"
		>Servicio a Bordo</Heading
	>
	<Carousel.Root
		class="col-span-full row-span-full grid-cols-subgrid grid-rows-subgrid grid"
		let:playingState
		let:selected
		opts={{ duration: 40 }}
		plugins={[
			Autoplay({
				delay: 10000,
				playOnInit: false,
				stopOnInteraction: true
			})
		]}
	>
		<Carousel.Content class="col-span-full row-span-full z-0">
			<Carousel.Container class="h-full">
				<Carousel.Item>
					<Slide.OnBoard image={images['refrigerio']}>
						<Slide.Overlay
							class="bg-gradient-to-t from-50% sm:from-35% sm:bg-gradient-to-r portrait:sm:bg-gradient-to-tr portrait:sm:from-25% md:bg-gradient-to-br md:from-20%"
						/>
						<Slide.Content class="row-start-2">
							<div
								class="row-span-full col-span-full text-common-white flex flex-col justify-end items-start md:justify-start mb-roomy"
							>
								<Heading
									variant="displayNormal"
									tag="h3"
									class="text-common-white sm:max-w-xs md:max-w-md"
								>
									Refrigerio <span class="text-secondary-faded">siempre</span> incluido
								</Heading>
								<p class="my-2 max-w-prose sm:max-w-xs">
									Ofrecemos servicio a bordo sin costo en todos nuestros vuelos sin importar la
									tarifa o ruta que escojas.
								</p>
								<p class="my-2 text-xs sm:max-w-sm">
									*El servicio de alimentos y bebidas ofrecido a bordo varía dependiendo del
									destino, la duración y el horario del vuelo.
								</p>
								<Button
									class="bg-secondary border-secondary mt-4"
									href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-a-bordo/comida-a-bordo/"
									>Conoce más</Button
								>
							</div>
						</Slide.Content>
					</Slide.OnBoard>
					<div></div>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.OnBoard image={images['equipaje']}>
						<Slide.Overlay class="bg-gradient-to-t landscape:bg-gradient-to-br" />
						<Slide.Content class="row-start-2">
							<div
								class="row-span-full col-span-full text-common-white mb-roomy flex flex-col justify-end items-start landscape:justify-start"
							>
								<Heading variant="displayNormal" tag="h3" class="text-common-white max-w-md">
									Equipaje de mano <span class="text-secondary-faded">siempre</span> incluido
								</Heading>
								<p class="my-2 max-w-prose sm:max-w-sm">
									Tu equipaje de mano y un articulo personal, siempre está incluido en todas
									nuestras rutas y tarifas.
								</p>
								<Button
									class="bg-secondary border-secondary mt-4"
									href="https://www.copaair.com/es-co/informacion-al-viajar/informacion-de-equipaje/"
									>Conoce más</Button
								>
							</div>
						</Slide.Content>
					</Slide.OnBoard>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.OnBoard image={images['comodidad']}>
						<Slide.Overlay class="bg-gradient-to-t from-40% sm:bg-gradient-to-tr" />
						<Slide.Content class="row-start-2">
							<div
								class="row-span-full col-span-full text-common-white flex flex-col items-start justify-end mb-roomy"
							>
								<Heading variant="displayNormal" tag="h3" class="text-common-white max-w-md">
									Asientos <span class="text-secondary-faded">reclinables</span> y buen
									<span class="text-secondary-faded">espacio</span> para tus piernas
								</Heading>
								<p class="my-2 max-w-sm">
									En todos nuestros aviones encontrarás asientos reclinables y con buen espacio para
									tus piernas para una experiencia de viaje cómoda.
								</p>
								<Button
									class="bg-secondary border-secondary mt-4"
									href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-a-bordo/"
									>Conoce más</Button
								>
							</div>
						</Slide.Content>
					</Slide.OnBoard>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.OnBoard image={images['ejecutiva']}>
						<Slide.Overlay class="from-20%" />
						<Slide.Content class="row-start-2">
							<div
								class="row-span-full col-span-full mb-roomy text-common-white flex flex-col justify-end items-start"
							>
								<Heading variant="displayNormal" tag="h3" class="text-common-white max-w-md">
									Clase Ejecutiva en <span class="text-secondary-faded">todos</span> nuestros vuelos
								</Heading>
								<p class="my-2 max-w-sm">
									Disfruta de la exclusividad y comodidad de Clase Ejecutiva en todas nuestras
									rutas.
								</p>
								<Button
									class="bg-secondary border-secondary mt-4"
									href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-a-bordo/"
									>Conoce más</Button
								>
							</div>
						</Slide.Content>
					</Slide.OnBoard>
				</Carousel.Item>
			</Carousel.Container>
		</Carousel.Content>
		<div
			class="mb-roomy col-start-2 row-start-3 text-common-white flex items-center gap-2 md:gap-4 z-10"
		>
			<div class="flex gap-1 items-center">
				<Carousel.Previous variant="invert" class="border-0" title="Anterior">
					<OutlineArrowBack />
				</Carousel.Previous>
				<Carousel.Next variant="invert" class="border-0" title="Siguiente">
					<OutlineArrowForward />
				</Carousel.Next>
			</div>
			<Carousel.Dots direction="ltr" let:index class="gap-1">
				<Carousel.Dot
					slide={index}
					class="py-1 px-3 text-secondary relative outline-none hover:bg-secondary/60 active:bg-secondary/60 focus-visible:bg-secondary/60 transition-colors"
				>
					<span class={cn('text-sm transition-colors text-common-white')}>
						{('0' + (index + 1)).slice(-2)}
					</span>
					{#if selected === index}
						<span
							in:send={{ key: 'trigger' }}
							out:receive={{ key: 'trigger' }}
							class={cn(
								'absolute left-0 bottom-0 h-0.5 w-full transition-colors',
								selected === 1 ? 'bg-primary landscape:md:bg-secondary' : 'bg-secondary'
							)}
						></span>
					{/if}
				</Carousel.Dot>
			</Carousel.Dots>
			<Carousel.PlayPause
				variant="invert"
				class="border-0"
				title={playingState === 'paused' ? 'Reproducir' : 'Detener'}
			>
				{#if playingState === 'paused'}
					<BaselinePlayArrow />
				{:else}
					<OutlinePause />
				{/if}
			</Carousel.PlayPause>
		</div>
	</Carousel.Root>
</div>
