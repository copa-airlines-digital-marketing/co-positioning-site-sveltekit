<script lang="ts">
	import { Header } from '../header';
	import { Button } from '$lib/components/ui/button';
	import { Heading } from '$lib/components/ui/heading';
	import * as Carousel from '$lib/components/ui/carrusel';
	import * as Slide from '../slide';
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
	import {
		BaselinePlayArrow,
		OutlineArrowBack,
		OutlineArrowForward,
		OutlinePause,
		OutlineArrowUpward
	} from '$lib/components/icons';
	import { onMount } from 'svelte';
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
</script>

<div
	class="w-full portrait:h-[calc(100svh-64px)] portrait:sm:min-h-svh landscape:min-h-svh flex flex-col bg-gradient-to-b from-primary to-primary-ultradark"
	id="top"
	bind:this={section}
>
	<Header />
	<Carousel.Root
		class="container-grid grid-rows-[auto_1fr] flex-grow"
		opts={{ duration: 40 }}
		plugins={[
			Autoplay({
				delay: 10000,
				stopOnInteraction: true
			})
		]}
		id="main"
		let:playingState
		let:selected
	>
		<div
			class="col-start-2 row-start-1 self-start justify-self-start mt-roomy flex items-center gap-2 md:gap-6 z-10"
		>
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
					<Slide.Hero
						image={images['main']}
						loading="eager"
						class="h-full min-h-[480px]"
						position="top"
					>
						<Slide.Overlay
							class="bg-gradient-to-t landscape:from-30% landscape:bg-gradient-to-tr"
						/>
						<Slide.Content>
							<div
								class="col-start-1 col-span-full row-span-full flex items-start flex-col justify-end py-5 lg:row-start-11 lg:row-end-1"
							>
								<Heading
									variant="displayNormal"
									tag="h1"
									class="my-2 text-common-white sm:max-w-sm md:landscape:max-w-none"
								>
									Vuelve a conectar con la dicha de volar
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
										Ver video
										<BaselinePlayArrow class="size-6" />
									</Button>
								</VideoDialog.Root>
							</div>
						</Slide.Content>
					</Slide.Hero>
				</Carousel.Item>
				<Carousel.Item class="h-full">
					<Slide.Hero image={images['map']} class="h-full">
						<Slide.Content>
							<div
								class="col-start-1 col-span-full flex flex-col items-start row-span-full justify-end py-5 lg:justify-start lg:row-start-4"
							>
								<Heading
									variant="displayNormal"
									class="my-2 text-common-white sm:max-w-md sm:landscape:max-w-80 md:landscape:max-w-md lg:portrait:max-w-lg lg:landscape:max-w-lg"
								>
									Conecta a más de <span
										class="text-primary portrait:sm:text-secondary landscape:text-secondary"
										>80</span
									> destinos internacionales
								</Heading>
								<p class="text-gray-100 text-xs max-w-prose sm:text-base">
									En toda América y el Caribe a través del Hub de las Américas<sup>®</sup> en Panamá,
									desde Armenia, Barranquilla, Bogotá, Bucaramanga, Cartagena, Cúcuta, Cali, Medellín,
									San Andrés, Santa Marta y Pereira.
								</p>
								<Button
									variant="light"
									size="slim"
									class="my-5 bg-secondary border-secondary"
									href="#destinos"
								>
									Descubre nuestros destinos
								</Button>
							</div>
						</Slide.Content>
					</Slide.Hero>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.Hero image={images.onboard} class="h-full" position="top">
						<Slide.Overlay
							class="bg-gradient-to-t landscape:md:bg-gradient-to-br landscape:from-15%"
						></Slide.Overlay>
						<Slide.Content>
							<div
								class="col-start-1 col-span-full row-span-full flex flex-col items-start justify-end py-5 landscape:sm:justify-end md:landscape:justify-start"
							>
								<Heading variant="displayNormal" class="my-2 text-common-white">
									Refrigerio <span class="text-secondary-faded">siempre</span> incluido
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
							</div>
						</Slide.Content>
					</Slide.Hero>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.Hero image={images.aboutCopa} class="h-full" position="top">
						<Slide.Overlay class="bg-gradient-to-b landscape:bg-gradient-to-r from-30%" />
						<Slide.Content>
							<div
								class="col-span-full mb-roomy row-span-full flex flex-col sm:flex-col portrait:sm:flex-row justify-between"
							>
								<div>
									<Heading
										variant="displayNormal"
										class="my-2 text-common-white sm:max-w-xs md:max-w-md"
									>
										La aerolínea más premiada por <span class="text-secondary-faded"
											>puntualidad</span
										> en América en la última década
									</Heading>
									<Button
										variant="light"
										size="slim"
										class="bg-secondary border-secondary md:my-5"
										href="#nosotros"
									>
										Descubre más
									</Button>
								</div>
								<div
									class="bg-common-black/80 sm:bg-transparent p-4 rounded-full size-28 sm:size-44 md:size-52 lg:size-64"
								>
									<LogoCiriumOtp class="w-full text-white mt-0.5" />
									<span class="sr-only">
										Logo de Cirium, la aerolínea más puntual de latinoamerica de 2023
									</span>
								</div>
							</div>
						</Slide.Content>
					</Slide.Hero>
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
