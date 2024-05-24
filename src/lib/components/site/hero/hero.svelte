<script lang="ts">
	import { Header } from '../header';
	import { Button } from '$lib/components/ui/button';
	import { Heading } from '$lib/components/ui/heading';
	import * as Carousel from '$lib/components/ui/carrusel';
	import * as Slide from './slide';
	import * as VideoDialog from '$lib/components/site/video';
	import mainImage from '$lib/assets/pareja-en-clase-ejecutiva.jpg?enhanced';
	import mapImage from '$lib/assets/mapa-de-destinos-en-colombia.jpg?enhanced';
	import onBoardImage from '$lib/assets/refrigerio-a-bordo-de-aeronave.jpg?enhanced';
	import aboutCopa from '$lib/assets/abordaje-de-vuelo.jpg?enhanced';
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

<div class="w-full h-lvh flex flex-col" id="top">
	<Header />
	<div class="h-full" id="main" bind:this={section}>
		<Carousel.Root
			class="h-full container-grid"
			plugins={[
				Autoplay({
					delay: 5000
				})
			]}
		>
			<div class="col-start-2 row-start-1 self-start my-roomy z-10">
				<Carousel.Dots direction="ltr" variant="invert" class="border-0"></Carousel.Dots>
			</div>
			<Carousel.Content class="h-full col-span-full row-span-full">
				<Carousel.Container class="h-full">
					<Carousel.Item>
						<Slide.Root image={mainImage} class="h-full">
							<Slide.Overlay class="from-30%" />
							<Slide.Content
								class="col-start-1 col-span-full row-start-6 row-span-5 flex-col-reverse"
							>
								<Heading variant="displayNormal" tag="h1" class="my-2 text-common-white">
									Vuelve a Conectar Con La Dicha De Volar
								</Heading>
								<p class="text-gray-100 max-w-96">
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
									<img src={mainImage} alt="" class="h-full w-full object-cover" slot="video" />
								</VideoDialog.Root>
							</Slide.Content>
						</Slide.Root>
					</Carousel.Item>
					<Carousel.Item>
						<Slide.Root image={mapImage} class="h-full">
							<Slide.Content class="col-start-1 col-span-full row-span-full justify-center">
								<Heading variant="displayNormal" class="my-2 text-common-white max-w-[480px]">
									Conecta a Más de <span class="text-secondary">80</span
									>&nbsp;Destinos&nbsp;Internacionales
								</Heading>
								<p class="text-gray-100 max-w-prose">
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
						<Slide.Root image={onBoardImage} class="h-full">
							<Slide.Overlay class="bg-gradient-to-br from-15%"></Slide.Overlay>
							<Slide.Content class="col-start-1 col-span-full row-start-3 row-span-5">
								<Heading variant="displayNormal" class="my-2 text-common-white">
									Refrigerio <span class="text-secondary-faded">Siempre</span> Incluido
								</Heading>
								<p class="text-gray-100 max-w-prose">sin importar la tarifa o ruta que escojas</p>
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
						<Slide.Root image={aboutCopa} class="h-full">
							<Slide.Overlay class="bg-gradient-to-br from-20%" />
							<Slide.Content class="col-start-1 col-span-full row-start-3 row-span-6 flex-col">
								<Heading variant="displayNormal" class="my-2 text-common-white max-w-[560px]">
									La Aerolínea Más Premiada Por <span class="text-secondary-faded">Puntualidad</span
									> de América En La Última Década
								</Heading>
								<Button
									variant="light"
									size="slim"
									class="my-5 bg-secondary border-secondary"
									href="#nosotros"
								>
									Descubre Más de Copa Airlines
								</Button>
							</Slide.Content>
						</Slide.Root>
					</Carousel.Item>
				</Carousel.Container>
			</Carousel.Content>
		</Carousel.Root>
	</div>
</div>

{#if showBackToTop}
	<div
		class="hidden md:block fixed bottom-roomy right-roomy z-10"
		transition:flyAndScale={{ y: 50, start: 0.5 }}
	>
		<Button variant="invert" class="rounded-full p-3" href="#top">
			<OutlineArrowUpward class="size-8" />
			<span class="sr-only">Regresar al inicio</span>
		</Button>
	</div>
{/if}
