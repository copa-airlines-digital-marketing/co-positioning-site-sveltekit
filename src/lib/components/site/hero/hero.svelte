<script lang="ts">
	import { Header } from '../header';
	import { Button } from '$lib/components/ui/button';
	import { Heading } from '$lib/components/ui/heading';
	import * as Carousel from '$lib/components/ui/carrusel';
	import * as Slide from './slide';
	import mainImage from '$lib/assets/pareja-en-clase-ejecutiva.jpg?enhanced';
	import mapImage from '$lib/assets/mapa-de-destinos-en-colombia.jpg?enhanced';
	import onBoardImage from '$lib/assets/refrigerio-a-bordo-de-aeronave.jpg?enhanced';
	import aboutCopa from '$lib/assets/abordaje-de-vuelo.jpg?enhanced';
	import Autoplay from 'embla-carousel-autoplay';
	import { BaselinePlayArrow } from '$lib/components/icons';
</script>

<div class="w-full h-lvh flex flex-col" id="top">
	<Header />
	<div class="h-full relative" id="main">
		<Carousel.Root
			class="h-full"
			plugins={[
				Autoplay({
					delay: 5000
				})
			]}
		>
			<Carousel.Content class="h-full">
				<Carousel.Container class="h-full">
					<Carousel.Item class="h-full">
						<Slide.Root image={mainImage} class="h-full">
							<Slide.Overlay />
							<Slide.Content
								class="col-start-1 col-span-full row-start-6 row-span-5 flex-col-reverse"
							>
								<Heading variant="displayNormal" class="my-2 text-common-white">
									Vuelve a Conectar Con La Dicha De Volar
								</Heading>
								<p class="text-gray-100 max-w-96">
									¿Sientes que volar ha perdido su encanto? <br />
									Queremos devolverle la dicha de volar a Colombia
								</p>
								<Button
									variant="light"
									size="slim"
									class="my-5 bg-secondary border-secondary items-center"
								>
									Ver Video
									<BaselinePlayArrow class="size-6" />
								</Button>
							</Slide.Content>
						</Slide.Root>
					</Carousel.Item>
					<Carousel.Item class="relative">
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
								<Button variant="light" size="slim" class="my-5 bg-secondary border-secondary">
									Descubre Nuestros Destinos
								</Button>
							</Slide.Content>
						</Slide.Root>
					</Carousel.Item>
					<Carousel.Item class="relative">
						<Slide.Root image={onBoardImage} class="h-full">
							<Slide.Overlay class="bg-gradient-to-br"></Slide.Overlay>
							<Slide.Content class="col-start-1 col-span-full row-start-5 row-span-5">
								<Heading variant="displayNormal" class="my-2 text-common-white">
									Refrigerio <span class="text-secondary">Siempre</span> Incluido
								</Heading>
								<p class="text-gray-100 max-w-prose">sin importar la tarifa o ruta que escojas</p>
								<Button variant="light" size="slim" class="my-5 bg-secondary border-secondary">
									Conoce nuestro servicio a bordo
								</Button>
							</Slide.Content>
						</Slide.Root>
					</Carousel.Item>
					<Carousel.Item class="relative">
						<Slide.Root image={aboutCopa} class="h-full">
							<Slide.Overlay class="bg-gradient-to-br" />
							<Slide.Content class="col-start-1 col-span-full row-start-3 row-span-5 flex-col">
								<Heading variant="displayNormal" class="my-2 text-common-white max-w-[560px]">
									La Aerolínea Más Premiada Por <span class="text-secondary">Puntualidad</span> de América
									En La Última Década
								</Heading>
								<Button variant="light" size="slim" class="my-5 bg-secondary border-secondary">
									Descubre Más de Copa Airlines
								</Button>
							</Slide.Content>
						</Slide.Root>
					</Carousel.Item>
				</Carousel.Container>
			</Carousel.Content>
			<div
				class="absolute left-1/2 top-roomy -translate-x-1/2 col-span-full row-span-full container px-4"
			>
				<ul class="flex justify-end items-end gap-2">
					{#each Array(4) as slide, i}
						<li class="text-common-white text-lg">{'0' + (i + 1)}</li>
					{/each}
				</ul>
			</div>
		</Carousel.Root>
	</div>
</div>
