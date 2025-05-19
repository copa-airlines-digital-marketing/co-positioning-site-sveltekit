<script lang="ts">
	import { Heading } from '$components/ui/heading';
	import Connector from '../connector.svelte';
	import Holder from '../holder.svelte';
	import Line from '../line.svelte';
	import * as EnhancedImage from '$lib/components/ui/image';

	const aegean = '97cbdd92-9e17-4a29-b7d5-c151f5e6ced6';
	const canada = '9836cba8-cf0b-4850-b8ba-d85a702e842a';
	const china = '72c6036c-8194-4bec-9b99-7362b9c1a129';
	const india = 'd02511b9-c6bf-4bf6-af21-08862011da54';
	const airnz = '088d819c-c1c2-4641-8f34-6e5285e865bf';
	const ana = 'c8c97d1c-6b6f-422c-a25d-edc32deef320';
	const asiana = '95905662-c88f-4658-b875-83d858fb027e';
	const austrian = 'f20ef59c-ebe9-455f-bf67-f82194f022f8';
	const avianca = '256359f2-871e-4b45-a736-eb83a9228278';
	const croatia = 'd28c5508-6df8-4ef0-85d9-cb1117a38fd1';
	const egypt = '71276962-7e36-4c8e-8b3a-b86e193c4098';
	const ethiopian = 'f25a98c1-5b80-4182-ad19-32689fc8e805';
	const eva = 'a69e099f-c916-401b-8310-c5dde878dbc4';
	const lot = '2a8282f9-d0a2-4c0d-8acc-8c2a544a0399';
	const lufthansa = 'f914d3e6-f66a-4d21-859c-d68a0417c3e4';
	const shenzen = '31bd99a6-edd0-4a69-ba7f-a4056624fa1b';
	const singapore = '723672f9-2554-4e36-9fe6-e772e5376d4b';
	const brussels = 'ddff2c9e-ea3c-4806-898a-214582cf347f';
	const africa = 'ac9b9977-93d1-4892-8b49-82882fab1141';
	const swiss = 'f52b6346-b2d9-4aa2-9e20-df921511f944';
	const tap = 'd36405c6-2062-4ee0-b4a1-c72b4148726f';
	const thai = '0f3f477e-a262-4e52-a0ee-ffa99f3ed488';
	const turkish = '378f5e37-e90e-4a4e-b5a8-ae31f8c36648';
	const united = '22e68c88-fac6-4822-9d1b-037cbf0a4677';

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
						image="{members[memberName]},"
						queries={[['', members[memberName], {}]]}
						class="w-full max-w-40"
						alt=""
					/>
				</li>
			{/each}
		</ul>
	</div>
</Holder>
