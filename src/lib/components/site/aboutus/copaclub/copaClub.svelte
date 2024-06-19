<script>
	import { Button } from '$components/ui/button';
	import { Heading } from '$components/ui/heading';
	import Connector from '../connector.svelte';

	import Holder from '../holder.svelte';
	import Line from '../line.svelte';
</script>

<Holder class="row-start-7">
	<Line />
	<Connector />
	<div class="text-common-white mb-big">
		<Heading variant="h3" tag="h3" class="text-common-white max-w-prose"
			><span class="text-secondary-faded">Copa Club,</span> 6 salas en 5 aeropuertos</Heading
		>
		<p class="my-2 max-w-prose">
			Disfruta de nuestras exclusivas salas VIP en los aeropuertos, diseñadas para brindarte confort
			y lujo antes de tu vuelo. Relájate en un ambiente tranquilo con servicios premium que harán tu
			espera más placentera.
		</p>
		<Button
			class="my-4 bg-secondary border-secondary"
			href="https://www.copaair.com/es-co/descubre-copa-airlines/experiencia-en-aeropuerto/reglamento-copa-club/"
			target="_blank">Ver reglamento</Button
		>
		<div></div>
	</div>
</Holder>
