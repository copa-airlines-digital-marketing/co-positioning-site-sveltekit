<script lang="ts">
	import { Button } from '$components/ui/button';
	import { Heading } from '$components/ui/heading';
	import Connector from '../connector.svelte';

	import Holder from '../holder.svelte';
	import Line from '../line.svelte';
	import * as EnhancedImage from '$lib/components/ui/image';

	import aegean from '$lib/assets/airlines/Aegean Airlines.png?format=avif;webp;jpg&as=picture&imagetools';
	import canada from '$lib/assets/airlines/Air Canada.png?format=avif;webp;jpg&as=picture&imagetools';
	import china from '$lib/assets/airlines/Air China.png?format=avif;webp;jpg&as=picture&imagetools';
	import india from '$lib/assets/airlines/Air India.png?format=avif;webp;jpg&as=picture&imagetools';
	import airnz from '$lib/assets/airlines/Air New Zealand.png?format=avif;webp;jpg&as=picture&imagetools';
	import ana from '$lib/assets/airlines/All Nippon Airways.png?format=avif;webp;jpg&as=picture&imagetools';
	import asiana from '$lib/assets/airlines/Asiana Airlines.png?format=avif;webp;jpg&as=picture&imagetools';
	import austrian from '$lib/assets/airlines/Austrian Airlines.png?format=avif;webp;jpg&as=picture&imagetools';
	import avianca from '$lib/assets/airlines/Avianca.jpg?format=avif;webp;jpg&as=picture&imagetools';
	import croatia from '$lib/assets/airlines/Croatia Airlines.png?format=avif;webp;jpg&as=picture&imagetools';
	import egypt from '$lib/assets/airlines/Egypt Air.png?format=avif;webp;jpg&as=picture&imagetools';
	import ethiopian from '$lib/assets/airlines/Ethiopian Airlines.png?format=avif;webp;jpg&as=picture&imagetools';
	import eva from '$lib/assets/airlines/EVA_Airways.png?format=avif;webp;jpg&as=picture&imagetools';
	import brussels from '$lib/assets/airlines/SN as of 2021.png?format=avif;webp;jpg&as=picture&imagetools';
	import lot from '$lib/assets/airlines/LOT Polish Airlines.png?format=avif;webp;jpg&as=picture&imagetools';
	import lufthansa from '$lib/assets/airlines/Lufthansa.png?format=avif;webp;jpg&as=picture&imagetools';
	import sas from '$lib/assets/airlines/SAS Scandanavian_2017.png?format=avif;webp;jpg&as=picture&imagetools';
	import shenzen from '$lib/assets/airlines/Shenzen.png?format=avif;webp;jpg&as=picture&imagetools';
	import singapore from '$lib/assets/airlines/Singapore Airlines.png?format=avif;webp;jpg&as=picture&imagetools';
	import africa from '$lib/assets/airlines/South African Airways.png?format=avif;webp;jpg&as=picture&imagetools';
	import swiss from '$lib/assets/airlines/Swiss.png?format=avif;webp;jpg&as=picture&imagetools';
	import tap from '$lib/assets/airlines/TAP Portugal.jpg?format=avif;webp;jpg&as=picture&imagetools';
	import thai from '$lib/assets/airlines/Thai.png?format=avif;webp;jpg&as=picture&imagetools';
	import turkish from '$lib/assets/airlines/Turkish Airlines.png?format=avif;webp;jpg&as=picture&imagetools';
	import united from '$lib/assets/airlines/United.jpg?format=avif;webp;jpg&as=picture&imagetools';
	import {
		PictogramConnectMilesStatusGold,
		PictogramCopaClubLoungeArea,
		PictogramEquipaje,
		PictogramGanarMillas
	} from '$icons';

	const members = {
		'Aegean Airlines': aegean,
		'Air Canada': canada,
		'Air China': china,
		'Air India': india,
		'Air New Zealand': airnz,
		'All Nippon Airways': ana,
		'Asiana Airlines': asiana,
		'Austrian Airlines': austrian,
		Avianca: avianca,
		'Brussels Airlines': brussels,
		'Croatia Airlines': croatia,
		Egyptair: egypt,
		'Ethiopian Airlines': ethiopian,
		'EVA Air': eva,
		'LOT Polish Airlines': lot,
		Lufthansa: lufthansa,
		'Scandinavian Airlines': sas,
		'Shenzhen Airlines': shenzen,
		'Singapore Airlines': singapore,
		'South African Airways': africa,
		'Swiss International Air Lines': swiss,
		'TAP Air Portugal': tap,
		'Thai Airways International': thai,
		'Turkish Airlines': turkish,
		'United Airlines': united
	} as const;

	const benefits = [
		{
			title: 'Programa de Fidelización Integrado',
			descrpition:
				'Los programas de fidelización de las aerolíneas miembros están integrados, lo que permite a los pasajeros mantener y mejorar su estatus de viajero frecuente al volar con cualquier aerolínea de la alianza.',
			icon: PictogramGanarMillas
		},
		{
			title: 'Acceso a Salas VIP',
			descrpition:
				'Los pasajeros frecuentes con estatus Gold tienen acceso a más de 1,000 salas VIP en aeropuertos de todo el mundo, independientemente de la aerolínea miembro con la que vuelen.',
			icon: PictogramCopaClubLoungeArea
		},
		{
			title: 'Prioridad en el Servicio',
			descrpition:
				'Los pasajeros con estatus Gold disfrutan de beneficios como check-in prioritario, embarque prioritario, manejo prioritario de equipaje y listas de espera prioritarias.',
			icon: PictogramConnectMilesStatusGold
		},
		{
			title: 'Facilidad de Conexiones',
			descrpition:
				'Star Alliance facilita las conexiones entre vuelos de diferentes aerolíneas miembros, ofreciendo servicios de transferencia de equipaje y coordinación de horarios de vuelos.',
			icon: PictogramEquipaje
		}
	];
