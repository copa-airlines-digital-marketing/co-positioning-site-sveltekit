<script lang="ts">
	import { Header } from '../header';
	import { Button } from '$lib/components/ui/button';
	import { Heading } from '$lib/components/ui/heading';
	import * as Carousel from '$lib/components/ui/carrusel';
	import * as Slide from './slide';
	import * as EnhancedImage from '$lib/components/ui/image';
	import * as VideoDialog from '$lib/components/site/video';
	import mainImage from '$lib/assets/pareja-en-clase-ejecutiva.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import mapImage from '$lib/assets/mapa-de-destinos-en-colombia.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import onBoardImage from '$lib/assets/refrigerio-a-bordo-de-aeronave.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import aboutCopa from '$lib/assets/abordaje-de-vuelo.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import mainImagePortrait from '$lib/assets/pareja-en-clase-ejecutiva-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import mapImagePortrait from '$lib/assets/mapa-de-destinos-en-colombia-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import onBoardImagePortrait from '$lib/assets/refrigerio-a-bordo-de-aeronave-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import aboutCopaPortrait from '$lib/assets/abordaje-de-vuelo-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import Autoplay from 'embla-carousel-autoplay';
	import { BaselinePlayArrow } from '$lib/components/icons';
	import { onMount } from 'svelte';
	import { OutlineArrowUpward } from '$lib/components/icons';
	import { cn, flyAndScale } from '$lib/utils';
	import LogoCiriumOtp from '$lib/components/icons/logo-cirium-otp.svelte';
	import { crossfade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	let showBackToTop = false;
	let section: HTMLDivElement;

	onMount(() => {
		const ob = new IntersectionObserver((payload) => (showBackToTop = !payload[0].isIntersecting));
		ob.observe(section);
	});

	const images: Record<string, EnhancedImage.ImageToolsPictureWithMediaQuery> = {
		main: {
			'(orientation: landscape)': mainImage as EnhancedImage.ImageToolsPicture,
			'(orientation: portrait)': mainImagePortrait
		},
		map: {
			'(orientation: landscape)': mapImage,
			'(orientation: portrait)': mapImagePortrait
		},
		onboard: {
			'(orientation: landscape)': onBoardImage,
			'(orientation: portrait)': onBoardImagePortrait
		},
		aboutCopa: {
			'(orientation: landscape)': aboutCopa,
			'(orientation: portrait)': aboutCopaPortrait
		}
	} as const;

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});

	console.log(mainImage);
</script>

<div
	class="w-full portrait:h-[calc(100svh-64px)] portrait:sm:min-h-svh landscape:min-h-svh flex flex-col"
	id="top"
	bind:this={section}
