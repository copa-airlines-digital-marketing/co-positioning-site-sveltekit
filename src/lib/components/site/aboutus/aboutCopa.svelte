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
	import mainImage from '$lib/assets/sample.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import puntualidad from '$lib/assets/abordaje-de-vuelo.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import puntualidadPortrait from '$lib/assets/abordaje-de-vuelo-portrait.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import conectividad from '$lib/assets/persona-revisando-celular-con-tabla-de-vuelos-detras.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import conectividadPortrait from '$lib/assets/persona-revisando-celular-con-tabla-de-vuelos-detras-portrait.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import connectmiles from '$lib/assets/counter-copa-airlines-revision-de-documentos.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import connectmilesPortrait from '$lib/assets/counter-copa-airlines-revision-de-documentos-portrait.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';

	import { Heading } from '$lib/components/ui/heading';
	import { Button } from '$lib/components/ui/button';
	import Autoplay from 'embla-carousel-autoplay';

	const images: Record<string, EnhancedImage.ImageToolsPictureWithMediaQuery> = {
		experiencia: {
			'(orientation: landscape)': mainImage,
			'(orientation: portrait)': mainImage
		},
		staralliance: {
			'(orientation: landscape)': mainImage,
			'(orientation: portrait)': mainImage
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
			'(orientation: landscape)': mainImage,
			'(orientation: portrait)': mainImage
		},
		conectividad: {
			'(orientation: portrait)': conectividadPortrait,
			'(orientation: portait) and (min-width: 1367px)': conectividad,
			'(orientation: landscape)': conectividad
		},
		reconocimientos: {
			'(orientation: landscape)': mainImage,
			'(orientation: portrait)': mainImage
		}
	} as const;
</script>

