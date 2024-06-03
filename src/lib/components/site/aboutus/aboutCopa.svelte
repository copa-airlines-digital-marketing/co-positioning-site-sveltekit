<script lang="ts">
	import {
		BaselinePlayArrow,
		IstoipoCopaAirlines,
		OutlineArrowBack,
		OutlineArrowForward,
		OutlinePause
	} from '$lib/components/icons';
	import * as Carousel from '$lib/components/ui/carrusel';
	import * as Slide from '../slide';
	import * as EnhancedImage from '$lib/components/ui/image';
	import puntualidad from '$lib/assets/abordaje-de-vuelo.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import puntualidadPortrait from '$lib/assets/abordaje-de-vuelo-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import conectividad from '$lib/assets/persona-revisando-celular-con-tabla-de-vuelos-detras.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import conectividadPortrait from '$lib/assets/persona-revisando-celular-con-tabla-de-vuelos-detras-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import connectmiles from '$lib/assets/counter-copa-airlines-revision-de-documentos.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import connectmilesPortrait from '$lib/assets/counter-copa-airlines-revision-de-documentos-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import copaClub from '$lib/assets/pareja-en-el-copa-club.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import copaClubPortrait from '$lib/assets/pareja-en-el-copa-club-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import reconocimientos from '$lib/assets/pilotos-con-avion-de-fondo.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import reconocimientosPortrait from '$lib/assets/pilotos-con-avion-de-fondo-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import avion from '$lib/assets/avion-de-copa-volando.jpg?w=1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import avionPortrait from '$lib/assets/avion-de-copa-volando-portrait.jpg?h=1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import starAlliance from '$lib/assets/pasajero-saliendo-del-avion-con-banner-de-preferaccess.jpg?w=1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import starAlliancePortrait from '$lib/assets/pasajero-saliendo-del-avion-con-banner-de-preferaccess-portrait.jpg?h=1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';

	import { Heading } from '$lib/components/ui/heading';
	import { Button } from '$lib/components/ui/button';
	import Autoplay from 'embla-carousel-autoplay';

	const images: Record<string, EnhancedImage.ImageToolsPictureWithMediaQuery> = {
		experiencia: {
			'(orientation: portrait)': avionPortrait,
			'(orientation: portait) and (min-width: 1367px)': avion,
			'(orientation: landscape)': avion
		},
		staralliance: {
			'(orientation: portrait)': starAlliancePortrait,
			'(orientation: portait) and (min-width: 1367px)': starAlliance,
			'(orientation: landscape)': starAlliance
		},
		connectmiles: {
			'(orientation: portrait)': connectmilesPortrait,
			'(orientation: portait) and (min-width: 1367px)': connectmiles,
			'(orientation: landscape)': connectmiles
		},
		puntualidad: {
			'(orientation: portrait)': puntualidadPortrait,
			'(orientation: portait) and (min-width: 1367px)': puntualidad,
			'(orientation: landscape)': puntualidad
		},
		copaClub: {
			'(orientation: portrait)': copaClubPortrait,
			'(orientation: portait) and (min-width: 1367px)': copaClub,
			'(orientation: landscape)': copaClub
		},
		conectividad: {
			'(orientation: portrait)': conectividadPortrait,
			'(orientation: portait) and (min-width: 1367px)': conectividad,
			'(orientation: landscape)': conectividad
		},
		reconocimientos: {
			'(orientation: portrait)': reconocimientosPortrait,
			'(orientation: portait) and (min-width: 1367px)': reconocimientos,
			'(orientation: landscape)': reconocimientos
		}
	} as const;
</script>

<div
	id="nosotros"
	class="portrait:h-[calc(100svh-64px)] portrait:sm:min-h-svh landscape:min-h-svh w-full bg-gradient-to-b from-primary to-primary-ultradark container-grid grid-rows-[auto_auto_1fr]"
