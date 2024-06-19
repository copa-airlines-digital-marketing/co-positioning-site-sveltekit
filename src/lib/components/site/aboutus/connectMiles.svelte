<script>
	import { Button } from '$components/ui/button';
	import { Heading } from '$components/ui/heading';
	import { LogoConnectmiles } from '$icons';
	import Connector from './connector.svelte';

	import Holder from './holder.svelte';
	import Line from './line.svelte';
</script>

<Holder class="row-start-5">
	<Line />
	<Connector />
	<div class="text-common-white mb-big">
		<Heading variant="h3" tag="h3" class="text-common-white flex flex-wrap items-baseline gap-2"
			>Acumula y redime millas con <LogoConnectmiles class="h-7" /></Heading
		>
		<p class="my-2 max-w-sm">
			Únete gratis a nuestro Programa de Lealtad <strong>ConnectMiles</strong> y acumula y redime millas
			en las +25 aerolíneas miembro de Star Alliance.
		</p>
		<Button
			class="my-3 bg-secondary border-secondary"
			href="https://www.copaair.com/es-gs/enrollment/"
			target="_blank">Únete ya</Button
		>
	</div>
</Holder>
