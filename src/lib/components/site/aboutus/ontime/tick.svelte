<script>
	import Connector from './connector.svelte';
	import Line from './line.svelte';
</script>

<div class="grid grid-cols-[1fr_auto_auto_auto_1fr] grid-rows-3 group">
	<Line />
	<Connector />
	<div class='row-start-1 row-span-3 group-odd:col-start-1 group-even:col-start-5 md:col-start-1 md:col-span-5 md:row-span-1 md:group-odd:row-start-1 md:group-even:row-start-3'>
    <slot />
  </div>
</div>
