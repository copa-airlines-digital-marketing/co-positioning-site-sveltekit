<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Header } from '../header';
	import * as Carousel from '$lib/components/ui/carrusel';
	import mainImage from '$lib/assets/pareja-en-clase-ejecutiva.jpg?enhanced';
	import mapImage from '$lib/assets/mapa-de-destinos-en-colombia.jpg?enhanced';
	import onBoardImage from '$lib/assets/refrigerio-a-bordo-de-aeronave.jpg?enhanced';
	import aboutCopa from '$lib/assets/abordaje-de-vuelo.jpg?enhanced';

	const sections = [
		{ href: '#destinos', text: 'Destinos' },
		{ href: '#a-bordo', text: 'A bordo' },
		{ href: '#nostros', text: 'Nosotros' }
	];
</script>

<div class="w-full h-lvh flex flex-col" id="top">
	<Header />
	<div class="grid grid-cols-12 gap-2 grid-rows-12 h-full" id="main">
		<Carousel.Root class="col-start-1 col-span-full row-start-1 row-span-full">
			<Carousel.Content class="gap-2 grid grid-cols-12 grid-rows-12">
				<Carousel.Container class="col-start-1 col-span-full row-start-1 row-span-full">
					<Carousel.Item class="grid grid-cols-12 grid-rows-12 gap-2 bg-slate-500 relative">
						<enhanced:img src={mainImage} class="absolute left-0 top-0 h-full w-full object-cover"
						></enhanced:img>
					</Carousel.Item>
					<Carousel.Item class="relative">
						<enhanced:img src={mapImage} class="absolute left-0 top-0 h-full w-full object-cover"
						></enhanced:img>
					</Carousel.Item>
					<Carousel.Item class="relative">
						<enhanced:img
							src={onBoardImage}
							class="absolute left-0 top-0 h-full w-full object-cover"
						></enhanced:img>
					</Carousel.Item>
					<Carousel.Item class="relative">
						<enhanced:img src={aboutCopa} class="absolute left-0 top-0 h-full w-full object-cover"
						></enhanced:img>
					</Carousel.Item>
				</Carousel.Container>
				<div
					class="col-start-2 col-span-8 row-start-10 row-span-1 bg-green-300 h-full relative"
				></div>
			</Carousel.Content>
		</Carousel.Root>
		<nav class="col-start-4 row-start-11 col-span-6 grid-cols-subgrid hidden md:grid relative">
			<ul class="grid grid-cols-subgrid grid-rows-1 col-span-6 grid-flow-col">
				{#each sections as section}
					{@const { href, text } = section}
					<li class="col-span-2">
						<Button size="giant" class="w-full uppercase h-full grid place-content-center" {href}
							>{text}</Button
						>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</div>
