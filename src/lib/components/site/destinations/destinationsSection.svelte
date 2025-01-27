<script lang="ts">
	import { Heading } from '$lib/components/ui/heading';
	import * as Carousel from '$lib/components/ui/carrusel';
	import * as Slide from '../slide';
	import { Button } from '$lib/components/ui/button';
	import type { DirectusImage } from '$components/ui/image/image.svelte';

	const images: Record<string, DirectusImage> = {
		hacia: {
			image: '5cda5e9b-9a76-4b5f-8d62-9b5c84de6448',
			queries: [
				[
					'(orientation: landscape)',
					'5089daac-56e1-4fbd-b2cf-9d5091d60092',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portait) and (min-width: 1367px)',
					'5089daac-56e1-4fbd-b2cf-9d5091d60092',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portrait)',
					'5cda5e9b-9a76-4b5f-8d62-9b5c84de6448',
					{ heights: ['2160', '1600', '1080', '900', '768'] }
				]
			]
		},
		desde: {
			image: '247e931c-3a65-4a7d-954d-ca24a7421c78',
			queries: [
				[
					'(orientation: landscape)',
					'808c634a-84f3-48e4-9737-f095aefdb4ba',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portait) and (min-width: 1367px)',
					'808c634a-84f3-48e4-9737-f095aefdb4ba',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portrait)',
					'247e931c-3a65-4a7d-954d-ca24a7421c78',
					{ heights: ['2160', '1600', '1080', '900', '768'] }
				]
			]
		}
	} as const;
</script>

<div
	id="destinos"
	class="w-full portrait:h-[calc(100svh-64px)] portrait:sm:min-h-svh landscape:min-h-svh bg-gradient-to-b from-primary to-primary-ultradark container-grid grid-rows-[auto_auto_1fr] relative"
>
	<Heading
		variant="displayTiny"
		tag="h2"
		class="text-sm lg:text-sm row-start-1 mt-roomy col-start-2 text-common-white z-10"
		>Nuestros Destinos</Heading
	>
	<Carousel.Root
		class="col-span-full row-span-full grid-cols-subgrid grid-rows-subgrid grid"
		opts={{ duration: 40 }}
	>
		<div
			class="col-start-2 row-start-2 text-common-white flex items-center gap-2 md:gap-4 relative justify-between z-10"
		>
			<Carousel.Previous
				variant="invert"
				class="border-0 items-center text-left px-0"
				title="Anterior"
			>
				Desde Colombia
			</Carousel.Previous>
			<Carousel.Next
				variant="invert"
				class="border-0 items-center text-right px-0"
				title="Siguiente"
			>
				A Tu Próximo Destino
			</Carousel.Next>
		</div>
		<Carousel.Content class="col-span-full row-span-full z-0">
			<Carousel.Container class="h-full">
				<Carousel.Item>
					<Slide.About image={images['desde']} class="relative mb-roomy min-h-[480px]">
						<Slide.Content class="row-start-3">
							<div
								class="row-span-full col-span-full text-common-white flex flex-col justify-end md:justify-center items-start mb-roomy"
							>
								<Heading
									variant="displayNormal"
									tag="h3"
									class="text-common-white max-w-sm landscape:max-w-sm"
								>
									Conecta <span class="text-common-white sm:text-secondary-faded"
										>desde 11 ciudades</span
									> en Colombia
								</Heading>
								<p class="my-2 max-w-prose sm:max-w-md">
									Conectamos mejor desde y hacia 11 destinos: Armenia(suspendido), Barranquilla,
									Bogotá, Bucaramanga, Cartagena, Cúcuta, Cali, Medellín, San Andrés, Santa Marta y
									Pereira.
								</p>
								<Button
									class="bg-secondary border-secondary mt-4"
									href="https://destinationsguide.copaair.com/es-co/vuelos-desde-colombia"
									target="blank">Descubre nuestros vuelos</Button
								>
							</div>
						</Slide.Content>
					</Slide.About>
					<div></div>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['hacia']} class="relative" position="top">
						<Slide.Content class="row-start-3">
							<div
								class="row-span-full col-span-full text-common-white mb-roomy flex flex-col justify-end items-start landscape:justify-end landscape:md:justify-center"
							>
								<Heading variant="displayNormal" tag="h3" class="text-common-white max-w-md">
									A más de <span class="text-commo-white md:text-secondary-faded">70 destinos</span>
									Internacionales
								</Heading>
								<p class="my-2 max-w-prose sm:max-w-sm">
									Contamos con más de 350 vuelos diarios desde el Hub de las Américas<sup>®</sup> en
									Panamá a más de 15 destinos en Estados Unidos y más de 20 destinos en el Caribe.
								</p>
								<Button
									class="bg-secondary border-secondary mt-4"
									href="https://destinationsguide.copaair.com/es-co/vuelos-desde-colombia"
									target="blank">Descubre nuestros vuelos</Button
								>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
			</Carousel.Container>
		</Carousel.Content>
	</Carousel.Root>
</div>
