<script lang="ts">
	import * as Carousel from '$lib/components/ui/carrusel';
	import { Heading } from '$lib/components/ui/heading';

	const storyText = (index: number) => '';
</script>

<div
	id="nosotros"
	class="h-svh w-full bg-primary-ultradark container-grid grid-rows-[auto_auto_1fr]"
>
	<Heading variant="h2" tag="h2" class="text-sm font-normal mt-roomy row-start-2 col-start-2 z-10">
		<span></span>
		Descubre Copa Airlines
	</Heading>
	<Carousel.Root
		class="col-span-full row-span-full grid grid-cols-subgrid grid-rows-subgrid relative"
	>
		<div class="col-start-2 row-start-1 my-minimal z-10">
			<Carousel.Dots direction="ltr" getTextFn={storyText}></Carousel.Dots>
		</div>
		<Carousel.Content class="col-span-full row-span-full z-0">
			<Carousel.Container class="h-full">
				<Carousel.Item class="h-full">
					<div class="container-grid grid-rows-[auto_auto_1fr] h-full">
						<div class="h-5 mt-roomy row-start-1 row-end-2 col-span-full"></div>
						<div class="col-span-full row-start-1 row-span-full bg-gray-400">Background</div>
						<div class="col-span-full row-start-1 row-span-full bg-blend-multiply">Overlay</div>
						<div class="col-start-2 row-start-3 grid grid-cols-12 grid-rows-12">
							<div class="col-start-5 col-span-full">
								<Heading variant="displayNormal" tag="h3">Experiencia</Heading>
							</div>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>Star Alliance</Carousel.Item>
				<Carousel.Item>ConnectMiles</Carousel.Item>
				<Carousel.Item>Puntualidad</Carousel.Item>
				<Carousel.Item>Copa Club</Carousel.Item>
				<Carousel.Item>Conectividad</Carousel.Item>
				<Carousel.Item>Reconocimientos</Carousel.Item>
			</Carousel.Container>
		</Carousel.Content>
	</Carousel.Root>
</div>