<div
	id="nosotros"
	class="min-h-svh w-full bg-gradient-to-b from-primary to-primary-ultradark container-grid grid-rows-[auto_auto_1fr]"
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
				<Carousel.Item class="h-full">
					<Slide.About image={images['experiencia']} class="relative">
						<Slide.Overlay />
						<Slide.Content class="row-start-3">
							<div class="row-span-full col-span-full my-normal text-common-white">
								<Heading variant="displayNormal" tag="h3" class="text-common-white">
									Más De <span class="text-secondary-faded">75 Años</span> Volando Los Cielos De Las
									Américas
								</Heading>
								<p class="my-2 max-w-prose">
									Hemos estado conectando las Américas por 75 años y aqui hay algunas razones por
									las que somos los mejores
								</p>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['puntualidad']} class="relative">
						<Slide.Overlay
							class="bg-gradient-to-t from-20% portrait:sm:bg-gradient-to-b landscape:md:bg-gradient-to-r"
						/>
						<Slide.Content class="row-start-3">
							<div
								class="row-start-12 row-end-1 landscape:row-start-13 portrait:sm:justify-start landscape:md:justify-start col-span-full my-normal text-common-white flex flex-col justify-end"
							>
								<Heading
									variant="displayNormal"
									tag="h3"
									class="text-common-white landscape:md:max-w-sm"
									>La Aerolínea Más Premiada Por <span class="text-secondary-faded"
										>Puntualidad</span
									> En La Última Década</Heading
								>
								<p class="my-2 max-w-prose landscape:md:max-w-sm">
									Hemos sido reconocidos por Cirium como la aerolínea más puntual de Latinoamérica
									en 9 ocasiones durante la última década.
								</p>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['conectividad']} class="relative">
						<Slide.Overlay
							class="bg-gradient-to-b landscape:bg-gradient-to-t landscape:md:bg-gradient-to-r"
						/>
						<Slide.Content class="row-start-3">
							<div
								class="row-start-12 row-end-1 col-span-full my-normal text-common-white flex flex-col landscape:justify-end landscape:row-start-13 landscape:md:justify-start landscape:md:from-15%"
							>
								<Heading
									variant="displayNormal"
									tag="h3"
									class="text-common-white landscape:md:max-w-sm landscape:lg:max-w-lg"
									>Conexiones Rápidas a Través Del Hub De Las Américas® En Panamá</Heading
								>
								<p class="my-2 max-w-prose landscape:md:max-w-sm">
									Nuestras conexiones son fáciles y rápidas, sin trámites de migración ni aduana y
									con el equipaje registrado hasta tu destino final.
								</p>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['connectmiles']} class="relative">
						<Slide.Overlay class="bg-gradient-to-t landscape:bg-gradient-to-tr from-30%" />
						<Slide.Content class="row-start-3">
							<div
								class="row-start-12 row-end-1 col-span-full my-normal text-common-white flex flex-col justify-end items-start landscape:sm:row-start-13"
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
						<Slide.Overlay />
						<Slide.Content class="row-start-3">
							<div class="row-span-full col-span-full my-normal text-common-white">
								<Heading variant="displayNormal" tag="h3" class="text-common-white"
									>Miembro de Star Alliance</Heading
								>
								<p class="my-2 max-w-prose">
									Somos parte de Star Alliance, líder de la red global de aerolíneas. Puedes ganar y
									redimir millas aéreas en más de 25 aerolíneas miembros de la red, y tus millas
									acumuladas te ayudan a mejorar tu status y disfrutar de todos los beneficios
									agregados en cualquier lugar del mundo donde haya una aerolínea miembro de Star
									Alliance.
								</p>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['copaClub']} class="relative">
						<Slide.Overlay />
						<Slide.Content class="row-start-3">
							<div class="row-span-full col-span-full my-normal text-common-white">
								<Heading variant="displayNormal" tag="h3" class="text-common-white"
									><span class="text-secondary-faded">Copa Club</span>, 6 Salas en 5 Aeropuertos</Heading
								>
								<p class="my-2 max-w-prose">
									En Copa Airlines entendemos que tus negocios no esperan mientras viajas, por lo
									que te brindamos facilidades para atenderte cómodamente, teniendo a su vez, la
									oportunidad de relajarte y descansar en un ambiente exclusivo. <br /> <br />
									Podrás disfrutar de nuestros Copa Clubs en Ciudad de Panamá, Bogotá, Ciudad de Guatemala,
									San José Costa Rica, y en Santo Domingo República Dominicana
								</p>

								<Button
									class="my-4 bg-secondary border-secondary"
									href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-en-aeropuerto/copa-club/"
									target="_blank">Conoce más</Button
								>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['experiencia']} class="relative">
						<Slide.Overlay />
						<Slide.Content class="row-start-3">
							<div class="row-span-full col-span-full my-normal text-common-white">
								<Heading variant="displayNormal" tag="h3" class="text-common-white"
									>Reconocimientos</Heading
								>
								<p class="mt-3 mb-6 max-w-prose">
									<!-- 									Hemos sido premiados por nuestro <strong
										>exitoso trabajo, excelencia operacional y puntualidad</strong
									>
									por varias organizaciones prestigiosas.<br /><br /><strong>2023</strong><br /> -
									Reconocidos como “La mejor aerolínea de Centroamérica y el Caribe” según Skytrax,
									por octavo año consecutivo.<br /> - Reconocidos como la “Aerolínea más puntual de
									Latinoamérica” por OAG.<br /><br /><strong>2022</strong><br /> - Somos la “Mejor
									Aerolínea de Centroamérica y Caribe”, según Skytrax.<br /> - Reconocidos como
									“Mejor Personal de Aerolínea en Centroamérica y Caribe” según Skytrax, por séptimo
									año consecutivo<br /><br /><strong>2021</strong><br /> - Somos la aerolínea más
									puntual de Latinoamérica. Honor recibido por ocho años consecutivos por Cirium.<br
									/>
									- Reconocidos como los mejores en mantenimiento de motor por GE &amp; Embraer.<br
									/><br /> <strong>2020</strong><br /> - Somos la aerolínea más puntual de
									Latinoamérica. Honor recibido por siete años consecutivos por Cirium. También
									somos la aerolínea más puntual del mundo, según OAG.<br /> - Flight Global:
									Recipiente del Premio a la Excelencia de la Década de aerolíneas para la región de
									América Latina.<br /><br /> <strong>2019</strong><br /> - Nombrada “la aerolínea
									más puntual del mundo” por OAG.<br /> - Nombrada “La aerolínea más puntual de
									América Latina” por FlightStats por seis años consecutivos.<br /> - Honrada como
									APEX Five Star Major Airline 2020.<br /> - Honrada por Skytrax como la “Mejor
									Aerolínea de Centroamérica y el Caribe” por quinto año consecutivo.<br /> -
									Nombrada por kayak.com “La Mejor Aerolínea del año en Latinoamérica”.<br /> -
									Nombrada “la aerolínea más puntual del mundo” por OAG.<br /> - Nombrada “La aerolínea
									más puntual de América Latina” por FlightStats por seis años consecutivos. -->
								</p>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
			</Carousel.Container>
		</Carousel.Content>
	</Carousel.Root>
</div>
