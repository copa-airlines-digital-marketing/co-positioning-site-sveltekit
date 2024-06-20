<script lang="ts">
	import { Button } from '$components/ui/button';
	import { Heading } from '$components/ui/heading';
	import Connector from '../connector.svelte';

	import Holder from '../holder.svelte';
	import Line from '../line.svelte';
	import { CopaClubCard } from './clubCard';
	import * as EnhancedImage from '$lib/components/ui/image';

	import bogota from '$lib/assets/copa-club-bogota.jpg?h=1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import guatemala from '$lib/assets/copa-club-guatemala.jpeg?h=1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import panamaT1 from '$lib/assets/copa-club-panama-terminal-1.jpg?h=1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import panamaT2 from '$lib/assets/copa-club-panama-terminal-2.jpg?h=1080;900;768&format=avif;webp;jpg&as=picture&imagetools';
	import dominicana from '$lib/assets/copa-club-republica-dominicana.jpg?h=1080;900;768&format=avif;webp;jpg&as=picture&imagetools';

	const clubs = [
		{
			location: 'Ciudad de Panamá, Terminal 1',
			image: panamaT1,
			details: {
				dirección: 'Área internacional, Terminal 1, a un costado de la puerta 130',
				horario: '5:30 a.m. - 9:00 p.m.',
				capacidad: '248 personas',
				dimensiones: '1,300 m²'
			}
		},
		{
			location: 'Ciudad de Panamá, Terminal 2',
			image: panamaT2,
			details: {
				dirección:
					'Área internacional, Terminal 2, subiendo el elevador o las escaleras automaticas cerca de aduana.',
				horario: '5:30 a.m. - 9:00 p.m.',
				capacidad: '420 personas',
				dimensiones: '1,925 m²'
			}
		},
		{
			location: 'Bogotá, Colombia',
			image: bogota,
			details: {
				dirección:
					'Área internacional, piso mezzanine, cerca de la sala 45 bajando las escaleras eléctricas. Podrá tomar el ascensor al frente de la sala 47',
				horario: '3:00 a.m. - 9:30 p.m.',
				capacidad: '89 personas',
				dimensiones: '434 m²'
			}
		},
		{
			location: 'Ciudad de Guatemala, Guatemala',
			image: guatemala,
			details: {
				dirección: 'Área internacional norte, al lado de la puerta 14',
				horario: '3:30 a.m. - 4:30 p.m.',
				capacidad: '37 personas',
				dimensiones: '225 m²'
			}
		},
		{
			location: 'Santo Domingo, República Dominicana',
			image: dominicana,
			details: {
				dirección: 'Área internacional, Terminal 1, a un costado de la puerta 130',
				horario:
					'Lunes, Jueves y Sábado: 5:30am – 3:00pm / Martes, Miércoles, Viernes, Domingo: 5:30am – 5:00pm',
				capacidad: '67 personas',
				dimensiones: '275 m²'
			}
		}
	] as const;
</script>

<Holder class="row-start-7">
	<Line />
	<Connector />
	<div class="text-common-white mb-big">
		<Heading variant="h3" tag="h3" class="text-common-white max-w-prose"
			><span class="text-secondary-faded">Copa Club,</span> 5 salas en 4 aeropuertos</Heading
		>
		<p class="my-2 max-w-prose">
			Disfruta de nuestras exclusivas salas VIP en los aeropuertos, diseñadas para brindarte confort
			y lujo antes de tu vuelo. Relájate en un ambiente tranquilo con servicios premium que harán tu
			espera más placentera.
		</p>
		<ul
			class="my-6 grid grid-cols-1 grid-rows-5 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 sm:gap-4 md:gap-6"
		>
			{#each clubs as club}
				{@const { location, details, image } = club}
				<li>
					<CopaClubCard.Root>
						<CopaClubCard.Trigger image={{ only: image }}>
							{location}
						</CopaClubCard.Trigger>
						<CopaClubCard.Details>
							<div
								class="flex flex-col justify-stretch gap-2 landscape:flex-row landscape:items-center md:gap-4 lg:gap-6 mt-6"
							>
								<EnhancedImage.Root
									loading="lazy"
									image={{ only: image }}
									class="aspect-[21_/_9] w-full object-cover shadow-md landscape:aspect-square landscape:max-w-60"
									alt=""
								/>
								<div>
									<Heading variant="h4" tag="h4" class="max-w-prose">
										{location}
									</Heading>
									<ul class="text-sm">
										{#each Object.keys(details) as detail}
											<li>
												<strong class="capitalize">{detail}</strong>
												{details[detail]}
											</li>
										{/each}
									</ul>
								</div>
							</div>
						</CopaClubCard.Details>
					</CopaClubCard.Root>
				</li>
			{/each}
		</ul>
		<Button
			class="my-6 bg-secondary border-secondary"
			href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-en-aeropuerto/reglamento-copa-club/"
			target="_blank"
		>
			Ver requisitos de entrada
		</Button>
	</div>
</Holder>
