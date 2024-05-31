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
	import desde from '$lib/assets/mapa-de-destinos-en-colombia.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import desdePortrait from '$lib/assets/mapa-de-destinos-en-colombia-portrait.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import mainImage from '$lib/assets/sample.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});

	const images: Record<string, EnhancedImage.ImageToolsPictureWithMediaQuery> = {
		desde: {
			'(orientation: portrait)': desdePortrait,
			'(orientation: portait) and (min-width: 1367px)': desde,
			'(orientation: landscape)': desde
		},
		hacia: {
			'(orientation: portrait)': mainImage,
			'(orientation: portait) and (min-width: 1367px)': mainImage,
			'(orientation: landscape)': mainImage
		}
	} as const;
</script>

<div
	id="destinos"
	class="w-full portrait:min-h-[700px] portrait:h-[calc(100svh-64px)] portrait:sm:min-h-svh landscape:min-h-svh bg-gradient-to-b from-primary to-primary-ultradark container-grid grid-rows-[auto_1fr_auto] relative"
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
					<Slide.OnBoard image={images['desde']}>
						<Slide.Content class="row-start-2">
							<div
								class="row-span-full col-span-full text-common-white flex flex-col justify-end items-start md:justify-start mb-roomy"
							>
								<Heading
									variant="displayNormal"
									tag="h3"
									class="text-common-white sm:max-w-xs md:max-w-lg"
								>
									Conecta <span class="text-secondary-faded">desde 11 ciudades</span> en Colombia
								</Heading>
								<p class="my-2 max-w-prose sm:max-w-md">
									Conectamos mejor desde y hacia 11 destinos: Armenia, Barranquilla, Bogotá,
									Bucaramanga, Cartagena, Cúcuta, Cali, Medellín, San Andrés, Santa Marta y Pereira.
								</p>
								<p class="my-2 text-xs sm:max-w-sm">
									*Vuelos a través del Hub de las Américas ® en Panamá. Vuelos sujetos a
									restricciones y cambios
								</p>
							</div>
						</Slide.Content>
					</Slide.OnBoard>
					<div></div>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.OnBoard image={images['hacia']}>
						<Slide.Overlay class="bg-gradient-to-t landscape:bg-gradient-to-br" />
						<Slide.Content class="row-start-2">
							<div
								class="row-span-full col-span-full text-common-white mb-roomy flex flex-col justify-end items-start landscape:justify-start"
							>
								<Heading variant="displayNormal" tag="h3" class="text-common-white max-w-md">
									A más de <span class="text-secondary-faded">80 destinos</span> Internacionales
								</Heading>
								<p class="my-2 max-w-prose sm:max-w-sm">
									Contamos con más de 350 vuelos diarios desde el Hub de las Américas® en Panamá a
									más de 15 destinos en Estados Unidos y más de 20 destinos en el Caribe.
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
			</Carousel.Container>
		</Carousel.Content>
		<div
			class="mb-roomy col-start-2 row-start-3 text-common-white flex items-center gap-2 md:gap-4 justify-between z-10"
		>
			<Carousel.Previous variant="invert" class="border-0 items-center text-left" title="Anterior">
				<OutlineArrowBack /> Desde Colombia
			</Carousel.Previous>
			<Carousel.Next variant="invert" class="border-0 items-center text-right" title="Siguiente">
				A Tu Próximo Destino<OutlineArrowForward />
			</Carousel.Next>
		</div>
	</Carousel.Root>
</div>
