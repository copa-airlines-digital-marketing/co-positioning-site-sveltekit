<script>
	import * as EnhancedImage from '$lib/components/ui/image';
	import { Button } from '$components/ui/button';
	import { Heading } from '$components/ui/heading';
	import Connector from './connector.svelte';

	import Holder from './holder.svelte';
	import Line from './line.svelte';

	import conectividad from '$lib/assets/persona-revisando-celular-con-tabla-de-vuelos-detras.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import conectividadPortrait from '$lib/assets/persona-revisando-celular-con-tabla-de-vuelos-detras-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';

	let image = {
		'(orientation: landscape) and (min-width: 960px)': conectividad,
		'(orientation: landscape) and (max-width: 959px)': conectividad,
		'(orientation: portait) and (min-width: 600px)': conectividadPortrait,
		'(orientation: portrait) and (max-width: 599px)': conectividad
	};
</script>

<div
	class="row-start-4 col-start-1 col-span-full grid grid-cols-subgrid relative grid-rows-[1fr_auto_1fr]"
>
	<div
		class="col-start-1 col-span-full row-start-1 row-span-2 self-end portrait:sm:row-span-full portrait:sm:justify-self-end landscape:md:row-span-full landscape:md:justify-self-end"
	>
		<EnhancedImage.Root
			loading="lazy"
			{image}
			class="w-full object-cover aspect-[4_/_3] mask-image-b landscape:aspect-[12_/_5] portrait:sm:max-w-60 portrait:sm:aspect-[9_/_16] portrait:sm:mask-image-l landscape:md:max-w-xl landscape:md:aspect-[4_/_3]  landscape:md:mask-image-l landscape:md:mask-image-start-50 landscape:lg:aspect-video landscape:lg:max-w-3xl"
			alt=""
		/>
	</div>
	<Holder class="row-start-1 col-start-2 row-span-full">
		<Line />
	</Holder>
	<Holder class="row-start-2 col-start-2">
		<Connector />
		<Heading variant="h3" tag="h3" class="max-w-prose text-common-white mb-4 col-start-2"
			>Conexiones rápidas a través del <span class="text-secondary-faded"
				>Hub de las Américas<sup>®</sup></span
			>
			en Panamá
		</Heading>
	</Holder>
	<Holder class="row-start-3 col-start-2 relative">
		<div class="text-common-white col-start-2 mb-huge">
			<p class="my-2 max-w-prose">
				Nuestras conexiones son fáciles y rápidas, sin trámites de migración ni aduana y con el
				equipaje registrado hasta tu destino final.
			</p>
			<p class="max-w-prose">
				Los vuelos de Copa Airlines están programados para reducir los tiempos de conexión, que en
				promedio llevan 90 minutos.
			</p>
			<Button
				class="bg-secondary border-secondary my-6"
				size="slim"
				href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-en-aeropuerto/"
				target="_blank"
			>
				Conoce más
			</Button>
		</div>
	</Holder>
</div>
