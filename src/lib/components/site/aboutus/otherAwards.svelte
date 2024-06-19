<script>
	import * as EnhancedImage from '$lib/components/ui/image';
	import Holder from './holder.svelte';
	import Line from './line.svelte';
	import Connector from './connector.svelte';
	import { Heading } from '$components/ui/heading';
	import reconocimientos from '$lib/assets/pilotos-con-avion-de-fondo.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import reconocimientosPortrait from '$lib/assets/pilotos-con-avion-de-fondo-portrait.jpg?h=2160;1600;1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import skytrax from '$lib/assets/skytrax-2023.png';
	import condeNast from '$lib/assets/condenast-2023.png';
	import { Button } from '$components/ui/button';

	let image = {
		'(min-width: landscape)': reconocimientos,
		'(orientation: portait) and (min-width: 600px)': reconocimientos,
		'(orientation: portrait) and (max-width: 599px)': reconocimientosPortrait
	};
</script>

<div class="col-span-full row-start-8 grid grid-cols-subgrid">
	<div
		class="col-start-1 col-span-full row-start-1 justify-self-end self-end relative w-full portrait:mt-10 portrait:sm:mt-0"
	>
		<EnhancedImage.Root
			loading="lazy"
			{image}
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
				Somos reconocidos como “La mejor aerolínea de Centroamérica y el Caribe” según Skytrax, por
				octavo año consecutivo y de las mejores 11 aerolíneas del mundo de acuerdo a la revista
				Condé Nast Traveler
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