</script>

<Holder class="row-start-6">
	<Line />
	<Connector />
	<div class="text-common-white mb-huge">
		<Heading variant="h3" tag="h3" class="text-common-white"
			>Miembro de <span class="text-secondary-faded">Star Alliance</span></Heading
		>
		<p class="my-2 max-w-prose">
			Somos parte de Star Alliance, líder de la red global de aerolíneas. Puedes disfrutar de todos
			los beneficios agregados en cualquier lugar del mundo donde haya una aerolínea miembro de Star
			Alliance.
		</p>
		<Heading variant="h4" tag="h4" class="mt-normal text-grey-50"
			>Beneficios de Star Alliance</Heading
		>
		<ul
			class="grid gap-2 sm:gap-4 md:gap-6 auto-rows-fr grid-cols-[repeat(auto-fill,_minmax(220px,480px))] mt-tiny"
		>
			{#each benefits as benefit}
				{@const { title, descrpition, icon } = benefit}
				<li class="px-4 py-6 shadow-md border border-primary-ultradark backdrop-blur-md">
					<div class="flex gap-2 mb-4 items-center">
						<svelte:component this={icon} class="size-16"></svelte:component>
						<Heading variant="h4" tag="h5" class="font-medium mt-4 mb-2 text-primary-ultralight"
							>{title}</Heading
						>
					</div>
					<p class="max-w-prose text-primary-faded">{descrpition}</p>
				</li>
			{/each}
		</ul>

		<Heading variant="h4" tag="h4" class="mt-normal text-grey-50">Miembros de Star Alliance</Heading
		>
		<ul
			class="my-tiny grid grid-cols-[repeat(auto-fit,_minmax(100px,_140px))] auto-rows-auto gap-4 sm:gap-4 justify-items-center"
		>
			{#each Object.keys(members) as memberName}
				<li class="bg-common-white shadow-sm shadow-primary-ultradark p-1">
					<EnhancedImage.Root
						loading="lazy"
						image={{ only: members[memberName] }}
						class="w-full max-w-40"
						alt=""
					/>
				</li>
			{/each}
		</ul>
	</div>
</Holder>