>
	<Header />
	<Carousel.Root
		class="container-grid grid-rows-[auto_1fr] flex-grow"
		plugins={[
			Autoplay({
				delay: 15000
			})
		]}
		id="main"
	>
		<div class="col-start-2 row-start-1 self-start justify-self-start mt-roomy z-10">
			<Carousel.Dots direction="ltr" let:index let:selected class="gap-1">
				<Carousel.Dot
					slide={index}
					class="py-1 px-3 text-secondary relative outline-none hover:bg-secondary/60 active:bg-secondary/60 focus-visible:bg-secondary/60 transition-colors"
				>
					<span
						class={cn(
							'text-sm transition-colors',
							selected % 2 === 0
								? 'text-primary-ultradark landscape:md:text-common-white'
								: 'text-common-white'
						)}
					>
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
		</div>
		<Carousel.Content class="h-full col-span-full row-span-full max-w-full">
			<Carousel.Container class="h-full">
				<Carousel.Item class="h-full">
					<Slide.Root image={images['main']} class="h-full">
						<Slide.Overlay
							class="bg-gradient-to-t landscape:from-30% landscape:bg-gradient-to-tr"
						/>
						<Slide.Content
							class="col-start-1 col-span-full row-span-full flex-col-reverse py-5 lg:row-start-11 lg:row-end-1"
						>
							<Heading
								variant="displayNormal"
								tag="h1"
								class="my-2 text-common-white sm:max-w-sm md:landscape:max-w-none"
							>
								Vuelve a Conectar Con La Dicha De Volar
							</Heading>
							<p class="text-gray-100 max-w-prose text-xs sm:text-base">
								¿Sientes que volar ha perdido su encanto? <br />
								Queremos devolverle la dicha de volar a Colombia
							</p>
							<VideoDialog.Root>
								<Button
									variant="light"
									size="slim"
									class="my-5 bg-secondary border-secondary items-center"
									slot="trigger"
								>
									Ver Video
									<BaselinePlayArrow class="size-6" />
								</Button>
							</VideoDialog.Root>
						</Slide.Content>
					</Slide.Root>
				</Carousel.Item>
				<Carousel.Item class="h-full">
					<Slide.Root image={images['map']} class="h-full">
						<Slide.Content
							class="col-start-1 col-span-full row-span-full justify-end py-5 lg:justify-start lg:row-start-4"
						>
							<Heading
								variant="displayNormal"
								class="my-2 text-common-white sm:max-w-md sm:landscape:max-w-80 md:landscape:max-w-md lg:portrait:max-w-lg lg:landscape:max-w-lg"
							>
								Conecta a Más de <span
									class="text-primary portrait:sm:text-secondary landscape:text-secondary">80</span
								> Destinos Internacionales
							</Heading>
							<p class="text-gray-100 text-xs max-w-prose sm:text-base">
								En toda América y el Caribe a través del Hub de las Américas® en Panamá, desde
								Armenia, Barranquilla, Bogotá, Bucaramanga, Cartagena, Cúcuta, Cali, Medellín, San
								Andrés, Santa Marta y Pereira.
							</p>
							<Button
								variant="light"
								size="slim"
								class="my-5 bg-secondary border-secondary"
								href="#destinos"
							>
								Descubre Nuestros Destinos
							</Button>
						</Slide.Content>
					</Slide.Root>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.Root image={images.onboard} class="h-full">
						<Slide.Overlay
							class="bg-gradient-to-t landscape:md:bg-gradient-to-br landscape:from-15%"
						></Slide.Overlay>
						<Slide.Content
							class="col-start-1 col-span-full row-span-full justify-end py-5 landscape:sm:justify-end md:landscape:justify-start"
						>
							<Heading variant="displayNormal" class="my-2 text-common-white">
								Refrigerio <span class="text-secondary-faded">Siempre</span> Incluido
							</Heading>
							<p class="text-gray-100 text-xs max-w-prose sm:text-base">
								Sin importar la tarifa o ruta que escojas
							</p>
							<Button
								variant="light"
								size="slim"
								class="my-5 bg-secondary border-secondary"
								href="#a-bordo"
							>
								Conoce nuestro servicio a bordo
							</Button>
						</Slide.Content>
					</Slide.Root>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.Root image={images.aboutCopa} class="h-full">
						<Slide.Overlay class="bg-gradient-to-t md:landscape:bg-gradient-to-r from-20%" />
						<Slide.Content
							class="col-start-1 col-span-full row-span-full grid grid-cols-subgrid grid-rows-subgrid py-5"
						>
							<div
								class="col-span-full row-start-13 row-end-6 md:landscape:row-start-1 md:landscape:row-end-7 self-end landscape:md:self-start landscape:lg:row-end-6"
							>
								<Heading
									variant="displayNormal"
									class="my-2 text-common-white sm:max-w-md sm:landscape:max-w-96"
								>
									La Aerolínea Más Premiada Por <span class="text-secondary-faded">Puntualidad</span
									> de América En La Última Década
								</Heading>
								<Button
									variant="light"
									size="slim"
									class="bg-secondary border-secondary md:my-5"
									href="#nosotros"
								>
									Descubre Más de Copa Airlines
								</Button>
							</div>
							<div
								class="col-span-full row-start-1 row-end-7 landscape:row-start-7 landscape:row-end-12 landscape:self-end justify-self-end landscape:md:justify-self-start md:landscape:self-start lg:landscape:row-start-6"
							>
								<LogoCiriumOtp class="w-40 md:w-52 lg:w-64 text-white" />
								<span class="sr-only">
									Logo de Cirium, la aerolínea más puntual de latinoamerica de 2023
								</span>
							</div>
						</Slide.Content>
					</Slide.Root>
				</Carousel.Item>
			</Carousel.Container>
		</Carousel.Content>
	</Carousel.Root>
</div>

{#if showBackToTop}
	<div
		class="hidden sm:portrait:block md:block fixed bottom-roomy right-roomy z-20"
		transition:flyAndScale={{ y: 50, start: 0.5 }}
	>
		<Button variant="invert" class="rounded-full p-3" href="#top">
			<OutlineArrowUpward class="size-8" />
			<span class="sr-only">Regresar al inicio</span>
		</Button>
	</div>
{/if}
