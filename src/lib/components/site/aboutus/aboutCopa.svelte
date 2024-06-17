<script lang="ts">
	import {
		BaselinePlayArrow,
		IstoipoCopaAirlines,
		LogoCiriumOtp,
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
	import { cn } from '$lib/utils';

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
			'(orientation: portrait)': reconocimientosPortrait
		}
	} as const;
</script>

<div
	id="nosotros"
	class="w-full bg-gradient-to-b from-primary to-primary-ultradark container-grid auto-rows-auto"
>
	<div class="col-span-full row-start-1 row-end-5 relative overflow-hidden">
		<IstoipoCopaAirlines class="absolute h-full bottom-0 w-auto text-primary-dark"
		></IstoipoCopaAirlines>
	</div>
	<div class="col-start-2 row-start-1 mt-huge relative line-grid">
		<div class="rounded-full block overflow-hidden bg-common-white text-primary self-center">
			<IstoipoCopaAirlines class="size-8"></IstoipoCopaAirlines>
		</div>

		<Heading variant="displaySmall" tag="h2" class="col-start-2">
			<span class="text-common-white">Descubre Copa Airlines</span>
		</Heading>
	</div>
	<!-- Experiencia -->
	<div class="col-start-2 row-start-2 relative line-grid">
		<div class="h-full w-px bg-grey-300 opacity-50 place-self-center"></div>
		<div class="text-common-white my-normal">
			<Heading variant="h3" tag="h3" class="text-common-white max-w-prose">
				Más de <span class="text-secondary-faded">75 años</span> volando los cielos de las Américas
			</Heading>
			<p class="my-2 max-w-prose">
				Hemos estado conectando las Américas por 75 años y aqui hay algunas razones por las que
				somos los mejores:
			</p>
		</div>
	</div>
	<!-- Puntualidad -->
	<div class="col-start-2 row-start-3 relative line-grid">
		<div class="h-full w-px bg-grey-300 opacity-50 place-self-center row-start-1 col-start-1"></div>
		<div
			class="row-start-1 col-start-1 mt-1.5 bg-common-white rounded-full size-4 justify-self-center z-10"
		></div>
		<div class="text-common-white col-start-2">
			<Heading variant="h3" tag="h3" class="text-common-white max-w-prose">
				Somos la aerolínea más premiada por <span class="text-secondary-faded">puntualidad</span> en
				América en la última década
			</Heading>
			<p class="my-2 max-w-prose">
				Hemos sido reconocidos por Cirium como la aerolínea más puntual de Latinoamérica en 9
				ocasiones durante la última década.
			</p>
			<div class="h-48"></div>
			<Button
				class="bg-secondary border-secondary mt-4"
				size="slim"
				href="https://www.copaair.com/es-co/noticias/cirium-reconoce-a-copa-airlines-como-la-aerolinea-mas-puntual-de-latinoamerica/"
				target="_blank"
			>
				Conoce más
			</Button>
		</div>
	</div>
	<div class="col-start-2 row-start-4 relative">
		<!-- Conectividad -->
		<div class="my-roomy text-common-white">
			<Heading variant="h3" tag="h3" class="text-right max-w-prose ml-auto text-common-white"
				>Conexiones rápidas a través del Hub de las Américas<sup>®</sup> en Panamá</Heading
			>
			<p class="my-2 max-w-prose ml-auto text-right">
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
		<!-- ConnectMiles -->
		<div
			class="row-start-13 row-end-1 col-span-full my-normal text-common-white flex flex-col justify-end items-start landscape:sm:row-start-13"
		>
			<Heading variant="h3" tag="h3" class="text-common-white">Acumula y redime millas</Heading>
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
		<!-- Star Alliance -->
		<div
			class="row-span-full col-span-full my-normal text-common-white flex flex-col items-start justify-end landscape:md:justify-start"
		>
			<Heading variant="h3" tag="h3" class="text-common-white">Miembro de Star Alliance</Heading>
			<p class="my-2 max-w-prose landscape:md:max-w-md">
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
		<!-- Copa Club -->
		<div class="text-common-white">
			<Heading variant="h3" tag="h3" class="text-common-white max-w-prose mx-auto text-center"
				><span class="text-secondary-faded">Copa Club,</span> 6 salas en 5 aeropuertos</Heading
			>
			<p class="my-2 max-w-prose mx-auto text-center">
				Disfruta de nuestras exclusivas salas VIP en los aeropuertos, diseñadas para brindarte
				confort y lujo antes de tu vuelo. Relájate en un ambiente tranquilo con servicios premium
				que harán tu espera más placentera.
			</p>
			<Button
				class="my-4 bg-secondary border-secondary"
				href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-en-aeropuerto/copa-club/"
				target="_blank">Conoce nuestras salas</Button
			>
		</div>
		<!-- Otros reconocimientos -->
		<div class="my-huge text-common-white flex gap-6">
			<EnhancedImage.Root
				loading="lazy"
				image={images['reconocimientos']}
				class="w-52 aspect-square rounded-full object-cover object-right-top"
				alt=""
			></EnhancedImage.Root>
			<div class="flex-grow">
				<Heading variant="h3" tag="h3" class="text-common-white">Otros Reconocimientos</Heading>
				<p class="my-2 max-w-prose">
					Somos la aerolínea más puntual de América Latina y la mejor de Centroamérica y el Caribe.
					Nuestros reconocimientos reflejan nuestro compromiso con darte la mejor experiencia en tu
					vuelo. ¡Descubre todos nuestros premios y elige volar con los mejores!
				</p>
				<Button
					class="bg-secondary my-6"
					href="https://www.copaair.com/es-co/descubre-copa-airlines/reconocimientos/"
					target="_blank">Conoce nuestros reconocimientos</Button
				>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.line-grid {
		@apply grid grid-cols-[32px_1fr] gap-2;
	}
</style>
