<script>
	import Connector from './connector.svelte';
	import Line from './line.svelte';
</script>

<div class="grid grid-cols-[1fr_16px_auto_16px_1fr] grid-rows-[1fr_16px_auto_16px_1fr] group">
	<Line />
	<Connector />
	<div
		class="row-start-1 row-span-full col-start-1 group-even:col-start-5 border bg-primary-ultradark border-primary-ultradark backdrop-blur-lg p-2 md:p-6 shadow-lg relative after:content-[''] after:border-[12px] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-full after:border-transparent after:border-l-primary-ultradark group-even:after:border-l-transparent group-even:after:border-r-primary-ultradark group-even:after:right-full group-even:after:left-auto my-2 md:my-6"
	>
		<slot />
	</div>
</div>