>
	<Heading
		variant="h2"
		tag="h2"
		class="text-sm font-normal my-minimal row-start-2 col-start-2 z-10 items-center flex gap-1"
	>
		<span class="rounded-full block overflow-hidden bg-common-white">
			<IstoipoCopaAirlines class="size-6"></IstoipoCopaAirlines>
		</span>
		<span class="text-common-white">Descubre Copa Airlines</span>
	</Heading>
	<Carousel.Root
		class="col-span-full row-span-full grid grid-cols-subgrid grid-rows-subgrid relative"
		opts={{ duration: 40 }}
		plugins={[
			Autoplay({
				delay: 10000,
				playOnInit: false,
				stopOnInteraction: true
			})
		]}
		let:selected
		let:playingState
	>
		<div class="col-start-2 row-start-1 mt-roomy z-10">
			<Carousel.Dots
				direction="ltr"
				let:index
				class="grid auto-cols-fr grid-rows-1 grid-flow-col gap-2"
			>
				<Carousel.Dot
					slide={index}
					class="w-full max-w-none p-0 m-0 bg-transparent grid grid-cols-1 grid-rows-1 border-0"
				>
					<div class="bg-common-white/60 row-start-1 row-end-1 h-1 w-full my-3">
						{#if selected === index}
							<div class="h-full w-full bg-common-white"></div>
						{/if}
					</div>
				</Carousel.Dot>
			</Carousel.Dots>
		</div>
		<div
			class="col-start-2 row-start-2 justify-self-end flex justify-end items-center gap-4 md:gap-6 relative z-10"
		>
			<div class="flex gap-1 items-center">
				<Carousel.Previous variant="invert" class="border-0" title="Anterior">
					<OutlineArrowBack />
				</Carousel.Previous>
				<Carousel.Next variant="invert" class="border-0" title="Siguiente">
					<OutlineArrowForward />
				</Carousel.Next>
			</div>
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
		<Carousel.Content class="col-span-full row-span-full z-0">
			<Carousel.Container class="h-full">
				<Carousel.Item class="h-full min-h-[480px]">
					<Slide.About image={images['experiencia']} class="relative">
						<Slide.Overlay
							class="bg-gradient-to-t from-20% portrait:sm:bg-gradient-to-b portrait:sm:to-40% portrait:sm:from-10% landscape:bg-gradient-to-br"
						/>
						<Slide.Content class="row-start-3">
							<div
								class="row-start-13 row-end-1 flex flex-col justify-end portrait:sm:justify-start landscape:justify-start items-start col-span-full my-normal text-common-white"
							>
								<Heading
									variant="displayNormal"
									tag="h3"
									class="text-common-white max-w-xs sm:max-w-md"
								>
									Más de <span class="text-secondary-faded">75 años</span> volando los cielos de las
									Américas
								</Heading>
								<p class="my-2 max-w-sm">
									Hemos estado conectando las Américas por 75 años y aqui hay algunas razones por
									las que somos los mejores
								</p>
								<Carousel.NextAndPlay class="bg-secondary border-secondary" size="slim"
									>Conce más</Carousel.NextAndPlay
								>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['puntualidad']} class="relative" position="top">
						<Slide.Overlay
							class="bg-gradient-to-t from-20% portrait:sm:bg-gradient-to-b landscape:md:bg-gradient-to-r"
						/>
						<Slide.Content class="row-start-3">
							<div
								class="row-start-13 row-end-1 portrait:sm:justify-start landscape:md:justify-start items-start col-span-full my-normal text-common-white flex flex-col justify-end"
							>
								<Heading
									variant="displayNormal"
									tag="h3"
									class="text-common-white landscape:md:max-w-sm"
									>La aerolínea más premiada por <span class="text-secondary-faded"
										>puntualidad</span
									> en la última década</Heading
								>
								<p class="my-2 max-w-prose landscape:md:max-w-sm">
									Hemos sido reconocidos por Cirium como la aerolínea más puntual de Latinoamérica
									en 9 ocasiones durante la última década.
								</p>
								<Button
									class="bg-secondary border-secondary"
									size="slim"
									href="https://www.copaair.com/es-co/noticias/cirium-reconoce-a-copa-airlines-como-la-aerolinea-mas-puntual-de-latinoamerica/"
									target="_blank"
								>
									Conoce más
								</Button>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['conectividad']} class="relative" position="top">
						<Slide.Overlay
							class="bg-gradient-to-b from-50% landscape:from-30% landscape:bg-gradient-to-t landscape:md:bg-gradient-to-r"
						/>
						<Slide.Content class="row-start-3">
							<div
								class="row-start-12 row-end-1 col-span-full my-normal text-common-white flex flex-col items-start landscape:justify-end landscape:row-start-13 landscape:md:justify-start landscape:md:from-15%"
							>
								<Heading
									variant="displayNormal"
									tag="h3"
									class="text-common-white landscape:md:max-w-sm landscape:lg:max-w-lg"
									>Conexiones rápidas a través del Hub de las Américas® en Panamá</Heading
								>
								<p class="my-2 max-w-prose landscape:md:max-w-sm">
									Nuestras conexiones son fáciles y rápidas, sin trámites de migración ni aduana y
									con el equipaje registrado hasta tu destino final.
								</p>
								<Button
									class="bg-secondary border-secondary"
									size="slim"
									href="https://www.copaair.com/es-co/noticias/copa-operacion-t2-internacional/"
									target="_blank"
								>
									Conoce más
								</Button>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['connectmiles']} class="relative">
						<Slide.Overlay class="bg-gradient-to-t landscape:bg-gradient-to-tr from-30%" />
						<Slide.Content class="row-start-3">
							<div
								class="row-start-13 row-end-1 col-span-full my-normal text-common-white flex flex-col justify-end items-start landscape:sm:row-start-13"
							>
								<Heading variant="displayNormal" tag="h3" class="text-common-white"
									>Acumula y redime millas</Heading
								>
								<p class="my-2 max-w-sm">
									Únete gratis a nuestro Programa de Lealtad <strong>ConnectMiles</strong> y acumula
									y redime millas en las +25 aerolíneas miembro de Star Alliance.
								</p>
								<Button
									class="my-3 bg-secondary border-secondary"
									href="https://www.copaair.com/es-gs/enrollment/"
									target="_blank">Únete ya</Button
								>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item class="h-full">
					<Slide.About image={images['staralliance']} class="relative">
						<Slide.Overlay
							class="bg-gradient-to-t from-25% portrait:sm:from-10% landscape:md:bg-gradient-to-r"
						/>
						<Slide.Content class="row-start-3">
							<div
								class="row-span-full col-span-full my-normal text-common-white flex flex-col items-start justify-end landscape:md:justify-start"
							>
								<Heading variant="displayNormal" tag="h3" class="text-common-white"
									>Miembro de Star Alliance</Heading
								>
								<p class="my-2 max-w-prose landscape:md:max-w-md">
									Somos parte de Star Alliance, líder de la red global de aerolíneas. Puedes
									disfrutar de todos los beneficios agregados en cualquier lugar del mundo donde
									haya una aerolínea miembro de Star Alliance.
								</p>
								<Button
									class="bg-secondary border-secondary"
									href="https://www.copaair.com/es-co/mas-de-copa-airlines/staralliance/"
									target="_blank"
								>
									Conoce más
								</Button>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['copaClub']} class="relative">
						<Slide.Overlay
							class="bg-gradient-to-t from-40% portrait:sm:from-20% landscape:md:from-20% landscape:md:bg-gradient-to-r"
						/>
						<Slide.Content class="row-start-3">
							<div
								class="row-span-full col-span-full flex flex-col items-start justify-end my-normal text-common-white"
							>
								<Heading
									variant="displayNormal"
									tag="h3"
									class="text-common-white landscape:md:max-w-md"
									><span class="text-secondary-faded">Copa Club</span>, 6 salas en 5 aeropuertos</Heading
								>
								<p class="my-2 max-w-prose landscape:md:max-w-md">
									Disfruta de nuestras exclusivas salas VIP en los aeropuertos, diseñadas para
									brindarte confort y lujo antes de tu vuelo. Relájate en un ambiente tranquilo con
									servicios premium que harán tu espera más placentera.
								</p>

								<Button
									class="my-4 bg-secondary border-secondary"
									href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-en-aeropuerto/copa-club/"
									target="_blank">Conoce nuestras salas</Button
								>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['reconocimientos']} class="relative">
						<Slide.Overlay
							class="bg-gradient-to-t from-40% portrait:sm:from-20% landscape:md:bg-gradient-to-r landscape:md:from-20%"
						/>
						<Slide.Content class="row-start-3">
							<div
								class="row-span-full col-span-full flex flex-col items-start justify-end landscape:md:justify-start my-normal text-common-white"
							>
								<Heading variant="displayNormal" tag="h3" class="text-common-white"
									>Reconocimientos</Heading
								>
								<p class="mt-3 mb-6 max-w-prose landscape:md:max-w-md">
									Somos la aerolínea más puntual de América Latina y la mejor de Centroamérica y el
									Caribe. Nuestros reconocimientos reflejan nuestro compromiso con darte la mejor
									experiencia en tu vuelo. ¡Descubre todos nuestros premios y elige volar con los
									mejores!
								</p>
								<Button
									class="bg-secondary"
									href="https://www.copaair.com/es-co/descubre-copa-airlines/reconocimientos/"
									>Conoce nuestros reconocimientos</Button
								>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
			</Carousel.Container>
		</Carousel.Content>
	</Carousel.Root>
</div>
