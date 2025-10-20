<script lang="ts">
	import { Header } from '../header';
	import { Button } from '$lib/components/ui/button';
	import { Heading } from '$lib/components/ui/heading';
	import * as Carousel from '$lib/components/ui/carrusel';
	import * as Slide from '../slide';
	import * as VideoDialog from '$lib/components/site/video';

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
	import { crossfade, fly } from 'svelte/transition';
	import { cubicInOut, quintOut } from 'svelte/easing';
	import Nav from './nav.svelte';
	import { getDirectusImage, type DirectusImage } from '$components/ui/image/image.svelte';

	let showBackToTop = false;
	let section: HTMLDivElement;
	let videoElement: HTMLVideoElement;
	let mapVideo: HTMLVideoElement;

	onMount(() => {
		const ob = new IntersectionObserver((payload) => (showBackToTop = !payload[0].isIntersecting));
		ob.observe(section);
	});

	const images: Record<string, DirectusImage> = {
		main: {
			image: '706bd7a1-8639-46a4-8381-a3455128d7c7',
			queries: [
				[
					'(orientation: landscape)',
					'e4aa4c36-bb5f-44e1-81f0-9040b44321f5',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portrait)',
					'706bd7a1-8639-46a4-8381-a3455128d7c7',
					{ heights: ['2160', '1600', '1080', '900', '768'] }
				]
			]
		},
		map: {
			image: '48532c19-4d13-4657-8fc7-94cfd1978752',
			queries: [
				[
					'(orientation: landscape)',
					'f8516dc5-6c92-4ee0-856f-3138c873836e',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portrait)',
					'48532c19-4d13-4657-8fc7-94cfd1978752',
					{ heights: ['2160', '1600', '1080', '900', '768'] }
				]
			]
		},
		onboard: {
			image: '348351ea-9444-4658-8384-aa305851aae8',
			queries: [
				[
					'(orientation: landscape)',
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
		aboutCopa: {
			image: '16a9692c-cac8-441c-8e0d-f4e05b52b40c',
			queries: [
				[
					'(orientation: landscape)',
					'32225d90-61be-4475-aaad-54dea00529bd',
					{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
				],
				[
					'(orientation: portrait)',
					'16a9692c-cac8-441c-8e0d-f4e05b52b40c',
					{ heights: ['2160', '1600', '1080', '900', '768'] }
				]
			]
		}
	} as const;

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});

	const videoCTAClickHandler = () => {
		videoElement.requestFullscreen().then(() => {
			window.dataLayer?.push({ event: 'video_play' });
			videoElement.play();
		});
	};

	const mapVideoLoadHandler = () => {
		mapVideo.play();
	};
</script>

<div
	class="w-full portrait:h-[calc(100svh-64px)] portrait:md:min-h-svh landscape:min-h-svh flex flex-col bg-gradient-to-b from-primary to-primary-ultradark"
	id="top"
	bind:this={section}
>
	<Header />
	<Carousel.Root
		class="container-grid grid-rows-[auto_1fr_auto] flex-grow"
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
						position="object-top"
					>
						<Slide.Overlay
							class="bg-gradient-to-t landscape:from-0% from-common-black landscape:bg-gradient-to-tr"
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
								{#await import('../../ui/video/Player.svelte') then { default: Player }}
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

										<!-- <svelte:component this={Player} slot="video" /> -->

										<video
											slot="video"
											controls
											preload="none"
											class="h-full w-full"
											controlslist="nodownload"
											bind:this={videoElement}
											on:loadstart={videoCTAClickHandler}
										>
											<source
												src={getDirectusImage('d1ce9b4f-d8b8-4f21-b406-712d1e613256')}
												type="video/webm"
												media="(orientation: landscape)"
											/>
											<source
												src={getDirectusImage('54b960ae-b3ca-40b1-ad52-f476fe7d81be')}
												type="video/webm"
											/>
											<track default srclang="es" kind="captions" />
											Tu navegador no soporta video
										</video>
									</VideoDialog.Root>
								{/await}
							</div>
						</Slide.Content>
					</Slide.Hero>
				</Carousel.Item>
				<Carousel.Item class="h-full">
					<Slide.Hero image={images['map']} class="h-full" position="object-left-top">
						{#if selected === 1}
							<div class="col-start-1 row-start-1 col-span-full row-span-full relative">
								<video
									preload="none"
									class="absolute w-full h-full inset-0 object-cover"
									controlslist="nodownload"
									bind:this={mapVideo}
									on:loadstart={mapVideoLoadHandler}
								>
									<source
										src={getDirectusImage('79a34d32-5296-42ae-bea6-e36cf27b053a')}
										type="video/webm"
										media="(orientation: landscape)"
									/>
									<source
										src={getDirectusImage('fb59c830-977d-4b68-b600-d886c3a41336')}
										type="video/webm"
									/>
									<track default srclang="es" kind="captions" />
									Tu navegador no soporta video
								</video>
							</div>
						{/if}
						<Slide.Content>
							{#if selected === 1}
								<div
									class="col-start-1 col-span-full flex flex-col items-start row-span-full justify-end py-5 lg:justify-start lg:row-start-4 relative"
									in:fly={{ y: 200, duration: 1000, delay: 4500, easing: quintOut }}
								>
									<Heading
										variant="displayNormal"
										class="my-2 text-common-white sm:max-w-md sm:landscape:max-w-80 md:landscape:max-w-md lg:portrait:max-w-lg lg:landscape:max-w-lg"
									>
										Conecta desde <strong class="text-common-white md:text-secondary-faded"
											>11&nbsp;ciudades</strong
										>
										en Colombia hacia más de
										<span class="text-common-white md:text-secondary-faded"
											>85&nbsp;destinos internacionales</span
										>
									</Heading>
									<Button
										variant="light"
										size="slim"
										class="my-5 bg-secondary border-secondary"
										href="#destinos"
									>
										Descubre nuestros destinos
									</Button>
								</div>
							{/if}
						</Slide.Content>
					</Slide.Hero>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.Hero image={images.onboard} class="h-full" position="object-top">
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
					<Slide.Hero image={images.aboutCopa} class="h-full" position="object-top">
						<Slide.Overlay
							class="bg-gradient-to-b from-black/60 landscape:bg-gradient-to-r from-30%"
						/>
						<Slide.Content>
							<div
								class="col-span-full row-start-1 row-span-full h-full flex flex-col items-start md:flex-row"
							>
								<div class="md:flex-shrink-0">
									<Heading
										variant="displayNormal"
										class="my-2 text-common-white max-w-full sm:max-w-xs md:max-w-md"
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
								<div class="flex-grow my-2 portrait:sm:my-6 flex items-end md:justify-end w-full">
									<div
										class="bg-common-black/80 p-4 rounded-full aspect-square w-1/3 md:w-1/4 max-w-52"
									>
										<LogoCiriumOtp class="w-auto max-h-52 text-white mt-0.5" />
										<span class="sr-only">
											Logo de Cirium, la aerolínea más puntual de latinoamerica de 2023
										</span>
									</div>
								</div>
							</div>
						</Slide.Content>
					</Slide.Hero>
				</Carousel.Item>
			</Carousel.Container>
		</Carousel.Content>
		<Nav class="col-start-2 mb-roomy row-start-3 relative hidden md:block"></Nav>
	</Carousel.Root>
</div>
{#if showBackToTop}
	<div
		class="hidden md:block fixed bottom-roomy right-roomy z-20"
		transition:flyAndScale={{ y: 50, start: 0.5 }}
	>
		<Button variant="invert" class="rounded-full p-3" href="#top">
			<OutlineArrowUpward class="size-8" />
			<span class="sr-only">Regresar al inicio</span>
		</Button>
	</div>
{/if}
