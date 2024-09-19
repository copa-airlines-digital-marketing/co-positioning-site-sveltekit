<script lang="ts">
	import * as EnhancedImage from '$lib/components/ui/image';
	import Holder from './holder.svelte';
	import Line from './line.svelte';
	import Connector from './connector.svelte';
	import { Heading } from '$components/ui/heading';
	import { Button } from '$components/ui/button';
	import { getDirectusImage, type DirectusImage } from '$components/ui/image/image.svelte';

	let image: DirectusImage = {
		image: 'ae1c5d8a-ec65-45b5-b668-6bad998071c7',
		queries: [
			[
				'(min-width: landscape)',
				'cc384d28-6a56-4071-a410-ecf7f83c81bb',
				{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
			],
			[
				'(orientation: portait) and (min-width: 600px)',
				'cc384d28-6a56-4071-a410-ecf7f83c81bb',
				{ widths: ['3840', '2560', '1920', '1560', '1366', '1024', '720'] }
			],
			[
				'(orientation: portrait) and (max-width: 599px)',
				'ae1c5d8a-ec65-45b5-b668-6bad998071c7',
				{ heights: ['2160', '1600', '1080', '900', '768'] }
			]
		]
	};
</script>

<div class="col-span-full row-start-8 grid grid-cols-subgrid">
	<div
		class="col-start-1 col-span-full row-start-1 justify-self-end self-end relative w-full portrait:mt-10 portrait:sm:mt-0"
	>
		<EnhancedImage.Root
			loading="lazy"
			image={image.image}
			queries={image.queries}
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
							src={getDirectusImage('79f3cd1c-312d-45e5-b3ae-713460f4e0bc')}
							alt="Skytrax, Ganador, Premiación a las mejores aerolíneas del mundo 2023"
							class="w-24"
						/>
					</li>
					<li>
						<img
							src={getDirectusImage('02c75d36-5981-443f-88be-f1985724af95')}
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
