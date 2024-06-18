<script lang="ts">
	import {
		BaselinePlayArrow,
		IstoipoCopaAirlines,
		LogoCiriumOtp,
		LogoConnectmiles,
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
	import skytrax from '$lib/assets/skytrax-2023.png';
	import condeNast from '$lib/assets/condenast-2023.png';

	import { Heading } from '$lib/components/ui/heading';
	import { Button } from '$lib/components/ui/button';
	import Autoplay from 'embla-carousel-autoplay';
	import { cn } from '$lib/utils';
	import Line from './line.svelte';
	import Connector from './connector.svelte';
	import Holder from './holder.svelte';

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
			'(min-width: landscape)': reconocimientos,
			'(orientation: portait) and (min-width: 600px)': reconocimientos,
			'(orientation: portrait) and (max-width: 599px)': reconocimientosPortrait
		}
	} as const;
</script>

<div
	id="nosotros"
	class="w-full bg-gradient-to-b from-primary to-primary-ultradark container-grid auto-rows-auto"
>
	<div class="col-span-full row-start-1 row-end-10 relative overflow-hidden">
		<IstoipoCopaAirlines class="absolute h-full bottom-0 w-auto text-primary-dark"
		></IstoipoCopaAirlines>
	</div>
	<Holder class="row-start-1 mt-huge">
		<div class="rounded-full block overflow-hidden bg-common-white text-primary self-center">
			<IstoipoCopaAirlines class="size-8"></IstoipoCopaAirlines>
		</div>
		<Heading variant="displaySmall" tag="h2" class="col-start-2">
			<span class="text-common-white">Descubre Copa Airlines</span>
		</Heading>
	</Holder>
	<!-- Experiencia -->
	<Holder class="row-start-2">
		<Line />
		<div class="text-common-white mt-tiny mb-big">
			<Heading variant="h3" tag="h3" class="text-common-white max-w-prose">
				Tenemos más de <span class="text-secondary-faded">75 años</span> conectando los cielos de las
				Américas
			</Heading>
		</div>
	</Holder>
	<!-- Puntualidad -->
	<Holder class="row-start-3">
		<Line />
		<Connector />
		<div class="text-common-white mb-big">
			<Heading variant="h3" tag="h3" class="text-common-white max-w-prose">
				Somos la <span class="text-secondary-faded">aerolínea más premiada por puntualidad</span> en
				América en la última década
			</Heading>
			<div class="flex gap-2 md:gap-4 lg:gap-6 flex-col md:flex-row my-petit">
				<div>
					<h4>CIRIUM</h4>
					<p class="max-w-prose">
						Hemos sido reconocidos como la aerolínea más puntual de Latinoamérica en 9 ocasiones
						durante la última década.
					</p>
					<ul class="flex flex-wrap gap-2 max-w-prose my-tiny">
						<li>2023</li>
						<li>2021</li>
						<li>2020</li>
						<li>2019</li>
						<li>2018</li>
						<li>2017</li>
						<li>2016</li>
						<li>2015</li>
						<li>2014</li>
					</ul>
				</div>
				<div>
					<h4>OAG</h4>
					<p class="max-w-prose">En 2019 nos nombraron la "Aerolínea más puntual del mundo"</p>
					<ul>
						<li>dd</li>
					</ul>
				</div>
			</div>
		</div></Holder
	>
	<!-- Conectividad -->
	<Holder class="row-start-4">
		<Line />
		<Connector />
		<div class="text-common-white mb-big">
			<Heading variant="h3" tag="h3" class="max-w-prose text-common-white"
				>Conexiones rápidas a través del <span class="text-secondary-faded"
					>Hub de las Américas<sup>®</sup></span
				> en Panamá</Heading
			>
			<p class="my-2 max-w-prose">
				Nuestras conexiones son fáciles y rápidas, sin trámites de migración ni aduana y con el
				equipaje registrado hasta tu destino final.
			</p>
			<Button
				class="bg-secondary border-secondary ml-auto"
				size="slim"
				href="https://www.copaair.com/es-co/noticias/copa-operacion-t2-internacional/"
				target="_blank"
			>
				Conoce más
			</Button>
		</div>
	</Holder>
	<!-- ConnectMiles -->
	<Holder class="row-start-5">
		<Line />
		<Connector />
		<div class="text-common-white mb-big">
			<Heading variant="h3" tag="h3" class="text-common-white flex flex-wrap items-baseline gap-2"
				>Acumula y redime millas con <LogoConnectmiles class="h-7" /></Heading
			>
			<p class="my-2 max-w-sm">
				Únete gratis a nuestro Programa de Lealtad <strong>ConnectMiles</strong> y acumula y redime millas
				en las +25 aerolíneas miembro de Star Alliance.
			</p>
			<Button
				class="my-3 bg-secondary border-secondary"
				href="https://www.copaair.com/es-gs/enrollment/"
				target="_blank">Únete ya</Button
			>
		</div>
	</Holder>
	<!-- Star Alliance -->
	<Holder class="row-start-6">
		<Line />
		<Connector />
		<div class="text-common-white mb-big">
			<Heading variant="h3" tag="h3" class="text-common-white"
				>Miembro de <span class="text-secondary-faded">Star Alliance</span></Heading
			>
			<p class="my-2 max-w-prose">
				Somos parte de Star Alliance, líder de la red global de aerolíneas. Puedes disfrutar de
				todos los beneficios agregados en cualquier lugar del mundo donde haya una aerolínea miembro
				de Star Alliance.
			</p>
			<Button
				class="bg-secondary border-secondary"
				href="https://www.copaair.com/es-co/mas-de-copa-airlines/staralliance/"
				target="_blank"
			>
				Conoce más
			</Button>
		</div>
	</Holder>
	<!-- Copa Club -->
	<Holder class="row-start-7">
		<Line />
		<Connector />
		<div class="text-common-white mb-big">
			<Heading variant="h3" tag="h3" class="text-common-white max-w-prose"
				><span class="text-secondary-faded">Copa Club,</span> 6 salas en 5 aeropuertos</Heading
			>
			<p class="my-2 max-w-prose">
				Disfruta de nuestras exclusivas salas VIP en los aeropuertos, diseñadas para brindarte
				confort y lujo antes de tu vuelo. Relájate en un ambiente tranquilo con servicios premium
				que harán tu espera más placentera.
			</p>
			<Button
				class="my-4 bg-secondary border-secondary"
				href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-en-aeropuerto/reglamento-copa-club/"
				target="_blank">Ver reglamento</Button
			>
			<div></div>
		</div>
	</Holder>
	<!-- Otros reconocimientos -->
	<div class="col-span-full row-start-8 grid grid-cols-subgrid">
		<div
			class="col-start-1 col-span-full row-start-1 justify-self-end self-end relative w-full portrait:mt-10 portrait:sm:mt-0"
		>
			<EnhancedImage.Root
				loading="lazy"
				image={images['reconocimientos']}
				class="w-full object-cover mask-image-t mask-image-start-80"
				alt=""
			></EnhancedImage.Root>
		</div>
		<Holder class="row-start-1 relative z-10">
			<Line class="bg-transparent bg-gradient-to-b from-grey-300 to-transparent to-75%" />
			<Connector class="lg:mt-[120px]" />
			<div class="text-common-white flex flex-col col-start-2 row-span-1 lg:mt-[114px]">
				<Heading variant="h3" tag="h3" class="text-common-white">Otros Reconocimientos</Heading>
				<p class="my-2 max-w-prose portrait:flex-grow portrait:sm:flex-grow-0">
					Somos reconocidos como “La mejor aerolínea de Centroamérica y el Caribe” según Skytrax,
					por octavo año consecutivo y de las mejores 11 aerolíneas del mundo de acuerdo a la
					revista Condé Nast Traveler
				</p>
				<div class="mb-32 mt-4 justify-self-end">
					<ul class="flex gap-2 md:gap-4 lg:gap-6">
						<li>
							<img
								src={skytrax}
								alt="Skytrax, Ganador, Premiación a las mejores aerolíneas del mundo 2023"
								class="w-24"
							/>
						</li>
						<li>
							<img
								src={condeNast}
								alt="Elección de los lectores de Condé Nast Taveler, 2023"
								class="w-24"
							/>
						</li>
					</ul>
					<Button
						class="bg-secondary border-secondary my-6"
						href="https://www.copaair.com/es-co/descubre-copa-airlines/reconocimientos/"
						target="_blank"
						>Ver todos los reconocimientos
					</Button>
				</div>
			</div>
		</Holder>
	</div>
</div>
