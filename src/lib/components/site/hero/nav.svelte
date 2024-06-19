<script lang="ts">
	import { Button } from '$components/ui/button';
	import { cn } from '$lib/utils';

	const sections = [
		{
			href: '#destinos',
			target: '_blank',
			text: 'Nuestros Destinos'
		},
		{ href: '#a-bordo', text: 'Experiencia a Bordo' },
		{ href: '#nosotros', text: 'Descubre más de Copa Airlines' }
	];

	let className;

	export { className as class };
</script>

<nav class={cn(className)}>
	<ul class="grid auto-cols-fr grid-flow-col gap-2">
		{#each sections as section}
			{@const { href, target, text } = section}
			<li class="w-full">
				<Button {href} {target} size="large" class="w-full text-center justify-center"
					>{text}</Button
				>
			</li>
		{/each}
	</ul>
</nav>
