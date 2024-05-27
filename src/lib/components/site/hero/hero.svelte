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
	import ciriumLogo from '$lib/assets/logo-cirium-2024.png?w=1200;800;400&as=picture&imagetools';
	import Autoplay from 'embla-carousel-autoplay';
	import { BaselinePlayArrow } from '$lib/components/icons';
	import { onMount } from 'svelte';
	import { OutlineArrowUpward } from '$lib/components/icons';
	import { flyAndScale } from '$lib/utils';

	let showBackToTop = false;
	let section: HTMLDivElement;

	onMount(() => {
		const ob = new IntersectionObserver((payload) => (showBackToTop = !payload[0].isIntersecting));
		ob.observe(section);
	});
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
				delay: 5000
			})
		]}
		id="main"
	>
		<div class="col-start-2 row-start-1 self-start justify-self-start my-roomy z-10">
			<Carousel.Dots direction="ltr" variant="invert" class="border-0"></Carousel.Dots>
		</div>
		<Carousel.Content class="h-full col-span-full row-span-full max-w-full">
			<Carousel.Container class="h-full">
				<Carousel.Item class="h-full">
					<Slide.Root
						image={{
							'(orientation: landscape)': mainImage,
							'(orientation: portrait)': mainImagePortrait
						}}
						class="h-full"
					>
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
					<Slide.Root
						image={{
							'(orientation: landscape)': mapImage,
							'(orientation: portrait)': mapImagePortrait
						}}
						class="h-full"
					>
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
					<Slide.Root
						image={{
							'(orientation: landscape)': onBoardImage,
							'(orientation: portrait)': onBoardImagePortrait
						}}
						class="h-full"
					>
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
					<Slide.Root
						image={{
							'(orientation: landscape)': aboutCopa,
							'(orientation: portrait)': aboutCopaPortrait
						}}
						class="h-full"
					>
						<Slide.Overlay class="bg-gradient-to-t md:landscape:bg-gradient-to-br from-20%" />
						<Slide.Content
							class="col-start-1 col-span-full row-span-full flex-col-reverse py-5 md:flex-col"
						>
							<div>
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
							<EnhancedImage.Root
								image={{ all: ciriumLogo }}
								alt="Logo de Cirium, la aerolínea más puntual de latinoamerica de 2023"
								class="w-28 lg:w-48"
							></EnhancedImage.Root>
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
