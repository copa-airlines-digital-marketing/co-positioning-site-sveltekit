<script lang="ts">
	import { IstoipoCopaAirlines } from '$lib/components/icons';
	import * as Carousel from '$lib/components/ui/carrusel';
	import * as Slide from '../slide';
	import * as EnhancedImage from '$lib/components/ui/image';
	import mainImage from '$lib/assets/sample.jpg?w=3840;2560;1920;1560;1366;1024;720&format=avif;webp;jpg&as=picture&imagetools';
	import { Heading } from '$lib/components/ui/heading';
	import { Button } from '$lib/components/ui/button';

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
			'(orientation: landscape)': mainImage,
			'(orientation: portrait)': mainImage
		},
		puntualidad: {
			'(orientation: landscape)': mainImage,
			'(orientation: portrait)': mainImage
		},
		copaClub: {
			'(orientation: landscape)': mainImage,
			'(orientation: portrait)': mainImage
		},
		conectividad: {
			'(orientation: landscape)': mainImage,
			'(orientation: portrait)': mainImage
		},
		reconocimientos: {
			'(orientation: landscape)': mainImage,
			'(orientation: portrait)': mainImage
		}
	} as const;
</script>

<div
	id="nosotros"
	class="min-h-svh w-full bg-primary-ultradark container-grid grid-rows-[auto_auto_1fr]"
>
	<Heading
		variant="h2"
		tag="h2"
		class="text-sm font-normal my-minimal row-start-2 col-start-2 z-10 items-center flex gap-1"
	>
		<span class="rounded-full block overflow-hidden bg-common-white">
			<IstoipoCopaAirlines class="size-6"></IstoipoCopaAirlines>
		</span>
		Descubre Copa Airlines
	</Heading>
	<Carousel.Root
		class="col-span-full row-span-full grid grid-cols-subgrid grid-rows-subgrid relative"
	>
		<div class="col-start-2 row-start-1 mt-roomy z-10">
			<Carousel.Dots
				direction="ltr"
				let:index
				let:selected
				class="grid auto-cols-fr grid-rows-1 grid-flow-col gap-2"
			>
				<Carousel.Dot
					slide={index}
					class="w-full max-w-none p-0 m-0 bg-transparent grid grid-cols-1 grid-rows-1 border-0"
				>
					<div class="bg-secondary/60 row-start-1 row-end-1 h-1 w-full my-3">
						{#if selected === index}
							<div class="h-full w-full bg-secondary"></div>
						{/if}
					</div>
				</Carousel.Dot>
			</Carousel.Dots>
		</div>
		<Carousel.Content class="col-span-full row-span-full z-0">
			<Carousel.Container class="h-full">
				<Carousel.Item class="h-full">
					<Slide.About image={images['experiencia']} class="relative">
						<Slide.Overlay />
						<Slide.Content class="row-start-3">
							<div class="row-span-full col-span-full my-normal text-common-white">
								<Heading variant="displayNormal" tag="h3" class="text-common-white">
									<span class="text-secondary-faded">75 Años</span> Volando Los Cielos De Las Américas
								</Heading>
								<p class="mt-2 mb-6 max-w-prose">
									Hemos estado conectando las Américas por 75 años y aqui hay algunas razones por
									las que somos los mejores
								</p>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['puntualidad']} class="relative">
						<Slide.Overlay />
						<Slide.Content class="row-start-3">
							<div class="row-span-full col-span-full my-normal text-common-white">
								<Heading variant="displayNormal" tag="h3" class="text-common-white"
									>La Aerolínea Más Premiada Por <span class="text-secondary-faded"
										>Puntualidad</span
									> En La Última Década</Heading
								>
								<p class="mt-3 mb-6 max-w-prose">
									Hemos sido reconocidos por Cirium como la aerolínea más puntual de Latinoamérica
									en 9 ocasiones durante la última década.
								</p>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['conectividad']} class="relative">
						<Slide.Overlay />
						<Slide.Content class="row-start-3">
							<div class="row-span-full col-span-full my-normal text-common-white">
								<Heading variant="displayNormal" tag="h3" class="text-common-white"
									>Conexiones Rápidas a Través Del Hub De Las Américas® En Panamá</Heading
								>
								<p class="mt-3 mb-6 max-w-prose">
									Nuestras conexiones son fáciles y rápidas, sin trámites de migración ni aduana y
									con el equipaje registrado hasta tu destino final.
								</p>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['connectmiles']} class="relative">
						<Slide.Overlay />
						<Slide.Content class="row-start-3">
							<div class="row-span-full col-span-full my-normal text-common-white">
								<Heading variant="displayNormal" tag="h3" class="text-common-white"
									>Acumula y redime millas</Heading
								>
								<p class="mt-3 mb-6 max-w-prose">
									Únete gratis a nuestro Programa de Lealtad <strong>ConnectMiles</strong> y
									comienza a ganar millas cuando vueles con Copa Airlines, las más de 25 aerolíneas
									miembros de Star Alliance, otras aerolíneas socias y con todos nuestros socios
									comerciales: hoteles, empresas de alquiler de autos, entre otros.<br />También, si
									te conviertes en PreferMember, podrás disfrutar de increíbles beneficios, como
									ascensos de categoría, Priority Pass, franquicia de equipaje adicional, acceso a
									salas VIP y mucho más.
								</p>
								<Button href="https://www.copaair.com/es-gs/enrollment/" target="_blank"
									>Únete ya</Button
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
								<p class="mt-2 mb-6 max-w-prose">
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
								<p class="mt-3 mb-6 max-w-prose">
									En Copa Airlines entendemos que tus negocios no esperan mientras viajas, por lo
									que te brindamos facilidades para atenderte cómodamente, teniendo a su vez, la
									oportunidad de relajarte y descansar en un ambiente exclusivo. <br /> <br />
									Podrás disfrutar de nuestros Copa Clubs en Ciudad de Panamá, Bogotá, Ciudad de Guatemala,
									San José Costa Rica, y en Santo Domingo República Dominicana
								</p>

								<Button
									href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-en-aeropuerto/copa-club/"
									target="_blank">Conoce más</Button
								>
							</div>
						</Slide.Content>
					</Slide.About>
				</Carousel.Item>
				<Carousel.Item>
					<Slide.About image={images['conectividad']} class="relative">
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
