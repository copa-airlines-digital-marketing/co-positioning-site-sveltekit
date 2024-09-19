<script lang="ts">
	import { Heading } from '$lib/components/ui/heading';
	import * as Carousel from '$lib/components/ui/carrusel';
	import * as Slide from '../slide';
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
	import type { DirectusImage } from '$components/ui/image/image.svelte';

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});

	const images: Record<string, DirectusImage> = {
		refrigerio: {
			image: '348351ea-9444-4658-8384-aa305851aae8',
			queries: [
				[
					'(orientation: landscape)',
					'560561f3-e3eb-4352-90f5-d0343cfdf8ff',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portait) and (min-width: 1367px)',
					'560561f3-e3eb-4352-90f5-d0343cfdf8ff',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portrait)',
					'348351ea-9444-4658-8384-aa305851aae8',
					{ heights: ['2160', '1600', '1080', '900', '768'] }
				]
			]
		},
		equipaje: {
			image: '0f54aedc-b185-40a1-9f5f-9366c994c591',
			queries: [
				[
					'(orientation: landscape)',
					'45f3f88b-9b6f-4782-a71a-6b10a1c1b408',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portait) and (min-width: 1367px)',
					'45f3f88b-9b6f-4782-a71a-6b10a1c1b408',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portrait)',
					'0f54aedc-b185-40a1-9f5f-9366c994c591',
					{ heights: ['2160', '1600', '1080', '900', '768'] }
				]
			]
		},
		comodidad: {
			image: 'd70ed6f3-f680-4f07-a685-42c9ef053522',
			queries: [
				[
					'(orientation: landscape)',
					'a538a6ec-3d2c-4225-b1ca-b424989e652b',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portait) and (min-width: 1367px)',
					'a538a6ec-3d2c-4225-b1ca-b424989e652b',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portrait)',
					'd70ed6f3-f680-4f07-a685-42c9ef053522',
					{ heights: ['2160', '1600', '1080', '900', '768'] }
				]
			]
		},
		ejecutiva: {
			image: 'd6a95e9b-efc8-4f4b-b945-cd241a49c611',
			queries: [
				[
					'(orientation: landscape)',
					'6bde6b4e-58cb-4b96-b260-501fe14ee6c6',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portait) and (min-width: 1367px)',
					'6bde6b4e-58cb-4b96-b260-501fe14ee6c6',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portrait)',
					'd6a95e9b-efc8-4f4b-b945-cd241a49c611',
					{ heights: ['2160', '1600', '1080', '900', '768'] }
				]
			]
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
					<Slide.OnBoard image={images['refrigerio']} position="object-top">
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
								<p class="text-xs sm:max-w-sm">
									*El servicio de alimentos y bebidas ofrecido a bordo varía dependiendo del
									destino, la duración y el horario del vuelo.
								</p>
								<Button
									class="bg-secondary border-secondary mt-4"
									size="slim"
									href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-a-bordo/comida-a-bordo/"
									target="_blank">Conoce más</Button
								>
							</div>
						</Slide.Content>
					</Slide.OnBoard>
					<div></div>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.OnBoard image={images['equipaje']}>
						<Slide.Overlay class="bg-gradient-to-t from-40% landscape:bg-gradient-to-br" />
						<Slide.Content class="row-start-2">
							<div
								class="row-span-full col-span-full text-common-white mb-roomy flex flex-col justify-end items-start landscape:justify-start"
							>
								<Heading variant="displayNormal" tag="h3" class="text-common-white max-w-md">
									Equipaje de mano <span class="text-secondary-faded">siempre</span> incluido
								</Heading>
								<p class="my-2 max-w-prose sm:max-w-sm">
									Tu equipaje de mano y un articulo personal, siempre están incluidos en todas
									nuestras rutas y tarifas.
								</p>
								<Button
									class="bg-secondary border-secondary mt-4"
									size="slim"
									href="https://www.copaair.com/es-co/informacion-al-viajar/informacion-de-equipaje/"
									target="_blank">Conoce más</Button
								>
							</div>
						</Slide.Content>
					</Slide.OnBoard>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.OnBoard image={images['comodidad']} position="object-bottom landscape:object-top">
						<Slide.Overlay
							class="bg-gradient-to-t from-40% to-70% md:bg-gradient-to-tr md:from-40% md:to-50%"
						/>
						<Slide.Content class="row-start-2">
							<div
								class="row-span-full col-span-full text-common-white flex flex-col items-start justify-end mb-roomy"
							>
								<Heading variant="displayNormal" tag="h3" class="text-common-white max-w-md">
									Asientos <span class="text-secondary-faded">reclinables</span> y
									<span class="text-secondary-faded">buen espacio</span> para tus piernas
								</Heading>
								<p class="my-2 max-w-sm">
									En todos nuestros aviones encontrarás asientos reclinables y con buen espacio para
									tus piernas para una experiencia de viaje cómoda.
								</p>
								<Button
									class="bg-secondary border-secondary mt-4"
									size="slim"
									href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-a-bordo/"
									target="_blank">Conoce más</Button
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
									Clase ejecutiva en <span class="text-secondary-faded">todos</span> nuestros vuelos
								</Heading>
								<p class="my-2 max-w-sm">
									Disfruta de la exclusividad y comodidad de Clase Ejecutiva en todas nuestras
									rutas.
								</p>
								<Button
									class="bg-secondary border-secondary mt-4"
									size="slim"
									href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-a-bordo/"
									target="_blank">Conoce más</Button
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
							class={cn('absolute left-0 bottom-0 h-0.5 w-full transition-colors bg-secondary')}
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
