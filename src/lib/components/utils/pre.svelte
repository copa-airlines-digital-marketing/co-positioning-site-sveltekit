<script lang="ts">
	export let name: string;
	export let value: any;
</script>

<section class="m-7 p-7 text-gray-50 bg-gray-900 rounded shadow">
	<h4>{name}</h4>
	<pre class="text-sm mt-3 text-wrap">
    {JSON.stringify(value, null, 2)}
  </pre>
</section>
