<script>
	import { Button } from '$components/ui/button';
	import { Heading } from '$components/ui/heading';
	import Connector from './connector.svelte';

	import Holder from './holder.svelte';
	import Line from './line.svelte';
</script>

<Holder class="row-start-6">
	<Line />
	<Connector />
	<div class="text-common-white mb-big">
		<Heading variant="h3" tag="h3" class="text-common-white"
			>Miembro de <span class="text-secondary-faded">Star Alliance</span></Heading
		>
		<p class="my-2 max-w-prose">
			Somos parte de Star Alliance, líder de la red global de aerolíneas. Puedes disfrutar de todos
			los beneficios agregados en cualquier lugar del mundo donde haya una aerolínea miembro de Star
			Alliance.
		</p>
		<Button
			class="bg-secondary border-secondary"
			href="https://www.copaair.com/es-co/mas-de-copa-airlines/staralliance/"
			target="_blank"
		>
			Conoce más
		</Button>
	</div>
</Holder>
