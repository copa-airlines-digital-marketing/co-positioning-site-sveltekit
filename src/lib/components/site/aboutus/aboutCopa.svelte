<script lang="ts">
	import { IstoipoCopaAirlines } from '$lib/components/icons';
	import * as EnhancedImage from '$lib/components/ui/image';
	import puntualidad from '$lib/assets/abordaje-de-vuelo.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import puntualidadPortrait from '$lib/assets/abordaje-de-vuelo-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import connectmiles from '$lib/assets/counter-copa-airlines-revision-de-documentos.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import connectmilesPortrait from '$lib/assets/counter-copa-airlines-revision-de-documentos-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';

	import { Heading } from '$lib/components/ui/heading';
	import Line from './line.svelte';
	import Holder from './holder.svelte';
	import OtherAwards from './otherAwards.svelte';
	import CopaClub from './copaclub/copaClub.svelte';
	import StarAlliance from './starAlliance/starAlliance.svelte';
	import ConnectMiles from './connectMiles.svelte';
	import FastConnections from './fastConnections.svelte';
	import OnTime from './ontime/onTime.svelte';

	const images: Record<string, EnhancedImage.ImageToolsPictureWithMediaQuery> = {
		connectmiles: {
			'(orientation: portrait)': connectmilesPortrait,
			'(orientation: portait) and (min-width: 1367px)': connectmiles,
			'(orientation: landscape)': connectmiles
		},
		puntualidad: {
			'(orientation: portrait)': puntualidadPortrait,
			'(orientation: portait) and (min-width: 1367px)': puntualidad,
			'(orientation: landscape)': puntualidad
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
	<OnTime />
	<FastConnections />
	<ConnectMiles />
	<StarAlliance />
	<CopaClub />
	<OtherAwards />
</div>
