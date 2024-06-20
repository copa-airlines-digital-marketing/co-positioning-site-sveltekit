<script>
	import { Heading } from '$components/ui/heading';
	import Connector from '../connector.svelte';

	import Holder from '../holder.svelte';
	import Line from '../line.svelte';
</script>

<Holder class="row-start-3">
	<Line />
	<Connector />
	<div class="text-common-white mb-big">
		<Heading variant="h3" tag="h3" class="text-common-white max-w-prose">
			Somos la <span class="text-secondary-faded">aerolínea más premiada por puntualidad</span> en América
			en la última década
		</Heading>
		<div class="flex gap-2 md:gap-4 lg:gap-6 flex-col md:flex-row my-petit">
			<div>
				<h4>CIRIUM</h4>
				<p class="max-w-prose">
					Hemos sido reconocidos como la aerolínea más puntual de Latinoamérica en 9 ocasiones
					durante la última década.
				</p>
				<ul class="flex flex-wrap gap-2 max-w-prose my-tiny">
					<li>2023</li>
					<li>2021</li>
					<li>2020</li>
					<li>2019</li>
					<li>2018</li>
					<li>2017</li>
					<li>2016</li>
					<li>2015</li>
					<li>2014</li>
				</ul>
			</div>
			<div>
				<h4>OAG</h4>
				<p class="max-w-prose">En 2019 nos nombraron la "Aerolínea más puntual del mundo"</p>
				<ul>
					<li>dd</li>
				</ul>
			</div>
		</div>
	</div>
</Holder>
